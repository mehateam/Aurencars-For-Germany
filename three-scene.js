import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

/* ─── helpers ──────────────────────────────────────────────────── */
function isWebGLAvailable() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext &&
      (c.getContext('webgl') || c.getContext('experimental-webgl')));
  } catch (_) { return false; }
}

const IS_MOBILE = window.innerWidth < 768 || !isWebGLAvailable();

if (IS_MOBILE) {
  document.body.classList.add('no-3d');
  document.dispatchEvent(new CustomEvent('model-loaded'));
} else {
  init3D();
}

/* ─── main init ─────────────────────────────────────────────────── */
function init3D() {
  const canvas = document.getElementById('three-canvas');

  /* Renderer */
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;

  /* Scene */
  const scene = new THREE.Scene();

  /* Camera */
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 200);
  camera.position.set(4, 1.5, 6);
  camera.lookAt(0, 0.8, 0);

  /* Lighting — 3-point automotive studio */
  // Key light: warm white from above-front
  const keyLight = new THREE.DirectionalLight(0xFFF5E0, 3.5);
  keyLight.position.set(5, 8, 5);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(2048, 2048);
  keyLight.shadow.camera.near = 0.5;
  keyLight.shadow.camera.far = 50;
  keyLight.shadow.camera.left = -10;
  keyLight.shadow.camera.right = 10;
  keyLight.shadow.camera.top = 10;
  keyLight.shadow.camera.bottom = -10;
  scene.add(keyLight);

  // Fill light: cool blue from opposite side
  const fillLight = new THREE.DirectionalLight(0xB0C8FF, 1.2);
  fillLight.position.set(-6, 3, -4);
  scene.add(fillLight);

  // Rim light: gold from behind — AurenCars brand color
  const rimLight = new THREE.DirectionalLight(0xC4922A, 2.0);
  rimLight.position.set(0, 2, -8);
  scene.add(rimLight);

  // Ambient: subtle so shadows aren't pitch black
  const ambient = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(ambient);

  // Ground reflection plane (invisible, catches shadows)
  const groundGeo = new THREE.PlaneGeometry(40, 40);
  const groundMat = new THREE.ShadowMaterial({ opacity: 0.25 });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = 0;
  ground.receiveShadow = true;
  scene.add(ground);

  /* Camera animation state */
  const keyframes = [
    { pos: new THREE.Vector3(4,   1.5,  6),   look: new THREE.Vector3(0, 0.8, 0) }, // 0%   hero front 3/4
    { pos: new THREE.Vector3(-5,  1.2,  4),   look: new THREE.Vector3(0, 0.8, 0) }, // 18%  about driver side
    { pos: new THREE.Vector3(-4,  2.5, -5),   look: new THREE.Vector3(0, 1.2, 0) }, // 38%  services rear 3/4
    { pos: new THREE.Vector3(0.2, 9,    0.5), look: new THREE.Vector3(0, 0,   0) }, // 58%  catalog top-down
    { pos: new THREE.Vector3(5,   0.6,  4),   look: new THREE.Vector3(0, 0.4, 0) }, // 76%  reviews low front
    { pos: new THREE.Vector3(4.5, 2,    5),   look: new THREE.Vector3(0, 0.8, 0) }, // 100% footer
  ];

  const targetPos  = keyframes[0].pos.clone();
  const targetLook = keyframes[0].look.clone();
  const currentLook = new THREE.Vector3(0, 0.8, 0);

  let scrollProgress = 0;
  let idleTimer = null;
  let isScrolling = false;

  /* Scroll → camera keyframe interpolation */
  function updateCameraTarget(progress) {
    const scaled = progress * (keyframes.length - 1);
    const idx    = Math.floor(scaled);
    const t      = scaled - idx;
    const kf0    = keyframes[Math.min(idx, keyframes.length - 1)];
    const kf1    = keyframes[Math.min(idx + 1, keyframes.length - 1)];
    targetPos.lerpVectors(kf0.pos, kf1.pos, t);
    targetLook.lerpVectors(kf0.look, kf1.look, t);
  }

  /* Hook into GSAP ScrollTrigger via window event */
  window.addEventListener('aurencars-scroll', (e) => {
    scrollProgress = e.detail.progress;
    isScrolling = true;
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => { isScrolling = false; }, 1500);
    updateCameraTarget(scrollProgress);
  });

  /* GLB load */
  let model = null;
  let modelLoaded = false;

  const loader = new GLTFLoader();
  loader.load(
    '/porsche_911_gt3.glb',
    (gltf) => {
      model = gltf.scene;

      // Center the model
      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      const size   = box.getSize(new THREE.Vector3());
      model.position.sub(center);

      // Scale so car fits nicely — roughly 4.5 units wide
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale  = 4.5 / maxDim;
      model.scale.setScalar(scale);

      // Sit on ground plane
      const boxAfter = new THREE.Box3().setFromObject(model);
      model.position.y -= boxAfter.min.y;

      // Shadows on all meshes
      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      scene.add(model);
      modelLoaded = true;
      document.dispatchEvent(new CustomEvent('model-loaded'));
    },
    (xhr) => {
      if (xhr.total > 0) {
        const pct = xhr.loaded / xhr.total;
        document.dispatchEvent(new CustomEvent('model-progress', { detail: { pct } }));
      }
    },
    (err) => {
      console.error('GLB load error:', err);
      document.body.classList.add('no-3d');
      document.dispatchEvent(new CustomEvent('model-loaded'));
    }
  );

  /* Resize */
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  /* RAF loop */
  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();

    // Idle slow rotation when not scrolling and model loaded
    if (modelLoaded && model && !isScrolling) {
      model.rotation.y += 0.0003;
    }

    // Smooth camera position lerp
    camera.position.lerp(targetPos, 0.04);
    currentLook.lerp(targetLook, 0.04);
    camera.lookAt(currentLook);

    renderer.render(scene, camera);
  }
  animate();
}

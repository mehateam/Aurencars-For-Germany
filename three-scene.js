import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

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

  /* Scene */
  const scene = new THREE.Scene();

  /* Camera */
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 200);
  camera.position.set(2, 1.5, 7);
  camera.lookAt(-2, 0.8, 0);

  /* Lighting — RoomEnvironment for realistic car product quality */
  // PMREMGenerator creates an environment map from RoomEnvironment —
  // gives the car soft reflections and proper illumination from all angles
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.4;

  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  pmrem.dispose();

  // Additional directional lights for definition and soft shadow
  const frontLight = new THREE.DirectionalLight(0xffffff, 1.8);
  frontLight.position.set(3, 6, 8);
  frontLight.castShadow = true;
  frontLight.shadow.mapSize.set(2048, 2048);
  frontLight.shadow.camera.near   =  0.5;
  frontLight.shadow.camera.far    = 50;
  frontLight.shadow.camera.left   = -10; frontLight.shadow.camera.right = 10;
  frontLight.shadow.camera.top    =  10; frontLight.shadow.camera.bottom = -10;
  scene.add(frontLight);

  const fillLeft = new THREE.DirectionalLight(0xffffff, 1.2);
  fillLeft.position.set(-8, 4, 2);
  scene.add(fillLeft);

  const fillRight = new THREE.DirectionalLight(0xffffff, 1.0);
  fillRight.position.set(8, 4, 2);
  scene.add(fillRight);

  // Subtle ground shadow
  const groundGeo = new THREE.PlaneGeometry(40, 40);
  const groundMat = new THREE.ShadowMaterial({ opacity: 0.08 });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = 0;
  ground.receiveShadow = true;
  scene.add(ground);

  /* Camera animation state */
  const keyframes = [
    { pos: new THREE.Vector3(2,   1.5,  7),   look: new THREE.Vector3(-2,   0.8, 0) }, // 0%   hero — model on RIGHT
    { pos: new THREE.Vector3(-4,  1.2,  5),   look: new THREE.Vector3(0,    0.8, 0) }, // 25%  about — center
    { pos: new THREE.Vector3(-4,  2.5, -5),   look: new THREE.Vector3(0,    1.2, 0) }, // 50%  services rear 3/4
    { pos: new THREE.Vector3(5,   0.6,  4),   look: new THREE.Vector3(0,    0.4, 0) }, // 75%  reviews low front
    { pos: new THREE.Vector3(4.5, 2,    5),   look: new THREE.Vector3(0,    0.8, 0) }, // 100% footer
  ];

  const targetPos   = keyframes[0].pos.clone();
  const targetLook  = keyframes[0].look.clone();
  const currentLook = new THREE.Vector3(-2, 0.8, 0);

  /* Mouse interaction state */
  let mouseX = 0, mouseY = 0;
  let targetMouseX = 0, targetMouseY = 0;

  // Only wire up mouse on non-touch devices
  if (!('ontouchstart' in window)) {
    window.addEventListener('mousemove', (e) => {
      targetMouseX = (e.clientX / window.innerWidth  - 0.5) * 2; // -1 to +1
      targetMouseY = -(e.clientY / window.innerHeight - 0.5) * 2; // -1 to +1
    }, { passive: true });
  }

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

      const box    = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      const size   = box.getSize(new THREE.Vector3());
      model.position.sub(center);

      const maxDim = Math.max(size.x, size.y, size.z);
      model.scale.setScalar(7.0 / maxDim);

      const boxAfter = new THREE.Box3().setFromObject(model);
      model.position.y -= boxAfter.min.y;

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
        document.dispatchEvent(new CustomEvent('model-progress', { detail: { pct: xhr.loaded / xhr.total } }));
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
    clock.getDelta();

    // Idle slow rotation when not scrolling
    if (modelLoaded && model && !isScrolling) {
      model.rotation.y += 0.0003;
    }

    // Smooth mouse lerp
    mouseX += (targetMouseX - mouseX) * 0.055;
    mouseY += (targetMouseY - mouseY) * 0.055;

    // Blend scroll-driven position with mouse offset
    const adjustedPos = targetPos.clone().add(
      new THREE.Vector3(mouseX * 1.8, mouseY * 0.9, 0)
    );

    camera.position.lerp(adjustedPos, 0.04);
    currentLook.lerp(targetLook, 0.04);
    camera.lookAt(currentLook);

    renderer.render(scene, camera);
  }
  animate();
}

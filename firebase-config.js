// ─────────────────────────────────────────────────────────────────────
// HOW TO SET UP FIREBASE (do this once):
//
// 1. Go to console.firebase.google.com → Create project → name "aurencars"
// 2. In the project: Build → Firestore Database → Create (Production mode)
// 3. Build → Storage → Get started
// 4. Build → Authentication → Get started → Email/Password → Enable
// 5. Authentication → Users → Add user → add your admin email + password
// 6. Project Settings (gear icon) → Your apps → </> Web → Register app
//    → copy the firebaseConfig object → paste it below
// 7. Firestore → Rules → replace with:
//
//    rules_version = '2';
//    service cloud.firestore {
//      match /databases/{database}/documents {
//        match /vehicles/{doc} {
//          allow read: if true;
//          allow write: if request.auth != null;
//        }
//      }
//    }
//
// 8. Storage → Rules → replace with:
//
//    rules_version = '2';
//    service firebase.storage {
//      match /b/{bucket}/o {
//        match /{allPaths=**} {
//          allow read: if true;
//          allow write: if request.auth != null;
//        }
//      }
//    }
// ─────────────────────────────────────────────────────────────────────

const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

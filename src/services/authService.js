import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebaseConfig";

// Sign up User with Role
export const signUpUser = async (email, password, role) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;

  // Save user with role in Firestore
  await setDoc(doc(db, "users", user.uid), {
    email: user.email,
    role: role, // 'student' or 'instructor'
  });
};

// Sign In User
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Fetch role from Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
    const role = userDoc.data()?.role;
    console.log("Fetched role:", role);

    return { user, role };
  } catch (error) {
    console.error("Error during login:", error.message); // Add better error logging
    throw error; // Re-throw to propagate the error up
  }
};
// Log Out User
export const logoutUser = async () => {
  await signOut(auth);
};

// Get current user and role from Firebase Auth & Firestore
export const getUserRole = async (userId) => {
  const userDoc = await getDoc(doc(db, "users", userId));
  return userDoc.exists() ? userDoc.data().role : null;
};

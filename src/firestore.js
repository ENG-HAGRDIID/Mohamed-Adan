// src/firestore.js
import { firestore } from './firebase';
import { collection, addDoc, doc, setDoc, getDoc } from 'firebase/firestore';

// Function to add or update user data
export const setUserData = async (userId, data) => {
  try {
    const userDoc = doc(firestore, 'users', userId);
    await setDoc(userDoc, data, { merge: true });
    console.log("User data added/updated successfully");
  } catch (error) {
    console.error("Error adding/updating user data:", error);
    throw error;
  }
};

// Function to get user data
export const getUserData = async (userId) => {
  try {
    const userDoc = doc(firestore, 'users', userId);
    const docSnap = await getDoc(userDoc);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting user data:", error);
    throw error;
  }
};

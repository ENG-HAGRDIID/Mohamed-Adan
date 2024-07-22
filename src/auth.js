// src/auth.js
import { auth } from './firebase';

export const signIn = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const signUp = async (email, password) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    throw new Error(error.message);
  }
};

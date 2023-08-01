import React from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
  const navigate = useNavigate();
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check for the user
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef); // checking document if is avaible;
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate('/');
    } catch (error) {
      toast.error("couldn't authorize with google");
      console.log(error);
    }
  }

  return (
    <button
      type="button" // domyślnie jest submit i wtedy automatycznie wyrzuca dane z form
      onClick={onGoogleClick}
      className="flex w-full row-auto items-center justify-center bg-red-700 hover:bg-red-800 text-white px-7 py-3 text-sm font-medium uppercase rounded transition duration-150 ease-in-out"
    >
      <AiFillGoogleCircle className="mr-2" />
      Continue with Google
    </button>
  );
}

import React from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';

export default function OAuth() {
  return (
    <button className="flex w-full row-auto items-center justify-center bg-red-700 hover:bg-red-800 text-white px-7 py-3 text-sm font-medium uppercase rounded transition duration-150 ease-in-out">
      <AiFillGoogleCircle className="mr-2" />
      Continue with Google
    </button>
  );
}

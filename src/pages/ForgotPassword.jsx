import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { toast } from 'react-toastify';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  function onChange(e) {
    setEmail(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success('Check your email to reset your password');
      navigate('/');
    } catch {
      toast.error('sth went wrong');
    }
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="w-[70%] lg:w-[50%] mb-12 md:mb-6 ml-0 md:ml-6">
          <img
            src="https://img.freepik.com/free-photo/retro-steel-ornate-antique-vintage_1203-6354.jpg?w=826&t=st=1690878280~exp=1690878880~hmac=cb008a3ac3d5c0a38ca5a89c917a4254ac9543cda1b5aff0e328381641dd19e2"
            alt="keys"
            className="w-full rounded-2xl"
          />
        </div>

        <div className="w-full md:w-[70%] lg:w-[40%] lg:ml-20" input="text">
          <form onSubmit={onSubmit}>
            {/* MAIL INPUT */}
            <div>
              <input
                className="w-full px-4 py-2 text-l text-gray-700 bg-white border-gray-300 rounded transition ease-in-out duration-300 mb-6"
                type="email"
                id="email"
                value={email}
                onChange={onChange}
                placeholder="email adress"
              />
            </div>

            {/* Register & Forget */}
            <div className="flex justify-between text-sm py-3 whitespace-nowrap">
              <p>
                Don't have an accout?
                <Link
                  className="text-red-600 hover:text-red-700 trasition duration-200 ease-in-out ml-2"
                  to="/signUp"
                >
                  Register
                </Link>
              </p>
            </div>

            {/* send reset password */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 text-sm font-medium uppercase rounded transition duration-150 ease-in-out">
              Send reset password
            </button>
            <div className=" flex items-center my-4 before:border-t before:flex-1  before:border-gray-300 after:border-t after:flex-1  after:border-gray-300">
              <p className="text-center font-semibold text-sm mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}

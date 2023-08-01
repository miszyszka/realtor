import React, { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign Up</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="w-[70%] lg:w-[50%] mb-12 md:mb-6 ml-0 md:ml-6">
          <img
            src="https://img.freepik.com/free-photo/retro-steel-ornate-antique-vintage_1203-6354.jpg?w=826&t=st=1690878280~exp=1690878880~hmac=cb008a3ac3d5c0a38ca5a89c917a4254ac9543cda1b5aff0e328381641dd19e2"
            alt="keys"
            className="w-full rounded-2xl"
          />
        </div>

        <div className="w-full md:w-[70%] lg:w-[40%] lg:ml-20" input="text">
          <form>
            {/* NAME INPUT */}
            <div>
              <input
                className="w-full px-4 py-2 text-l text-gray-700 bg-white border-gray-300 rounded transition ease-in-out duration-300 mb-6"
                type="text"
                id="name"
                value={name}
                onChange={onChange}
                placeholder="full name"
              />
            </div>
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
            {/* PASSWORD INPUT */}
            <div className="relative">
              <input
                className="w-full px-4 py-2 text-l text-gray-700 bg-white border-gray-300 rounded transition ease-in-out duration-300"
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="password"
              />
              {/* EYE */}
              {showPassword ? (
                <AiOutlineEye
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>

            {/* Register & Forget */}
            <div className="flex justify-between text-sm py-3 whitespace-nowrap">
              <p>
                Have an account?
                <Link
                  className="text-red-600 hover:text-red-700 trasition duration-200 ease-in-out ml-2"
                  to="/signIn"
                >
                  Sign In
                </Link>
              </p>
            </div>

            {/* SIGN IN BUTTON */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 text-sm font-medium uppercase rounded transition duration-150 ease-in-out">
              Sign Up
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

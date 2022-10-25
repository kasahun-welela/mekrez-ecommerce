import React, { useState } from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
function Login() {
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });
  function handleLogin(event) {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(loginData);
  }
  return (
    <>
      <div className="text-center mt-5">
        <div className="flex items-center justify-center">
          {/* for image
          className="w-12 h-12 text-blue-500" */}
        </div>
        <h2 className="text-4xl tracking-tight">Sign in into your account</h2>
        <span className="text-sm">
          or{" "}
          <a href="/signup" className="text-blue-500">
            register a new account
          </a>
        </span>
      </div>
      <div className="flex justify-center my-2 mx-4 md:mx-0">
        <form className="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="Password"
              >
                Email address
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-green-900"
                type="email"
                name="userName"
                onChange={handleLogin}
                required
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="Password"
              >
                Password
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none  focus:border-green-900"
                type="password"
                name="password"
                onChange={handleLogin}
                required
              />
            </div>
            <div className="w-full flex items-center justify-between px-3 mb-3 ">
              <label for="remember" className="flex items-center w-1/2">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="mr-1 bg-white shadow"
                />
                <span className="text-sm text-gray-700 pt-1">Remember Me</span>
              </label>
              <div className="w-1/2 text-right">
                <a
                  href="www.forgot.pas"
                  className="text-blue-500 text-sm tracking-tight"
                >
                  Forget your password?
                </a>
              </div>
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <button className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500">
                Sign in
              </button>
            </div>
            <div className="mx-auto -mb-6 pb-1">
              <span className="text-center text-xs text-gray-700">
                or sign up with
              </span>
            </div>
            <div className="flex items-center w-full mt-2">
              <div className="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400">
                <button className="appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
                  {/* <svg
                    className="h-6 w-6 fill-current text-gray-700"
                    viewBox="0 0 512 512"
                  >
                    <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
                  </svg> */}
                  <BsFacebook className="h-6 w-6 fill-current text-blue-600" />
                </button>
              </div>
              <div className="w-full md:w-1/3 px-3 pt-4 mx-2">
                <button className="appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
                  <FcGoogle className="h-6 w-6 fill-current" />
                </button>
              </div>
              <div className="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400">
                <button className="appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
                  <BsLinkedin className="h-6 w-6 fill-current text-blue-600" />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;

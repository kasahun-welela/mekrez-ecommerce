import React, { useState } from "react";

function SignUp() {
  const [signUpData, setSignUpData] = useState({
    fullName: "",
    email: "",
    password: "",
    cPassword: "",
  });

  function handleSignUp(event) {
    const { name, value } = event.target;
    // const name = event.target.name;
    // const value = event.target.value;
    setSignUpData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(signUpData);
  }

  function submitData(event) {
    let formData = {};
    formData = signUpData;
    console.log(formData);
  }

  return (
    <div className=" mt-4">
      {/* // <div className="bg-grey-900 min-h-screen mt-0 flex flex-col md:-mt-20"> */}
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 md:max-w-lg">
        <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            className="block border border-grey-light w-full  p-3 rounded mb-4"
            name="fullName"
            placeholder="Full Name"
            onChange={handleSignUp}
          />
          <p className="mb-1 text-center ">{signUpData.fullName}</p>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            onChange={handleSignUp}
          />
          <p className="mb-1 text-center ">{signUpData.email}</p>
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            onChange={handleSignUp}
          />
          <p className="mb-1 text-center ">{signUpData.password}</p>
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="cPassword"
            placeholder="Confirm Password"
            onChange={handleSignUp}
          />
          <p className="mb-1 text-center ">{signUpData.cPassword}</p>
          <button
            type="submit"
            onClick={submitData}
            className="w-full bg-blue-700 text-center py-3 rounded bg-green text-white hover:bg-blue-500 focus:outline-none my-1"
          >
            Create Account
          </button>
          <div className="ml-10 md:ml-20 text-grey-900 mt-6">
            Already have an account?
            <a
              className="no-underline text-blue-900 font-bold border-b border-blue text-blue"
              href="/login"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
      {/* //</div> */}
    </div>
  );
}

export default SignUp;

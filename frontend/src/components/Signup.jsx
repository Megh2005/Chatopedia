import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // WATCH PASSWORD FIELD
  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  const matchPassword = (value) => {
    return value === password || "Passwords Are Not Matching";
  };

  const onSubmit =  (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    axios
      .post("http://localhost:5000/user/register", userInfo)
      .then((response) => {
        console.log(response.data);
        alert("User Registration Successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-green-500 space-y-3 px-6 py-2 rounded-md w-96"
        >
          <h1 className="text-3xl text-center text-blue-500 font-bold">
            Chat<span className="text-green-500 font-semibold">-o-</span>Pedia
          </h1>
          <h2 className="text-xl text-center font-bold text-white">
            Register User
          </h2>
          {/* <br /> */}
          {/* NAME FIELD */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Enter Name"
              {...register("name", { required: true })}
            />
          </label>
          {errors.name && (
            <span className="text-red-600 text-sm font-bold capitalize">
              This field is required
            </span>
          )}
          {/* EMAIL FIELD */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              className="grow"
              placeholder="Enter Email"
              {...register("email", { required: true })}
            />
          </label>
          {errors.email && (
            <span className="text-red-600 text-sm font-bold capitalize">
              This field is required
            </span>
          )}

          {/* PASSWORD FIELD */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="Enter Password"
              {...register("password", { required: true })}
            />
          </label>
          {errors.password && (
            <span className="text-red-600 text-sm font-bold capitalize">
              This field is required
            </span>
          )}
          {/* CONFIRM PASSWORD FIELD */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: true,
                validate: matchPassword,
              })}
            />
          </label>
          {errors.confirmPassword && (
            <span className="text-red-600 text-sm font-bold capitalize">
              {errors.confirmPassword.message}
            </span>
          )}
          {/* TEXT & BUTTON */}
          <div className="flex justify-between flex-col items-center">
            <input
              type="submit"
              value="Register"
              className="text-white bg-green-700 px-2 py-1 w-32 rounded-lg font-bold cursor-pointer hover:bg-blue-700 duration-500 ease-in-out"
            />
            <p className="text-center">
              Already have an account?{"  "}
              <span className="text-green-500 underline cursor-pointer ml-1">
                Sign In
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;

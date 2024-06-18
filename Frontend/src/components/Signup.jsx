import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <div className="w-[600px]">
          <div className="modal-box dark:text-black">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg">Signup</h3>
              <div className="items-center">
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="email"
                    className="grow"
                    placeholder="Enter Your Email"
                    {...register("email", { required: true })}
                  />
                </label>
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Enter Your Name"
                    {...register("name", { required: true })}
                  />
                </label>
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="password"
                    className="grow"
                    placeholder="Enter Your Password"
                    {...register("password", { required: true })}
                  />
                </label>
                {errors.password && (
                  <span className="text-red-500">Password is required</span>
                )}
                <div className="flex justify-around mt-4">
                  <button
                    type="submit"
                    className="btn btn-secondary rounded-md px-3 py-1 hover:bg-pink-400 duration-200"
                  >
                    Signup
                  </button>
                  <p>
                    Already registered?{" "}
                    <button
                      type="button"
                      className="underline text-blue-500 cursor-pointer"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Login
                    </button>
                  </p>
                </div>
              </div>
            </form>
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

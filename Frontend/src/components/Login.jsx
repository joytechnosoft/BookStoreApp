import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:text-black">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link
              to={"/"}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
          

            <h3 className="font-bold text-lg">Login</h3>
            <div className="items-center">
              <div className="mt-4 space-y-5">
                <br />
               
                <input
                  type="email"
                  className="w-full px-3 py-1 border rounded-md outline-none"
                  placeholder="Enter Your Email"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
              <br />
              
              <input
                type="password"
                className="w-full px-3 py-1 border rounded-md outline-none"
                placeholder="Enter Your Password"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-red-500">Password is required</span>
              )}
            
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="btn btn-secondary rounded-md px-3 py-1 hover:bg-pink-400 duration-200"
              >
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;

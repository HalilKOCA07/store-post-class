import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 w-screen p-24">
      <div className="bg-white w-full sm:w-[450px] rounded-lg shadow-xl m-auto border p-4 text-center">
        <div className="mt-3 flex justify-center items-center gap-2">
          <p className="bg-blue-500 h-10 w-2.5 rounded-lg"></p>
          <h1 className="font-bold text-3xl">CO-DEVELOPERS STORES</h1>
        </div>
        <div className="mt-5">
          <h3 className="text-lg font-semibold">SIGN IN</h3>
          <p>Enter your credentials to access your account</p>
          <p>or</p>
          <p>Create new account</p>
        </div>
        <form>
          <div className="flex flex-col items-start ml-5 mr-5 mt-5">
            <div>
              <label htmlFor="email" className="ml-2 hover:after:content-['codeveloper@cw.com'] hover:after:text-blue-300 hover:after:ml-3">
                Email
              </label>
            </div>

            <input
              id="email"
              type="text"
              placeholder="Enter your email"
              className="border mt-1 border-blue-300 rounded-lg p-1 w-full focus:border-red-400"
            />
          </div>
          <div className="flex flex-col items-start ml-5 mr-5 mt-4">
            <div className="flex">
              <label htmlFor="pass" className="ml-2 hover:after:content-['admin'] hover:after:text-blue-300 hover:after:ml-3">
                Password
              </label>
            </div>

            <input
              id="pass"
              type="text"
              placeholder="Enter your password"
              className="border mt-1 border-blue-300 rounded-lg p-1 w-full focus:border-red-400"
            />
          </div>
          <button
            type="submit"
            className="block w-[24rem] h-10 rounded-lg hover:bg-blue-600 bg-blue-500 ml-5 mr-5 mt-5"
          >
            Sign In
          </button>
        </form>
        <div>
          <button
            type="submit"
            className="block w-[24rem] h-10 rounded-lg hover:bg-green-500 bg-green-600 ml-5 mr-5 my-3"
          >
            Create New Account
          </button>
        </div>
        <h3 className="my-5 ">Forget your password <Link to="/resetpass" className="text-red-500 underline-2 hover:underline-offset-4">Reset Password</Link></h3>
      </div>
    </div>
  );
};

export default Login;

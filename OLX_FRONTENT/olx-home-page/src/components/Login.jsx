import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, login as jwtLogin, googleProvider } from "../firebase/auth";
import guitar from "../assets/guitar.png";
import google from "../assets/google.png";

const Login = ({ setLoginPop }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const googleSignin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please provide both email and password.");
      return;
    }

    try {
      await jwtLogin(email, password);
      location.reload()
    } catch (err) {
      console.log(err)
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-zinc-950/75 transition-opacity" aria-hidden="true"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-96 sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <h1 onClick={() => { setLoginPop(false) }} className="cursor-pointer font-semibold text-3xl">X</h1>
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <div className="mt-2">
                    <div className="w-100% flex justify-center"><img src={guitar} className="w-20 h-20" alt="guitar" /></div>
                    <p className="text-base font-medium mt-5 text-center">Help us to become one of the safest places<br />to buy and sell</p>

                    {/* Email and Password Login Form */}
                    <div className="mt-12">
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                          type="password"
                          id="password"
                          className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      {error && <div className="text-red-500 text-sm">{error}</div>}

                      <div className="flex justify-center">
                        <button
                          onClick={handleSubmit}
                          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                          Login
                        </button>
                      </div>

                      <h1 className="text-center mt-4 cursor-pointer underline">Forgot Password?</h1>
                    </div>

                    {/* Google Login */}
                    <div onClick={googleSignin} className="flex border-2 border-gray-300 p-2 rounded-md mt-4 cursor-pointer">
                      <img className="w-8 " src={google} alt="google-icon" />
                      <h1 className="font-semibold ml-3 w-100% flex justify-center">Continue with Google</h1>
                    </div>

                    <h3 className="mt-28 text-gray-600 text-xs text-center">All your personal details are safe with us.</h3>
                    <h3 className="mt-4 text-gray-600 text-xs text-center">If you continue, you are accepting <span className="text-blue-600"> OLX Terms and <br /> Conditions and Privacy Policy</span></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
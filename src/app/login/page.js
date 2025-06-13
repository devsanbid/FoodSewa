import React from "react";
import { FaGoogle, FaGithub, FaGitlab, FaUser, FaLock } from "react-icons/fa";
import Image from "next/image";
 import { Boxes } from "@/components/ui/background-boxes";
 import { cn } from "@/lib/utils";

export default function LoginPage() {
  return (
    <div className="min-h-screen realtive bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex items-center justify-center px-4">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl shadow-lg rounded-2xl bg-opacity-40 p-8">
        {/* Left Panel */}
        <div className="space-y-8">
          <h1 className="text-2xl font-semibold text-white-400">Food Sewa</h1>
          <h2 className="text-3xl font-bold">Craving something delicious?</h2>

          <div className="space-y-6 mt-10 w-[300px]">
            <div>
              <div className="flex-col items-center text-white-400">
                <Image src="/Icon.png" width={15} height={15} alt="icon" />
                <h3 className="mt-2">Invite your friends and family</h3>
              </div>
              <p className="text-sm text-gray-400 mt-1">
                Share the joy of easy ordering and discover new favorites
                together..
              </p>
            </div>

            <div>
              <div className="flex-col items-center gap-3 text-white-400">
                <Image src="/track.png" width={15} height={15} alt="track" />
                <h3 className="mt-2">Track your order in real-time</h3>
              </div>
              <p className="text-sm text-gray-400 mt-1">
                Get live updates on your delivery and know exactly when to
                expect your food..
              </p>
            </div>
            <Image src="/secure.png" width={15} height={15} alt="secure" />
            <div>
              <div className="flex items-center gap-3 text-white-400">
                <h3 className="font-semibold">Secure and reliable delivery</h3>
              </div>
              <p className="text-sm text-gray-400 mt-1">
                We ensure your food arrives fresh and safely to your doorstep.
              </p>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className=" bg-gray-900 p-8 rounded-lg shadow-lg ">
          <h2 className="text-lg font-semibold mb-4">Login with</h2>
          <div className="flex gap-4 mb-6">
            <button className="flex-1 py-2 rounded bg-gray-800 hover:bg-gray-700 flex items-center justify-center gap-2">
              <Image src="/Google.png" width={15} height={15} alt="google" />{" "}
              Google
            </button>
            <button className="flex-1 py-2 rounded bg-gray-800 hover:bg-gray-700 flex items-center justify-center gap-2">
              <FaGithub /> Github
            </button>
            <button className="flex-1 py-2 rounded bg-gray-800 hover:bg-gray-700 flex items-center justify-center gap-2">
              <FaGitlab /> Gitlab
            </button>
          </div>

          <div className="text-center text-gray-500 mb-4">Or</div>

          <form className="space-y-6">
            <div className="flex-col">
              <label>Username</label>
              <div className=" py-2 px-2 pr-4 rounded mt-1.5 items-center justify-start bg-gray-800 text-white focus:outline-none flex gap-3 ">
                <FaUser />
                <input type="text" placeholder="Username" className="w-full" />
              </div>
            </div>

            <div className="flex-col">
              <label>Password</label>

              <div
                className="w-full py-2 px-2 rounded mt-1.5 bg-gray-800 text-white focus:outline-none flex gap-3 items-center"
              >
                <FaLock />
           
              <input
                type="password"
                placeholder="Password"
                className="w-full"
              />
                👁️
             
              </div>
            </div>

            <button className="w-full bg-[#EA7C69] hover:bg-orange-500 py-2 rounded font-semibold text-black">
              Login in
            </button>
          </form>

          <p className="text-sm text-center text-gray-400 mt-4">
            No account?{" "}
            <a href="#" className="bg- hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

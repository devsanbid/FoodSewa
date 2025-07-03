"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router =  useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full p-8">
        {/* Left Section */}
        <div className="space-y-10">
          <h1 className="text-3xl ">Food Sewa</h1>
          <h2 className="text-4xl font-bold">Craving something delicious?</h2>
          <div className="space-y-6 text-sm  w-[300px]">
            <div>
              <Image src="/inviteicon.png" width={20} height={20} alt="invite icon" />{" "}
              Invite your friends and family
              <p className="text-gray-400 my-1.5">
                Share the joy of easy ordering and discover new favorites
                together.
              </p>
            </div>
            <div>
              <Image src="/tickicon.png" width={20} height={20} alt="tick icon" />{" "}

              <p className="font-semibold flex items-center gap-2 my-1.5">
                Track your order in real-time
              </p>
              <p className="text-gray-400">
                Get live updates on your delivery and know exactly when to
                expect your food.
              </p>
            </div>
            <div>
              <Image src="/shieldicon.png" width={20} height={20} alt="shield icon" />{" "}

              <p className="font-semibold flex items-center gap-2 my-1.5">

                Secure and reliable delivery
              </p>
              <p className="text-gray-400">
                We ensure your food arrives fresh and safely to your doorstep.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-gray-900 p-8 rounded-xl shadow-md space-y-6">
          <div className="flex justify-between gap-4">
            <button className="bg-gray-700 w-full py-2 rounded-md flex justify-center items-center gap-2">
              <Image src="/Google.png" width={15} height={15} alt="google" />{" "}
              Google
            </button>
            <button className="bg-gray-700 w-full py-2 rounded-md flex justify-center items-center gap-2">
              <Image src="/Vector.png" width={15} height={15} alt="github" />{" "}
              Github
            </button>
            <button className="bg-gray-700 w-full py-2 rounded-md flex justify-center items-center gap-2">
              <Image src="/logo_art.png" width={15} height={15} alt="github" />
              Gitlab
            </button>
          </div>

          <div className="text-center text-gray-500">Or</div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>First Name</label>
              <div className="bg-gray-800 p-2 rounded-md flex gap-1.5 items-center">
                <Image
                  src="/firstnameicon.png"
                  width={15}
                  height={10}
                  alt="firstname"
                />
                <input type="text" placeholder="First Name" />
              </div>
            </div>

            <div>
              <label>Last Name</label>

              <div className="bg-gray-800 p-2 rounded-md flex gap-1.5 items-center">
                <Image
                  src="/lastnameicon.png"
                  width={15}
                  height={10}
                  alt="lastname"
                />
                <input type="text" placeholder="last Name" />
              </div>
            </div>
          </div>

          <div>
            <label>Username</label>
            <div className="bg-gray-800 p-2 rounded-md flex gap-1.5 items-center">
              <Image
                src="/usernameicon.png"
                width={15}
                height={10}
                alt="username"
              />

              <input
                type="text"
                placeholder="Username"
                className="bg-gray-800 w-full p-2 rounded-md"
              />
            </div>
          </div>

          <label>Email</label>
          <div className="bg-gray-800 p-2 rounded-md flex gap-1.5 items-center">
            <Image
              src="/email.png"
              width={15}
              height={10}
              alt="email icon"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-800 w-full p-2 rounded-md"
            />
          </div>

          <label>Password</label>
          <div className="bg-gray-800 p-2 rounded-md flex gap-1.5 items-center">
            <Image
              src="/lock-01.png"
              width={15}
              height={10}
              alt="email icon"
            />

            <div className="flex">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="bg-gray-800 w-full p-2 pr-65 rounded-md"
              />

            </div>
            <button
              type="button"
              className=" text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>
          <p className="text-xs text-gray-500">
            Minimum length is 8 characters.
          </p>

          <button className="w-full bg-[#EA7C69] hover:bg-orange-600 text-white py-2 rounded-md">
            Sign Up
          </button>

          <p className="text-xs text-center text-gray-500">
            By creating an account, you agree to the{" "}
            <a href="#" className="underline">
              Terms of Service
            </a>
            .
          </p>

          <p className="text-sm text-center text-gray-400">
            Already have an account?{" "}
            <button onClick={() => router.push("/login")} className="text-orange-400 underline">
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

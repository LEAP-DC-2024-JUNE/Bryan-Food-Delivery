"use client";
import { Eye, EyeOff } from "@/Logos/Icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LoginForm = ({ modal }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [isEmpty, setIsEmpty] = useState(true);

  const router = useRouter();

  const togglePassword = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const handleChange = (e) => {
    setData((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  };

  useEffect(() => {
    setIsEmpty(data.email === "" || data.password === "");
  }, [data]);
  return (
    <div className="flex flex-col items-center gap-12 p-8 w-min mx-auto rounded-2xl bg-white">
      <h1 className="text-3xl font-bold">Нэвтрэх</h1>
      <div className="flex flex-col gap-2 w-[384px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm ">
              Имэйл
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Имэйл хаягаа оруулна уу"
              value={data.email}
              onChange={handleChange}
              className="border-[1px] border-gray-200 bg-gray-100 rounded-[4px] py-2 px-4"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="password" className="text-sm ">
              Нууц үг
            </label>
            <div className="w-full relative">
              <input
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Нууц үг"
                value={data.password}
                onChange={handleChange}
                className="border-[1px] border-gray-200 bg-gray-100 rounded-[4px] py-2 px-4 w-full"
              />
              <button
                className="absolute inset-y-0 end-0 flex items-center z-20 px-2.5 cursor-pointer fill-black rounded-e-md
                          focus:outline-none focus-visible:fill-indigo-500 hover:fill-indigo-500 transition-colors"
                onClick={togglePassword}
              >
                {isPasswordVisible ? <Eye /> : <EyeOff />}
              </button>
            </div>
          </div>
        </div>
        <div className="w-full text-right">
          <Link href="/forgot-pass" className="text-sm text-gray-700">
            Нууц үг сэргээх
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 w-full">
        <button
          className="py-2 px-4 rounded-[4px] bg-green-600 w-full text-white
                  disabled:bg-gray-200 disabled:text-gray-800 disabled:text-opacity-25"
          disabled={isEmpty}
        >
          Нэвтрэх
        </button>
        <p className="text-sm text-gray-700">Эсвэл</p>
        <Link
          href={"/signup"}
          className="py-2 px-4 rounded-[4px] border-[1px] border-green-600 w-full text-center
                          hover:bg-green-600 hover:text-white focus:bg-green-600 focus:text-white"
        >
          Бүртгүүлэх
        </Link>
        {modal && (
          <button
            onClick={router.back}
            className="py-2 px-4 rounded-[4px] border-[1px] border-red-600 w-full text-center"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default LoginForm;

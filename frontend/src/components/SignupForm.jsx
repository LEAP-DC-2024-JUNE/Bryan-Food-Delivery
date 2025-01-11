"use client";
import { CheckedBox, Eye, EyeOff, UncheckedBox } from "@/Logos/Icons";
import { useState, useEffect } from "react";

const SignupForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  const [isEmpty, setIsEmpty] = useState(true);
  const [agreed, setAgreed] = useState(false);

  const togglePassword = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  const toggleConfirmPassword = () => {
    setIsConfirmPasswordVisible((prevState) => !prevState);
  };

  const handleChange = (e) => {
    setData((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  };
  const handleAgree = (d) => {
    setAgreed((prevState) => !prevState);
  };

  useEffect(() => {
    setIsEmpty(
      data.name === "" ||
        data.email === "" ||
        data.address === "" ||
        data.password === "" ||
        data.confirmPassword === ""
    );
  }, [data]);
  return (
    <div className="flex flex-col items-center gap-12 p-8 w-min mx-auto rounded-2xl bg-white">
      <h1 className="text-3xl font-bold">Бүртгүүлэх</h1>
      <div className="flex flex-col gap-2 w-[384px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm ">
              Нэр
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Нэрээ оруулна уу"
              value={data.name}
              onChange={handleChange}
              className="border-[1px] border-gray-200 bg-gray-100 rounded-[4px] py-2 px-4"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm ">
              И-мэйл
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="И-мэйл хаягаа оруулна уу"
              value={data.email}
              onChange={handleChange}
              className="border-[1px] border-gray-200 bg-gray-100 rounded-[4px] py-2 px-4"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm ">
              Хаяг
            </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Та хаягаа оруулна уу"
              value={data.address}
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
                placeholder="Нууц үгээ оруулна уу"
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
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="password" className="text-sm ">
              Нууц үг давтах
            </label>
            <div className="w-full relative">
              <input
                type={isConfirmPasswordVisible ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Нууц үгээ оруулна уу"
                value={data.confirmPassword}
                onChange={handleChange}
                className="border-[1px] border-gray-200 bg-gray-100 rounded-[4px] py-2 px-4 w-full"
              />
              <button
                className="absolute inset-y-0 end-0 flex items-center z-20 px-2.5 cursor-pointer fill-black rounded-e-md
                                    focus:outline-none focus-visible:fill-indigo-500 hover:fill-indigo-500 transition-colors"
                onClick={toggleConfirmPassword}
              >
                {isConfirmPasswordVisible ? <Eye /> : <EyeOff />}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 w-full">
        <div className="flex justify-start gap-2">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            checked={agreed}
            onChange={handleAgree}
            className="hidden"
          />
          <label htmlFor="terms" className="flex justify-start gap-2 text-sm">
            {agreed ? <CheckedBox /> : <UncheckedBox />}
            <span>Үйлчилгээний нөхцөл зөвшөөрөх</span>
          </label>
        </div>
        <button
          className="py-2 px-4 rounded-[4px] bg-green-600 w-full text-white
                  disabled:bg-gray-200 disabled:text-gray-800 disabled:text-opacity-25"
          disabled={isEmpty || !agreed}
        >
          Бүртгүүлэх
        </button>
      </div>
    </div>
  );
};

export default SignupForm;

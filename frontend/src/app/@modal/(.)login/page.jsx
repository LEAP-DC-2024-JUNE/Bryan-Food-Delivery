"use client";

import LoginForm from "@/components/LoginForm";

const LoginModal = () => {
  return (
    <div className="pt-[111px] bg-black bg-opacity-50 absolute top-0 left-0 w-screen h-screen">
      <LoginForm modal={true} />
    </div>
  );
};

export default LoginModal;

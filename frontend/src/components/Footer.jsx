import PineconeLogo from "@/Logos/Pinecone";
import { FacebookLogo, InstagramLogo, TwitterLogo } from "@/Logos/Socials";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-center items-center mt-auto bg-[url('/footer-texture.svg')] w-full h-[545px] bg-green-600">
      <div className="flex flex-col items-center gap-10 text-white">
        <div className="flex gap-2 fill-white">
          <PineconeLogo />
          <span className="font-bold text-xl">Food Delivery</span>
        </div>
        <div className="w-full flex justify-between underline">
          <Link href={"/"}>Нүүр</Link>
          <Link href={"/"}>Холбоо барих</Link>
          <Link href={"/menu"}>Хоолны цэс</Link>
          <Link href={"/"}>Үйлчилгээний нөхцөл</Link>
          <Link href={"/delivery"}>Хүргэлтийн бүс</Link>
          <Link href={"/"}>Нууцлалын бодлого</Link>
        </div>
        <div className="flex items-center gap-[18px] p-[5px]">
          <FacebookLogo />
          <InstagramLogo />
          <TwitterLogo />
        </div>
        <div className="border-[1px] border-gray-300 w-[1200px]"></div>
        <div className="flex flex-col items-center gap-2 font-light">
          <div>&copy; 2024 Pinecone Foods LLC</div>
          <div>Зохиогчийн эрх хуулиар хамгаалагдсан.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

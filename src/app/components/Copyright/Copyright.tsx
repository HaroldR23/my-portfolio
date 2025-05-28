import { COPYRIGHT_LOGO_URL, COPYRIGHT_TEXT_CONTENT } from "@/app/constants/data/english";
import Image from "next/image";

const Copyright = () => {
  return (
    <div className="flex items-center bg-black text-white">
      <Image src={COPYRIGHT_LOGO_URL} alt="logo" width={70} height={70} className="mr-5"/>
      <p>{COPYRIGHT_TEXT_CONTENT}</p>
    </div>
  );
};

export default Copyright;

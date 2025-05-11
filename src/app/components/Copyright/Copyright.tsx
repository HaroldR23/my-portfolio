import { COPYRIGHT_LOGO_URL, COPYRIGHT_TEXT_CONTENT } from "@/app/constants";
import Image from "next/image";

const Copyright = () => {
    return (
        <div className="copyrightContainer">
            <Image src={COPYRIGHT_LOGO_URL} alt="logo" width={100} height={100} className="logo" />
            <p>{COPYRIGHT_TEXT_CONTENT}</p>
        </div>
    );
};

export default Copyright;

import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center bg-purple-color01 w-screen h-44 text-white">
            <div className="flex justify-center items-center gap-8 w-72 my-4 text-2xl">
                <FaWhatsapp />
                <FaLinkedinIn/>
                <FaGithub />
            </div>
            <p className="w-72 text-center text-xs">
                Copyright &copy 2024 - Created by João Campos - All rights reserved
            </p>
            
        </footer>
    )
}
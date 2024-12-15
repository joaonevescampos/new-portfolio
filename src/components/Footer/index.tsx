import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center bg-purple-color01 dark:bg-purple-color04 dark:bg-opacity-20 w-screen h-44 text-white">
            <div className="flex justify-center items-center gap-8 w-72 my-4 text-2xl">
                <a href="https://api.whatsapp.com/send?phone=5583996966821&text=Ol%C3%A1,%20Jo%C3%A3o!%20Vi%20seu%20portfolio%20e%20me%20interessei%20pelo%20seu%20trabalho!">
                    <FaWhatsapp />
                </a>
                <a href="https://www.linkedin.com/in/joaonevescampos">
                    <FaLinkedinIn />
                </a>
                <a href="https://github.com/joaonevescampos">
                    <FaGithub />
                </a>
            </div>
            <p className="w-72 md:w-[400px] text-center text-xs">
                Copyright &copy 2024 - Created by João Campos - All rights reserved
            </p>
        </footer>
    )
}
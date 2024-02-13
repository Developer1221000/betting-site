import React from "react";
import FooterElement from "./footerElement";
import { FaFacebook, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
    return <>
        <div className="flex flex-col lg:flex-row justify-between px-5 py-20 bg-[#1a1a1a] text-white gap-y-5">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-32 gap-y-5">
                <div className="flex flex-col gap-y-5">
                    <FooterElement label="LIVE" />
                    <FooterElement label="Prematch" />
                    <FooterElement label="Esports" />
                    <FooterElement label="Virtual Sports" />
                </div>
                <div className="flex flex-col gap-y-5">
                    <FooterElement label="Casino" />
                    <FooterElement label="Live Casino" />
                    <FooterElement label="Tournaments" />
                </div>
                <div className="flex flex-col gap-y-5">
                    <FooterElement label="About Us" />
                    <FooterElement label="Terms and Conditions" />
                    <FooterElement label="Privacy Policy" />
                    <FooterElement label="Contact Us" />
                </div>
            </div>
            <div>
                <div className="font-bold text-[60px]">18+</div>
                <div className="text-[#eeeeee] text-base text-end">© 2022</div>
                <div className="text-[#eeeeee] text-base text-end">Betboard</div>
                <div className="text-[#eeeeee] text-xl text-end font-bold py-3">Follow us</div>
                <div className="flex flex-row gap-5">
                    <FaFacebook className="text-[#3b5998] w-[30px] h-[30px] rounded-full cursor-pointer" />
                    <FaInstagramSquare className="text-[#e1447b] w-[30px] h-[30px] rounded-full cursor-pointer" />
                    <FaYoutubeSquare className="text-[#bb0000] w-[30px] h-[30px] rounded-full cursor-pointer" />
                </div>
            </div>
        </div>
    </>
}

export default Footer;

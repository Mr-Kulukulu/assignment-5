import React from 'react';
import Logo from "../assets/logo-text.png";
const Footer = () => {
    return (
        <div className="container mx-auto border border-gray-100 mt-20">

            {/* Main Footer */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-10 px-6">

                {/* Logo & Description */}
                <div>
                    <img src={Logo} alt="Footer Logo" className="w-40 mb-4" />

                    <p className="text-gray-500 max-w-sm mb-5">
                        Curated tools, technologies, and resources for developers building
                        modern software.
                    </p>

                    <div className="flex gap-5">
                        <span className="cursor-pointer">GitHub</span>
                        <span className="cursor-pointer">Twitter</span>
                        <span className="cursor-pointer">LinkedIn</span>
                    </div>
                </div>

                {/* Product */}
                <div>
                    <h2 className="font-bold mb-4">PRODUCT</h2>
                    <div className="space-y-3 text-gray-500">
                        <p className="cursor-pointer">Home</p>
                        <p className="cursor-pointer">Technologies</p>
                        <p className="cursor-pointer">Projects</p>
                    </div>
                </div>

                {/* Company */}
                <div>
                    <h2 className="font-bold mb-4">COMPANY</h2>
                    <div className="space-y-3 text-gray-500">
                        <p className='cursor-pointer'>About</p>
                        <p className="cursor-pointer">Contact</p>
                        <p className="cursor-pointer">Careers</p>
                    </div>
                </div>

                {/* Legal */}
                <div>
                    <h2 className="font-bold mb-4">LEGAL</h2>
                    <div className="space-y-3 text-gray-500">
                        <p className='cursor-pointer'>Privacy Policy</p>
                        <p className='cursor-pointer'>Terms of Service</p>
                    </div>
                </div>

            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-300 px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">

                <p>© 2026 Dev Stack. All rights reserved.</p>

                <div className="flex gap-6">
                    <p className="cursor-pointer hover:text-black transition">
                        Privacy
                    </p>
                    <p className="cursor-pointer hover:text-black transition">
                        Terms
                    </p>
                </div>

            </div>

        </div>
    );
}

export default Footer;

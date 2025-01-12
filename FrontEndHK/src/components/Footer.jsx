import SwordLogo from "../assets/sword_hack_knight_transparentBG.png";

export function Footer() {
    return(
        <div className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    {/* Logo Section */}
                    <div className="space-y-4 max-w-md">
                        <div className="flex items-center gap-4">
                            <img
                                src={SwordLogo}
                                alt="SwordLogo"
                                className="w-12 h-12 md:w-14 md:h-14 object-contain"
                            />
                            <h1 className="text-white font-extrabold text-3xl md:text-4xl tracking-wide">
                                Hack Knight
                            </h1>
                        </div>
                        <p className="text-gray-300">
                            Hack Knight is a 48-hour hackathon where students from all over the world come together to create innovative projects. 
                        </p>
                        <p className="text-sm">© Copyright</p>
                    </div>

                    {/* Menu Section */}
                    <div className="space-y-4 mt-8 md:mt-0">
                        <h3 className="text-xl font-semibold">Menu</h3>
                        <ul className="space-y-2">
                            <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
                            <li><a href="/our team" className="text-gray-300 hover:text-white">Our Team</a></li>
                            <li><a href="/sponsors" className="text-gray-300 hover:text-white">Sponsors</a></li>
                            <li><a href="/FAQ" className="text-gray-300 hover:text-white">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Follow Us Section */}
                    <div className="space-y-4 mt-8 md:mt-0">
                        <h3 className="text-xl font-semibold">Follow Us</h3>
                        <ul className="space-y-2">
                            <li><a href="https://www.instagram.com/codeforall_qc/" className="text-gray-300 hover:text-white">Instagram</a></li>
                            <li><a href="https://discord.gg/ekh3SMDXu2" className="text-gray-300 hover:text-white">Code for All Server</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
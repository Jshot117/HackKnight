import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import TeamMember from "../components/TeamMember.jsx";
import jonn from "../assets/jonn.jpg";
import sword from "../assets/sword_hack_knight_transparentBG.png";

export function OurTeamPage() {
  return (
    <div>
      <Header />
      <div className="relative bg-gradient-to-t from-red-900 to-red-500 text-white text-center mt-32 py-14 md:mt-16 md:py-20  overflow-hidden">
        <img
          src={sword}
          alt="Sword"
          className="absolute inset-0 w-100 h-100 object-cover opacity-20 mx-auto -translate-y-10"
        />
        <h1 className="relative text-4xl font-bold text-white stroke-black stroke-2">
          Meet the Team
        </h1>
      </div>
      <div className="flex flex-col items-center space-y-4 py-8 ">
        <TeamMember
          name="Jonnathan Saavedra"
          role="CEO"
          image={jonn}
          description="Leading the team with a vision for innovation and excellence."
        />
        <TeamMember
          name="Jane Doe"
          role="CTO"
          image={jonn}
          description="Overseeing the technology strategy and ensuring the robustness of our systems."
        />
        <TeamMember
          name="John Smith"
          role="COO"
          image={jonn}
          description="Managing daily operations and optimizing organizational processes."
        />
      </div>
      <Footer />
    </div>
  );
}

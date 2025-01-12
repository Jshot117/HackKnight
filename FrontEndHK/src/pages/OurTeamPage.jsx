import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import TeamMember from "../components/TeamMember.jsx";
import sword from "../assets/sword_hack_knight_transparentBG.png";
import teamData from "../assets/team.json";

export function OurTeamPage() {
  return (
    <div>
      <Header />
      <div className="min-h-screen">
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
        <div className="flex flex-col items-center space-y-4 py-8 mx-3 md:mx-0">
          {teamData.team.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.position}
              image={member.image_url}
              description={member.description}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

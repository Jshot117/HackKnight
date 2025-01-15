import { Header } from "../components/Header.jsx";
import { Banner } from "../components/Banner.jsx";
import { Footer } from "../components/Footer.jsx";
import { Register } from "../components/Register.jsx";
import { CountDownTimer } from "../components/CountDownTimer.jsx";
import { EventGallery } from "../components/EventGallery.jsx";
import SwordLogo from "../assets/sword_hack_knight_transparentBG.png";
import logo from "../assets/logo.png";
import CodeForAll from "../assets/codeforall.png";
import image1 from "../assets/Hackathon Gallery/DaniandSophia.jpg";
import image2 from "../assets/Hackathon Gallery/JustinHandingSomething.jpg";
import image3 from "../assets/Hackathon Gallery/WideShotManyPeople.jpg";
import image4 from "../assets/Hackathon Gallery/LoydPoInterview.jpg";
import image5 from "../assets/Hackathon Gallery/TeamWithExtraMonitor.jpg";
import image6 from "../assets/Hackathon Gallery/TeamFocusedWorking.jpg";

export function HomePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-yellow-200 flex flex-col items-center justify-center">
        <div className="flex flex-col">
          <div className="items-center mt-32 pt-14 md:mt-16 md:pt-20 ">
            <div className="flex flex-col md:flex-col mt-10 mb-10 justify-between items-center space-y-2 md:space-y-10">
              <Banner />
              {/* <img
                                src={SwordLogo}
                                alt="SwordLogo"
                                className="w-1/3 h-auto max-w-full md:w-1/6 p-2"
                            /> */}
              <CountDownTimer />
              <Register />
            </div>
          </div>
          <div className="flex-row mb-10 md:mb-32 md:flex-row items-center md:space-y-10 ">
            <div className="flex w-[80%] md:w-[50%] mx-auto flex-col md:flex-row mb-10 md:mb-32 items-center md:space-y-0 space-y-6">
              <div className="flex justify-center gap-4 md:gap-10 md:w-1/2">
                <img
                  className="object-fill max-w-32 md:max-w-none md:w-2/6 rounded-3xl"
                  src={logo}
                  alt="Logo"
                />
                <img
                  className="object-fill max-w-32 md:max-w-none md:w-2/6 rounded-3xl"
                  src={CodeForAll}
                  alt="CodeForAll"
                />
              </div>

              <div className="flex flex-col justify-center text-center md:text-left md:w-1/2">
                <h1 className="mb-2 text-3xl md:text-5xl">
                  Welcome To our Spring Hack Knight
                </h1>
                <p className="text-sm md:text-xl text-clip overflow-hidden">
                  Hack Knight is a 36-hour hackathon where students come together to create innovative projects.
                  We are a student run organization that is dedicated to providing a great event for students to learn and grow. Join us for a weekend of coding, learning, and fun!
                </p>
              </div>
            </div>
            <div className="flex w-[80%] md:w-[50%] mx-auto flex-col md:flex-row mb-10 md:mb-32 items-center md:space-y-0 space-y-6">
              <EventGallery
                images={[
                  {
                    src: image1,
                    caption: "Students working on their project",
                  },
                  {
                    src: image2,
                    caption: "Justin Espinal handing over an award",
                  },
                  {
                    src: image3,
                    caption: "Wide shot of event at lunch time",
                  },
                  {
                    src: image4,
                    caption: "Interview with participant",
                  },
                  {
                    src: image5,
                    caption: "Team enthusiastically working on their project",
                  },
                  {
                    src: image6,
                    caption: "Team focused on their project",
                  }
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

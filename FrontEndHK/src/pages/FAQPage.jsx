import { Header } from "../components/Header.jsx";
import {FAQQuestion} from "../components/FAQQuestion.jsx"
import { Footer } from "../components/Footer.jsx";

export function FAQPage() {
  const faqQuestions = [
    {faqQuestion: "What is a hackathon?", answer: "A hackathon is a collaborative event where individuals or teams come together to solve problems, create innovative projects, or develop software and hardware solutions within a limited time frame. Participants typically include developers, designers, and other tech enthusiasts who brainstorm ideas, build prototypes, and present their work to judges or peers"},
    {faqQuestion: "What is Hack Knight?", answer: "Hack Knight is a dynamic gathering of creative minds and tech enthusiasts where participants collaborate intensively on projects for 48 hours, competing for certificates and recognition. Our event serves as a catalyst for innovation, fostering connections and driving forward-thinking solutions"},
    {faqQuestion: "Who can participate in Hack Knight?", answer: "Hack Knight is open to any college student!"},
    {faqQuestion: "Do I need any programming experience to participate?", answer: "No! No programming experience is needed to participate in Hack Knight! Hack Knight is open to individuals of all skill levels. If you're new to coding, it's a great opportunity to learn, collaborate with others, and gain hands-on experience. There will be also be workshops offered throughout the duration of Hack Knight"},
    {faqQuestion: "Will there be prizes?", answer: "Yes! There will be prizes and certificates for the top teams in each track"},
    {faqQuestion: "Can I work solo or in a team?", answer: "Hack Knight consists of teams of 2-4 people"},
    {faqQuestion: "What should I bring?", answer: "All you need to bring is your ID, laptop, and a charger!"},
    {faqQuestion: "How can I support or sponsor Hack Knight?", answer: "You can contact us at codeforallqc@gmail.com!"}
  ]

  return (
    <div>
      <Header />
      <div className="flex flex-col  mt-32 py-14 md:mt-16 md:py-20">
        <div className="text-center p-6">
          <h1 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-black-600 mb-6">
            This page is designed to provide answers to frequently asked
            questions about Hack Knight. Whether you’re a participant or
            sponsor, find all the information you need here!
          </p>
        </div>

        <div className="max-w-4xl w-full mx-auto break-all">
          {faqQuestions.map((faq, index) => (
            <FAQQuestion key={index} question={faq.faqQuestion} answer={faq.answer}/>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

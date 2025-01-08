import { Header } from "../components/Header.jsx";
import {FAQQuestion} from "../components/FAQQuestion.jsx"
import { Footer } from "../components/Footer.jsx";

export function FAQPage() {
  const faqQuestions = [
    {faqQuestion: "What is a hackathon?", answer: "Test"},
    {faqQuestion: "What is Hack Knight?", answer: "Describe what it is"},
    {faqQuestion: "Who can participate in Hack Knight?", answer: "Test"},
    {faqQuestion: "Do I need any programming experience to participate?", answer: "Test"},
    {faqQuestion: "How do I register for Hack Knight?", answer: "Test"},
    {faqQuestion: "Will there be prizes?", answer: "Test"},
    {faqQuestion: "Can I work solo or in a team?", answer: "Test"},
    {faqQuestion: "What should I bring?", answer: "Test"},
    {faqQuestion: "How can I support or sponsor Hack Knight?", answer: "Test"}
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

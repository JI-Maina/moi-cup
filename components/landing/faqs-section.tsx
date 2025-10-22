import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Moi Cup?",
    answer:
      "Moi Cup unites young African footballers, promoting talent, fair play, discipline, and community spirit.",
  },
  {
    question: "Who can play?",
    answer:
      "It is open to boys (U7, U9, U11, U13, U15, U17) and girls (U13, U15) teams from academies, schools, and clubs locally and internationally.",
  },
  {
    question: "When & Where?",
    answer:
      "The 2nd edition of Moi Cup will take place on 11th - 13th November 2025 at Ulinzi Sports Complex.",
  },
  {
    question: "Fee per team?",
    answer:
      "The discounted registration fee is KSH 10,000 per category, covering participation, fixtures, and official clearance.",
  },
  {
    question: "How to register?",
    answer:
      "Teams register by paying via paybill or bank account. Registration is only confirmed once payment and documents are fully verified.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-[#0B1E4A]/95 pitch-lines">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#CCCCCC] max-w-2xl mx-auto">
            Everything you need to know about Moi Cup 2025
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div className="relative rounded-lg overflow-hidden h-full">
            <Image
              src={"/faq-image.jpeg"}
              fill
              alt="Young footballers celebrating"
              className="w-full h-full object-cover min-h-[400px] lg:min-h-[500px]"
            />
          </div>

          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg text-white font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#CCCCCC] text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

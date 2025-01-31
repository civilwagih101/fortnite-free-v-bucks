import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are the system requirements?",
    answer: "Fortnite runs on most modern PCs and consoles. For PC, you need Windows 7/8/10 64-bit, Core i3 3.3 GHz, 4GB RAM, and Intel HD 4000 video card.",
  },
  {
    question: "Is Fortnite really free to play?",
    answer: "Yes! Fortnite Battle Royale is completely free to download and play. Optional in-game purchases are available for cosmetic items.",
  },
  {
    question: "Can I play with friends on different platforms?",
    answer: "Absolutely! Fortnite supports cross-platform play across PC, consoles, and mobile devices.",
  },
  {
    question: "How do I get started?",
    answer: "Simply click the Download button, install the game, create your account, and jump into your first match!",
  },
];

export const FAQ = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
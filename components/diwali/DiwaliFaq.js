import { ChevronDown, ChevronUp } from "lucide-react";

// Server Component — no "use client" needed
export default async function DiwaliFaq() {
  const faqs = [
    {
      question: "What is WishBuddy Diwali service?",
      answer:
        "WishBuddy allows you to create personalized Diwali wishes with customized messages, greetings, and images that you can share with friends and family instantly.",
    },
    {
      question: "Can I send wishes for other occasions?",
      answer:
        "Yes! WishBuddy supports creating wishes for birthdays, anniversaries, festivals, and other special occasions, not just Diwali.",
    },
    {
      question: "Are my wishes stored on the platform?",
      answer:
        "No personal data is stored permanently. Your wishes are temporarily stored to generate a shareable link, ensuring privacy and security.",
    },
    {
      question: "How can I share my Diwali wish?",
      answer:
        "Once your wish is generated, you can copy the unique link and share it via WhatsApp, Email, Messenger, or any social media platform.",
    },
    {
      question: "Is it free to use WishBuddy?",
      answer:
        "Absolutely! Creating and sharing Diwali wishes on WishBuddy is completely free.",
    },
  ];

  return (
    <div className="py-16 bg-yellow-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-orange-700 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 transition hover:shadow-lg"
            >
              <summary className="flex justify-between items-center cursor-pointer list-none text-gray-800 font-semibold">
                {faq.question}
                <ChevronDown className="text-orange-500" />
              </summary>
              <p className="mt-4 text-gray-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}

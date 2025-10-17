import React from 'react';
import Link from 'next/link';

const faqData = [
  {
    question: 'What is WishBuddy?',
    answer: (
      <>
        <strong>WishBuddy</strong> is a platform that allows users to create personalized, heartfelt Diwali wishes for friends and family. By selecting a name and a wisher, users can craft unique messages that capture the spirit of the festival.
      </>
    ),
  },
  {
    question: 'How do I create a Diwali wish?',
    answer: (
      <>
        To create a Diwali wish:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>
            Visit the{' '}
            <Link href="/" className="text-orange-500 underline">
              WishBuddy homepage
            </Link>
            .
          </li>
          <li>Select the recipient&apos;s name and your name as the wisher.</li>
          <li>Customize your message if desired.</li>
          <li>Click &quot;Generate Wish&quot; to create your personalized greeting.</li>
        </ol>
      </>
    ),
  },
  {
    question: 'Can I share my Diwali wish on social media?',
    answer: <>Yes! After generating your wish, you&apos;ll have the option to share it directly on platforms like Facebook, WhatsApp, and Instagram.</>,
  },
  {
    question: 'Is there a limit to the number of wishes I can create?',
    answer: <>No, you can create as many Diwali wishes as you like. Each wish is unique and crafted to spread festive joy.</>,
  },
  {
    question: 'How do I delete a wish?',
    answer: <>Once a wish is created, it cannot be deleted. However, you can always create a new wish with updated details.</>,
  },
  {
    question: 'Is my personal information safe?',
    answer: <>Yes, your privacy is important. WishBuddy does not store any personal information provided during the wish creation process.</>,
  },
];

export default function Faq() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-extrabold text-black mb-4 tracking-wide text-center">FAQ</h1>
      <p className="text-slate-800 text-lg text-center max-w-2xl mb-12">Frequently Asked Questions</p>
      <div className="space-y-6">
        {faqData.map((item, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold text-gray-800">{item.question}</h3>
            <p className="mt-2 text-gray-600">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

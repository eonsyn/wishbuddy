import React from 'react';

function Faq() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
       
<h1 className="text-5xl font-extrabold text-black mb-4 tracking-wide text-center">
        Faq
      </h1>
      <p className="text-slate-800 text-lg text-center max-w-2xl mb-12">
        Frequently Asked Question
      </p>
      <div className="space-y-6">
        {/* FAQ Item 1 */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            What is WishBuddy?
          </h3>
          <p className="mt-2 text-gray-600">
            <strong>WishBuddy</strong> is a platform that allows users to create personalized, heartfelt Diwali wishes for friends and family. By selecting a name and a wisher, users can craft unique messages that capture the spirit of the festival.
          </p>
        </div>

        {/* FAQ Item 2 */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            How do I create a Diwali wish?
          </h3>
          <p className="mt-2 text-gray-600">
            To create a Diwali wish:
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>Visit the <a href="/" className="text-orange-500 underline">WishBuddy homepage</a>.</li>
              <li>Select the recipient's name and your name as the wisher.</li>
              <li>Customize your message if desired.</li>
              <li>Click "Generate Wish" to create your personalized greeting.</li>
            </ol>
          </p>
        </div>

        {/* FAQ Item 3 */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            Can I share my Diwali wish on social media?
          </h3>
          <p className="mt-2 text-gray-600">
            Yes! After generating your wish, you'll have the option to share it directly on platforms like Facebook, WhatsApp, Instagram.
          </p>
        </div>

        {/* FAQ Item 4 */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            Is there a limit to the number of wishes I can create?
          </h3>
          <p className="mt-2 text-gray-600">
            No, you can create as many Diwali wishes as you like. Each wish is unique and crafted to spread festive joy.
          </p>
        </div>

        {/* FAQ Item 5 */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            How do I delete a wish?
          </h3>
          <p className="mt-2 text-gray-600">
            Once a wish is created, it cannot be deleted. However, you can always create a new wish with updated details.
          </p>
        </div>

        {/* FAQ Item 6 */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            Is my personal information safe?
          </h3>
          <p className="mt-2 text-gray-600">
            Yes, your privacy is important. WishBuddy does not store any personal information provided during the wish creation process.  
          </p>
        </div>
      </div>
    </div>
  );
}

export default Faq;

// app/privacy/page.js
import React from "react";

export const metadata = {
  title: "Privacy Policy | WishBuddy",
  description:
    "Read the Privacy Policy for WishBuddy, including information on data collection, cookies, and ad services.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] py-10 px-4 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-6 text-sm text-[var(--text-secondary)]">
          Effective Date: October 19, 2025
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p>
            Welcome to WishBuddy (“we”, “our”, or “us”). This Privacy Policy explains how
            we collect, use, and protect your information when you visit our website
            [https://wishbuddy.netlify.app](https://wishbuddy.netlify.app) (the “Site”).
            By using our Site, you consent to the practices described in this policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
            <li>Personal information you provide voluntarily (e.g., email for newsletters).</li>
            <li>Non-personal information automatically collected, such as IP address, browser type, and device information.</li>
            <li>Cookies and similar technologies to enhance user experience.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
            <li>Improve and maintain the Site’s performance and functionality.</li>
            <li>Send newsletters, updates, and promotional information (if you opt in).</li>
            <li>Serve personalized ads through third-party advertising networks like Google AdSense.</li>
            <li>Analyze trends and usage to improve content and user experience.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">4. Third-Party Services</h2>
          <p>
            We may use third-party services, including Google AdSense and analytics tools,
            to serve ads, track site usage, and provide insights. These services may use
            cookies or collect information according to their own privacy policies.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">5. Cookies</h2>
          <p>
            Cookies are small files stored on your device to enhance your browsing experience.
            You can choose to disable cookies in your browser settings, but some features
            of the Site may not function properly without them.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">6. Data Security</h2>
          <p>
            We implement reasonable measures to protect your information from unauthorized
            access, disclosure, alteration, or destruction. However, no method of transmission
            over the internet or electronic storage is completely secure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">7. Children’s Privacy</h2>
          <p>
            Our Site is not intended for children under 13 years of age. We do not knowingly
            collect personal information from children.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">8. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete personal information you provide
            to us. To exercise these rights, contact us using the information below.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Updated policies will
            be posted on this page with a revised effective date. Continued use of the
            Site constitutes acceptance of the new policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, you can contact us at:{" "}
            <a
              href="mailto:degital.builder@gmail.com"
              className="text-blue-500 underline"
            >
              degital.builder@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}

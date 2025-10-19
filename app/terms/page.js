// app/terms/page.js
import React from "react";

export const metadata = {
  title: "Terms of Service | WishBuddy",
  description: "Read the Terms of Service for WishBuddy, including site usage, privacy, and ad policies.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] py-10 px-4 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-6 text-sm text-[var(--text-secondary)]">
          Effective Date: October 19, 2025
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>
            By using WishBuddy (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), you agree to comply with and be
            bound by these Terms of Service (&quot;Terms&quot;). If you do not agree, please do not use the Site.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. Use of the Site</h2>
          <p>You may use the Site for personal, non-commercial purposes only. You agree not to:</p>
          <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
            <li>Copy, reproduce, or redistribute content without permission.</li>
            <li>Engage in spam, hacking, or unlawful activity.</li>
            <li>Interfere with Site operations or security.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">3. Content</h2>
          <p>
            All content on WishBuddy, including articles, images, and videos (&quot;Content&quot;),
            is owned by WishBuddy or its contributors. You may view, read, and share content for personal use only.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">4. Advertisements</h2>
          <p>
            WishBuddy earns revenue through advertisements displayed on the Site. Clicking
            on ads is voluntary. We do not endorse third-party products or services
            displayed in ads and are not responsible for any transactions with advertisers.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">5. Third-Party Links</h2>
          <p>
            The Site may contain links to third-party websites. We are not responsible for
            the content, privacy practices, or terms of these external sites. You access
            these sites at your own risk.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">6. User Accounts</h2>
          <p>
            If you create an account on WishBuddy, you are responsible for maintaining
            account security, providing accurate information, and not impersonating
            others.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">7. Privacy</h2>
          <p>
            Our use of your data is governed by our{" "}
            <a
              href="/privacy"
              className="text-blue-500 underline"
            >
              Privacy Policy
            </a>
            . Please read it carefully to understand how we collect, use, and protect your information.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">8. Intellectual Property</h2>
          <p>
            All intellectual property on the Site, including logos, trademarks, graphics,
            and code, is owned by WishBuddy or its licensors. You may not use, reproduce,
            or distribute any intellectual property without permission.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">9. Limitation of Liability</h2>
          <p>
            The Site is provided &quot;as is&quot; and &quot;as available.&quot; WishBuddy is not liable for
            any direct or indirect damages resulting from the use of the Site.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">10. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Updated Terms will be posted
            on this page with a revised effective date. Continued use of the Site
            constitutes acceptance of the new Terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">11. Contact Us</h2>
          <p>
            If you have questions about these Terms, you can contact us at{" "}
            <a
              href="mailto:degital.builder@gmail.com"
              className="text-blue-500 underline"
            >
              degital.builder@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}

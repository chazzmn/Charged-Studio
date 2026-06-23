import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Charged Studio",
  description:
    "How Charged Studio collects, uses, and protects your personal data, and your rights under UK GDPR.",
  alternates: { canonical: "https://chargedstudio.co.uk/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="23 June 2026">
      <p>
        This policy explains how Charged Studio (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;) collects and uses your personal data when you use our
        website or get in touch with us. We are based in Exeter, Devon, United
        Kingdom. For any privacy questions, contact us at{" "}
        <a href="mailto:hello@chargedstudio.co.uk">hello@chargedstudio.co.uk</a>.
      </p>

      <h2>What we collect</h2>
      <p>
        When you submit our contact or audit form, we collect the information you
        provide — typically your name, email address, business name, website, and
        the details of your enquiry. When you browse the site, we may also collect
        standard technical and usage data (such as device, browser, and pages
        visited) through analytics.
      </p>

      <h2>How we use it</h2>
      <ul>
        <li>To respond to your enquiry and provide the services you ask about.</li>
        <li>To manage our relationship with you and any project we agree.</li>
        <li>To understand how the site is used and improve it.</li>
      </ul>

      <h2>Our lawful basis</h2>
      <p>
        We process enquiry data on the basis of taking steps at your request
        before entering into a contract, and our legitimate interest in
        responding to and growing our business. Where we use non-essential
        cookies, we rely on your consent.
      </p>

      <h2>Who we share it with</h2>
      <p>
        We do not sell your data. We use a small number of trusted service
        providers to run our website and respond to you, who process data on our
        behalf:
      </p>
      <ul>
        <li>Resend — to deliver enquiry emails to our inbox.</li>
        <li>Vercel — website hosting and delivery.</li>
        <li>Calendly — if you book a call with us.</li>
        <li>Google Analytics — to understand site usage (if enabled).</li>
      </ul>

      <h2>Cookies</h2>
      <p>
        Our site may use cookies for essential functionality and, where you
        consent, for analytics. You can control cookies through your browser
        settings.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep enquiry data for as long as needed to respond and for our
        legitimate business records, after which it is deleted. You can ask us to
        delete your data sooner at any time.
      </p>

      <h2>Your rights</h2>
      <p>
        Under UK GDPR you have the right to access, correct, or erase your
        personal data, to object to or restrict its processing, and to data
        portability. To exercise any of these, email{" "}
        <a href="mailto:hello@chargedstudio.co.uk">hello@chargedstudio.co.uk</a>.
        You also have the right to complain to the Information Commissioner&apos;s
        Office (ICO) at{" "}
        <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">
          ico.org.uk
        </a>
        .
      </p>

      <h2>Changes</h2>
      <p>
        We may update this policy from time to time. Any changes will be posted on
        this page with a revised date above.
      </p>
    </LegalLayout>
  );
}

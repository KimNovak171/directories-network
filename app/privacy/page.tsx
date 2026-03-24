import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Directories Network",
  description: "Privacy Policy for directoriesnetwork.com and Directories Network services.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <main className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#1e3a5f] sm:text-4xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-slate-600">Effective date: March 24, 2026</p>

        <div className="mt-8 space-y-8 text-slate-700">
          <section>
            <h2 className="text-xl font-semibold text-[#1e3a5f]">Overview</h2>
            <p className="mt-2 leading-relaxed">
              This Privacy Policy explains how Directories Network collects, uses, and protects
              information when you visit or use directoriesnetwork.com and related pages on our
              network.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1e3a5f]">Information We Collect</h2>
            <p className="mt-2 leading-relaxed">
              We may collect information you provide directly through our contact form, including
              your name, email address, directory of interest, and message content. We may also
              collect technical data such as browser type, device information, and general usage
              patterns through analytics tools.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1e3a5f]">Contact Form Submissions</h2>
            <p className="mt-2 leading-relaxed">
              Contact requests submitted on directoriesnetwork.com are processed through Formspree
              to help route and deliver messages. We use this information only to respond to your
              inquiry, provide support, and improve our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1e3a5f]">Advertising (Google AdSense)</h2>
            <p className="mt-2 leading-relaxed">
              directoriesnetwork.com may display ads through Google AdSense or similar advertising
              partners. These partners may use cookies or similar technologies to personalize ads,
              measure performance, and prevent fraud. You can review Google advertising controls
              and privacy options through your Google account settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1e3a5f]">Analytics</h2>
            <p className="mt-2 leading-relaxed">
              We may use analytics services, including Google Analytics if applicable, to
              understand traffic and usage trends across directoriesnetwork.com. Analytics data is
              used in aggregate to improve site performance and content relevance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1e3a5f]">Third-Party Links</h2>
            <p className="mt-2 leading-relaxed">
              Our site contains links to third-party websites, including directory domains and
              external resources. We are not responsible for the privacy practices, content, or
              policies of those third-party sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1e3a5f]">Data Retention and Security</h2>
            <p className="mt-2 leading-relaxed">
              We retain personal information only as long as needed to fulfill the purposes
              described in this policy or as required by law. We use reasonable administrative and
              technical safeguards to protect submitted data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1e3a5f]">Your Choices</h2>
            <p className="mt-2 leading-relaxed">
              You may choose not to submit personal information through our forms. You can also
              manage cookie preferences and certain ad settings through your browser and advertising
              provider controls.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1e3a5f]">Contact Us</h2>
            <p className="mt-2 leading-relaxed">
              If you have any questions about this Privacy Policy, contact us at{" "}
              <a
                href="mailto:hello@directoriesnetwork.com"
                className="font-medium text-[#0d9488] hover:text-[#1e3a5f]"
              >
                hello@directoriesnetwork.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

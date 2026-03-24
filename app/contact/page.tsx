import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Directories Network",
  description:
    "Contact Directories Network about listings, featured placements, and directory questions across directoriesnetwork.com.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <main className="mx-auto w-full max-w-4xl px-4 pb-12 pt-10 sm:px-6 lg:px-8">
        <section className="rounded-2xl border border-[#0d9488]/20 bg-gradient-to-r from-[#1e3a5f] to-[#0d9488] px-6 py-10 text-white shadow-lg sm:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/90 sm:text-base">
            Have a question about a listing, featured placement, or our network? Fill out the form
            below and we will be in touch within 1 business day.
          </p>
        </section>
        <ContactForm />
      </main>
    </div>
  );
}

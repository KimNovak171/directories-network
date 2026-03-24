"use client";

import { FormEvent, useMemo, useState } from "react";

type Directory = {
  name: string;
  domain: string;
  isLive?: boolean;
};

type Tier = {
  heading: string;
  directories: Directory[];
};

const tiers: Tier[] = [
  {
    heading: "LIVE NOW",
    directories: [
      { name: "Daycare Directories", domain: "daycaredirectories.com", isLive: true },
      { name: "Senior Living Directories", domain: "seniorlivingdirectories.com", isLive: true },
      { name: "Mental Health Directories", domain: "mentalhealthdirectories.com", isLive: true },
      { name: "Auto Repair Directories", domain: "autorepairdirectories.com", isLive: true },
      { name: "Speech Therapy Directories", domain: "speechtherapydirectories.com", isLive: true },
      {
        name: "Occupational Therapy Directories",
        domain: "occupationaltherapydirectories.com",
        isLive: true,
      },
      { name: "Pediatrician Directories", domain: "pediatriciandirectories.com", isLive: true },
      { name: "Family Doctor Directories", domain: "familydoctordirectories.com", isLive: true },
    ],
  },
  {
    heading: "TIER 1 — Medical & Dental",
    directories: [
      { name: "Dentistry Directories", domain: "dentistrydirectories.com" },
      { name: "Urgent Care Directories", domain: "urgentcaredirectories.com" },
      { name: "Chiropractor Directories", domain: "chiropractordirectories.com" },
      { name: "OB/GYN Directories", domain: "obgyndirectories.com" },
      { name: "Plastic Surgeon Directories", domain: "plasticsurgeondirectories.com" },
      { name: "Fertility Clinic Directories", domain: "fertilityclinicdirectories.com" },
      { name: "Neurologist Directories", domain: "neurologistdirectories.com" },
      { name: "Urologist Directories", domain: "urologistdirectories.com" },
      { name: "Orthopedic Surgeon Directories", domain: "orthopedicsurgeondirectories.com" },
      { name: "Oncologist Directories", domain: "oncologistdirectories.com" },
      { name: "Neurosurgeon Directories", domain: "neurosurgeondirectories.com" },
      { name: "Pain Management Directories", domain: "painmanagementdirectories.com" },
    ],
  },
  {
    heading: "TIER 2 — Specialists",
    directories: [
      { name: "Cardiologist Directories", domain: "cardiologistdirectories.com" },
      { name: "Dermatologist Directories", domain: "dermatologistdirectories.com" },
      { name: "Gastroenterologist Directories", domain: "gastroenterologistdirectories.com" },
      { name: "Ophthalmologist Directories", domain: "ophthalmologistdirectories.com" },
      { name: "Allergist Directories", domain: "allergistdirectories.com" },
      { name: "Audiologist Directories", domain: "audiologistdirectories.com" },
      { name: "Orthodontist Directories", domain: "orthodontistdirectories.com" },
      { name: "Psychologist Directories", domain: "psychologistdirectories.com" },
      { name: "Addiction Treatment Directories", domain: "addictiontreatmentdirectories.com" },
      { name: "Sleep Clinic Directories", domain: "sleepclinicdirectories.com" },
      { name: "Rheumatologist Directories", domain: "rheumatologistdirectories.com" },
      { name: "Endocrinologist Directories", domain: "endocrinologistdirectories.com" },
      { name: "Sports Medicine Directories", domain: "sportsmedicinedirectories.com" },
      { name: "Vascular Surgeon Directories", domain: "vascularsurgeondirectories.com" },
      { name: "Radiologist Directories", domain: "radiologistdirectories.com" },
      { name: "Otolaryngologist Directories", domain: "otolaryngologistdirectories.com" },
    ],
  },
  {
    heading: "TIER 3 — Health & Wellness",
    directories: [
      { name: "Veterinarian Directories", domain: "veterinariandirectories.com" },
      { name: "Physical Therapy Directories", domain: "physicaltherapydirectories.com" },
      { name: "Home Care Directories", domain: "homecaredirectories.com" },
      { name: "Acupuncturist Directories", domain: "acupuncturistdirectories.com" },
      { name: "Massage Therapist Directories", domain: "massagetherapistdirectories.com" },
      { name: "Podiatrist Directories", domain: "podiatristdirectories.com" },
      { name: "Optometrist Directories", domain: "optometristdirectories.com" },
      { name: "Nutritionist Directories", domain: "nutritionistdirectories.com" },
      { name: "Weight Loss Directories", domain: "weightlossdirectories.com" },
      { name: "Prosthetist Directories", domain: "prosthetistdirectories.com" },
    ],
  },
  {
    heading: "TIER 4 — Home & Community",
    directories: [
      { name: "Tutoring Directories", domain: "tutoringdirectories.com" },
      { name: "Landscaping Directories", domain: "landscapingdirectories.com" },
      { name: "Plumber Directories", domain: "plumberdirectories.com" },
      { name: "Electrician Directories", domain: "electriciandirectories.com" },
    ],
  },
];

const stats = ["50 Directories", "8 Currently Live", "US & Canada Coverage", "Growing Daily"];

type FormData = {
  name: string;
  email: string;
  directory: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    directory: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const directoryOptions = useMemo(
    () => ["General Inquiry", ...tiers.flatMap((tier) => tier.directories.map((directory) => directory.name))],
    [],
  );

  const validateForm = (): FormErrors => {
    const nextErrors: FormErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) nextErrors.name = "Name is required.";
    if (!formData.email.trim()) nextErrors.email = "Email is required.";
    else if (!emailPattern.test(formData.email.trim())) nextErrors.email = "Enter a valid email.";
    if (!formData.directory) nextErrors.directory = "Please select a directory.";
    if (!formData.message.trim()) nextErrors.message = "Message is required.";

    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");
    setSubmitSuccess(false);

    const nextErrors = validateForm();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xbdznngq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      setSubmitSuccess(true);
      setFormData({ name: "", email: "", directory: "", message: "" });
      setErrors({});
    } catch {
      setSubmitError("We could not submit your request right now. Please email hello@directoriesnetwork.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <main className="mx-auto w-full max-w-7xl px-4 pb-12 pt-10 sm:px-6 lg:px-8">
        <section className="rounded-2xl border border-[#0d9488]/20 bg-gradient-to-r from-[#1e3a5f] to-[#0d9488] px-6 py-12 text-white shadow-lg sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
            Directories Network
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            50 Specialized Directories Across North America
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
            Connecting patients, families, and communities with trusted local professionals
          </p>
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat}
              className="rounded-xl border border-[#1e3a5f]/15 bg-[#f8fbfd] px-4 py-5 text-center shadow-sm"
            >
              <p className="text-base font-semibold text-[#1e3a5f]">{stat}</p>
            </div>
          ))}
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[#1e3a5f] sm:text-3xl">Directory Network</h2>
          <div className="mt-6 space-y-10">
            {tiers.map((tier) => (
              <div key={tier.heading}>
                <h3 className="text-lg font-bold tracking-wide text-[#0d9488]">{tier.heading}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {tier.directories.map((directory) => (
                    <article
                      key={directory.domain}
                      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="text-base font-semibold text-[#1e3a5f]">{directory.name}</h4>
                        <span
                          className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${
                            directory.isLive
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {directory.isLive ? "Live" : "Coming Soon"}
                        </span>
                      </div>
                      <p className="mt-3 text-sm text-slate-600">
                        {directory.isLive ? (
                          <a
                            href={`https://${directory.domain}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-[#0d9488] hover:text-[#1e3a5f]"
                          >
                            {directory.domain}
                          </a>
                        ) : (
                          <span className="font-medium">{directory.domain}</span>
                        )}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-[#1e3a5f]/15 bg-[#f8fbfd] p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-[#1e3a5f] sm:text-3xl">About Directories Network</h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            Directories Network builds and maintains specialized online directories connecting
            people across the United States and Canada with trusted local professionals in
            healthcare, wellness, and home services. Our directories are free to use and updated
            regularly with verified listings sourced from Google Maps.
          </p>
        </section>

        <section className="mt-10 rounded-2xl border border-[#0d9488]/20 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-[#1e3a5f] sm:text-3xl">List Your Practice</h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            Interested in a featured or premium listing across our network? We offer affordable
            monthly placement options for practitioners who want maximum visibility in their city
            and state.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-[#1e3a5f]">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20"
                required
              />
              {errors.name ? <p className="mt-1 text-sm text-red-600">{errors.name}</p> : null}
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-[#1e3a5f]">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20"
                required
              />
              {errors.email ? <p className="mt-1 text-sm text-red-600">{errors.email}</p> : null}
            </div>

            <div>
              <label htmlFor="directory" className="mb-1 block text-sm font-medium text-[#1e3a5f]">
                Which directory are you contacting us about?
              </label>
              <select
                id="directory"
                name="directory"
                value={formData.directory}
                onChange={(event) => setFormData((prev) => ({ ...prev, directory: event.target.value }))}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20"
                required
              >
                <option value="" disabled>
                  Select an option
                </option>
                {directoryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.directory ? <p className="mt-1 text-sm text-red-600">{errors.directory}</p> : null}
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-[#1e3a5f]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20"
                required
              />
              {errors.message ? <p className="mt-1 text-sm text-red-600">{errors.message}</p> : null}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex rounded-lg bg-[#0d9488] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1e3a5f] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>

          {submitSuccess ? (
            <p className="mt-4 text-sm font-medium text-emerald-700">
              Thank you! We will be in touch within 1 business day.
            </p>
          ) : null}
          {submitError ? <p className="mt-4 text-sm font-medium text-red-600">{submitError}</p> : null}
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 text-sm text-slate-700 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Directories Network</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="/privacy" className="font-medium text-[#0d9488] hover:text-[#1e3a5f]">
              Privacy Policy
            </a>
            <a
              href="mailto:hello@directoriesnetwork.com"
              className="font-medium text-[#0d9488] hover:text-[#1e3a5f]"
            >
              hello@directoriesnetwork.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

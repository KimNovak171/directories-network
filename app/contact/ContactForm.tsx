"use client";

import { FormEvent, useMemo, useState } from "react";

const directoryNames = [
  "Daycare Directories",
  "Senior Living Directories",
  "Mental Health Directories",
  "Auto Repair Directories",
  "Speech Therapy Directories",
  "Occupational Therapy Directories",
  "Pediatrician Directories",
  "Family Doctor Directories",
  "Dentistry Directories",
  "Urgent Care Directories",
  "Chiropractor Directories",
  "OB/GYN Directories",
  "Plastic Surgeon Directories",
  "Fertility Clinic Directories",
  "Neurologist Directories",
  "Urologist Directories",
  "Orthopedic Surgeon Directories",
  "Oncologist Directories",
  "Neurosurgeon Directories",
  "Pain Management Directories",
  "Cardiologist Directories",
  "Dermatologist Directories",
  "Gastroenterologist Directories",
  "Ophthalmologist Directories",
  "Allergist Directories",
  "Audiologist Directories",
  "Orthodontist Directories",
  "Psychologist Directories",
  "Addiction Treatment Directories",
  "Sleep Clinic Directories",
  "Rheumatologist Directories",
  "Endocrinologist Directories",
  "Sports Medicine Directories",
  "Vascular Surgeon Directories",
  "Radiologist Directories",
  "Otolaryngologist Directories",
  "Veterinarian Directories",
  "Physical Therapy Directories",
  "Home Care Directories",
  "Acupuncturist Directories",
  "Massage Therapist Directories",
  "Podiatrist Directories",
  "Optometrist Directories",
  "Nutritionist Directories",
  "Weight Loss Directories",
  "Prosthetist Directories",
  "Tutoring Directories",
  "Landscaping Directories",
  "Plumber Directories",
  "Electrician Directories",
];

type FormData = {
  name: string;
  email: string;
  directory: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function ContactForm() {
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

  const directoryOptions = useMemo(() => ["General Inquiry", ...directoryNames], []);

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
      setSubmitError("We could not submit your request right now. Please try again shortly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mt-8 rounded-2xl border border-[#1e3a5f]/15 bg-[#f8fbfd] p-6 shadow-sm sm:p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-[#1e3a5f]">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20"
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
            placeholder="your@email.com"
            value={formData.email}
            onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20"
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
              Select a directory...
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
            rows={6}
            placeholder="Your message..."
            value={formData.message}
            onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20"
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
  );
}

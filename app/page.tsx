type Directory = {
  name: string;
  domain: string;
};

type Category = {
  heading: string;
  directories: Directory[];
};

const categories: Category[] = [
  {
    heading: "Beauty & Personal Care",
    directories: [
      { name: "Hair Salon Directories", domain: "hairsalondirectories.com" },
      { name: "Nail Salon Directories", domain: "nailsalondirectories.com" },
      { name: "Barber Shop Directories", domain: "barbershopdirectories.com" },
      { name: "Medical Spa Directories", domain: "medicalspadirectories.com" },
      { name: "Tattoo Shop Directories", domain: "tattooshopdirectories.com" },
    ],
  },
  {
    heading: "Health & Wellness",
    directories: [
      { name: "Daycare Directories", domain: "daycaredirectories.com" },
      { name: "Senior Living Directories", domain: "seniorlivingdirectories.com" },
      { name: "Mental Health Directories", domain: "mentalhealthdirectories.com" },
      { name: "Speech Therapy Directories", domain: "speechtherapydirectories.com" },
      {
        name: "Occupational Therapy Directories",
        domain: "occupationaltherapydirectories.com",
      },
      { name: "Pediatrician Directories", domain: "pediatriciandirectories.com" },
      { name: "Family Doctor Directories", domain: "familydoctordirectories.com" },
      { name: "Chiropractor Directories", domain: "chiropractordirectories.com" },
      { name: "OB/GYN Directories", domain: "obgyndirectories.com" },
      { name: "Plastic Surgeon Directories", domain: "plasticsurgeondirectories.com" },
      { name: "Fertility Clinic Directories", domain: "fertilityclinicdirectories.com" },
      { name: "Neurologist Directories", domain: "neurologistdirectories.com" },
      { name: "Urologist Directories", domain: "urologistdirectories.com" },
    ],
  },
  {
    heading: "Medical & Dental",
    directories: [
      { name: "Dentistry Directories", domain: "dentistrydirectories.com" },
      { name: "Urgent Care Directories", domain: "urgentcaredirectories.com" },
    ],
  },
  {
    heading: "Auto Services",
    directories: [{ name: "Auto Repair Directories", domain: "autorepairdirectories.com" }],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <main className="mx-auto w-full max-w-7xl px-4 pb-12 pt-10 sm:px-6 lg:px-8">
        <section className="rounded-2xl border border-[#0d9488]/20 bg-gradient-to-r from-[#1e3a5f] to-[#0d9488] px-6 py-12 text-white shadow-lg sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
            Directories Network
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Specialized Local Business Directories Across North America
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
            Free to use directories connecting people across the United States and Canada with
            trusted local businesses and service providers
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[#1e3a5f] sm:text-3xl">Directory Network</h2>
          <div className="mt-6 space-y-10">
            {categories.map((category) => (
              <div key={category.heading}>
                <h3 className="text-lg font-bold tracking-wide text-[#0d9488]">
                  {category.heading}
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {category.directories.map((directory) => (
                    <a
                      key={directory.domain}
                      href={`https://${directory.domain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#0d9488]/40 hover:shadow-md"
                    >
                      <h4 className="text-base font-semibold text-[#1e3a5f]">{directory.name}</h4>
                      <p className="mt-3 text-sm font-medium text-[#0d9488]">{directory.domain}</p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-[#1e3a5f]/15 bg-[#f8fbfd] p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-[#1e3a5f] sm:text-3xl">About Directories Network</h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            Directories Network builds and maintains specialized online directories connecting people
            across the United States and Canada with trusted local businesses and service providers.
            Our directories are free to use and updated regularly with verified listings sourced from
            Google Maps.
          </p>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 text-sm text-slate-700 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Directories Network</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="/privacy" className="font-medium text-[#0d9488] hover:text-[#1e3a5f]">
              Privacy Policy
            </a>
            <a href="/contact" className="font-medium text-[#0d9488] hover:text-[#1e3a5f]">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

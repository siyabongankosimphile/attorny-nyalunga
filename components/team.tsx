"use client";

import { Linkedin, Mail } from "lucide-react";

const attorneys = [
  {
    name: "Hazel Nyalunga",
    title: "Director & Legal Practitioner",
    specialty: "Unlawful arrest and detention, Criminal Law",
    image: "/image2.jpeg",
    linkedin: "https://www.linkedin.com/in/hazel-nelisiwe-1a2a00206",
    email: "info@hnnyalungainc.co.za",
  },
];

export function Team() {
  return (
    <section id="team" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Meet Our Team
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-3 leading-tight text-balance">
            Attorneys Across Our Core Practice Areas
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            HN Nyalunga Attorneys provides professional legal support across
            unlawful arrest and detention, medical negligence, Road Accident
            Fund claims, Tax law, debt collection, and contracts law.
          </p>
        </div>

        {/* Team Grid */}
        <div className="flex justify-center">
          {attorneys.map((attorney) => (
            <div key={attorney.name} className="group text-center max-w-sm">
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg mb-6 aspect-4/5">
                <img
                  src={attorney.image}
                  alt={attorney.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex gap-4">
                    {attorney.linkedin !== "#" && (
                      <a
                        href={attorney.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors pointer-events-auto z-10"
                        aria-label={`${attorney.name}'s LinkedIn`}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(attorney.linkedin, '_blank', 'noopener,noreferrer');
                          e.preventDefault();
                        }}
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    <a
                      href={`mailto:${attorney.email}`}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors pointer-events-auto z-10"
                      aria-label={`Email ${attorney.name}`}
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Info */}
              <h3 className="font-serif text-xl font-semibold text-foreground">
                {attorney.name}
              </h3>
              <p className="text-primary font-medium text-sm mt-1">
                {attorney.title}
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                {attorney.specialty}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

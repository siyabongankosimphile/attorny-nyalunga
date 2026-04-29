import { CheckCircle } from "lucide-react";

const highlights = [
  "Personalized attention to every client",
  "Transparent pricing with no hidden fees",
  "Aggressive representation in and out of court",
  "Proven track record of successful outcomes",
  "Multilingual staff available",
  "Flexible payment plans offered",
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-4/3 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/Gemini.png"
                alt="Professional law office interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-xl">
              <div className="text-4xl font-serif font-bold">30+</div>
              <div className="text-sm text-white/80">Years of Excellence</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              About Our Firm
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-3 leading-tight text-balance">
              Dedicated Legal Excellence Since 1994
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              At Nyalunga Attorney, we believe that every client deserves
              exceptional legal representation. Our firm was founded on the
              principles of integrity, dedication, and results-driven advocacy.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We understand that legal matters can be overwhelming and stressful.
              That&apos;s why our team takes the time to listen, understand your
              unique situation, and develop a tailored strategy to achieve the
              best possible outcome for your case.
            </p>

            {/* Highlights Grid */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

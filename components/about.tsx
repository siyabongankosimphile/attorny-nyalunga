import { CheckCircle, Star } from "lucide-react";

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
            <div className="absolute -bottom-6 -right-6 bg-[#1a355c] text-white p-5 rounded-lg shadow-xl w-44">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Star
                  className="h-4 w-4 text-amber-300 animate-slow-glow"
                  style={{ animationDelay: "0s" }}
                />
                <Star
                  className="h-4 w-4 text-amber-300 animate-slow-glow"
                  style={{ animationDelay: "0.3s" }}
                />
                <Star
                  className="h-4 w-4 text-amber-300 animate-slow-glow"
                  style={{ animationDelay: "0.6s" }}
                />
              </div>
              <div className="text-center text-sm font-semibold">Managing Director</div>
            </div>

          </div>

          {/* Content Side */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              About Our Firm
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-3 leading-tight text-balance">
              Dedicated Legal Excellence
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              At HN Nyalunga Attorneys, we believe that every client deserves
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

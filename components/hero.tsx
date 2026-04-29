import { ArrowRight, Shield, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-[#1a365d] via-[#1e4a7a] to-[#2c5282] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzMiAyIDIgNGMwIDItMiA0LTIgNHMtMi0yLTItNHoiLz48L2c+PC9nPjwvc3ZnPg==')]" />
      </div>

      {/* Animated stars */}
      <div className="hero-stars absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, index) => (
          <span key={index} className="hero-star" />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Award className="h-4 w-4 text-amber-400" />
            <span className="text-white/90 text-sm font-medium">
              Award-Winning Legal Team
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight text-balance">
            Justice You Deserve,
            <br />
            <span className="text-blue-200">Counsel You Can Trust</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed text-pretty">
            With over 30 years of combined experience, our dedicated attorneys
            fight relentlessly for your rights and deliver results that matter.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
            >
              <a href="#contact">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white text-lg px-8 py-6"
            >
              <a href="#services">Our Practice Areas</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-2">
              <Shield className="h-8 w-8 text-blue-200" />
              <span className="text-white font-semibold text-2xl">500+</span>
              <span className="text-white/70 text-sm">Cases Won</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Award className="h-8 w-8 text-blue-200" />
              <span className="text-white font-semibold text-2xl">30+</span>
              <span className="text-white/70 text-sm">Years Experience</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="h-8 w-8 text-blue-200" />
              <span className="text-white font-semibold text-2xl">24/7</span>
              <span className="text-white/70 text-sm">Available Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    content:
      "Nyalunga Attorney helped me navigate through a complex debt review process. Their expertise in financial law and negotiation skills resulted in a significant reduction of my debt burden, giving me a fresh start.",
    author: "Thabo Nkosi",
    role: "Small Business Owner",
    rating: 5,
  },
  {
    content:
      "I was wrongfully arrested and facing serious charges. The team at Nyalunga Attorney fought tirelessly for my rights, gathering evidence and presenting a compelling case that led to my immediate release and charges being dropped.",
    author: "Nomsa Zulu",
    role: "Community Leader",
    rating: 5,
  },
  {
    content:
      "Facing aggressive debt collection practices that were harassing and unlawful, Nyalunga Attorney stepped in to protect my rights. They negotiated fair settlements and ensured the collectors followed proper legal procedures.",
    author: "Sipho Mthembu",
    role: "Teacher",
    rating: 5,
  },
  {
    content:
      "When I was unlawfully detained during a protest, Nyalunga Attorney provided immediate legal assistance. Their knowledge of constitutional law and quick action secured my release and held the authorities accountable.",
    author: "Lerato Khumalo",
    role: "Activist",
    rating: 5,
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Client Stories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-3 leading-tight text-balance">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 relative">
            <Quote className="h-16 w-16 text-primary/10 absolute top-8 left-8" />
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed font-serif italic">
                &ldquo;{testimonials[activeIndex].content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-8 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground text-lg">
                    {testimonials[activeIndex].author}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[activeIndex].role}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-primary" : "bg-primary/20"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

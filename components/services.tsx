import {
  Building2,
  Scale,
  Home,
  Users,
  Shield,
  FileText,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Shield,
    title: "Unlawful arrest and detention",
    description:
      "Legal representation for clients whose constitutional rights have been violated through unlawful arrest, detention, or abuse of authority.",
  },
  {
    icon: Users,
    title: "Medical Negligence",
    description:
      "Support in claims arising from negligent medical treatment, delayed diagnosis, surgical errors, and other healthcare-related harm.",
  },
  {
    icon: Building2,
    title: "Road Accident Fund",
    description:
      "Assistance with Road Accident Fund claims for injury, loss of income, medical expenses, and other accident-related damages.",
  },
  {
    icon: Scale,
    title: "Criminal Law",
    description:
      "Strategic criminal defense and legal guidance for bail applications, trials, appeals, and related criminal matters.",
  },
  {
    icon: FileText,
    title: "Debt collection",
    description:
      "Efficient debt recovery services for individuals and businesses, including demand processes and enforcement support.",
  },
  {
    icon: Home,
    title: "Family law",
    description:
      "Advice and representation in divorce, maintenance, custody, domestic violence, and other family-related legal matters.",
  },
  {
    icon: Building2,
    title: "Contracts Law",
    description:
      "Drafting, reviewing, and enforcing contracts to protect your interests in business and personal transactions.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Our Expertise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-3 leading-tight text-balance">
            Practice Areas
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            We provide focused legal services across key practice areas,
            delivering practical advice and strong representation tailored to
            your matter.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-primary font-medium text-sm group-hover:underline"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  practiceAreas: [
    { label: "Unlawful arrest and detention", href: "#services" },
    { label: "Medical Negligence", href: "#services" },
    { label: "Road Accident Fund", href: "#services" },
    { label: "Criminal Law", href: "#services" },
    { label: "Debt collection", href: "#services" },
    { label: "Family law", href: "#services" },
    { label: "Contracts Law", href: "#services" },
  ],
  quickLinks: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#team" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/people/HN-Nyalunga-Attorneys/61572777221935/#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/nyalunga_inc/", label: "Instagram" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a365d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-flex items-center mb-6 rounded-md bg-white p-3">
              <img
                src="/logo2.png"
                alt="HN Nyalunga Inc logo"
                className="h-28 w-auto rounded-sm"
              />
            </a>
            <p className="text-white/70 leading-relaxed mb-6">
              Trusted legal counsel serving clients with integrity, dedication,
              and results-driven advocacy since 1994.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Practice Areas</h4>
            <ul className="space-y-3">
              {footerLinks.practiceAreas.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <address className="not-italic space-y-3 text-white/70">
              <p>Office no 01, Nebro Building, 39B Brown Street</p>
              <p>Mbombela, South Africa</p>
              <p>
                <a
                  href="tel:+27795049727"
                  className="hover:text-white transition-colors"
                >
                  0795049727
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@hnnyalunga.co.za"
                  className="hover:text-white transition-colors"
                >
                  info@hnnyalunga.co.za
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © {currentYear} Nyalunga Attorney. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors"
            >
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

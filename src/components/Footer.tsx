import { motion } from "framer-motion";
import { Heart, Instagram, Twitter, Facebook, Mail, MapPin, Phone, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 border-t border-border bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
                <h3 className="font-display text-2xl sm:text-3xl text-foreground">Wanderlux</h3>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground max-w-md mb-6">
                Crafting extraordinary journeys for discerning travelers. 
                Every itinerary is a masterpiece, every moment unforgettable.
              </p>
              <div className="flex gap-3">
                {[Instagram, Twitter, Facebook, Mail].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4 text-sm sm:text-base">Experience</h4>
            <ul className="space-y-2 sm:space-y-3">
              {["Destinations", "Luxury Tours", "Private Guides", "Concierge"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4 text-sm sm:text-base">Support</h4>
            <ul className="space-y-2 sm:space-y-3">
              {["Help Center", "Travel Insurance", "Cancellation", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 sm:mb-10">
          {[
            { icon: Phone, label: "+39 06 1234 5678" },
            { icon: Mail, label: "hello@wanderlux.com" },
            { icon: MapPin, label: "Via del Corso 123, Rome" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 glass rounded-xl p-3 sm:p-4">
              <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
              <span className="text-xs sm:text-sm text-foreground truncate">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © 2025 Wanderlux. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs sm:text-sm flex items-center gap-1">
            Crafted with <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-secondary fill-secondary" /> for extraordinary journeys
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

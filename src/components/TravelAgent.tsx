import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, Star, Check, Award, Globe, Clock } from "lucide-react";

const TravelAgent = () => {
  return (
    <section className="py-12 sm:py-20 md:py-32">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="font-accent text-base sm:text-lg text-secondary">Your Expert</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 mb-3 sm:mb-4">
            Meet <span className="gradient-text">Isabella</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-4">
            Your dedicated travel curator with over 15 years of experience crafting unforgettable Italian journeys.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Agent Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="card-premium p-6 sm:p-8 text-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230F766E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
              </div>

              {/* Online Status */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex items-center gap-2">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs sm:text-sm text-green-600 font-medium">Online now</span>
              </div>

              {/* Avatar */}
              <motion.div
                className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
                  alt="Isabella Romano"
                  className="w-full h-full rounded-full object-cover ring-4 ring-primary/20"
                />
                <div className="absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center shadow-glow-primary">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </div>
              </motion.div>

              {/* Name & Title */}
              <h3 className="font-display text-xl sm:text-2xl text-foreground mb-1">
                Isabella Romano
              </h3>
              <p className="text-sm text-muted-foreground mb-4">Senior Travel Curator</p>

              {/* Rating */}
              <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-secondary text-secondary" />
                    </motion.div>
                  ))}
                </div>
                <span className="text-foreground font-semibold text-sm sm:text-base">5.0</span>
                <span className="text-muted-foreground text-xs sm:text-sm">(128)</span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6 py-4 sm:py-6 border-y border-border">
                <div>
                  <div className="font-display text-lg sm:text-2xl text-foreground">15+</div>
                  <div className="text-xs text-muted-foreground">Years</div>
                </div>
                <div>
                  <div className="font-display text-lg sm:text-2xl text-foreground">500+</div>
                  <div className="text-xs text-muted-foreground">Trips</div>
                </div>
                <div>
                  <div className="font-display text-lg sm:text-2xl text-foreground">98%</div>
                  <div className="text-xs text-muted-foreground">Happy</div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="mb-6">
                <p className="font-accent text-muted-foreground italic text-sm sm:text-base">
                  "Isabella made our honeymoon absolutely magical. Every detail was perfect!"
                </p>
                <p className="text-xs sm:text-sm text-foreground mt-2">— James & Emily, London</p>
              </div>

              {/* Quick Actions */}
              <div className="flex justify-center gap-3 sm:gap-4">
                {[
                  { icon: MessageCircle, label: "Chat" },
                  { icon: Phone, label: "Call" },
                  { icon: Mail, label: "Email" },
                ].map((action) => (
                  <motion.button
                    key={action.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    title={action.label}
                  >
                    <action.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content & Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-4 sm:space-y-6">
              {/* Credentials */}
              {[
                { icon: Award, title: "Certified Italy Specialist", desc: "Accredited by ENIT Italian Tourism Board" },
                { icon: Globe, title: "Fluent in Italian & English", desc: "Native speaker with local connections" },
                { icon: Star, title: "VIP Access", desc: "Exclusive venues and skip-the-line privileges" },
                { icon: Clock, title: "24/7 Support", desc: "Available around the clock during your trip" },
              ].map((credential, index) => (
                <motion.div
                  key={credential.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 flex items-start gap-3 sm:gap-4"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <credential.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground text-sm sm:text-base">{credential.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{credential.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-luxury flex items-center justify-center gap-2 flex-1"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Send Message</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-ghost-luxury flex items-center justify-center gap-2 flex-1"
              >
                <Phone className="w-4 h-4" />
                <span>Schedule Call</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TravelAgent;

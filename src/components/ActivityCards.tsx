import { motion } from "framer-motion";
import { Plane, Building2, Utensils, Camera, Clock, MapPin, Star, Users } from "lucide-react";

interface Activity {
  id: number;
  type: "flight" | "hotel" | "food" | "attraction";
  title: string;
  subtitle: string;
  time: string;
  duration: string;
  image: string;
  badge?: string;
  rating?: number;
  guests?: number;
}

const activities: Activity[] = [
  {
    id: 1,
    type: "attraction",
    title: "Colosseum at Golden Hour",
    subtitle: "Skip-the-line VIP guided tour with exclusive underground access",
    time: "5:30 PM",
    duration: "2.5 hours",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=80",
    badge: "Now",
    rating: 4.9,
  },
  {
    id: 2,
    type: "food",
    title: "Roscioli Dinner Experience",
    subtitle: "Traditional Roman cuisine with wine pairing",
    time: "8:30 PM",
    duration: "2 hours",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    rating: 4.8,
  },
  {
    id: 3,
    type: "hotel",
    title: "Hotel de Russie",
    subtitle: "Piazza del Popolo Terrace Suite",
    time: "Check-in 3PM",
    duration: "3 nights",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    badge: "5-Star Luxury",
    rating: 4.9,
  },
  {
    id: 4,
    type: "flight",
    title: "Rome to Florence",
    subtitle: "Frecciarossa First Class Train",
    time: "10:30 AM",
    duration: "1h 32m",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80",
  },
  {
    id: 5,
    type: "attraction",
    title: "Vatican Museums Private Tour",
    subtitle: "Early access before public opening",
    time: "7:00 AM",
    duration: "4 hours",
    image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800&q=80",
    badge: "Exclusive",
    rating: 5.0,
  },
  {
    id: 6,
    type: "food",
    title: "Trastevere Food Walk",
    subtitle: "6 authentic local trattorias",
    time: "12:00 PM",
    duration: "3 hours",
    image: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=800&q=80",
    rating: 4.7,
    guests: 8,
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case "flight":
      return Plane;
    case "hotel":
      return Building2;
    case "food":
      return Utensils;
    case "attraction":
      return Camera;
    default:
      return Camera;
  }
};

const getGradient = (type: string) => {
  switch (type) {
    case "flight":
      return "from-accent to-accent/80";
    case "hotel":
      return "from-secondary to-secondary/80";
    case "food":
      return "from-rose-gold to-rose-gold/80";
    case "attraction":
      return "from-primary to-primary/80";
    default:
      return "from-primary to-primary/80";
  }
};

const ActivityCards = () => {
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
          <span className="font-accent text-base sm:text-lg text-secondary">Day 1 in Rome</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 mb-3 sm:mb-4">
            Today's <span className="gradient-text-emerald">Experiences</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-4">
            Each moment carefully curated for an unforgettable day in the Eternal City.
          </p>
        </motion.div>

        {/* Bento Grid Layout - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {activities.map((activity, index) => {
            const Icon = getIcon(activity.type);
            const isLarge = index === 0;
            
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group ${isLarge ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""}`}
              >
                <div
                  className={`card-cinematic ${
                    isLarge ? "h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]" : "h-[280px] sm:h-[300px]"
                  }`}
                >
                  {/* Background Image */}
                  <motion.img
                    src={activity.image}
                    alt={activity.title}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                  />

                  {/* Animated Overlay for Flights */}
                  {activity.type === "flight" && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      <motion.div
                        animate={{ x: ["0%", "200%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/3 left-0"
                      >
                        <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground/40 -rotate-45" />
                      </motion.div>
                    </div>
                  )}

                  {/* Content Overlay */}
                  <div className="absolute inset-0 z-10 p-4 sm:p-6 flex flex-col justify-between">
                    {/* Top Row */}
                    <div className="flex items-start justify-between">
                      <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${getGradient(activity.type)} shadow-lg`}>
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        {activity.badge && (
                          <motion.span
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${
                              activity.badge === "Now"
                                ? "bg-primary text-primary-foreground animate-pulse"
                                : "bg-secondary text-secondary-foreground"
                            }`}
                          >
                            {activity.badge}
                          </motion.span>
                        )}
                        {activity.rating && (
                          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-background/20 backdrop-blur-sm">
                            <Star className="w-3 h-3 fill-secondary text-secondary" />
                            <span className="text-xs text-primary-foreground font-medium">{activity.rating}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Bottom Content */}
                    <div>
                      <h3
                        className={`font-display text-primary-foreground mb-1 sm:mb-2 ${
                          isLarge ? "text-2xl sm:text-3xl md:text-4xl" : "text-lg sm:text-xl md:text-2xl"
                        }`}
                      >
                        {activity.title}
                      </h3>
                      <p className="font-accent text-primary-foreground/80 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                        {activity.subtitle}
                      </p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                        <div className="flex items-center gap-1.5 text-primary-foreground/70 text-xs sm:text-sm">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{activity.time}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-primary-foreground/70 text-xs sm:text-sm">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{activity.duration}</span>
                        </div>
                        {activity.guests && (
                          <div className="flex items-center gap-1.5 text-primary-foreground/70 text-xs sm:text-sm">
                            <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>Max {activity.guests}</span>
                          </div>
                        )}
                      </div>

                      {/* Action Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-3 sm:mt-4 w-full py-2.5 sm:py-3 rounded-xl bg-background/20 backdrop-blur-sm text-primary-foreground text-sm font-medium border border-primary-foreground/20 hover:bg-background/30 transition-all opacity-0 group-hover:opacity-100"
                      >
                        View Details
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <button className="btn-ghost-luxury">
            View All 32 Experiences
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivityCards;

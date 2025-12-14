import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Day {
  id: number;
  date: string;
  day: string;
  location: string;
  highlight: string;
  description: string;
  image: string;
  isPast: boolean;
  isCurrent: boolean;
}

const days: Day[] = [
  { id: 1, date: "Jul 12", day: "Saturday", location: "Rome", highlight: "Colosseum at Golden Hour", description: "Begin your Italian adventure in the Eternal City", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80", isPast: false, isCurrent: true },
  { id: 2, date: "Jul 13", day: "Sunday", location: "Rome", highlight: "Vatican Museums & Sistine", description: "Marvel at Michelangelo's masterpieces", image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=600&q=80", isPast: false, isCurrent: false },
  { id: 3, date: "Jul 14", day: "Monday", location: "Rome", highlight: "Trastevere Food Tour", description: "Taste authentic Roman cuisine", image: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=600&q=80", isPast: false, isCurrent: false },
  { id: 4, date: "Jul 15", day: "Tuesday", location: "Florence", highlight: "Uffizi Gallery", description: "Renaissance art at its finest", image: "https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?w=600&q=80", isPast: false, isCurrent: false },
  { id: 5, date: "Jul 16", day: "Wednesday", location: "Tuscany", highlight: "Chianti Wine Tour", description: "Rolling hills and world-class wines", image: "https://images.unsplash.com/photo-1523528283115-9bf9b1699245?w=600&q=80", isPast: false, isCurrent: false },
  { id: 6, date: "Jul 17", day: "Thursday", location: "Siena", highlight: "Medieval City Walk", description: "Step back in time in this Gothic gem", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80", isPast: false, isCurrent: false },
  { id: 7, date: "Jul 18", day: "Friday", location: "Cinque Terre", highlight: "Coastal Hike", description: "Five villages, endless beauty", image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&q=80", isPast: false, isCurrent: false },
  { id: 8, date: "Jul 19", day: "Saturday", location: "Portofino", highlight: "Yacht Day Trip", description: "Italian Riviera glamour", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", isPast: false, isCurrent: false },
  { id: 9, date: "Jul 20", day: "Sunday", location: "Positano", highlight: "Amalfi Coast Drive", description: "The world's most scenic road", image: "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=600&q=80", isPast: false, isCurrent: false },
  { id: 10, date: "Jul 21", day: "Monday", location: "Ravello", highlight: "Villa Cimbrone Gardens", description: "Gardens with infinite views", image: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=600&q=80", isPast: false, isCurrent: false },
  { id: 11, date: "Jul 22", day: "Tuesday", location: "Capri", highlight: "Blue Grotto", description: "Island paradise awaits", image: "https://images.unsplash.com/photo-1548682585-d5a43f5e74d1?w=600&q=80", isPast: false, isCurrent: false },
  { id: 12, date: "Jul 23", day: "Wednesday", location: "Naples", highlight: "Pompeii Exploration", description: "Ancient history frozen in time", image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=600&q=80", isPast: false, isCurrent: false },
  { id: 13, date: "Jul 24", day: "Thursday", location: "Sorrento", highlight: "Limoncello Tasting", description: "Citrus groves and coastal charm", image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=600&q=80", isPast: false, isCurrent: false },
  { id: 14, date: "Jul 25", day: "Friday", location: "Rome", highlight: "Farewell Dinner", description: "One last sunset in Rome", image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=600&q=80", isPast: false, isCurrent: false },
];

const TimelineJourney = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDay, setActiveDay] = useState(1);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 sm:py-20 md:py-32 overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container px-4 sm:px-6 mb-8 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="font-accent text-base sm:text-lg text-secondary">Your Journey Awaits</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 mb-3 sm:mb-4">
            14 Days of <span className="gradient-text">Wonder</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-4">
            Scroll through your personalized itinerary. Each day is a new chapter in your Italian story.
          </p>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <div className="container px-4 sm:px-6 mb-4 flex justify-end gap-2">
        <button
          onClick={() => scroll("left")}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Horizontal Scrolling Timeline */}
      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto px-4 sm:px-6 pb-8 scrollbar-hide snap-x snap-mandatory"
      >
        {/* Spacer for centering first card */}
        <div className="flex-shrink-0 w-4 sm:w-[calc(50vw-180px)] md:w-[calc(50vw-200px)]" />
        
        {days.map((day, index) => (
          <motion.div
            key={day.id}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            onClick={() => setActiveDay(day.id)}
            className="snap-center flex-shrink-0 cursor-pointer group"
          >
            <div
              className={`relative w-[260px] sm:w-[280px] md:w-[320px] h-[360px] sm:h-[400px] md:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 ${
                day.isCurrent
                  ? "ring-4 ring-primary ring-offset-2 sm:ring-offset-4 ring-offset-background"
                  : ""
              } ${day.isPast ? "grayscale opacity-60" : ""}`}
              style={{
                transform: activeDay === day.id ? "scale(1.03)" : "scale(1)",
              }}
            >
              {/* Background Image with Ken Burns Effect */}
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 8, ease: "linear" }}
              >
                <img
                  src={day.image}
                  alt={day.location}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/40 to-transparent" />

              {/* Day Number Badge */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-heading font-bold text-base sm:text-lg ${
                    day.isCurrent
                      ? "bg-primary text-primary-foreground shadow-glow-primary"
                      : "bg-background/80 text-foreground backdrop-blur-sm"
                  }`}
                >
                  {day.id}
                </motion.div>
              </div>

              {/* Current Day Indicator */}
              {day.isCurrent && (
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <span className="px-2 sm:px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium animate-pulse">
                    Today
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <p className="text-primary-foreground/70 text-xs sm:text-sm font-medium mb-0.5 sm:mb-1">
                  {day.date} • {day.day}
                </p>
                <h3 className="font-display text-xl sm:text-2xl text-primary-foreground mb-1 sm:mb-2">
                  {day.location}
                </h3>
                <p className="font-heading font-semibold text-primary-foreground/90 text-sm sm:text-base mb-1">
                  {day.highlight}
                </p>
                <p className="font-accent text-primary-foreground/70 text-xs sm:text-sm">
                  {day.description}
                </p>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-3 sm:mt-4 w-full py-2 sm:py-2.5 rounded-xl bg-background/20 backdrop-blur-sm text-primary-foreground text-xs sm:text-sm font-medium border border-primary-foreground/20 hover:bg-background/30 transition-all opacity-0 group-hover:opacity-100"
                >
                  View Full Day
                </motion.button>
              </div>
            </div>

            {/* Timeline Connector */}
            <div className="flex items-center justify-center mt-4 sm:mt-6">
              <div
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                  day.isCurrent
                    ? "timeline-dot active"
                    : day.isPast
                    ? "timeline-dot past"
                    : "timeline-dot"
                }`}
              />
              {index < days.length - 1 && (
                <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-primary/50 to-border ml-1 sm:ml-2" />
              )}
            </div>
          </motion.div>
        ))}

        {/* Spacer for centering last card */}
        <div className="flex-shrink-0 w-4 sm:w-[calc(50vw-180px)] md:w-[calc(50vw-200px)]" />
      </div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container px-4 sm:px-6 mt-8 sm:mt-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {[
            { label: "Cities", value: "8", icon: "🏛️" },
            { label: "Experiences", value: "32", icon: "✨" },
            { label: "Meals Included", value: "24", icon: "🍝" },
            { label: "Photos You'll Take", value: "1000+", icon: "📸" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center"
            >
              <span className="text-2xl sm:text-3xl mb-2 block">{stat.icon}</span>
              <p className="font-display text-2xl sm:text-3xl text-foreground">{stat.value}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TimelineJourney;

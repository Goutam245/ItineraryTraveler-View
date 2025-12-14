import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

const Hero = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isMuted, setIsMuted] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Layer - Multiple Images with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515859005217-8a1f08870f59?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        animate={{
          scale: 1 + mousePosition.x * 0.03,
          x: (mousePosition.x - 0.5) * 20,
          y: (mousePosition.y - 0.5) * 10,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      
      {/* Secondary Overlay Images */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-1/2"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "overlay",
          }}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>
      
      {/* Gradient Overlay - Refined */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/20 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-champagne"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + particle.delay,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Sound Toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => setIsMuted(!isMuted)}
        className="absolute top-24 right-4 md:top-28 md:right-8 z-20 w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </motion.button>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 max-w-3xl mx-auto text-center animate-breathe"
          style={{
            boxShadow: "0 25px 80px -12px rgba(0, 0, 0, 0.25)",
          }}
        >
          {/* Trip Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4 sm:mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-medium">Summer 2025 • 14 Days • All-Inclusive</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-foreground mb-2 sm:mb-4 leading-tight"
          >
            Your Italian
            <br />
            <span className="gradient-text">Masterpiece</span>
          </motion.h1>

          {/* Handwritten Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="font-accent text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8"
          >
            Crafted with love for Sarah
          </motion.p>

          {/* Trip Details - Responsive Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mb-8 sm:mb-10"
          >
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-foreground/80 bg-background/50 rounded-xl p-3">
              <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>July 12 - 26, 2025</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-foreground/80 bg-background/50 rounded-xl p-3">
              <svg className="w-4 h-4 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="truncate">Rome → Tuscany → Amalfi</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-foreground/80 bg-background/50 rounded-xl p-3">
              <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
              <span>28°C Sunny & Beautiful</span>
            </div>
          </motion.div>

          {/* Price Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95 }}
            className="mb-6 sm:mb-8"
          >
            <p className="text-sm text-muted-foreground mb-1">Starting from</p>
            <div className="flex items-baseline justify-center gap-2">
              <span className="font-display text-3xl sm:text-4xl text-foreground">€8,450</span>
              <span className="text-muted-foreground">per person</span>
            </div>
          </motion.div>

          {/* CTA Buttons - Stack on Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <button className="btn-luxury group w-full sm:w-auto">
              <span className="flex items-center justify-center gap-2">
                Begin Your Journey
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <button className="btn-ghost-luxury flex items-center justify-center gap-2 w-full sm:w-auto">
              <Play className="w-4 h-4" />
              Watch Preview
            </button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 pt-6 border-t border-border/50"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://images.unsplash.com/photo-${1500000000000 + i * 100}?w=60&h=60&fit=crop&faces`}
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-background object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`;
                    }}
                  />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">2,847</span> travelers loved this journey
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-primary-foreground/80 text-xs sm:text-sm font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-1.5 sm:p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary-foreground/80"
          />
        </motion.div>
      </motion.div>

      {/* Floating Images - Desktop Only */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hidden xl:block absolute left-8 top-1/3 w-48 h-64 rounded-2xl overflow-hidden shadow-modal"
      >
        <img
          src="https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=400&q=80"
          alt="Positano"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-primary-foreground">
          <p className="font-display text-lg">Positano</p>
          <p className="text-sm opacity-80">Amalfi Coast</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.7, duration: 1 }}
        className="hidden xl:block absolute right-8 top-1/2 w-48 h-64 rounded-2xl overflow-hidden shadow-modal"
      >
        <img
          src="https://images.unsplash.com/photo-1523528283115-9bf9b1699245?w=400&q=80"
          alt="Tuscany"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-primary-foreground">
          <p className="font-display text-lg">Tuscany</p>
          <p className="text-sm opacity-80">Wine Country</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, MapPin, Calendar, FileText, User, Sparkles } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const headerBg = useTransform(
    scrollYProgress,
    [0, 0.05],
    ["rgba(255, 251, 245, 0)", "rgba(255, 251, 245, 0.95)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { icon: Calendar, label: "Timeline", href: "#timeline" },
    { icon: MapPin, label: "Route", href: "#route" },
    { icon: FileText, label: "Documents", href: "#documents" },
    { icon: User, label: "Agent", href: "#agent" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.header
        style={{ backgroundColor: headerBg }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-subtle backdrop-blur-xl" : ""
        }`}
      >
        <div className="container px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.a
              href="#"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-display text-xl sm:text-2xl text-foreground flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              Wanderlux
            </motion.a>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors link-underline text-sm lg:text-base"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </motion.a>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:block btn-luxury text-sm py-2 px-4 lg:py-2.5 lg:px-6"
            >
              <span>Customize Trip</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent"
          style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
        />
      </motion.header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { x: 0 } : { x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="fixed inset-y-0 right-0 z-50 w-[280px] sm:w-[320px] glass-strong md:hidden"
      >
        <div className="flex flex-col h-full p-6 sm:p-8">
          <div className="flex justify-between items-center mb-8">
            <span className="font-display text-xl text-foreground">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col gap-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 text-base sm:text-lg text-foreground font-medium p-3 rounded-xl hover:bg-primary/10 transition-colors"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                {item.label}
              </motion.a>
            ))}
          </nav>

          <button className="btn-luxury w-full mt-6">
            <span>Customize Trip</span>
          </button>
        </div>
      </motion.div>

      {/* Dot Navigation (Desktop - Large Screens) */}
      <motion.nav
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed right-6 lg:right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4"
      >
        {["hero", "timeline", "activities", "route", "documents", "agent"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className="group relative flex items-center"
          >
            <span className="absolute right-8 px-2 py-1 rounded bg-foreground text-background text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </span>
            <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-foreground/20 group-hover:bg-primary group-hover:scale-125 transition-all" />
          </a>
        ))}
      </motion.nav>
    </>
  );
};

export default Navigation;

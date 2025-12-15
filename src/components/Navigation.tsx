import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Update active section based on scroll position
      const sections = ["home", "whatwedo", "howwework", "results"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      // Close mobile menu after scroll completes
      setTimeout(() => setIsOpen(false), 1500);
    } else {
      setIsOpen(false);
    }
  };
  const navLinks = [
    {
      name: "Home",
      id: "home",
    },
    {
      name: "What We Do",
      id: "whatwedo",
    },
    {
      name: "How We Work",
      id: "howwework",
    },
    {
      name: "Results",
      id: "results",
    },
  ];
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-2 group">
            {/* <div className="relative">
              <Sparkles className="h-8 w-8 text-secondary group-hover:text-primary transition-colors duration-300" />
              <div className="absolute inset-0 bg-secondary/50 blur-lg group-hover:bg-primary/50 transition-colors duration-300" />
            </div> */}
            <span className="text-2xl font-bold font-display tracking-tight text-white">
              <img src="/logo.png" alt="ADSPARK" className="h-10" />
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative text-sm font-medium transition-colors duration-300 hover:text-primary ${
                  activeSection === link.id ? "text-white" : "text-text-muted"
                }`}>
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                  />
                )}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 text-sm font-medium">
              Get in touch with us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-primary transition-colors">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-white/10 overflow-hidden">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left text-lg font-medium ${
                    activeSection === link.id
                      ? "text-primary"
                      : "text-text-muted"
                  }`}>
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-center py-3 mt-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-bold">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

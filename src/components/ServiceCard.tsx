
import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
interface ServiceCardProps {
  title: string;
  description: string[];
  icon: LucideIcon;
  delay?: number;
}
export function ServiceCard({
  title,
  description,
  icon: Icon,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay,
        duration: 0.5,
      }}
      whileHover={{
        y: -5,
      }}
      className="group relative p-8 rounded-2xl bg-surface/50 border border-white/5 backdrop-blur-sm overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary" />
        </div>

        <h3 className="text-2xl font-bold font-display mb-4 text-white group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        <ul className="space-y-2">
          {description.map((item, index) => (
            <li
              key={index}
              className="flex items-start text-text-muted text-sm">
              <span className="mr-2 mt-1.5 w-1 h-1 rounded-full bg-secondary flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

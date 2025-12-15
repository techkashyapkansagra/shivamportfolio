
import { motion } from "framer-motion";
interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}
export function ProcessStep({
  number,
  title,
  description,
  isLast,
}: ProcessStepProps) {
  return (
    <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 group">
      {/* Connecting Line */}
      {!isLast && (
        <div className="absolute left-6 top-16 bottom-[-2rem] w-0.5 bg-white/10 md:hidden" />
      )}

      {/* Number Circle */}
      <motion.div
        initial={{
          scale: 0.8,
          opacity: 0,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className="relative flex-shrink-0 w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center z-10 group-hover:border-primary/50 transition-colors duration-300">
        <span className="font-display font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          {number}
        </span>
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{
          x: -20,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.2,
        }}
        className="flex-1 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors duration-300">
        <h3 className="text-xl font-bold font-display text-white mb-2">
          {title}
        </h3>
        <p className="text-text-muted">{description}</p>
      </motion.div>
    </div>
  );
}

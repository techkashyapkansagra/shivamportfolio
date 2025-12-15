import { useEffect, useRef } from "react";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
interface ResultsMetricProps {
  value: number;
  suffix?: string;
  label: string;
  prefix?: string;
}
export function ResultsMetric({
  value,
  suffix = "",
  label,
  prefix = "",
}: ResultsMetricProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
  });
  const spring = useSpring(0, {
    mass: 0.8,
    stiffness: 75,
    damping: 15,
  });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );
  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);
  return (
    <div
      ref={ref}
      className="text-center p-6 rounded-2xl bg-surface/30 border border-white/5 backdrop-blur-sm">
      <div className="text-4xl md:text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
        {prefix}
        <motion.span>{display}</motion.span>
        {suffix}
      </div>
      <p className="text-text-muted font-medium uppercase tracking-wider text-sm">
        {label}
      </p>
    </div>
  );
}

import cn from "classnames";
import { motion, type MotionProps } from "motion/react";
import { forwardRef } from "react";

interface GlassCardProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          `bg-white/10 backdrop-blur-lg rounded-3xl p-2 md:p-6 border-2 border-white/20 fade-in`,
          className,
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

export default GlassCard;

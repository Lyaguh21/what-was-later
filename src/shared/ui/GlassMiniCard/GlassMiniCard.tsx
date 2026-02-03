import { motion, type MotionProps } from "framer-motion";
import cn from "classnames";

export default function GlassMiniCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> &
  MotionProps) {
  return (
    <motion.div
      className={cn(
        "bg-white/20 backdrop-blur-sm rounded-full px-8 py-3 flex items-center gap-3 ",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}

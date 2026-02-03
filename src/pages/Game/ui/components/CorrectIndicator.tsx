import { selectGameRoundStatus } from "@/entities/game";
import { useAppSelector } from "@/shared/lib";
import { GlassMiniCard } from "@/shared/ui/GlassMiniCard";
import { IconCheck, IconX } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function CorrectIndicator() {
  const roundStatus = useAppSelector(selectGameRoundStatus);

  return (
    <GlassMiniCard className="aspect-square p-3!">
      {roundStatus === "succeeded" && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 0 }}
        >
          <IconCheck size={48} color="white" />
        </motion.div>
      )}
      {roundStatus === "failed" && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 0 }}
        >
          <IconX size={48} color="white" />
        </motion.div>
      )}
      {roundStatus === "idle" && (
        <motion.span
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          className="text-white text-3xl font-bold m-1.5"
        >
          VS
        </motion.span>
      )}
    </GlassMiniCard>
  );
}

import type { IGameEvent } from "@/entities/game";
import { AnimatePresence, motion, type MotionProps } from "framer-motion";

export default function GameEventCard({
  event,
  ...props
}: { event: IGameEvent } & MotionProps) {
  return (
    <motion.div
      className="bg-white rounded-3xl shadow-2xl overflow-hidden w-[520px] cursor-pointer"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(99,102,241,0.15)",
      }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      <div className="h-[320px] overflow-hidden relative">
        <img
          className="w-full h-full object-cover"
          src={event.imageUrl}
          alt={event.name}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{event.name}</h3>
        <p className="text-gray-600 text-lg mb-6">{event.description}</p>

        <AnimatePresence>
          {false && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 1, scale: 0.5 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className=""
            >
              <div className="bg-linear-to-r from-indigo-500 to-purple-500 border-2 border-white/30 shadow-xl shadow-indigo-600/60 rounded-2xl p-4 text-center">
                {new Date(event.date).toLocaleDateString("ru-RU", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

import { motion } from 'framer-motion';

export default function ActionButtons() {
  return (
    <div className="flex gap-4">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Start Workout
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-green-500 text-white p-2 rounded"
      >
        View Progress
      </motion.button>
    </div>
  );
}

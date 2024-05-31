'use client';

import { motion } from 'framer-motion';

export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  );
}

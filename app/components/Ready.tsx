"use client";

import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";

export default function Ready() {
  return (
    <>
      <motion.div
        className="ready-container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          Are you ready to <span className="start-text">start?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          Suronex provides customised solutions to safeguard your data, ensuring
          compliance, protection, and peace of mind. Take control of your
          security today!
        </motion.p>
        <div className="ready-button-wrapper pt-10">
          <button className="ready-button">
            <CalendarCheck /> Book a Demo
          </button>
        </div>
      </motion.div>
    </>
  );
}

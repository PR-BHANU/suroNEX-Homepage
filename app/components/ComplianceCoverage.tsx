"use client";
import { motion } from "framer-motion";
export default function ComplianceCoverage() {
  return (
    <>
      <div className="compliance-container">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Comprehensive Compliance Coverage
        </motion.h1>
        <motion.a
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          Navigate the complex world of compliance with automated support for
          over 40+ essential security frameworks, standards, and best practices.
        </motion.a>
        <div className="compliance-card">
          <div className="card-metric">40+</div>

          <h3 className="card-title">Security Standards</h3>

          <p className="card-desc">
            Pre-built compliance frameworks continuously updated across cloud,
            SaaS, and enterprise environments.
          </p>

          <button className="card-btn">See Full Framework List →</button>
        </div>
      </div>
    </>
  );
}

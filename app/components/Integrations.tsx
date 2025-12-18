"use client";

import { motion } from "framer-motion";

const row1 = [
  "/logos/aws.svg",
  "/logos/MicrosoftAzure.svg",
  "/logos/googlecloud.svg",
  "/logos/github.svg",
  "/logos/jira.svg",
  "/logos/slack.svg",
];

const row2 = [
  "/logos/teams.svg",
  "/logos/kubernetes.svg",
  "/logos/confluence.svg",
  "/logos/servicenow.svg",
  "/logos/copilot.svg",
];

export default function Integrations() {
  return (
    <motion.div
      className="integration-container"
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
        Suronex Integrations
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.15 }}
      >
        Streamline compliance operations with deep integrations spanning cloud
        providers, security tools, and enterprise applications.
      </motion.p>

      <div className="logos">
        <div className="logos-row-1">
          {row1.map((logo) => (
            <img key={logo} src={logo} alt="" />
          ))}
        </div>

        <div className="logos-row-2">
          {row2.map((logo) => (
            <img key={logo} src={logo} alt="" />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

"use client";
import {
  LayoutGrid,
  Workflow,
  ShieldCheck,
  ChartNoAxesCombined,
} from "lucide-react";

import { motion } from "framer-motion";
export default function WhySuronex() {
  return (
    <>
      <div className="why-container">
        <div className="why-content">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Why Suronex?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            Built for modern security teams who need speed, clarity, and
            confidence.
          </motion.p>
          <div className="why-cards">
            <div className="why-card">
              <LayoutGrid color="grey" size={34} />
              <h3 className="pt-6">Unified Visibility</h3>
              <p>
                See compliance and security risks across cloud, SaaS, and
                infrastructure in one unified view.
              </p>
            </div>
            <div className="why-card">
              <Workflow color="grey" size={34} />
              <h3 className="pt-6">Automation at the Core</h3>
              <p>
                Eliminate spreadsheets and manual evidence collection with
                continuous, automated compliance.
              </p>
            </div>

            <div className="why-card">
              <ShieldCheck color="grey" size={34} />
              <h3 className="pt-6">Proactive Risk Detection</h3>
              <p>
                Identify misconfigurations and policy gaps before they turn into
                incidents.
              </p>
            </div>

            <div className="why-card">
              <ChartNoAxesCombined color="grey" size={34} />
              <h3 className="pt-6">Built to Scale</h3>
              <p>
                From startups to enterprises, Suronex scales effortlessly across
                frameworks, clouds, and teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

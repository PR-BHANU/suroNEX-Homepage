"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Clock,
  FileX,
  TriangleAlert,
  ChartNoAxesCombined,
} from "lucide-react";

export default function RiskPoints() {
  return (
    <>
      <div className="risk-container pt-30">
        <div className="risk-glow"></div>
        <div className="risk-content">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            The Cost of Not Having a<br></br> Risk & Compliance Tool
          </motion.h1>
          <motion.a
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            Without the right platform, organizations face mounting challenges
            that impact security, productivity, and bottom-line costs.
          </motion.a>
          <div className="risk-glow"></div>
          <div className="risk-grid pt-20">
            <div className="risk-card card-blind">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center">
                <Eye className="text-red-400" size={22} />
              </div>
              <h3 className="pt-5">Blind Spots in Security</h3>
              <p>
                Modern organizations run across multiple cloud platforms like
                AWS, Azure, Google Cloud, and dozens of SaaS tools. Each system
                has its own security settings, logs, and controls. When these
                environments are monitored separately, no one has a complete,
                real-time view of risk. This fragmentation allows
                misconfigurations, access issues, and security gaps to go
                unnoticed often until they escalate into incidents, breaches, or
                compliance failures.
              </p>
            </div>

            <div className="risk-card card-inefficient">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center">
                <Clock className="text-red-400" size={22} />
              </div>
              <h3 className="pt-5">Inefficient Processes</h3>
              <p>
                Hours wasted on spreadsheets, evidence collection, and
                repetitive compliance tasks drain your team’s productivity.
              </p>
            </div>

            <div className="risk-card card-reactive">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center">
                <TriangleAlert className="text-red-400" size={22} />
              </div>
              <h3 className="pt-5">Reactive Security</h3>
              <p>
                Risks detected too late, forcing teams into firefighting mode.
              </p>
            </div>

            <div className="risk-card card-audit">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center">
                <FileX className="text-red-400" size={22} />
              </div>
              <h3 className="pt-5">Audit Delays & Higher Costs</h3>
              <p>
                Preparing for ISO 27001, SOC 2, PCI-DSS or GDPR audits becomes
                painful, resource-heavy & prone to errors—leading to failed
                audits or costly penalties.
              </p>
            </div>

            <div className="risk-card card-scale">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center">
                <ChartNoAxesCombined className="text-red-400" size={22} />
              </div>
              <h3 className="pt-5">Limited Scalability</h3>
              <p>
                As your cloud footprint grows, manual methods can’t keep pace
                with evolving compliance and regulatory demands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Eye,
  ShieldCheck,
  Workflow,
  Layers,
  Siren,
  ChartNoAxesCombined,
} from "lucide-react";

export default function Solution() {
  return (
    <>
      <div className="solution-container">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          How Suronex Solves This
        </motion.h1>
        <motion.a
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          Transform your compliance and security operations with intelligent
          automation and comprehensive visibility across your entire
          infrastructure.
        </motion.a>
        <div className="solution-grid">
          <div className="solution-card solution-blind">
            <div className="w-12 h-12 rounded-2xl bg-[#0095f6] flex items-center justify-center">
              <Eye color="white" size={22} />
            </div>
            <h3 className="pt-6">Eliminate Blind Spots in Security</h3>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-[#a1a1a1] text-[18px]">
                <span className="w-[6px] h-[6px] rounded-full bg-blue-500" />
                Unified dashboard across AWS, Azure, GCP, SaaS
              </li>
              <li className="flex items-center gap-3 text-[#a1a1a1] text-[18px]">
                <span className="w-[6px] h-[6px] rounded-full bg-blue-500" />
                Continuous monitoring
              </li>
            </ul>
          </div>

          <div className="solution-card solution-automate">
            <div className="w-12 h-12 rounded-2xl bg-[#fc8a00] flex items-center justify-center">
              <Workflow color="white" size={22} />
            </div>
            <h3 className="pt-6">Automate Compliance & Reduce Manual Work</h3>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-[#a1a1a1] text-[18px]">
                <span className="w-[6px] h-[6px] rounded-full bg-blue-500" />
                Save hours of manual effort by streamlining repetitive
                compliance checks.
              </li>
              <li className="flex items-center gap-3 text-[#a1a1a1] text-[18px]">
                <span className="w-[6px] h-[6px] rounded-full bg-blue-500" />
                Reduce dependency on spreadsheets, consultants, and multiple
                tools.
              </li>
              <li className="flex items-center gap-3 text-[#a1a1a1] text-[18px]">
                <span className="w-[6px] h-[6px] rounded-full bg-blue-500" />
                Scale compliance programs at a fraction of the cost of manual
                methods.
              </li>
            </ul>
          </div>

          <div className="solution-card solution-security">
            <div className="w-12 h-12 rounded-2xl bg-[#c54be4] flex items-center justify-center">
              <Layers color="white" size={22} />
            </div>
            <h3 className="pt-6">
              Standardize Security Controls Across Clouds
            </h3>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-[#a1a1a1] text-[18px]">
                <span className="w-[6px] h-[6px] rounded-full bg-blue-500" />
                Prebuilt compliance templates (ISO 27001, SOC 2, PCI-DSS, GDPR,
                HIPAA).
              </li>
              <li className="flex items-center gap-3 text-[#a1a1a1] text-[18px]">
                <span className="w-[6px] h-[6px] rounded-full bg-blue-500" />
                Enforce consistent policies and controls across all cloud
                environments.
              </li>
            </ul>
          </div>

          <div className="solution-card solution-risk">
            <div className="w-12 h-12 rounded-2xl bg-[#00c75c] flex items-center justify-center">
              <Siren color="white" size={22} />
            </div>
            <h3 className="pt-6">Proactive Risk Detection & Remediation </h3>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-[#a1a1a1] text-[18px]">
                <span className="w-[6px] h-[6px] rounded-full bg-blue-500" />
                Real-time compliance scoring, and misconfiguration alerts.
              </li>
              <li className="flex items-center gap-3 text-[#a1a1a1] text-[18px]">
                <span className="w-[6px] h-[6px] rounded-full bg-blue-500" />
                Prioritized remediation guidance helps teams fix issues before
                audits or breaches.
              </li>
              <li className="flex items-center gap-3 text-[#a1a1a1] text-[18px]">
                <span className="w-[6px] h-[6px] rounded-full bg-blue-500" />
                One-click audit-ready reports for faster certification (ISO, SOC
                2, PCI, HIPAA).
              </li>
            </ul>
          </div>

          <div className="solution-card solution-reactive">
            <div className="w-12 h-12 rounded-2xl bg-[#d16f23] flex items-center justify-center">
              <ShieldCheck color="white" size={22} />
            </div>
            <h3 className="pt-6">Move from Reactive to Proactive Security</h3>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-[#a1a1a1] text-[18px]">
                <span className="w-[6px] h-[6px] rounded-full bg-blue-500" />
                Continuous compliance monitoring and risk assessments.
              </li>
              <li className="flex items-center gap-3 text-[#a1a1a1] text-[18px]">
                <span className="w-[6px] h-[6px] rounded-full bg-blue-500" />
                Proactive alerts ensure risks are addressed early, not after
                damage is done.
              </li>
            </ul>
          </div>

          <div className="solution-card solution-scale">
            <div className="w-12 h-12 rounded-2xl bg-[#00c7bc] flex items-center justify-center">
              <ChartNoAxesCombined color="white" size={22} />
            </div>
            <h3 className="pt-6">Future-Proof & Scalable</h3>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-[#a1a1a1] text-[18px]">
                <span className="w-[6px] h-[6px] rounded-full bg-blue-500" />
                Flexible framework that grows with your business and evolving
                regulations.
              </li>
              <li className="flex items-center gap-3 text-[#a1a1a1] text-[18px]">
                <span className="w-[6px] h-[6px] rounded-full bg-blue-500" />
                Support for multi-cloud, hybrid, and SaaS applications.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

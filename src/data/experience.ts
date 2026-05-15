import type { ExperienceEntry } from "@/types";

export const experiences: ExperienceEntry[] = [
  {
    id: "i4i-2025",
    role: "Software Developer (Intern)",
    organization: "Infrastructures for Information, Inc. (i4i)",
    type: "work",
    startDate: "May 2025",
    endDate: "Aug 2026",
    bullets: [
      "Built and maintained features for A4L, a regulatory document management platform serving 100+ pharma clients including AstraZeneca, Pfizer, and Sandoz.",
      "Migrated 30+ components from Internet Explorer/ActiveX to Chromium and WebView2 by refactoring 1,000+ lines of legacy JavaScript and VBA, introducing async patterns and eliminating IE dependencies.",
      "Rewrote a legacy XSLT document extraction pipeline in C# using the OpenXML SDK, achieving a 20% performance uplift and improving output accuracy and maintainability.",
      "Identified and verified 50+ defects via systematic test script execution on QaTraq, diagnosing installation issues and confirming fixes ahead of client-facing releases.",
    ],
    logoPlaceholder: "i4i",
    logoUrl: "/logo/i4i_logo.jpg",
  },
  {
    id: "emailgistics-2024",
    role: "Junior Software Developer (Intern)",
    organization: "Emailgistics Corp.",
    type: "work",
    startDate: "May 2024",
    endDate: "Aug 2024",
    bullets: [
      "Maintained and enhanced a SaaS inbox management product for Microsoft Outlook used by 250+ teams including McKesson Canada, ADP, and Canadian Tire.",
      "Designed and delivered drill-down analytics pages enabling users to inspect granular inbox activity per statistic, integrating REST APIs between a Vue.js frontend and a Go backend backed by MongoDB.",
      "Fixed 20+ full-stack bugs, managed code on Bitbucket, and supported production releases through code reviews and Jenkins deployments.",
    ],
    logoPlaceholder: "EG",
    logoUrl: "/logo/emailgistics_logo.jpg",
  },
];

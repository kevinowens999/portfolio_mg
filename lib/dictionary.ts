// UI copy for both locales. Longer-form résumé content (the experience
// timeline) lives localized in lib/data.ts; this file holds page chrome.

import type { Lang } from "@/lib/i18n";

export const dictionary = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      role: "Senior Full Stack & AI Engineer | Web & Mobile",
      tagline:
        "Engineering software that grows revenue and moves business forward.",
      getInTouch: "Get in touch",
      downloadResume: "Download Resume",
      scrollDown: "Scroll down",
    },
    availability: {
      availableFrom: "Consulting & mentoring from {date}",
      available: "Taking on consulting & mentoring",
      limited: "Limited consulting capacity",
      unavailable: "Not taking on new engagements",
    },
    about: {
      title: "About Me",
      p1: "I turn complex business problems into software that earns its place: helping teams grow revenue, serve customers better, and get more done with less manual work. Based in Houston, Texas, I'm a senior full stack and AI engineer with 15+ years delivering web, mobile, and enterprise applications?from technical design through deployment and handoff.",
      p2: "My work connects engineering decisions to business results. At PwC, I lead AI-enabled client applications, including finance document review and permission-aware knowledge retrieval. Across roles at AT&T, NTT DATA, and EthosEnergy, I've built billing investigation tools, field service applications, and operational systems. I use AI where it can reduce repetitive work and save time, with the testing, access controls, and human oversight needed for dependable delivery.",
      p3: "I'm also a lucky husband and a proud dad of three. Family keeps me grounded in what matters: making good use of time, taking responsibility, and building things people can rely on. I bring that same perspective to every engagement?understand the business, make clear decisions, and deliver practical results.",
      skillsTitle: "Skills & Expertise",
      skillGroups: {
        backend: "Backend",
        frontend: "Frontend & Mobile",
        cloud: "Cloud & Data",
        devops: "DevOps & Delivery",
        ai: "AI & Practices",
      },
      location: "Location",
      locationValue: "Houston, TX, USA",
      experience: "Experience",
      experienceValue: "15+ Years",
      education: "Education",
      educationValue: "Master's Degree, Computer Science",
      languages: "Focus",
      languagesValue: "Web, Mobile & AI",
    },
    timeline: {
      title: "Experience",
      subtitle:
        "From enterprise applications to web, mobile, and AI engineering. Explore each role for the work, technologies, and delivery experience.",
      fullTime: "Professional role",
      sideVenture: "Side venture",
      progression: "Progression",
      skillsTech: "Skills & technologies",
      today: "TODAY",
      present: "Present",
      now: "now",
      close: "Close",
      viewTimeline: "Timeline",
      viewList: "List",
      viewLabel: "View",
      location: "Location",
    },
    projectsSection: {
      title: "Projects",
      subtitle:
        "Selected work across AI, client platforms, healthcare CRM, mobile subscriptions, commerce, and marketplace systems.",
      viewProject: "Visit site",
      viewCode: "View Code",
      viewBrand: "Brand system",
      viewDetails: "View details",
      statusActive: "Active",
      statusPaused: "Paused",
      statusSunset: "Sunset",
      builtWith: "Built with",
      backToProjects: "Back to projects",
      technologies: "Technologies",
      screenshots: "Screenshots",
      screenshotsSoon: "Screenshots coming soon.",
      hostedOn: "Hosted on",
      runsLocally: "Runs locally",
    },
    recommendations: {
      title: "Recommendations",
      subtitle: "What colleagues and clients have said, in their own words.",
      seeAll: "See all recommendations",
      readFull: "Read full",
      source: "Source: LinkedIn",
      backHome: "Back to home",
      pageSubtitle:
        "Unedited recommendations from colleagues, clients, and teammates — each in the language it was written, straight from LinkedIn.",
      translatedFrom: "Translated · original in {lang}",
      seeOriginal: "See original",
      seeTranslation: "See translation",
      langNames: { en: "English", pt: "Portuguese" },
    },
    contact: {
      title: "Get In Touch",
      subtitle:
        "Interested in working together or have a question? Feel free to reach out through any of the channels below.",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "Your email",
      subject: "Subject",
      subjectPlaceholder: "Subject",
      message: "Message",
      messagePlaceholder: "Your message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent! I'll get back to you soon.",
      error: "Something went wrong. Please try again or email me directly.",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};

export type Dictionary = (typeof dictionary)["en"];
export function getDict(_lang: Lang): Dictionary { return dictionary.en; }

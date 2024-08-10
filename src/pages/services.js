import { BookCheck, FileTextIcon, ShieldAlert, Speech } from "lucide-react";
import { BentoCard, BentoGrid } from "src/components/magicui/bento-grid";
import ThreatDetectionImage from "src/assets/image/error, web development _ website, webpage, browser, alert, warning, meltdown, danger@2x.png"
import ComplianceImage from "src/assets/image/e-commerce _ service, receipt, document, confirm, complete, checkmark, server, waiter@2x.png"
import ConsultingImage from "src/assets/image/search _ people, find, magnifier, employee, man, woman, people@2x.png"

const services = [
  {
    Icon: ShieldAlert,
    name: "Threat Detection",
    description:
      "Identify and mitigate potential threats before they become critical issues.",
    href: "/",
    cta: "Learn more",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-4",
    background: <img src={ThreatDetectionImage} className="hidden lg:inline absolute opacity-60" />,
  },
  {
    Icon: BookCheck,
    name: "Compliance",
    description:
      "Ensure your business meets all regulatory requirements with our compliance services.",
    href: "/",
    cta: "Learn more",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-4",
    background: <img src={ComplianceImage} className="hidden lg:inline absolute opacity-60" />,
  },
  {
    Icon: Speech,
    name: "Consulting",
    description:
      "Expert advice and strategies to enhance your cybersecurity posture.",
    href: "/",
    cta: "Learn more",
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-4",
    background: <img src={ConsultingImage} className="hidden lg:inline absolute opacity-60" />,
  },
];

export function Services() {
  return (
    <div id="service" className="flex flex-col py-24 lg:py-32 px-20 lg:px-28 gap-10">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-xl font-medium">
          We offer a range of services to protect your business from cyber
          threats. <span className="text-yellow-500">Our services include:</span>
        </p>
      </div>
      <BentoGrid className="lg:grid-rows-1">
        {services.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}

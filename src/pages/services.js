import { BookCheck, FileTextIcon, ShieldAlert, Speech } from "lucide-react";
import { BentoCard, BentoGrid } from "src/components/magicui/bento-grid";

const services = [
  {
    Icon: ShieldAlert,
    name: "Threat Detection",
    description:
      "Identify and mitigate potential threats before they become critical issues.",
    href: "/",
    cta: "Learn more",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-4",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
  },
  {
    Icon: BookCheck,
    name: "Compliance",
    description:
      "Ensure your business meets all regulatory requirements with our compliance services.",
    href: "/",
    cta: "Learn more",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-4",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
  },
  {
    Icon: Speech,
    name: "Consulting",
    description:
      "Expert advice and strategies to enhance your cybersecurity posture.",
    href: "/",
    cta: "Learn more",
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-4",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
  },
];

export function Services() {
  return (
    <div className="flex flex-col py-32 px-24 gap-10">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p>
          We offer a range of services to protect your business from cyber
          threats. Our services include:
        </p>
      </div>
      <BentoGrid className="lg:grid-rows-3">
        {services.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}

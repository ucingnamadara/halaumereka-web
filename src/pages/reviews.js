import { SlideTestimonial } from "src/components/hyperui/slide-testimonial";

const reviews = [
  {
    star: 5,
    name: "Jane Doe, CTO of Tech Innovators Inc.",
    title: "Exceptional Service and Expertise",
    review:
      "CyberSecure Solutions quickly identified vulnerabilities and implemented robust security measures. We now feel confident our data is protected. Highly recommend!”",
  },
  {
    star: 5,
    name: "John Smith, CEO of Global Enterprises",
    title: "Peace of Mind with Proactive Protection",
    review:
      "Thanks to CyberSecure Solutions, we’ve seen a significant reduction in cyber threats. Their proactive approach gives us peace of mind.",
  },
  {
    star: 5,
    name: "Thorough and Efficient Security Solutions",
    title: "Emily Johnson, IT Manager at SecureTech",
    review:
      "CyberSecure Solutions provided a comprehensive security audit and tailored solutions. Their support team is always available and responsive.",
  },
];

export function Reviews() {
  return (
    <div>
      <SlideTestimonial content={reviews} />
    </div>
  );
}

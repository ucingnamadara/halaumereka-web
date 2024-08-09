import { SlideTestimonial } from "src/components/hyperui/slide-testimonial";

const reviews = [
  {
    star: 5,
    name: "Jane Doe, CTO of Tech Innovators Inc.",
    title: "Exceptional Service and Expertise",
    review:
      "Halau Mereka Solutions quickly identified vulnerabilities and implemented robust security measures. We now feel confident our data is protected. Highly recommend!”",
  },
  {
    star: 4,
    name: "John Smith, CEO of Global Enterprises",
    title: "Peace of Mind with Proactive Protection",
    review:
      "Thanks to Halau Mereka Solutions, we’ve seen a significant reduction in cyber threats. Their proactive approach gives us peace of mind.",
  },
  {
    star: 5,
    name: "Thorough and Efficient Security Solutions",
    title: "Emily Johnson, IT Manager at SecureTech",
    review:
      "Halau Mereka Solutions provided a comprehensive security audit and tailored solutions. Their support team is always available and responsive.",
  },
];

export function Reviews() {
  return (
    <section className="bg-yellow-400" id="testimony">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 justify-center items-center lg:gap-12">
          <div className="max-w-xl text-center justify-self-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>

            <p className="mt-4 font-medium">
              Read on and see why our users are raving about their journey with
              us!
            </p>
          </div>
        <SlideTestimonial content={reviews} />
        </div>
      </div>
    </section>
  );
}

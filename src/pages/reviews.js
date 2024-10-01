import { SlideTestimonial } from "src/components/hyperui/slide-testimonial";

const reviews = [
  {
    star: 5,
    name: "Azmi, Participant of the ‘Cybersecurity Goes to Campus’ Webinar",
    title: "More webinars should be held with more interesting topics",
    review:
      "",
  },
  {
    star: 5,
    name: "Rizal, Participant of the ‘Cybersecurity Goes to Campus’ Webinar",
    title: "HalauMereka provided a cybersecurity webinar that was very useful for us students who are learning about NGFW and penetration testing in the industry.",
    review:
      "",
  },
  {
    star: 5,
    name: "Sarah M, Participant of the ‘Cybersecurity Goes to Campus’ Webinar",
    title: "Topics that are not available on campus, hopefully, there will be more events like this and if possible, offline.",
    review:
      "",
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

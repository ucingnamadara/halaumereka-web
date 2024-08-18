import HalauMerekaBlackLogo from "src/assets/logo/Logo for Dark Mode with Black background.png";

export function About() {
  return (
    <div
      id="about"
      className="container:none flex flex-col lg:flex-row items-center justify-center gap-14 py-32 px-4 md:px-24 lg:px-32 bg-black text-white"
    >
      <img src={HalauMerekaBlackLogo} className="h-max w-[500px] lg:w-6/12" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-yellow-500 lg:w-6/12">
          Who We Are
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold">
          Integrity, vigilance, and excellence
        </h2>
        <p>
          At Halau Mereka, we are dedicated to safeguarding your digital world.
          Established in various years, our mission is to provide cutting-edge
          cybersecurity solutions that protect businesses and individuals from
          evolving cyber threats.
        </p>
        <p>
          Our team of seasoned experts combines deep industry knowledge with
          innovative technology to deliver comprehensive security services. We
          believe in a proactive approach, constantly monitoring and adapting to
          the ever-changing landscape of cyber threats to ensure our client's
          data and systems remain secure.
        </p>
      </div>
    </div>
  );
}

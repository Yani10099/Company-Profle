'use-client'

import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Technology Consulting",
        4000, // wait 1s before replacing "Mice" with "Hamsters"
        "Software Development",
        4000,
        "System Integration",
        4000,
        "Cybersecurity",
        4000,
        "Training and Development",
        4000,
      ]}
      speed={20} // slower speed to make the animation more visible
      className="text-[4rem] md:text-[6rem] text-[#DEF9C4] font-bold uppercase" // increased font size and changed color to a light green
      repeat={Infinity}
    />
  );
};

export default TextEffect;
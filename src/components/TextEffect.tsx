import { Box } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <Box display="inline-block" width="fit-content" fontSize="4xl"  color="green" bg="white" padding="10px">
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
      speed={40} 
      
      className="text-[10rem] md:text-[12rem] text-[#DEF9C4] font-bold uppercase" 
      repeat={Infinity}
    />
    </Box>
   
  );
};

export default TextEffect;
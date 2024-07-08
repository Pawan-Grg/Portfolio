import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import twc from "../../../functions/twc";

const Scrollwheel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollData = [
    "Pawan Gurung",
    "Software Developer",
    "Web Developer",
    "Game Developer",
    "Math Enthusiast",
    "MERN Developer",
    "C++ programmer",
    "System developer",
    "Python programmer",
    "Django developer"
  ];
  
  const updateRotation = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % scrollData.length);
  };

  useEffect(() => {
    const interval = setInterval(updateRotation, 3000);
    return () => clearInterval(interval);
  }, []);


  const getAdjacentIndex = () => {
    let x1 = currentIndex === scrollData.length - 1 ? 0 : currentIndex + 1;
    let x2 = currentIndex === 0 ? scrollData.length - 1 : currentIndex - 1;
    return [x1, x2];
  };

  const getRotationVal = (index) => {
    let rotationVal = ((index - currentIndex) * 360) / scrollData.length;
    if (rotationVal > 180) {
      rotationVal -= 360;
    } else if (rotationVal < -180) {
      rotationVal += 360;
    }
    return rotationVal;
  } 

  return (
    <div className="w-1/2 h-[calc(100vh-4rem)] flex justify-center items-center relative">
      <div
        className="h-full aspect-square bg-primary-1 rounded-full absolute top-1/2 flex -translate-y-1/2 right-0 translate-x-1/2 items-center p-2 origin-center"
        animate={{ rotate: `${(currentIndex * 360) / scrollData.length}deg` }}
      >
        <div className="h-1/5 aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary-2 rounded-full hover:bg-secondary-2/50" />
        {scrollData.map((datum, index) => {
          let initial_deg = (360 / scrollData.length) * index;
          let opacity = () => {
            return getAdjacentIndex().includes(index) ? 0.5 : 0.25;
          };
          return (
            <motion.span
              style={{
                position: "absolute",
                width: "50%",
                transformOrigin: "bottom right",
                rotate: `${initial_deg}deg`,
              }}
              animate={{
                opacity: index === currentIndex ? 1 : opacity(),
                rotate: `${getRotationVal(index)}deg`
              }}
              key={index}
            >
              <span className="truncate"
                style={{
                  position: "absolute",
                  width: "75%",
                  fontFamily: "Roboto Mono",
                  fontSize: "1.5rem",
                  color: twc.theme.colors.primary[2],
                  textAlign: "center",
                  fontWeight: "bold"
                }}
              >
                {datum}
              </span>
            </motion.span>
          );
        })}
      </div>
    </div>
  );
};

export default Scrollwheel;
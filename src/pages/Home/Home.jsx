// import Transition from "../../functions/Transition.jsx";
import { useGSAP } from "@gsap/react";
import bgVid from "../../assets/videos/bg.mp4";
import gsap from "gsap";
import Description from "./Description/Description";
import DescriptionR from "./DescriptionR/DescriptionR.jsx";
import Transition from "../../functions/Transition.jsx";
const Home = ({ routes }) => {
  const tml = gsap.timeline({});
  useGSAP(() => {
    // Animate the video
    tml.from(
      ".bgVid",
      { opacity: 0, duration: 0.6, ease: "circ.inOut" }
    );
    // Animate the text il slide
    tml.fromTo(
      ".il-slide",
      { x: "-100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 0.3, ease: "circ.inOut", stagger: 0.2 }
    );
    // Animate the text il slide right
    tml.fromTo(
      ".il-rslide",
      { x: "100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 0.3, ease: "circ.inOut", stagger: 0.2 }
    );
  }, []);
  return (
    <div className="py-8 section overflow-hidden flex flex-row">
      <video
        className="w-full h-screen object-cover select-none absolute left-1/2 -translate-x-1/2 top-0 bgVid -z-10 opacity-40"
        id="bgVid"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bgVid} type="video/mp4" />
      </video>
      <Description routes={routes} slide/>
      <DescriptionR />
    </div>
  );
};

export default Transition(Home);

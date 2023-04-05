import Particles from "react-tsparticles";
import ParticleBackground from "react-particle-backgrounds";

const title = "sam";

const ParticlesBg = () => {
  const settings = {
    canvas: {
      canvasFillSpace: true,
      width: 200,
      height: 200,
      useBouncyWalls: false,
    },
    particle: {
      particleCount: 10,
      color: "gray",
      minSize: 2,
      maxSize: 5,
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 360,
      minSpeed: 1,
      maxSpeed: 3,
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 3000,
    },
  };

  return (
    <ParticleBackground
      settings={settings}
      className="mt-[-150px] dark:bg-slate-800 lg:mt-[-100px]"
      title="sam"
    ></ParticleBackground>
  );
};

export default ParticlesBg;

import React from "react";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadLinksPreset(main); // load the 'links' preset
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "links",
        background: {
          color: {
            value: "#000000"  // black background like your video
          }
        },
        particles: {
          color: {
            value: "#ffffff"  // white particles
          },
          links: {
            color: "#ffffff"  // white lines
          }
        }
      }}
    />
  );
};

export default ParticlesBackground;
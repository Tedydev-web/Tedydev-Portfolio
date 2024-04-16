// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import experience from "/public/lottie/study.json";

function Experience() {
  return (
    <div
      id="experience"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-3 grid-rows-3 gap-8 lg:gap-16">
          {/* Card at top-left */}
          <div
            className="relative"
            style={{ gridColumn: "1 / 2", gridRow: "1 / 2" }}
          >
            <GlowCard identifier="top-left" className="card">
              {renderCardContent(experiences[0])}
            </GlowCard>
          </div>

          {/* Card at top-right */}
          <div
            className="relative"
            style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}
          >
            <GlowCard identifier="top-right" className="card">
              {renderCardContent(experiences[1])}
            </GlowCard>
          </div>

          {/* Card at center */}
          <div
            className="relative"
            style={{ gridColumn: "2 / 3", gridRow: "2 / 3" }}
          >
            <GlowCard identifier="center" className="card">
              <AnimationLottie animationPath={experience} />
            </GlowCard>
          </div>

          {/* Card at bottom-left */}
          <div
            className="relative"
            style={{ gridColumn: "1 / 2", gridRow: "3 / 4" }}
          >
            <GlowCard identifier="bottom-left" className="card">
              {renderCardContent(experiences[2])}
            </GlowCard>
          </div>

          {/* Card at bottom-right */}
          <div
            className="relative"
            style={{ gridColumn: "3 / 4", gridRow: "3 / 4" }}
          >
            <GlowCard identifier="bottom-right" className="card">
              {renderCardContent(experiences[3])}
            </GlowCard>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderCardContent(experienceItem) {
  return (
    <div className="p-3 relative card-content">
      <Image
        src="/blur-23.svg"
        alt="Hero"
        width={1080}
        height={200}
        className="absolute bottom-0 opacity-80"
      />
      <div className="flex justify-center">
        <p className="text-xs sm:text-sm text-[#16f2b3]">
          {experienceItem.duration}
        </p>
      </div>
      <div className="flex items-center gap-x-8 px-3 py-5">
        <div className="text-violet-500 transition-all duration-300 hover:scale-125">
          <BsPersonWorkspace size={36} />
        </div>
        <div>
          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
            {experienceItem.title}
          </p>
          <p className="text-sm sm:text-base">{experienceItem.company}</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;

import {
  Html,
  Css,
  Js,
  TypeScript,
  C,
  Figma,
  Python,
  TailwindCss,
  BootStrap,
  ReactJs,
  NextJs,
  Saudi,
  UnitedKingdom,
  France,
} from "../Constants";

export default function Skills() {
  return (
    <section
      id="skills"
      class="skills sm:px-[200px] px-[20px] sm:pt-[100px] pt-[105px]"
    >
      <h1 class="font-bold sm:text-6xl text-4xl pb-[20px] text-[#3572EF]">
        Skills:
      </h1>
      <div class="using-now-icon">
        <h3 class="font-bold sm:text-4xl text-2xl sm:ml-[80px] ml-[40px] sm:mb-[50px] mb-[25px] text-[#5BBCFF]">
          - Using now:
        </h3>
        <div class="flex flex-wrap sm:gap-x-[90px] gap-x-[50px] sm:gap-y-[50px] gap-y-[25px]">
          <Html />
          <Css />
          <Js />
          <C />
          <Python />
          <Figma />
          <TailwindCss />
          <BootStrap />
          <ReactJs />
        </div>
      </div>

      <div class="learning">
        <h3 class="font-bold sm:text-4xl text-2xl sm:pt-[75px] pt-[35px] sm:ml-[80px] ml-[40px] sm:mb-[50px] mb-[25px] text-[#5BBCFF]">
          - Learning:
        </h3>
        <div class="flex flex-wrap sm:gap-x-[90px] gap-x-[50px] sm:gap-y-[50px] gap-y-[25px]">
          <TypeScript />
          <NextJs />
        </div>
      </div>

      <div class="Other skills:">
        <h3 class="font-bold sm:text-4xl text-2xl sm:pt-[75px] pt-[35px] sm:ml-[80px] ml-[40px] sm:mb-[50px] mb-[25px] text-[#5BBCFF]">
          - Other skills:
        </h3>
        <div class="flex flex-wrap sm:gap-x-[90px] gap-x-[50px] sm:gap-y-[50px] gap-y-[25px]">
          <Saudi />
          <UnitedKingdom />
          <France />
        </div>
      </div>
    </section>
  );
}

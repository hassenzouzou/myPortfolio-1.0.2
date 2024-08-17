
import arrobaIcon from "../Assets/icons/arroba.png";
import githubIcon from "../Assets/icons/github.png";
import linkedinIcon from "../Assets/icons/linkedin.png";
import hassenImg from "../Assets/imgs/ACF-me01.jpg";

export default function Main() {
  return (
    <section
      id="main"
      class="main flex sm:justify-start justify-center items-center sm:pb-[140px] pb-[0px] relative"
    >
      <div class="main-text-n-icon sm:ml-[150px] ml-[0] sm:mt-[250px] mt-[485px] flex flex-col sm:w-[555px] w-[313px] sm:text-left text-center">
        <p class="sm:text-3xl text-xl text-[#3572EF]">Front-end dev</p>
        <h1 class="font-bold sm:text-6xl text-4xl">Hi it's me:</h1>
        <h1 class="font-bold sm:text-6xl text-4xl">
          HA<span class="text-[#3572EF]">SS</span>EN
          <span class="text-[#3572EF]">Z</span>OU
          <span class="text-[#3572EF]">Z</span>OU
        </h1>
        <p>
          Empowering user experiences as a Front-End Developer, crafting
          visually stunning and responsive interfaces with a blend of creativity
          and precision.
        </p>
        <a
          class="main-resume my-[20px] border-black border-[3px] rounded-2xl py-2 sm:mb-[50px] mb-[30px] text-[#3572EF] hover:text-[#050C9C] duration-300 font-bold sm:text-3xl text-2xl text-center active:bg-blue-400 "
          href="#"
          target="_blank"
        >
          My Resume
        </a>
        <div class="main-icons flex">
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHxjXpcBjBCmthQcBVhXNqhbgBXjtNpxKJbsdBlHjcjTpScWgVwFxRpwzrtFkRJKDMNbcxG"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="sm:w-[50px] w-[30px] mr-[25px] active:w-[49px]"
              src={arrobaIcon}
              alt=""
            />
          </a>
          <a
            href="https://github.com/hassenzouzou"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="sm:w-[50px] w-[30px] mr-[25px]"
              src={githubIcon}
              alt=""
            />
          </a>
          <a
            href="https://www.linkedin.com/in/hassen-zouzou/"
            target="_blank"
            rel="noreferrer"
          >
            <img class="sm:w-[50px] w-[30px]" src={linkedinIcon} alt="" />
          </a>
        </div>
      </div>
      <div class="blob-n-pic">
        <div class="blob z-[5] absolute sm:-right-[248px] right-[45px] sm:-top-[175px] top-[140px]">
          <svg
            class="sm:w-[1000px] w-[300px]"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#3572EF"
              d="M40.7,-71.9C53.6,-63,65.4,-53.8,68.9,-41.8C72.5,-29.8,67.6,-14.9,67.9,0.1C68.2,15.2,73.5,30.3,68.8,40.3C64,50.2,49.2,54.8,36,61.7C22.9,68.6,11.4,77.7,-0.1,77.9C-11.6,78,-23.3,69.3,-37.5,63C-51.8,56.8,-68.6,53,-79.4,43C-90.1,32.9,-94.8,16.4,-90.5,2.5C-86.2,-11.5,-72.9,-22.9,-63.1,-34.8C-53.4,-46.6,-47.2,-58.9,-37.3,-69.5C-27.4,-80,-13.7,-88.9,0.1,-89.1C13.9,-89.3,27.8,-80.7,40.7,-71.9Z"
              transform="translate(100 100)"
            />
          </svg>
          <img
            class="main-pic absolute sm:top-[287px] top-[75px] sm:left-[145px] left-[70px] rounded-[50%] sm:w-[500px] w-[150px]"
            src={hassenImg}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

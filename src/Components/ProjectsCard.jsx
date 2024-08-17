import { cardsInfo } from "../Constants";

export default function ProjectsCard() {
  const listItems = cardsInfo.map((project) => {
    return (
      <a href={project.projectUrl} target="_blank" rel="noreferrer">
        <div class="card sm:flex-row flex-col flex justify-between items-center rounded-3xl overflow-x-hidden border-[2px] border-black sm:mb-[50px] mb-[25px]">
          <div class="project-description sm:w-[510px] w-[300px] sm:px-[20px] px-[5px] my-[5px] sm:text-left text-center">
            <h1 class="font-bold sm:text-4xl text-2xl">
              {project.projectTitle}
            </h1>
            <h3 class="sm:text-2xl text-xl">{project.technologies}</h3>
            <p>{project.description}</p>
          </div>
          <img
            class="sm:w-[50%] w-[100%] border-l-[2px] border-black"
            src={project.imgSrc}
            alt=""
          />
        </div>
      </a>
    );
  });
  return (
    <section
      id="projects"
      class="sm:px-[200px] px-[10px] pt-[100px] flex flex-col justify-center items-center"
    >
      <h1 class="font-bold sm:text-6xl text-4xl sm:mb-[50px] mb-[25px] text-[#3572EF]">
        Projects:
      </h1>
      {listItems}
    </section>
  );
}

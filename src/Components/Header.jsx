

export default function Header() {
  return (
    <div class="px-14 pt-[25px] z-10 fixed w-full backdrop-blur-sm">
      <div
        class="container-head flex sm:flex-row flex-col justify-between items-center"
      >
        <h1 class="font-extrabold text-5xl text-[#0E46A3]">BLUE.</h1>
        <div
          class="nav-bar font-bold sm:text-2xl text-xl flex justify-between items-center"
        >
          <a href="#skills" class="mr-8 hover:text-[#3D3B40] duration-500"
            >Skills</a
          >
          <a href="#projects" class="mr-8 hover:text-[#3D3B40] duration-500"
            >Projects</a
          >
          <a href="#contact" class="hover:text-[#3D3B40] duration-500"
            >Contact</a
          >
        </div>
      </div>
    </div>
  );
}

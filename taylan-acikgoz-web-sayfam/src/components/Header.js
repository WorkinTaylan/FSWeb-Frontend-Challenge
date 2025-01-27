import "../Header.css";

function Header() {
  return (
    <div className="header">
      <div className="flex flex-col mx-auto px-6 md:px-12 lg:px-24 xl:px-60 2xl:px-80 gap-10">
        <div className="text-white md:text-[#CBF281] font-bold md:text-3xl text-2xl md:leading-10 mt-9 text-center md:text-left">
          Taylan Açıkgöz
        </div>
        <div className="mb-10 md:mb-16 flex flex-col-reverse items-center md:flex-row gap-10 md:gap-20">
          <div className="flex flex-col justify-end items-center md:items-start self-stretch gap-9 md:w-8/12 ">
            <h1 className="text-white md:text-[#CBF281] font-bold self-stretch text-xl md:text-5xl leading-2 md:leading-[3rem] text-center md:text-left ">
              I am a Full Stack Developer
            </h1>
            <p className="text-[#FFFF] text-base py-4 md:text-2xl text-center md:text-left">
              ...who likes to craft solid and scalable products with great user
              experiences.
            </p>
            <div className="flex flex-row md:flex-row items-center gap-1 md:gap-4 lg:gap-6 text-[#3730A3] w-full md:w-auto h-auto justify-center md:justify-start">
              <button className="p-3 justify-center flex flex-row items-center gap-2 bg-white border border-solid border-[#3730A3] rounded-md md:w-auto">
                <i className="fa fa-github"></i>
                <a href="https://github.com/taylanacikgoz">Github</a>
              </button>
              <button className="p-3 justify-center flex flex-row items-center gap-2 bg-white border border-solid border-[#3730A3] rounded-md md:w-auto">
                <i className="fa fa-linkedin-square"></i>
                <a href="https://www.linkedin.com/in/taylan-a%C3%A7%C4%B1kg%C3%B6z-757565153/">
                  Linkedin
                </a>
              </button>
            </div>
          </div>
          <div className=" w-32 md:w-1/2 flex justify-center items-center">
            <img
              className="rounded-2xl shadow md:shadow-md max-h-96"
              src="https://img.freepik.com/premium-vector/coder-developer-concentrated-working-project-developing-programming-coding-technologies_569013-336.jpg?w=2000"
              alt="taylan profil pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

import Redux from "../../src/Redux.png";
import CSS from "../../src/CSS.png";
import Figma from "../../src/Figma.png";
/*
<div className="flex flex-col md:flex-row items-start md:pl-40 md:mt-9 w-full">
      <h2 className="text-[#4832D3] text-3xl">Skills</h2>
      <div className="flex flex-col md:flex-col items-start md:gap-5 ml-40">
        <div className="flex flex-row justify-center gap-5 items-center rounded-3xl md:pr-5">
          <img
            className="object-contain w-10 h-10 my-2 md:w-20 md:h-20 rounded-2xl"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            alt="javascript-logo"
          />
          <span className="text-sm md:text-base">JAVASCRIPT</span>
        </div>
        <div className="flex flex-row justify-center gap-5 items-center rounded-3xl md:pr-5">
          <img
            className="object-contain w-10 h-10 my-2 md:w-20 md:h-20 rounded-2xl"
            src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png"
            alt="react-logo"
          />
          <span className="text-sm md:text-base">REACT</span>
        </div>
        <div className="flex flex-row justify-center gap-5 items-center rounded-3xl md:pr-5">
          <img
            className="object-contain w-10 h-10 my-2 md:w-20 md:h-20 rounded-2xl"
            src={Redux}
            alt="redux-logo"
          />
          <span className="text-sm md:text-base">REDUX</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-col items-start md:gap-5 ml-40">
        <div className="flex flex-row justify-center gap-5 items-center rounded-3xl md:pr-5">
          <img
            className="object-contain w-10 h-10 my-2 md:w-20 md:h-20 rounded-2xl"
            src="https://live.staticflickr.com/8065/8220185645_dd4c773717.jpg"
            alt=""
          />
          <span className="text-sm md:text-base">HTML5</span>
        </div>
        <div className="flex flex-row justify-center gap-5 items-center rounded-3xl md:pr-5">
          <img
            className="object-contain w-10 h-10 md:w-20 md:h-20 rounded-2xl"
            src={CSS}
            alt=""
          />
          <span className="text-sm md:text-base">CSS</span>
        </div>
        <div className="flex flex-row justify-center gap-5 items-center rounded-3xl md:pr-5">
          <img
            className="object-contain w-10 h-10 my-2 md:w-20 md:h-20 rounded-2xl"
            src={Figma}
            alt=""
          />
          <span className="text-sm md:text-base">FIGMA</span>
        </div>
      </div>
    </div>
   */ 

    const skills=[
      {
      id:1,
      img:"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      title:"JAVASCRIPT",
      },
      {
      id:2,
      img:"https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png",
      title:"REACT",
      },
      {
      id:3,
      img:"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/redux-icon.png",
      title:"REDUX",
      },
      {
      id:4,
      img:"https://img.freepik.com/free-icon/html5_318-903450.jpg",
      title:"HTML5",
      },
      {
        id:5,
        img:"https://img.icons8.com/color/512/css3.png",
        title:"CSS3",
        },
        {
        id:6,
        img:"https://pbs.twimg.com/profile_images/1304388230335401984/pcvMQO9O_400x400.jpg",
        title:"FIGMA",
        },
  ]

  function Skills() {
    const halfLength = Math.ceil(skills.length / 2); // calculate half length of skills array
  
    const leftColumn = skills.slice(0, halfLength); // slice first half of skills
    const rightColumn = skills.slice(halfLength, skills.length); // slice second half of skills
  
    return (
      <div className="flex flex-col md:flex-row flex-wrap items-start md:pl-40 md:mt-9 justify-between gap-2 w-7/12">
        <h2 className="text-[#4832D3] text-3xl">Skills</h2>
        <div className="flex flex-col items-start text-[#777777]">
          {leftColumn.map((skill) => (
            <div key={skill.id} className="flex items-center mb-2">
              <img
                src={skill.img}
                alt="Languages"
                className="w-16 rounded-2xl border border-solid mr-2 bg-black drop-shadow-2xl"
              />
              <span className="">{skill.title}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start text-[#777777]">
          {rightColumn.map((skill) => (
            <div key={skill.id} className="flex items-center mb-2">
              <img
                src={skill.img}
                alt="Languages"
                className="w-16 rounded-2xl border border-solid mr-2 bg-black drop-shadow-2xl"
              />
              <span>{skill.title}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Skills;

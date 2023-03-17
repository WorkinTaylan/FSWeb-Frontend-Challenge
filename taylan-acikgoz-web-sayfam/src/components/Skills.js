import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";


    const SKILLS=[
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
      img:"Redux.png",
      title:"REDUX",
      },
      {
      id:4,
      img:"https://img.freepik.com/free-icon/html5_318-903450.jpg",
      title:"HTML5",
      },
      {
      id:5,
      img:"CSS.png",
      title:"CSS3",
      },
      {
      id:6,
      img:"Figma.png",
      title:"FIGMA",
      },
  ]

  function Skills() {

    const [sk, setSk] = useState(SKILLS);

    useEffect(()=>{

    axios.post('https://reqres.in/api/users', {SKILLS})
    .then(function (response) {
      console.log(response.data);
      setSk(response.data.SKILLS)
    })
    .catch(function (error) {
      console.log(error);
    });
    },[])
    
    const halfLength = Math.ceil(sk.length / 2); // calculate half length of skills array

    const leftColumn = sk.slice(0, halfLength); // slice first half of skills
    const rightColumn = sk.slice(halfLength, sk.length); // slice second half of skills

    return (
      
      <div className="mx-auto px-6 md:px-12 lg:px-24 xl:px-60 2xl:px-80 py-20 w-full h-1/5">
        <div className=" border-red-600 flex flex-col md:flex-row justify-between items-start gap-8 w-full h-2/3">
          <h2 className="text-[#4832D3] text-5xl font-bold">Skills</h2>
          
          <div className="flex flex-col items-start gap-8 font-medium text-[#777777]">
            {leftColumn.map((skill) => (
              <div key={skill.id} className="flex flex-row gap-6 items-center">
                <img
                  src={skill.img}
                  alt="Languages"
                  className="w-16 rounded-md bg-black drop-shadow-2xl"
                />
                <span className="text-base md:text-2xl">{skill.title}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start gap-8 font-medium text-[#777777]">
            {rightColumn.map((skill) => (
              <div key={skill.id} className="flex flex-row gap-6 items-center">
                <img
                src={skill.img}
                alt="Languages"
                className="w-16 rounded-md bg-black drop-shadow-2xl"
                />
                <span className="text-base md:text-2xl">{skill.title}</span>
              </div>
          ))}
          </div>
          
        </div>
      </div>
      
    );
  }

export default Skills;


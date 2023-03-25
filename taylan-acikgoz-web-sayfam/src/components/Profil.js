import React from "react";

function Profil() {
  return (
   
      <div className="bg-[#4731D3] mx-auto px-6 md:px-12 lg:px-24 xl:px-60 2xl:px-80 py-20 ">
        <div className="flex flex-col gap-8 ">
        <h2 className="font-bold text-5xl text-[#CBF281]">Profile</h2>
        <div className="flex flex-col-reverse md:flex-row gap-8 items-start  w-full ">
            <div className="flex flex-col items-start gap-6 w-full">
              <h4 className="font-medium lg:text-3xl text-white"> Basic Information</h4>
              <div className="flex flex-row gap-8 mt-6 md:w-64">
                <div className="flex flex-col text-sm md:text-base font-semibold ">
                  <span>Doğum tarihi</span>
                  <span>İkamet</span>
                  <span>Eğitim Durumu</span>
                  <span>Tercih Edilen Rol</span>
                </div>
                <div className="flex flex-col text-sm md:text-base font-normal text-white">
                  <span>08.11.1994</span>
                  <span>Ankara</span>
                  <span>İTÜ Jeoloji Müh.</span>
                  <span>Frontend Developer</span>
                </div>
              </div>
            </div>
            <div className=" w-32 md:w-full">
              <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="profil"
            className="w-full rounded-2xl"
            >
              </img>
            </div>
            
            <div className="flex flex-col items-start gap-6 self-stretch mix-blend-normal">
              <h4 className="font-medium lg:text-3xl text-white">About Me</h4>
              <p className="font-normal text-lg leading-7">
              I am a junior developer, have a passion for programming and eager to learn more about software development.
              <br/>
              <br/>
              I am currently working on Node.js by exploring its features, reading documentation as it offers a flexible, powerful platform for building server-side applications. I have worked on various projects as part of my coursework, where I learned how to work collaboratively with other developers, communicate effectively, and solve problems efficiently.
              <br/>
              <br/>
              In addition to my technical skills, I am a quick learner, have strong attention to detail, and am highly organized. I am excited to apply my skills and knowledge to a real-world setting and work as part of a team to create innovative solutions.
              I am always eager to learn more and stay up-to-date with the latest trends and technologies in the industry.
              <br/>
              <br/>
              I am excited about the opportunity to contribute my skills and passion to a dynamic team of developers and to continue to grow and develop as a software engineer. Thank you for considering my personal website.
              </p>
            </div>
        </div>
        </div>
      </div>
    
    );
  }
  

export default Profil;
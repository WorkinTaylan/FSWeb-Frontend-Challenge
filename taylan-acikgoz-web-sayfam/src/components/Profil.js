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
                  <span>İTÜ Jeoloji Müh.
                  </span>
                  <span>Frontend Developer</span>
                </div>
              </div>
            </div>
            <div className=" w-auto md:w-full">
              <img
            src="https://pbs.twimg.com/media/ELp-LAkXUAADue3?format=jpg&name=large"
            alt="Coder lego"
            className="w-full rounded-2xl"
            >
              </img>
            </div>
            
            <div className="flex flex-col items-start gap-6 self-stretch mix-blend-normal">
              <h4 className="font-medium lg:text-3xl text-white">About Me</h4>
              <p className="font-normal text-lg leading-7">
              I am a junior developer, have a passion for programming and eager to learn more about software development and stay up-to-date with the latest trends in technology.
              <br/>
              Except my technical skills, I am a quick learner, have strong attention to detail, and am highly organized. I am excited to apply my skills and knowledge to a real-world setting and work as part of a team to create innovative solutions.
              </p>
            </div>
        </div>
        </div>
      </div>
    
    );
  }
  

export default Profil;
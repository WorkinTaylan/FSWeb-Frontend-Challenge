import React from "react";




function Profil() {
  return (
   
      <div className="bg-[#4731D3] mx-auto px-6 md:px-12 lg:px-24 xl:px-60 2xl:px-80 py-20 ">
        <div className="flex flex-col gap-8 ">
        <h2 className="font-bold text-5xl text-[#CBF281]">Profile</h2>
        <div className="flex flex-row gap-8 items-start  w-full ">
            <div className="flex flex-col items-start gap-6 w-full">
              <h4 className="font-medium lg:text-3xl text-white"> Basic Information</h4>
              <div className="flex flex-row gap-8 mt-6 w-64">
                <div className="flex flex-col text-base font-semibold ">
                  <span>Doğum tarihi</span>
                  <span>İkamet</span>
                  <span>Eğitim Durumu</span>
                  <span>Tercih Edilen Rol</span>
                </div>
                <div className="flex flex-col text-base font-normal text-white">
                  <span>08.11.1994</span>
                  <span>Ankara</span>
                  <span>İTÜ Jeoloji Müh.</span>
                  <span>FrontEnd Developer</span>
                </div>
              </div>
            </div>
            <div className="w-full">
              <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="profil"
            className="w-full rounded-2xl"
            >
              </img>
            </div>
            
            <div className="flex flex-col items-start gap-6 self-stretch mix-blend-normal">
              <h4 className="font-medium text-3xl text-white">About Me</h4>
              <p className="font-normal text-lg leading-7">Workintech'le başlayan yolculuğuma emin adımlarla devam ediyorum. Bügüne kadar öğrendiğim birçok şey...Workintech'le başlayan yolculuğuma emin adımlarla devam ediyorum. Bügüne kadar öğrendiğim birçok şe</p>

            </div>
        </div>
        </div>
      </div>
    
    );
  }
  

export default Profil;
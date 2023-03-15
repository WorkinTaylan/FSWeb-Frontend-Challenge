import ProfilPhoto from "../../src/ProfilPhoto.png";

function Profil() {
    return (
      <div className="flex flex-col gap-5 mt-9 md:pl-40 bg-[#4731D3]">
        <h2 className="text-[#CBF281] text-3xl mt-9 text-center md:text-left">
          Profile
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-5 mt-6 my-10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-white text-xl mb-4">Basic Information</h2>
            <div className="flex flex-row md:flex-row items-center md:items-start gap-3">
              <div className="text-[#02051E] text-sm md:text-base font-semibold md:leading-10 md:w-auto">
                <p>Doğum Tarihi</p>
                <p>İkamet</p>
                <p>Eğitim Durumu </p>
                <p>Tercih edilen Rol</p>
              </div>
              <div className="text-white text-sm md:text-base md:leading-10 md:w-auto">
                <p>08.11.1994</p>
                <p>Ankara</p>
                <p>Lisans Mezun</p>
                <p>Full Stack Developer</p>
              </div>
            </div>
          </div>
          <img
            className="w-full md:w-64 h-auto rounded-3xl mb-6 md:mb-0 md:ml-10 drop-shadow-lg"
            src="https://www.wpdurum.com/uploads/thumbs/en-iyi-erkek-profil-resimleri.jpg"
            alt="My Profil"
          />
          <div className="flex flex-col items-center md:items-start gap-3 ">
            <h2 className="text-white text-xl">About Me</h2>
            <p className="text-white text-base font-thin text-center md:text-left align-top">
              Workintech'le başlayan yolculuğuma araştırarak, öğrenerek gelişerek devam ediyorum...
              
              </p>
          </div>
        </div>
      </div>
    );
  }
  

export default Profil;
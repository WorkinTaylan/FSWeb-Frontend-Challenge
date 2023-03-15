import "../Header.css" 

function Header(){

    return (
        <div className="header">
            <nav className="mt-9 text-white md:text-[#CBF281] font-bold md:text-3xl text-base">Taylan Açıkgöz</nav>
            <div className="max-w-screen-lg flex flex-col items-center h-full md:flex-row">
                <div className="flex flex-col justify-center py-2 pr-5  h-full gap-5">
                    <h1 className="text-white md:text-[#CBF281] font-bold text-xl md:text-2xl lg:text-2xl">I am a Frontend Developer</h1>
                    <p className="text-[#FFFF] text-base py-4 md:text-xl lg:text-xl">...who likes to craft solid and scalable frontend products with great user experiences.</p>
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 lg:gap-6 text-[#3730A3] w-full md:w-auto h-auto">
                        <button className="p-3 justify-center flex flex-row items-center gap-2 bg-white border border-solid border-[#3730A3] rounded-md md:w-auto"><i class="fa fa-github"></i>
                            <a href="https://github.com/WorkinTaylan">Github</a>
                        </button>

                        <button className="p-3 justify-center flex flex-row items-center gap-2 bg-white border border-solid border-[#3730A3] rounded-md md:w-auto"><i class="fa fa-linkedin-square"></i>
                            <a href="https://www.linkedin.com/in/taylan-a%C3%A7%C4%B1kg%C3%B6z-757565153/">Linkedin</a>
                        </button>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                        <img className="md:w-64 w-auto h-auto rounded-2xl mb-40 shadow md:shadow-md" src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg" alt=""></img>
                </div>
            </div>
        </div>
            
    )
}

export default Header;
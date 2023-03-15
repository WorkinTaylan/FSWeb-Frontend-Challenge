import {CiTwitter} from "react-icons/ci";
import { ImCodepen } from "react-icons/im";
import {MdAlternateEmail} from "react-icons/md";
import {FiCodesandbox} from "react-icons/fi";
import {NavLink, Routes, Route} from "react-router-dom";
import Forms from "../components/Form";

function Contact(){
    return(
        <div className="flex flex-col items-center gap-4 py-4">
            <h2 className="text-[#4338CA] text-xl font-bold">Send me a message</h2>
            <p className="text-xs md:text-lg">Got a question or proposal, or just want to say hello? Go ahead.</p>
            <a href="mailto:acikgozta@gmail.com?subject=Mail from my Website" className="text-[#4731D3] md:text-xl">Send Email</a>
            <div className="flex md:flex-row items-start gap-2 text-[#4731D3]">
            
                <CiTwitter/>
           
            <a href="https://codepen.io/Thexhausted">
            <ImCodepen/>
            </a>
            <a href="https://codesandbox.io/u/WorkinTaylan">
            <FiCodesandbox/>
            </a>
            </div>
            <NavLink to="/form" className="hover:text-red-600">
            Click here to see the form
            </NavLink>

            <Routes>
            <Route path="/form" element={<Forms/>}/>
            
            
            </Routes> 
        </div>
        
    )
    }
    export default Contact;
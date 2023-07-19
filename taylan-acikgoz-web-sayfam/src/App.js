import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Profil from "./components/Profil";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  /*const [theme, setTheme]=useState("null");

  useEffect(()=>{
    if(window.matchMedia('(prefers-color-scheme:dark)').matches){
      setTheme('dark');
    }
    else{
      setTheme('light')
    }
  }, []);


  useEffect(()=>{
    if(theme==="dark"){
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitcher=()=>{
    setTheme(theme==="dark"?"light":"dark");
  };
/* dark mode kullanmak istersen returne bunu yerleştir.
  <div className='dark:bg-black cursor-pointer'>
  <div className='bg-gradient-to-r from-[#3730A3] to-[#CBF281]'>
    <button onClick={handleThemeSwitcher} className='bg-black p-2 m-2 rounded-lg text-white'>Dark Mode</button>
  </div>
*/
  return (
    <div>
      <Header />
      <Skills />
      <Profil />
      <Project />
      <Contact />
    </div>
  );
}

export default App;

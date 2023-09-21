import './App.css';
import My from './images/my-img.jpg';
import ReactTyped from "react-typed";
import { Skills } from './Skills';
import Oicon from './images/OUI.png'
import './FadeCss.css'
import LinkedIn from './images/linkedin.png'
import MailIcon from './images/mailto.png'
// import Callto from './images/callto.png'
import GitHubIcon from './images/GIthub.png'
import Downloadicon from './images/download.png'
import { useRef, useState ,useEffect} from 'react';



export default function App() {
    useEffect(() => {
      const handleContextmenu = e => {
          e.preventDefault()
      }
      document.addEventListener('contextmenu', handleContextmenu)
      return function cleanup() {
          document.removeEventListener('contextmenu', handleContextmenu)
      }
  }, [ ])

  const [showUI,setShowUI] = useState(false);
  function hidePopUp() { setShowUI(false);}

  const DResumePopUp = () => {
    const openInNewTab = (url) => {
      window.open(url, "_blank", "noreferrer");
    };
    
    return (
      <><div className='D-wrapper'></div>
        <div className='D-view'>
          

          <h1>Do you want to download resume!</h1>
         <button onClick={()=>openInNewTab('https://drive.google.com/file/d/1lsQ0BP4_0iQw6IS-QwfsyYwg9wj5c8N4/view?usp=sharing')} className='btn-download'>Preview</button>
          <button onClick={hidePopUp} className='btn-cancel'>Cancel</button>

        </div>
      </>
    )
  }
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);

  return (
    
    <div className="main-view">
      
      <div className="header-container">
        <ul className='links-head'>
          <li className='li-logo'>M</li>
          <li className='li-content'>HOME</li>
          <li className='li-content' onClick={() => myRef1.current.scrollIntoView()}>PROFESSIONAL</li>
          <li className='li-content' onClick={() => myRef2.current.scrollIntoView()}>EXPERIENCE</li>
          <li className='li-content' onClick={() => myRef3.current.scrollIntoView()}>CONTACT</li>
        </ul>
      </div>

      <div className='back-scroll-view'>
        <h1 className='content-heading'>Portfolio</h1>

        <div className='Intro-view'>
          <div className='content-div'>
            <div className='content-box'>
              <h1 className='Name-style'>I'm Mihir Acharya,</h1>
              <h2 className='Per-profession'>A Web Developer</h2>
              <h3 className='Animate-style'>

                <ReactTyped strings={[
                  "Great web design without functionality is like a sports car with no engine",
                  "Start with something simple and small, then expand over time",
                  "The purpose of software engineering is to control complexity, not to create it",
                  "Good programmers write code that humans can understand",
                ]} typeSpeed={100} loop />

              </h3>

            </div>
            <img src={My} className='profile-image' alt=''></img>
          </div>
        </div>
        <div className='endBar'></div>

        <div className='Skill-view'>
          <h1 className='skill-h'>
            Skill
          </h1>
          <h2 className='Per-profession' ref={myRef1}>Expertise</h2>
          <div className='skill-contain'>

            {Skills.map((items) => {
              return (<div>

                <img src={items.ico} alt='' className='icon-styles'></img>
                <li key={items.id} className='list-style'>
                  {items.lang}</li>
              </div>
              )
            })}

          </div>
        </div>
        <div className='endBar'></div>

        <div className='Edu-view'>

          <h1 className='skill-h' ref={myRef2}>
            Education
          </h1>
          <h2 className='Per-profession'>Bachelor of Technology</h2>
          <h3 className='edu-h3'>In Computer Science and Engineering from </h3>
          <a href='https://oui.edu.in/'>
            <img src={Oicon} alt='' className='oui-icon'></img></a>
          <h4 className='edu-h4'>2019-2023 Batch</h4>
          <h5 className='edu-h5'>Address: Gate No.1, Sanwer Rd, opposite Revati Range, Jakhya, Indore, Madhya Pradesh 453555</h5>

        </div>
        <div className='endBar'></div>

        <div className='contact'>
          <h1 className='skill-h' ref={myRef3}>Contact</h1>
          <a href='linkedin.com/in/mihir-acharya' target="_blank" rel="noreferrer"><img src={LinkedIn} alt='' className='icon-footer'></img></a>
          <a href='mailto:sibumihir1234@gmail.com' target="_blank" rel="noreferrer"><img src={MailIcon} alt='' className='icon-footer'></img></a>
          <a href='https://github.com/MihirAcharya1' target="_blank" rel="noreferrer"><img src={GitHubIcon} alt='' className='icon-footer'></img></a>
          
          {/* <a href='https://drive.google.com/file/d/1lsQ0BP4_0iQw6IS-QwfsyYwg9wj5c8N4/view?usp=sharing' target="_blank" rel="noreferrer" ><img src={Downloadicon} alt='' className='icon-footer'></img></a> */}
          <img src={Downloadicon} alt='' className='icon-footer' onClick={()=>setShowUI(true)}></img>
          

          {showUI && <DResumePopUp hidePopUp={hidePopUp} />}

        </div>


      </div>
    </div>
  )
}
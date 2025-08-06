import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageheadercontent";
import { Value } from "sass";
import { Animate } from "react-simple-animate";
import './style.scss'
import { FaGoogle } from "react-icons/fa";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { FaDev } from "react-icons/fa";
import { DiApple } from "react-icons/di";
const jobsummary = "I'm a dedicated frontend developer with skills in HTML, CSS, JavaScript, and React.js. I enjoy creating responsive and interactive web applications with clean and user-friendly designs. I also have a basic understanding of MongoDB for backend integration and I'm actively improving my problem-solving abilities through Data Structures and Algorithms in Java. I'm always eager to learn new technologies, take on challenges, and contribute to impactful projects.";
const personalinfo = [
    {
        label:"Name",
        value:"Shreya Arora",
    },
     {
        label:"Address",
        value:"India",
    },
     {
        label:"Email",
        value:"shreyarora367@gmail.com",
    },
     {
        label:"Education",
        value:"Currently Pursing Btech",
    }

]
export default function About(){
    return(
     <section id ="about" className="about">
        <PageHeaderContent
        headerText="About Me"
        icon = {<BsInfoCircleFill size={40}/>}
        />
        <div className="about__content">
            <div className="about__content__personalWrapper">
                 <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateX(-900px)",
            opacity: 0,
          }}
          end={{
            transform: "translateX(0px)",
            opacity: 1,
          }}
        >
            <h3 >Front End Developer</h3>
            <p>{jobsummary}</p>
            </Animate>
             <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateX(500px)",
            opacity: 0,
          }}
          end={{
            transform: "translateX(0px)",
            opacity: 1,
          }}
        >
            <h3 className="personalInformationHeaderText">Personal Information</h3>
            <ul>
                {
                    personalinfo.map((item,i)=>(
                        <li key={i}>
                            <span className="title">{item.label}</span>
                            <span className="value">{item.value}</span>
                        </li>
                    ))
                }
            </ul>
            </Animate>
            </div>
            <div className="about__content__serviceWrapper">
               <div className="about__content__serviceWrapper__innerContent">
                 <div>
                   <FaDev size={60} color="var(--yellow-theme-main-color)"/>
                 </div>
                 <div>
                    <DiApple size={60} color="var(--yellow-theme-main-color)"/>
                 </div>
                  <div>
                    <FaGoogle size={60} color="var(--yellow-theme-main-color)"/>
                  </div>
                   <div>
                    <TfiMicrosoftAlt size={60} color="var(--yellow-theme-main-color)"/>
                    </div> 
                   </div>
                   
            </div>
            
        </div>
     </section>
    )
}
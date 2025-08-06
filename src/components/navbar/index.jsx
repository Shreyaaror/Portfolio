import { useState } from "react"
import { FaBars, FaReact } from "react-icons/fa"
import { HiX } from "react-icons/hi"
import { Link } from "react-router-dom"
import "./style.scss";

export default function Navbar(){
    const [toggleIcon,setToggleIcon] = useState(false)
    const handleToggleIcon = ()=>{
     setToggleIcon(!toggleIcon);
    }
    const data =[
        {
            label: 'home',
            to:'/'
        },
        {
            label: 'About Me',
            to:'/about'
        },
        {
            label: 'Skills',
            to:'/skills'
        },
        {
            label: 'Resume',
            to:'/resume'
        },
        {
            label: 'Contact',
            to:'/contact'
        }
    ]
    return(
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to={"/"} className="navbar__container__logo">
                    <FaReact size={30}/>
                    </Link>
                </div>
                <ul
                 className={`navbar__container__menu ${toggleIcon?"active":""}`}>
                  {  data.map((item,key)=>(
                        <li className="navbar__container__menu__item">
                            <Link className="navbar__container__menu__item__links" to={item.to}>
                            {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>
                    }
                </div>

            </nav>
        </div>
    )
}
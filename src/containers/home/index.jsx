import ParticlesBackground from "../../components/p/ParticlesBackground"
import './style.scss';
import { Link } from "react-router-dom";
export default function Home(){
    return(
        <div>
            <ParticlesBackground/>
            <section id="home" className="home">
                <div className="home__text">
                    <h1>
                        HELLO, I'm SHREYA ARORA
                        <br/>
                        FRONT END DEVELOPER
                    </h1>
                         <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                className="home__button"
                                >
                                HIRE ME
                                </Link>

                </div>
              
            </section>
            <h1>Home page</h1>
        </div>
    )
}
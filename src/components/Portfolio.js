import './style.css';
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Portfolio=()=>{
    
    return(
        <div>

<div class="text-box">
    
    <p class="text">Hi I'am Suman</p>
    <p class="link">Check out my links</p>
</div>
<div>
<button class="social-media"><FaLinkedin /><a href="https://www.linkedin.com/in/sanket-suman-602619244/" > LinkedIn</a></button>
<button class="social-media"><FaInstagram /><a href="https://www.instagram.com/_suman_4885" > Instagram</a></button>
<button class="social-media"><FaGithub /><a href="https://github.com/sanket2110" > Github</a></button>
<button class="social-media"><FaEnvelope /><a href="mailto:sanketsuman2109@gmail.com" > Gmail</a></button>
</div>
</div>

    )
}
export default Portfolio;
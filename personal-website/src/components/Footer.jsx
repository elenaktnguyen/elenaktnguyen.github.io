import instagram from "../assets/instagram_icon.png";
import linkedin from "../assets/linkedin_icon.png";

function Footer() {
    return (
        <>
        <a href="#">
            <img class="social" src={instagram} alt="Instagram icon"></img>
        </a>
        <a href="#">
            <img class="social" src={linkedin} alt="LinkedIn icon"></img>
        </a>
        <p>&copy; {new Date().getFullYear()} Elena Nguyen</p>
        </>
    );
}

export default Footer;
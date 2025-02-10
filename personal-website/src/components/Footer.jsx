import instagram from "../assets/instagram_icon.png";
import linkedin from "../assets/linkedin_icon.png";

function Footer() {
    return (
        <>
        <footer>
            <div className="socials">
                <a href="#">
                    <p>
                        <img class="s-icon" src={instagram} alt="Instagram icon"></img>
                    </p>
                </a>
                <a href="#">
                    <p>
                        <img class="s-icon" src={linkedin} alt="LinkedIn icon"></img>
                    </p>
                </a>
            </div>
            <p className="copyright">&copy; {new Date().getFullYear()} Elena Nguyen</p>
        </footer>
        </>
    );
}

export default Footer;
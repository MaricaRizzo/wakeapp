import Style from '../components/Intro.module.css';
import logo from '../content/images/logo-transparent.png';
import line from '../content/images/lines.png';

import { NavLink } from "react-router-dom";



const Intro = () => {


    return (
        <section className={Style.Section}>
            <NavLink
                to="/alarm-page"
                exact
            >
                <img src={logo} className={Style.Logo} />
                <img src={line} className={Style.line} />

            </NavLink>
        </section>
    )
};

export default Intro;
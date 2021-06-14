import Style from '../components/Info.module.css';
import logo from '../content/images/clock.png';


const Info = (props) => {

    return (
        <div className={Style.Info}>
            <section>
                <h3>Info</h3>
                <p>Markus, Cassandra, Jesper och Marica i FED20 har uppmärksammat att många använder sig av sina telefoner när de ska sätta sitt alarm. Många har problem med att vakna i tid på morgonen och det finns en stor brist på appar till mobiltelfoner som har huvudfokuset “VAKNA I TID”. </p>
                <p>Svenskarna fortsätter att använda mobilen mer och mer. 78 procent av befolkningen kopplar upp sig via mobilen, 65 procent varje dag. 41 procent av svenskarna har en Iphone mot 37 procent som väljer Android. Bland de upp till 25 år är Iphone i klar majoritet, medan Android är vanligare bland de över 46 år.</p>
            </section >
            <img src={logo} className={Style.Logo} />
        </div>

    )
};

export default Info;
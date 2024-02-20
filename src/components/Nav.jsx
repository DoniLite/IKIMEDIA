import { NavLink } from "react-router-dom";
import logo from "../assets/img/waveform.svg"
import user from '../assets/img/Ghost.jpeg'


export function Ikimedia() {
    return(
        <>
            <div className="logo-cont">
                <div style={{ display: 'flex' }}>
                    <img src={logo} alt="Logo" className="app-logo" />
                    <h1>IKI<span>MEDIA</span></h1>
                </div>
            </div>
        </>
    )
}

export function Nav() {
    return(
        <div className="nav">
            <div className="flex-nav-cont">
                <Ikimedia />
                <div className="nav-side">
                    <div className="nav-bar">
                        <NavLink to={'/'}>Accueil</NavLink>
                        <NavLink to={'/hub'}>Le Hub</NavLink>
                        <NavLink to={'/events'}>Evènements</NavLink>
                        <NavLink to={'/loisirs'}>Loisirs</NavLink>
                    </div>
                    <div className="action-side">
                        <form action="">
                            <button className="home-submit-btn">Connecter</button>
                            <button className="home-submit-btn">S&#39;inscrire</button>
                        </form>
                    </div>

                    <div className="mobil-nav">
                        <i className="fa-solid fa-bars fa-2x"></i>
                    </div>

                    <div className="mobil-nav-side">
                        <div className="mobil-nav-bar">
                            <Params />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Params() {
    return (
        <>
            <center style={{ margin: '2rem 0' }}>
                <img src={user} alt="" className="user-balance" />
                <p>Noella DABIRE</p>
                <div className="trait" style={{ backgroundColor: '#027bff' }}></div>
            </center>

            <p className="intitulé">Support</p>
            <div className="det-params">
                <div className="params-item">
                    <i className="fa-solid fa-phone"></i>
                    <p>Appelez le service client</p>
                </div>
                <div className="params-item">
                    <i className="fa-solid fa-comment"></i>
                    <p>Appelez le service client</p>
                </div>
            </div>

            <p className="intitulé">Profil d'utilisateur</p>
            <div className="det-params">
                <div className="params-item">
                    <i className="fa-solid fa-user-tie"></i>
                    <p>Completer votre profil</p>
                </div>
                <div className="params-item">
                    <i className="fa-solid fa-landmark"></i>
                    <p>Compte entreprise</p>
                </div>
            </div>

            <p className="intitulé">Termes et condtions</p>
            <div className="det-params">
                <div className="params-item">
                    <i className="fa-solid fa-shield-halved"></i>
                    <p>Termes d'utilisation</p>
                </div>
                <div className="params-item">
                    <i className="fa-solid fa-lock"></i>
                    <p>Confidentialité de l'application</p>
                </div>
            </div>
        </>
    )
}
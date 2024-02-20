import { Nav } from "../components/Nav";
import media from "../assets/img/media.svg"
import omega from "../assets/img/omega.svg"
import party from "../assets/img/party.svg"
import electricity from "../assets/img/electricity.svg"
import { Label, MissModel, Section } from "../components/Event";
import { UseHomeData } from "../hook/UseHomeLoader";
import { Inscription } from "../components/Forms";


export function Home() {
    const {state} = UseHomeData()
    

    console.log(state.user.isConnected)

    return(
        <>
            <Nav />
            <div className="content">
                <SwitchContextLabel />
                <Section />
                {state.user.isConnected==true && (<CallToAction />)}
                <Tendances />
                <Hub />
                <Inscription />
            </div>
        </>
    )
}


export function SwitchContextLabel() {
    const label = ["Cinema", "Festivales", "Concerts & Soirées", "Foires & Expo"]
    return (
        <div className="flex-cont" style={{ zIndex: '-1' }}>
            {label.map((label, index) => (
                <Label key={index} containerClass={'el'} layerClass={'layer'}>
                    <h2>{label}</h2>
                </Label>
            ))}
        </div>
    )
}


function Hub() {
    return(
        <div className="hub-container">
            <div className="hub-block">
                <h1>Les nouvelles du Hub...</h1>
            </div>

            <div className="hub-block2">
                <div className="hub-row">
                    <div className="model-grid">
                        <h1>Bienvenue...</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ratione! Nisi velit dolore esse blanditiis iusto sequi voluptatem eius molestias, harum impedit non nemo maiores deserunt ducimus odio. Nobis, impedit!
                        </p>

                        <center>
                            <button style={{ width: '70%', fontSize: '0.9rem', }} className="home-submit-btn">Voir plus</button>
                        </center>
                    </div>
                    <div className="model-grid">
                        <h1>Bienvenue...</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ratione! Nisi velit dolore esse blanditiis iusto sequi voluptatem eius molestias, harum impedit non nemo maiores deserunt ducimus odio. Nobis, impedit!
                        </p>

                        <center>
                            <button style={{ width: '70%', fontSize: '0.9rem', }} className="home-submit-btn">Voir plus</button>
                        </center>
                    </div>
                    <div className="model-grid">
                        <h1>Bienvenue...</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ratione! Nisi velit dolore esse blanditiis iusto sequi voluptatem eius molestias, harum impedit non nemo maiores deserunt ducimus odio. Nobis, impedit!
                        </p>

                        <center>
                            <button style={{ width: '70%', fontSize: '0.9rem', }} className="home-submit-btn">Voir plus</button>
                        </center>
                    </div>
                </div>
                <div className="hub-row2">
                    <h1>Visitez</h1>
                    <div className="flex">
                        <img src={electricity} alt="" />
                        <p>
                            Pour découvrir des mise à jour pouvant vous permettre d&#39;utiliser des nouveaux outils plus performants ou de nouvelles astuces. Vous pouvez aussi y trouver de belles offres ou profiter du forum
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CallToAction() {
    return(
        <>
            <div className="call-to-action">
                <div className="img-cont">
                    <img src={party} alt="" className="svg"/>
                </div>
                <div className="text-cont">
                    <div className="center-text">
                        <h1>Trouvez de <span>Quoi</span></h1>
                    </div>

                    <div className="center-text">
                        <h2>Vous divertir pour la semaine</h2>
                    </div>

                    <div className="center-text">
                        <p>Une plateforme qui vous propose diverse possibilité de divertissement en fonction de vos préférences</p>
                    </div>

                    <div className="">
                        <form action="">
                            <div className="flex">
                                <button className="home-submit-btn">Se connecter</button>
                                <button className="home-submit-btn">S&#39;inscrire</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="call-to-action">
                <div className="img-cont">
                    <img src={media} alt="" className="svg"/>
                </div>
                <div className="text-cont">
                    <div className="center-text">
                        <h1>Vous pouvez <span>Utiliser</span></h1>
                    </div>

                    <div className="center-text">
                        <h2>Nos outils pour rentabiliser</h2>
                    </div>

                    <div className="center-text">
                        <p>Si vous êtes promteurs évênementiels, ou manager... Ce sera la cadre idéal</p>
                    </div>

                    <div className="">
                        <form action="">
                            <div className="flex">
                                <center>
                                    <button className="home-submit-btn">Lancez-vous</button>
                                </center>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="call-to-action">
                <div className="img-cont">
                    <img src={omega} alt="" className="svg"/>
                </div>
                <div className="text-cont">
                    <div className="center-text">
                        <h1>Devenez <span>Pro-Omega</span></h1>
                    </div>

                    <div className="center-text">
                        <h2>Pourquoi pas un abonnement?</h2>
                    </div>

                    <div className="center-text">
                        <p>Vous ne serez sûrement pas déçu de profiter de notre programme premium Omega..</p>
                    </div>

                    <div className="">
                        <form action="">
                            <div className="flex">
                                <center>
                                    <button className="home-submit-btn">Rejoindre Omega</button>
                                </center>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}



function Tendances() {
    return (
        <div className="tendances">
            <center>
                <h1>#Tendances</h1>
            </center>

            <div className="tendances-layout">
                <MissModel />
                <MissModel />
                <MissModel />
                <MissModel />
                <MissModel />
                <MissModel />
                <MissModel />
                <MissModel />
                <MissModel />
                <MissModel />
            </div>
        </div>
    )
}


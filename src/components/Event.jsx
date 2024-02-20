import cinema from "../assets/img/cinema.svg"
import foire from "../assets/img/foire.svg"
import festival from "../assets/img/festival.svg"
import composer from "../assets/img/composer.svg"
import miss from "../assets/img/woman_.svg"

export function Label({ children, containerClass, layerClass }) {
    return (
        <div className={containerClass}>
            <div className={`${layerClass} ${layerClass}1`}>
                <div className={`${layerClass} ${layerClass}2`}>
                    <div className={`${layerClass} ${layerClass}3`}>
                        <div className={`${layerClass} ${layerClass}4`}>
                            <div className={`${layerClass} ${layerClass}5`}>
                                <div>
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function MissModel() {
    return (
        <div className="missModel">
            <img src={miss} alt="" />
            <div className="model-text">
                <h2>M 01</h2>
                <p>Kaboré Ki <br />
                    <span>#Festib5</span>
                </p>
            </div>
            <div className="stats">
                <h2>39%</h2>
            </div>
        </div>
    )
}

export function Section() {
    return (
        <div className="section">
            <div className="event">
                <img src="./src/users/media/img/0.jpg" alt="" />
                <div style={{ position: 'absolute', left: '' }} >
                    <p style={{ backgroundColor: '#c6658a', }}>Festival de l&#39;Intégration de Bobo Dioulasso <br />
                        <span>Du Ven 12 au Dim 14 Dec</span> <small>Maison de la culture de Bobo-dioulasso</small>
                    </p>
                    <button className="home-submit-btn">Voir Plus</button>
                </div>
            </div>
            <div className="event">
                <img src="/src/users/media/img/2.jpg" alt="" />
                <div style={{ position: 'absolute', }}>
                    <p style={{ backgroundColor: '#c6658a', }}>LA NUIT DE L&#39;INTEGRATION <br />
                        <span>Du Ven 12 au Dim 14 Dec</span> <small>Maison de la culture de Bobo-dioulasso</small>
                    </p>
                    <button className="home-submit-btn">Voir Plus</button>
                </div>
            </div>
            <div className="event">
                <img src="/src/users/media/img/2.jpg" alt="" />
                <div style={{ position: 'absolute', }}>
                    <p style={{ backgroundColor: '#78191e', }} >Le réveil de la FORCE<br />
                        <span>Du Ven 12 au Dim 14 Dec</span> <small>Maison de la culture</small>
                    </p>
                    <button className="home-submit-btn">Voir Plus</button>
                </div>
            </div>
            <div className="event">
                <div className="event">
                    <img src="./src/users/media/img/3.jpg" alt="" />
                    <div style={{ position: 'absolute', }}>
                        <p style={{ backgroundColor: '#78191e', }} >Le réveil de la FORCE<br />
                            <span>Du Ven 12 au Dim 14 Dec</span> <small>Maison de la culture</small>
                        </p>
                        <button className="home-submit-btn">Voir Plus</button>
                    </div>
                </div>
            </div>
            <div className="event">
                <div className="event">
                    <img src="/src/users/media/img/2.jpg" alt="" />
                    <div style={{ position: 'absolute', }}>
                        <p style={{ backgroundColor: '#72a1b7', }} >Le réveil de la FORCE<br />
                            <span>Du Ven 12 au Dim 14 Dec</span> <small>Maison de la culture</small>
                        </p>
                        <button className="home-submit-btn">Voir Plus</button>
                    </div>
                </div>
            </div>
            <div className="event">
                <div className="event">
                    <img src="./src/users/media/img/5.jpg" alt="" />
                    <div style={{ position: 'absolute', }}>
                        <p style={{ backgroundColor: '#78191e', }} >Le réveil de la FORCE<br />
                            <span>Du Ven 12 au Dim 14 Dec</span> <small>Maison de la culture</small>
                        </p>
                        <button className="home-submit-btn">Voir Plus</button>
                    </div>
                </div>
            </div>
            <div className="event">
                <div className="event">
                    <img src="/src/users/media/img/2.jpg" alt="" />
                    <div style={{ position: 'absolute', }}>
                        <p style={{ backgroundColor: '#72a1b7', }} >Le réveil de la FORCE<br />
                            <span>Du Ven 12 au Dim 14 Dec</span> <small>Maison de la culture</small>
                        </p>
                        <button className="home-submit-btn">Voir Plus</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
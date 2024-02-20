import { useState } from "react"
import Google from '../assets/img/Google.png'
import { Ikimedia } from "./Nav"


export function FeedbackOrComment() {

    const [isFeedback, toogleFeed] = useState(false)

    const inputName = isFeedback == true?"feedback" : "comment"

    console.log(inputName)

    return(
        <div className="form-feedback">
            <center style={{marginTop: '1rem'}}>
                <input type="checkbox" name="isFeedback" id="" onClick={() => toogleFeed(!isFeedback)} checked={isFeedback} /> <label htmlFor="isFeedback">Feedback</label>
            </center>
            <div className="input">
                <input type="text" name={inputName} id="" />
                <div className="icon-feedback">
                    <i className="fa-solid fa-circle-right fa-2x"></i>
                </div>
            </div>
            <p>Laissez-nous un commentaire ou un feedback et profitez de l&#39;archive du hub</p>
        </div>
    )
}



export function MailVerification() {
    return (
        <div className="code-confirmation">
            <div className="flex">
                <div></div>
                <Ikimedia />
            </div>
            <h1 style={{ color: 'black', marginTop: '6rem' }}>Authentification</h1>
            <p style={{ fontWeight: 'bold', margin: '1rem 0' }}>Saisissez le code de vérification envoyé dans votre boîte mail</p>


            <form action="">
                <center style={{ marginTop: '4rem', marginBottom: '2rem' }}>
                    <input type="tel" name="code" id="" />
                    <small style={{ display: 'block', margin: '1rem 0' }}>Je n&#39;ai pas reçu le code. <a href="">Renvoyer</a></small>
                </center>

                <center>
                    <button type="submit">Vérifier le code</button>
                </center>
            </form>
        </div>
    )
}

export function Authentification() {
    return (
        <div className="verif">
            <div className="flex">
                <div></div>
                <Ikimedia />
            </div>

            <h1 style={{ color: 'black', marginTop: '6rem' }}>Nous vérifions votre mail...</h1>
            <p style={{ fontWeight: 'bold', marginBottom: '4rem' }}>Veuillez insérer votre adresse email</p>

            <form action="">

                <label htmlFor="number">Email</label>
                <center>
                    <input type="email" name="number" id="" />
                </center>

                <center style={{ marginTop: '2rem' }}>
                    <button type="submit">Ajouter le numéro</button>
                </center>
            </form>
        </div>
    )
}

export function Connexion() {
    return (
        <div className="connexion">
            <div className="flex">
                <div></div>
                <Ikimedia />
            </div>

            <h1 style={{ color: 'black', marginTop: '6rem' }}>Renseignez...</h1>
            <p style={{ fontWeight: 'bold', marginBottom: '4rem' }}>Bienvenue sur Colis-Assurance</p>

            <form action="">
                <label htmlFor="email">Nom d&#39;utilisateur</label>
                <center>
                    <div className="input">
                        <input type="text" name="email" id="" />
                        <div className="i">
                            <i className="fa-solid fa-user-tag"></i>
                        </div>
                    </div>
                </center>

                <label htmlFor="passWord">Mot de passe</label>
                <center>
                    <div className="input">
                        <input type="password" name="passWord" id="" />
                        <div className="i">
                            <i className="fa-solid fa-key"></i>
                        </div>
                    </div>
                </center>
                <div style={{ margin: '2rem' }}>
                    <a href="#">Mot de passe oublié?</a>
                </div>

                <center>
                    <div className="btn-group">
                        <button>CONNEXION</button>
                        <button>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div>
                                    <img src={Google} alt="" style={{ width: '1.5rem', position: 'relative', top: '7px' }} />
                                    Connexion avec Google
                                </div>
                            </div>
                        </button>
                    </div>
                </center>
            </form>

            <div style={{ margin: '1rem' }}>
                <small>N&#39;avez vous pas de <a href="#">Compte</a>?</small>
            </div>
        </div>
    )
}

export function Inscription() {

    const [state, setState] = useState({
        name: '',
        greeting: '',
        isChange: false,
    })


    function handleChange(event) {
        setState({
            ...state,
            name: event.target.value,
            isChange: !state.isChange
        });
    }

    /**
     * 
     * @param {import("react").FormEvent} e 
     */
    function formSubmited(e) {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)
        console.log(formData.get('name'))
        form.reset()
        console.log(form)
    }

    return (
        <div className="inscription">
            <div className="flex">
                <div></div>
                <Ikimedia />
            </div>

            <h1 style={{ color: 'black', marginTop: '6rem' }}>Bienvenue</h1>
            <p style={{ fontWeight: 'bold', marginBottom: '4rem' }}>Colis-Assurance la plateforme 100% fiable</p>

            <form action="" onSubmit={formSubmited}>
                <label htmlFor="userName">Nom d&#39;utilisateur</label>
                <center>
                    <div className="input">
                        <input type="text" name="UserName" id="userName" value={state.name} onChange={handleChange} />
                        <div className="i">
                            <i className="fa-solid fa-user-tag"></i>
                        </div>
                    </div>
                </center>

                <label htmlFor="email">Adresse email</label>
                <center>
                    <div className="input">
                        <input type="email" name="email" id="email" />
                        <div className="i">
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                    </div>
                </center>

                <label htmlFor="passWord">Mot de passe</label>
                <center>
                    <div className="input">
                        <input type="password" name="password" id="password" />
                        <div className="i">
                            <i className="fa-solid fa-key"></i>
                        </div>
                    </div>
                </center>

                <div className="check">
                    <input type="checkbox" name="isAgree" id="checkbox" />
                    <small>J&#39;accepte les termes de confidentialité et les conditions d&#39;utilisation d&#39;Ikimedia</small>
                </div>

                <center>
                    <div className="btn-group">
                        <button type="submit">INSCRIPTION</button>
                        <button type="submit">
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div>
                                    <img src={Google} alt="" style={{ width: '1.5rem', position: 'relative', top: '7px' }} />
                                    Inscription avec Google
                                </div>
                            </div>
                        </button>
                    </div>
                </center>
            </form>

            <div style={{ margin: '1rem' }}>
                <small>Avez-vous un <a href="#">compte</a>?</small>
            </div>
        </div>
    )
}
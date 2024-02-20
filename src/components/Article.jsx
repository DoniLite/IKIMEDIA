import article from "../assets/img/stats.svg"

export function Article({children}) {

    return(
        <div className="article-cont" >
            <div className="grid">
                <div className="column">
                    <img src="./src/users/media/img/0.jpg" alt="" />
                </div>
                <div style={{marginLeft: '10px'}} className="column">
                    <center>
                        <h1>Titre de l&#39;article</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam modi dolorem ipsum cupiditate optio dolorum non ratione autem, repellendus harum ad, quia, velit ex eaque voluptate. Inventore aliquam explicabo deleniti?</p>
                        <button style={{ marginTop: '0.5rem' }} className="home-submit-btn">Lire l&#39;article</button>
                    </center>
                </div>
            </div>
            <div className="scroll-article-column">
               <div>
                    {children}
               </div>
            </div>
        </div>
    )
}


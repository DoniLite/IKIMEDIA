import express from 'express';
import bodyParser from 'body-parser';
import pino from "express-pino-logger"
import cors from "cors"
import session from "express-session"
const pino_ = pino()
const app = express();

/*--MIDLEWARE */
app.use('/assets', express.static('../public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(pino_);
app.use(session({
    secret: 'Doni-have-powered-this-server',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }

}))
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 200,
    credentials: true,
}))

/*--------------ROOT--------- */
/*-----------------REQUËTES GET---------- */
app.get('/api/home', (req, res) => {
    const name = req.query.name || 'World';
    req.session.data = {
        userName: 'lvnlnsj',
        listed: true,
        balance: 12
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ greeting: `Hello ${name}!`,}));
});

app.get('/api/user', (req, res) => {
    const id = req.query.id
})

app.get('/api/event', (req, res) => {
    const id = req.query.id
})

app.get('/api/post', (req, res) => {
    const id = req.query.id
})

app.get('/api/article', (req, res) => {
    const id = req.query.id
})

/*-----------------REQUËTES POST---------- */
app.post('/api/authentificate', (req, res) => {
    const data = req.query
})


/*---------PORT----------- */
app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);

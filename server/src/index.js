import express from 'express'
import morgan from 'morgan'
import compression from 'compression'
import session from 'express-session'

const app = express()
const port = 8080

app.use(morgan("common"))
app.use(compression())
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

app.get('/', (req, res) => {
    res.send('Welcome to Gallery API!')
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
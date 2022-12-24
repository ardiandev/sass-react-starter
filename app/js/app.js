import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/scss/app.scss'


function App() {
    return <div className="hero">

        <h1>Hello from React!</h1>
        <p>This paragraph element from react!</p>
        <p>I love React! This is amazing App. You must learn react now!</p>
        <ul>

            <li>Music</li>
            <li>Movie</li>
            <li>Sport</li>
        </ul>
    </div>
}


ReactDOM.render(<App />, document.getElementById('app'))
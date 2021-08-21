import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const PageOne = () => {
    return (
        <div>
            PageOne
            <Link to="/pagetwo">Navigate to page 2</Link>
        </div>
    )
}

const PageTwo = () => {
    return (
        <div>
            PageTwo
            <button>Click me</button>
        </div>
    )
}

const App = () => {
    // Routing rule for none exact: pathFromUrl.contains(path)
    // Routing rule for exact: pathFromUrl == path
    return (
        <div>
            <BrowserRouter>
                <Route path="/" exact component={PageOne} />
                <Route path="/pagetwo" exact component={PageTwo} />
            </BrowserRouter>
        </div>
    )
}

export default App

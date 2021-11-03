import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import Header from './header'
import history from '../history'

const App = () => {
    // Routing rule for none exact: pathFromUrl.contains(path)
    // Routing rule for exact: pathFromUrl == path
    return (
        <div className="ui container">
            <Router history={history}>
                <Header />
                <Switch>
                    {
                        // Switch makes only one Route show. i.e, streams/:id and streams/new could both match on 'new'. With switch, only match on the first one. Having said that, this was working for me even before including Switch
                    }
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route
                        path="/streams/edit/:id"
                        exact
                        component={StreamEdit}
                    />
                    <Route
                        path="/streams/delete/:id"
                        exact
                        component={StreamDelete}
                    />
                    <Route path="/streams/:id" exact component={StreamShow} />
                </Switch>
            </Router>
        </div>
    )
}

export default App

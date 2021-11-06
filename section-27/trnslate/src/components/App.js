import React from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../context/LanguageContext'

class App extends React.Component {
    state = { language: 'english' }

    onLanguageChange = (language) => {
        this.setState({ language })
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    <i
                        className="flag us"
                        onClick={() => this.onLanguageChange('english')}
                    />
                    <i
                        className="flag nl"
                        onClick={() => this.onLanguageChange('dutch')}
                    />
                </div>

                {
                    // Wrap anything that needs LanguageContext with LanguageContext.Provider
                    // Initialize with whatever 'value' we want in the contest
                    // Note: Don't _have_ to set the value to some state, but can be useful if want to update it with setState, or tie to a prop.
                    // NB. Each time you wrap a component, that is a NEW instance of the provider,
                    // with its own value. You cannot share context between Providers of the same contextType
                    // just by wrapping multiple sibling/disjoint elements with the same context type.
                }
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate />
                </LanguageContext.Provider>
            </div>
        )
    }
}

export default App

// Two ways to get information into context pipe

// Two ways to get information out of context pipe

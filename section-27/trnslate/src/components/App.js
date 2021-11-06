import React from 'react'
import UserCreate from './UserCreate'

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

                <UserCreate />
            </div>
        )
    }
}

export default App

// Two ways to get information into context pipe

// Two ways to get information out of context pipe

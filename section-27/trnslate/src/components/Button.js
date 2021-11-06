import React from 'react'
import LanguageContext from '../context/LanguageContext'

class Button extends React.Component {
    static contextType = LanguageContext // The name 'contextType' is semantically important

    render() {
        const text = this.context === 'english' ? 'Submit' : 'Voorleggen'
        return <button className="ui button primary">{text}</button>
    }
}

// Button.contextType = LanguageContext; // Alternate method to 'static contextType = LanguageContext' approach to setting up context

export default Button

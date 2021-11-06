import React from 'react'
import LanguageContext from '../context/LanguageContext'

class Field extends React.Component {
    static contextType = LanguageContext // The name 'contextType' is semantically important

    render() {
        // Note. Instiate context with 'static contextType', but access it with this.context
        const text = this.context === 'english' ? 'Name' : 'Naam'

        return (
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        )
    }
}

// Field.contextType = LanguageContext; // Alternate method to 'static contextType = LanguageContext' approach to setting up context

export default Field

import React from 'react'
import LanguageContext from '../context/LanguageContext'

class Field extends React.Component {
    static contextType = LanguageContext

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

export default Field

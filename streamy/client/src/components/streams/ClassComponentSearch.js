import React from 'react'

export default class ClassComponentSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            term: 'Loading...',
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ term: 'Initial value from API' })
        }, 2000) // Emulating a network request
    }

    render() {
        return (
            <div>
                <span>{this.props.label} </span>
                <input
                    type="text"
                    value={this.state.term}
                    onChange={this.handleChange}
                />
            </div>
        )
    }

    handleChange = (e) => {
        this.setState({ term: e.target.value })
    }
}

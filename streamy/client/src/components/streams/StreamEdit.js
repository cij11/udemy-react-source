import React from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'

class StreamEdit extends React.Component {
    componentDidMount() {
        console.log('fetching stream')
        this.props.fetchStream(this.props.match.params.id)
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading</div>
        }

        return <div>{this.props.stream.title}</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id],
    }
}

const mapDispatchToProps = {
    fetchStream,
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamEdit)

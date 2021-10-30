import React from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions/index'

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams()
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
            </div>
        )
    }

    renderList() {
        return this.props.streams.map((stream) => {
            return (
                <div className="item" key={stream.id}>
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            )
        })
    }
}

const mapStoreToProps = (store) => {
    return { streams: Object.values(store.streams) }
}

export default connect(mapStoreToProps, { fetchStreams })(StreamList)

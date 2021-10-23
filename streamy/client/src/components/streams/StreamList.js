import React from 'react'
import ClassComponentSearch from './ClassComponentSearch'
import FunctionalComponentSearch from './FunctionalComponentSearch'

const StreamList = () => {
    return (
        <div>
            <div>StreamList</div>
            <ClassComponentSearch label="Class based component" />
            <FunctionalComponentSearch label="Functional component" />
        </div>
    )
}

export default StreamList

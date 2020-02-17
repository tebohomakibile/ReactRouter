import React from 'react'

function User({match}) {
    return (
        <div>
            <h1>Welcomne user {match.params.username}</h1>
        </div>
    )
}

export default User

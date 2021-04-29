import React from 'react'

function ChatList(props) {
    return (
        <div>
            <span class="badge badge-pill badge-warning">Chat List</span>
            <li>
                <p>Name:{props.name}</p>
            </li>
        </div>
    )
}

export default ChatList

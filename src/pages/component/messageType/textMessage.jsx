import React from 'react'
import ProfileBlock from '../profileBlock'
import MessagePop from '../messagePop'
import styles from './index.less'

const TextMessage = props => {
    const { message, sender } = props
    const elementPosition = sender === 'host' ? 'flex-end' : 'flex-start',
        profile = <ProfileBlock />,
        messageBox = (
            <div className={styles.messageContent}>
                <MessagePop message={message} />
            </div>
        ),
        msgBlock =
            sender === 'host' ? [messageBox, profile] : [profile, messageBox]
    return (
        <div
            className={styles.messageBlock}
            style={{ justifyContent: elementPosition }}
        >
            {msgBlock}
        </div>
    )
}

export default TextMessage

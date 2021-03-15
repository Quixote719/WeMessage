import React from 'react'
import ProfileBlock from '../profileBlock'
import styles from './index.less'

const ImageMessage = props => {
    const { message, sender } = props
    const elementPosition = sender === 'host' ? 'flex-end' : 'flex-start',
        profile = <ProfileBlock sender={sender} />,
        messageBox = (
            <div className={styles.messageContent}>
                <img className={styles.imageSquare} src={message} />
            </div>
        ),
        msgContent =
            sender === 'host' ? [messageBox, profile] : [profile, messageBox]
    return (
        <div
            className={styles.messageBlock}
            style={{ justifyContent: elementPosition }}
        >
            {msgContent}
        </div>
    )
}

export default ImageMessage

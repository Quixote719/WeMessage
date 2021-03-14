import React from 'react'
import ProfileBlock from '../profileBlock'
import { LinkOutlined } from '@ant-design/icons'
import styles from './index.less'

const LinkMessage = props => {
    const { message, sender } = props
    const elementPosition = sender === 'host' ? 'flex-end' : 'flex-start',
        profile = <ProfileBlock />,
        messageBox = (
            <div className={styles.messageContent}>
                <div
                    onClick={() => window.open(message)}
                    className={styles.messageLinkSquare}
                >
                    <LinkOutlined />
                    <span className={styles.messageLink}>{message}</span>
                </div>
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

export default LinkMessage

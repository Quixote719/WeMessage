import React from 'react'
import ProfileBlock from '../profileBlock'
import MessagePop from '../messagePop'
import { LinkOutlined } from '@ant-design/icons'
import styles from './index.less'

const MessagePanel = props => {
    const renderTextMsg = (content, sender) => {
        const elementPosition = sender === 'host' ? 'flex-end' : 'flex-start',
            profile = <ProfileBlock />,
            messageBox = (
                <div className={styles.messageContent}>
                    <MessagePop message={content} />
                </div>
            ),
            msgContent =
                sender === 'host'
                    ? [messageBox, profile]
                    : [profile, messageBox]
        return (
            <div
                className={styles.messageBlock}
                style={{ justifyContent: elementPosition }}
            >
                {msgContent}
            </div>
        )
    }

    const renderImageMsg = (content, sender) => {
        const elementPosition = sender === 'host' ? 'flex-end' : 'flex-start',
            profile = <ProfileBlock />,
            messageBox = (
                <div className={styles.messageContent}>
                    <img className={styles.imageSquare} src={content} />
                </div>
            ),
            msgContent =
                sender === 'host'
                    ? [messageBox, profile]
                    : [profile, messageBox]
        return (
            <div
                className={styles.messageBlock}
                style={{ justifyContent: elementPosition }}
            >
                {/* <ProfileBlock />
                <div className={styles.messageContent}>
                    <img className={styles.imageSquare} src={content} />
                </div> */}
                {msgContent}
            </div>
        )
    }

    const renderLinkMsg = (content, sender) => {
        const elementPosition = sender === 'host' ? 'flex-end' : 'flex-start',
            profile = <ProfileBlock />,
            messageBox = (
                <div className={styles.messageContent}>
                    <div
                        onClick={() => window.open(content)}
                        className={styles.messageLinkSquare}
                    >
                        <LinkOutlined />
                        <span className={styles.messageLink}>{content}</span>
                    </div>
                </div>
            ),
            msgContent =
                sender === 'host'
                    ? [messageBox, profile]
                    : [profile, messageBox]
        return (
            <div
                className={styles.messageBlock}
                style={{ justifyContent: elementPosition }}
            >
                {msgContent}
            </div>
        )
    }

    const msgTypeMap = {
        text: renderTextMsg,
        image: renderImageMsg,
        link: renderLinkMsg
    }

    const mapMessage = () => {
        const { messageFlow } = props
        return messageFlow.map((item, index) => {
            return (
                <div key={index}>
                    {typeof msgTypeMap[item.type] === 'function'
                        ? msgTypeMap[item.type](item[item.type], item.sender)
                        : null}
                </div>
            )
        })
    }

    return (
        <div className={styles.msgPanel}>
            {/* <ProfileBlock />
            <MessagePop
                message={
                    'We are not now that strength which in old days. Moved earth and heaven, that which we are One equal temper of heroic hearts, made weak by time and fate, but strong in will to strive, to seek, to find, and not to yield.'
                }
            /> */}
            {mapMessage()}
        </div>
    )
}

export default MessagePanel

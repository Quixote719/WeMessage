import React from 'react'
import TextMessage from '../messageType/textMessage'
import ImageMessage from '../messageType/imageMessage'
import LinkMessage from '../messageType/linkMessage'
import SystemMessage from '../messageType/systemMessage'
import styles from './index.less'

const MessagePanel = props => {
    const renderTextMsg = (message, sender) => {
        return <TextMessage message={message} sender={sender} />
    }

    const renderImageMsg = (message, sender) => {
        return <ImageMessage message={message} sender={sender} />
    }

    const renderLinkMsg = (message, sender) => {
        return <LinkMessage message={message} sender={sender} />
    }

    const renderSystemMessage = (message, sender) => {
        return <SystemMessage message={message} sender={sender} />
    }
    const msgTypeMap = {
        text: renderTextMsg,
        image: renderImageMsg,
        link: renderLinkMsg,
        systemMsg: renderSystemMessage
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

    return <div className={styles.msgPanel}>{mapMessage()}</div>
}

export default MessagePanel

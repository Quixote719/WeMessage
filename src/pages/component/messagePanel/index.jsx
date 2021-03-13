import React from 'react'
import ProfileBlock from '../profileBlock'
import MessagePop from '../messagePop'
import { LinkOutlined } from '@ant-design/icons'
import styles from './index.less'

const MessagePanel = props => {
    const renderTextMsg = params => {
        console.warn(90)
        return (
            <div className={styles.messageBlock}>
                <ProfileBlock />
                <div className={styles.messageContent}>
                    <MessagePop message={params} />
                </div>
            </div>
        )
    }

    const renderImageMsg = params => {
        return (
            <div className={styles.messageBlock}>
                <ProfileBlock />
                <div className={styles.messageContent}>
                    <img className={styles.imageSquare} src={params} />
                </div>
            </div>
        )
    }

    const renderLinkMsg = params => {
        console.warn('renderLinkMsg', params)
        return (
            <div className={styles.messageBlock}>
                <ProfileBlock />
                <div className={styles.messageContent}>
                    <div
                        onClick={() => window.open(params)}
                        className={styles.messageLinkSquare}
                    >
                        <LinkOutlined />
                        <span className={styles.messageLink}>{params}</span>
                    </div>
                </div>
            </div>
        )
    }
    const mapMessage = () => {
        const { messageFlow } = props
        let msgTypeMap = {
            text: renderTextMsg,
            image: renderImageMsg,
            link: renderLinkMsg
        }
        return messageFlow.map((item, index) => {
            return (
                <div key={index}>
                    {typeof msgTypeMap[item.type] === 'function'
                        ? msgTypeMap[item.type](item[item.type])
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

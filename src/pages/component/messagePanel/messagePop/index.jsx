import React from 'react'
import styles from './index.less'

const MessagePop = props => {
    const backgroundColor = props.sender === 'host' ? '#65E17B' : '#F0F0F0'
    return (
        <div className={styles.msgPop} style={{ background: backgroundColor }}>
            {props.message}
        </div>
    )
}

export default MessagePop

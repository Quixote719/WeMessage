import React from 'react'
import styles from './index.less'

const MessagePop = props => {
    return <div className={styles.msgPop}>{props.message}</div>
}

export default MessagePop

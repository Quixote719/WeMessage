/*
 * 系统消息组件
 */
import React from 'react'
import styles from './index.less'

const SystemMessage = props => {
    const { message } = props
    return <div className={styles.systemMsg}>{message}</div>
}
export default SystemMessage

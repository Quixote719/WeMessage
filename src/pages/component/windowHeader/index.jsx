import React from 'react'
import styles from './index.less'

const WindowHeader = props => {
    return <div className={styles.windowHeader}>{props.name}</div>
}

export default WindowHeader

import React from 'react'
import styles from './index.less'

const ProfileBlock = props => {
    return (
        <div
            className={styles.profileBlock}
            style={{
                background: props.sender === 'host' ? '#007F16' : '#8F0037'
            }}
        ></div>
    )
}

export default ProfileBlock

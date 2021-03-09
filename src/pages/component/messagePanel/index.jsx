import React from 'react'
import ProfileBlock from '../profileBlock'
import MessagePop from '../messagePop'
import styles from './index.less'

const MessagePanel = props => {
    console.warn('MessagePanel', props)
    return (
        <div className={styles.msgPanel}>
            <ProfileBlock />
            <MessagePop
                message={
                    'We are not now that strength which in old days. Moved earth and heaven, that which we are One equal temper of heroic hearts, made weak by time and fate, but strong in will to strive, to seek, to find, and not to yield.'
                }
            />
        </div>
    )
}

export default MessagePanel

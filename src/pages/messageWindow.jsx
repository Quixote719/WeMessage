import React from 'react'
import styles from './app.less'
import MessagePanel from './component/messagePanel'
import { observer, inject } from 'mobx-react'
import ChatBox from './component/chatBox'

class App extends React.Component {
    sendMsg = params => {
        console.warn('sendMsg', params)
    }

    render() {
        const { messageStore } = this.props
        const { messageFlow } = messageStore

        return (
            <div className={styles.msgWindow}>
                <MessagePanel messageFlow={messageFlow} />
                <ChatBox sendMsgCallBack={params => this.sendMsg(params)} />
            </div>
        )
    }
}

export default inject('messageStore')(observer(App))

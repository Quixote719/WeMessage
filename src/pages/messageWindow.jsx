import React from 'react'
import styles from './app.less'
import WindowHeader from './component/windowHeader'
import MessagePanel from './component/messagePanel'
import ChatBox from './component/chatBox'
import { observer, inject } from 'mobx-react'

class App extends React.Component {
    sendMsg = params => {
        const { messageStore } = this.props
        const { updateMessage } = messageStore
        if (typeof updateMessage === 'function') {
            updateMessage({ type: 'text', text: params, sender: 'host' })
        }
    }

    render() {
        const { messageStore } = this.props
        const { messageFlow } = messageStore
        return (
            <div className={styles.msgWindow}>
                <WindowHeader name={'Doge'} />
                <MessagePanel messageFlow={messageFlow} />
                <ChatBox sendMsgCallBack={params => this.sendMsg(params)} />
            </div>
        )
    }
}

export default inject('messageStore')(observer(App))

import React from 'react'
import styles from './app.less'
import MessagePanel from './component/messagePanel'
import ChatBox from './component/chatBox'

class App extends React.Component {
    sendMsg = params => {
        console.warn('sendMsg', params)
    }

    render() {
        return (
            <div className={styles.msgWindow}>
                <MessagePanel />
                <ChatBox sendMsgCallBack={params => this.sendMsg(params)} />
            </div>
        )
    }
}

export default App

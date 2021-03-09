import React from 'react'
import styles from './app.less'
import MessagePanel from './component/messagePanel'
import ChatBox from './component/chatBox'

class App extends React.Component {
    render() {
        return (
            <div className={styles.msgWindow}>
                <MessagePanel />
                <ChatBox />
            </div>
        )
    }
}

export default App

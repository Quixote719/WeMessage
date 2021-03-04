import React from 'react'
import styles from './app.less'
import { Skeleton } from 'antd'
class App extends React.Component {
    render() {
        return (
            <div className={styles.App}>
                <p className={styles.appIntro}>welcome to Mars</p>
                <Skeleton />
            </div>
        )
    }
}

export default App

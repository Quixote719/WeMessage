import React from 'react'
import styles from './app.less'

class App extends React.Component {
    render() {
        return (
            <div className={styles.App}>
                <p className={styles.appIntro}>welcome to Mercury</p>
            </div>
        )
    }
}

export default App

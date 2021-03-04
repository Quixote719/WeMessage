import React from 'react'
import { Icon } from 'antd'
import styles from './app.less'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={styles.tank}>
                <div className={styles.menuTitle}>
                    <span> Think Tank </span> <Icon type='ordered-list' />{' '}
                </div>
                <a
                    className={styles.menuItem}
                    href='https://www.brookings.edu/'
                >
                    Brookings Institution
                </a>
                <a className={styles.menuItem} href='https://www.ifri.org/en'>
                    French Institute of International Relations(IFRI)
                </a>
                <a
                    className={styles.menuItem}
                    href='https://carnegieendowment.org/#timeline-of-cyber-incidents-targeting-financial-institutions'
                >
                    Carnegie Endowment for International Peace
                </a>
                <a className={styles.menuItem} href='http://bruegel.org/'>
                    Bruegel
                </a>
                <a className={styles.menuItem} href='https://www.csis.org/'>
                    Center for Strategic and International Studies (CSIS)
                </a>
                <a
                    className={styles.menuItem}
                    href='https://www.chathamhouse.org/'
                >
                    Chatham House
                </a>
                <a className={styles.menuItem} href='https://www.heritage.org/'>
                    Heritage Foundation
                </a>
                <a className={styles.menuItem} href='https://www.rand.org/'>
                    RAND Corporation
                </a>
                <a className={styles.menuItem} href='https://www.iiss.org/'>
                    International Institute for Strategic Studies (IISS)
                </a>
                <a
                    className={styles.menuItem}
                    href='https://www.pewresearch.org/'
                >
                    Pew Research Center
                </a>
                <a className={styles.menuItem} href='http://www.ciis.org.cn/'>
                    中国国际问题研究院
                </a>
                <a className={styles.menuItem} href='http://www.sic.gov.cn/'>
                    国家信息中心
                </a>
                <a
                    className={styles.menuItem}
                    href='http://www.siis.org.cn/Research/Area/23'
                >
                    上海国际问题研究院
                </a>
            </div>
        )
    }
}

export default App

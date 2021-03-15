import React, { useState, useMemo } from 'react'
import { Input, Button } from 'antd'
import styles from './index.less'

const { TextArea } = Input
export default function ChatBox(props) {
    const [content, setContent] = useState('')

    const disable = useMemo(
        () => content.replace(/(^\s+)|(\s+$)/g, '') === '',
        [content]
    )

    // 发送消息函数
    function sendMessage() {
        // 执行父组件传入的发送消息函数
        const { sendMsgCallBack } = props
        if (typeof sendMsgCallBack === 'function') {
            sendMsgCallBack(content)
        }
        setContent('')
    }

    function onChange(e) {
        setContent(e.target.value)
    }

    return (
        <div>
            <div className={styles.chatBoxBar}>
                <TextArea autoSize={true} value={content} onChange={onChange} />
                <Button
                    type={'primary'}
                    disabled={disable}
                    onClick={sendMessage}
                >
                    发送
                </Button>
            </div>
        </div>
    )
}

import { action, makeAutoObservable, observable } from 'mobx'
import { msgMock1 } from '/src/mock/msgFlowMock'

class MessageStore {
    constructor() {
        makeAutoObservable(this, {
            messageFlow: observable,
            updateMessage: action
        })
    }

    //消息流的初始值设定为已写好的mock测试数据，可通过更改对应mock数据，查看不同消息流的渲染效果
    messageFlow = msgMock1

    updateMessage = params => {
        let updateMsgFlow = [...this.messageFlow]
        updateMsgFlow.push(params)
        this.messageFlow = updateMsgFlow
    }
}

const messageStore = new MessageStore()
export default messageStore

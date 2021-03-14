import { action, makeAutoObservable, observable } from 'mobx'
import hexagonIcon from '/src/assets/hexagon.svg'
class MessageStore {
    constructor() {
        makeAutoObservable(this, {
            messageFlow: observable,
            updateMessage: action
        })
    }

    messageFlow = [
        { type: 'text', text: 'Hi there', sender: 'host' },
        { type: 'image', image: hexagonIcon, sender: 'guest' },
        { type: 'link', link: 'https://www.zhihu.com', sender: 'host' }
    ]

    updateMessage = params => {
        let updateMsgFlow = [...this.messageFlow]
        updateMsgFlow.push(params)
        this.messageFlow = updateMsgFlow
        // console.warn('updateMessage', this.messageFlow)
    }
}

const messageStore = new MessageStore()
export default messageStore

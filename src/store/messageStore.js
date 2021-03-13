import { action, makeAutoObservable, observable } from 'mobx'
import hexagonIcon from '/src/assets/hexagon.svg'
class MessageStore {
    messageFlow = [
        { type: 'text', text: 'Hi there' },
        { type: 'image', image: hexagonIcon },
        { type: 'link', link: 'https://www.zhihu.com' }
    ]
    constructor() {
        makeAutoObservable(this, {
            message: observable,
            updateMessage: action
        })
    }

    updateMessage = params => {
        this.message.push(params)
    }
}

const messageStore = new MessageStore()
export default messageStore

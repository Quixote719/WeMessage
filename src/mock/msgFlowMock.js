import hexagonIcon from '/src/assets/hexagon.svg'

const msgMock1 = [
    { type: 'text', text: 'Hi there', sender: 'host' },
    { type: 'image', image: hexagonIcon, sender: 'host' },
    {
        type: 'systemMsg',
        systemMsg: '您以添加Louis，现在可以开始聊天了',
        sender: 'system'
    },
    { type: 'link', link: 'https://www.zhihu.com', sender: 'guest' },
    { type: 'text', text: 'Enjoy the game', sender: 'guest' },
    {
        type: 'systemMsg',
        systemMsg: '您撤回了一条消息',
        sender: 'system'
    },
    { type: 'text', text: 'Good luck, have fun', sender: 'host' }
]

export { msgMock1 }

const fs = require('fs')
const shelljs = require('shelljs')
const resolve = require('path').resolve
const logFile = resolve(__dirname, 'git_diff.log')

let data = fs.readFileSync(logFile).toString()

let files = data
    .split('\n')
    .filter(f => {
        return f && !f.startsWith('D') //不检查被删除的文件
    })
    .map(f => {
        return f.split('\t')[1]
    })

let srcFiles = files.filter(f => {
    return f.startsWith('src') && (f.endsWith('.js') || f.endsWith('.jsx'))
})

let serverFiles = files.filter(f => {
    return f.startsWith('server') && f.endsWith('.js')
})

let allFiles = srcFiles.concat(serverFiles)

let command = `eslint ${allFiles.join(' ')} --fix`

let result = shelljs.exec(command)

console.log(allFiles.join(' '))

if (result.code !== 0) {
    process.exit(1)
} else {
    let command = `git add ${allFiles.join(' ')}`
    shelljs.exec(command)
    process.exit(0)
}

//可以通过传入参数lvl，设定拷贝深度的一个自定义深拷贝函数，不设置lvl会进行完全深拷贝
const levelCopy = function(p, lvl, copy) {
    let c = copy || (p instanceof Array ? [] : {})
    if (lvl === 0) {
        return c
    }
    if (
        Object.prototype.toString.call(p) !== '[object Object]' &&
        Object.prototype.toString.call(p) !== '[object Array]'
    ) {
        return p
    }
    for (let i in p) {
        if (!p.hasOwnProperty(i)) {
            //只对本身属性和方法进行copy
            continue
        }
        if (p[i] && typeof p[i] === 'object') {
            //Object or Array except null
            c[i] = p[i].constructor === Array ? [] : {}
            levelCopy(
                p[i],
                Number.isInteger(lvl) && lvl > 0 ? lvl - 1 : undefined,
                c[i]
            )
        } else {
            c[i] = p[i]
        }
    }
    return c
}

const blood = async () => {
    console.warn(1)
}

export { levelCopy, blood }

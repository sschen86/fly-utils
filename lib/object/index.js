module.exports = {
    empty, emptyAssign,
}

function empty (data) {
    for (const key in data) {
        delete data[key]
    }
    return data
}

function emptyAssign (data, ...args) {
    return Object.assign(empty(data), ...args)
}

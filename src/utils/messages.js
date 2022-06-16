const generateMessage = (username, text) => {
    return {
        username: username,
        text: text,
        createAt: new Date().getTime()
    }
}

const generateLocationMessage = (username, url) => {
    return {
        username: username,
        url: url,
        createAt: new Date().getTime()
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage
}
module.exports.config = {
    name: "yeuhanh",
    version: "1.1.1",
    hasPermssion: 0,
    credits: "DinhPhuc",
    description: "Những Câu Nói Của DPhuc Dành Cho HHanh❤",
    commandCategory: "Khác",
    cooldowns: 1
};

module.exports.run = function ({ api, event }) {
    const data = ["Anh chỉ muốn nói là...Anh Yêu Em rất nhiều ( HHanh❤ )",
    ];
    return api.sendMessage(`${data[Math.floor(Math.random() * data.length)]}`, event.threadID, event.messageID);
}
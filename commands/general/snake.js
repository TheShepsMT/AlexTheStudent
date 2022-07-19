const Discord = require("discord.js");

const {
    Leafsnake
} = require('leaf-utils');

module.exports = {
    name: "snake",
    execute: async (client, message, args) => {

        new Leafsnake({
            message: message,
            embed: {
                title: 'Snake Game',
                color: '#7289da',
                OverTitle: "Game Over",
            },
            snake: {
                head: '🟢',
                body: '🟩',
                tail: '🟢'
            },
            emojis: {
                board: '⬛',
                food: '🍎',
                up: '⬆️',
                right: '➡️',
                down: '⬇️',
                left: '⬅️',
            },
        }).startGame()
    }
}

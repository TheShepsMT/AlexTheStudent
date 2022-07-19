const Discord = require("discord.js");

const {
    calculator
} = require('leaf-utils');

module.exports = {
    name: "calc",
    execute: async (client, message, args) => {

        await calculator({
         
                message: message,
                embed: {
                    title: '   ‍      ‍      ‍      ‍    𝕄𝕋 ℙ𝕋ℝ𝕆𝔻𝕌ℂ𝕋𝕀𝕆ℕ𝕊 ‍',
                    timestamp: false,
                    color: ([47, 49, 54]),
                    footer: 'Calc. Estándar  • ‍     ‍      ‍      ‍         ‍       ‍      ‍      ‍      ‍      ‍    ',
                },          
                disabledQuery: 'CALCULADORA DESACTIVADA!',
                invalidQuery: 'OPERACIÓN INVALIDA',
                othersMessage: 'Solo <@{{author}}> puede usar esta calculadoras si quieres usar una calculadora deberás usae el comando `*calc`.',
            })
        } 
}

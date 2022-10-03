const {Telegraf} = require("telegraf");

const bot = new Telegraf('5425287923:AAEy6NHy-QdHA6GnVJIU-rzTkSZGgPc2-KY')

// code time

//start command
// bot.start((ctx) => {
//     ctx.reply("You have entered /start button")
//     // console.log(ctx.from )
//     // console.log(ctx.chat)
// })
//
// // help command
//
// bot.help((ctx) =>{
//     ctx.reply("You entered /help command")
// } )
//
// bot.settings((ctx) =>{
//     ctx.reply("You entered /settings command")
// } )
//
// bot.command('test' ,(ctx)=>{
//     ctx.reply("Hello world");
// })
//
// // hears method :
// bot.hears("cat", (ctx) =>{
//     ctx.replyWithHTML("<b spellcheck='false'>Meowchaasasasas</b>")
// })

bot.command("echo" ,(ctx) => {
    let input = ctx.message.text;
    let inputArray = input.split(" ");

    let message = "";

    if (inputArray.length === 1){
        message = "You said echo only";
    } else {
        inputArray.shift();
        message = inputArray.join(" ");
    }

    ctx.reply(message);
})




/**
 * Launchs the bot
 */
bot.launch().then();
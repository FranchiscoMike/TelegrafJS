const {Telegraf} = require("telegraf");

const bot = new Telegraf('5425287923:AAEy6NHy-QdHA6GnVJIU-rzTkSZGgPc2-KY')

// code time

// start command
// bot.start((ctx) => {
//     ctx.reply("You have entered /start button")
//     // console.log(ctx.from )
//     // console.log(ctx.chat)
// })
// //
// // help command
//
// bot.help((ctx) =>{
//     ctx.reply("You entered /help command")
// } )
//
// bot.settings((ctx) =>{
//     ctx.reply("You entered /settings command")
// } )
//  custom command ? like as you want
// bot.command('test' ,(ctx)=>{
//     ctx.reply("Hello world");
// })
//
// // hears method :  // agar shunaqa xabar kelsa kutadigan
// bot.hears("cat", (ctx) =>{
//     ctx.replyWithHTML("<b spellcheck='false'>Meowchaasasasas</b>")
// })

//              ECHO BOT :
// bot.command("echo" ,(ctx) => {
//     let input = ctx.message.text;
//     let inputArray = input.split(" ");
//
//     let message = "";
//
//     if (inputArray.length === 1){
//         message = "You said echo only";
//     } else {
//         inputArray.shift();
//         message = inputArray.join(" ");
//     }
//
//     ctx.reply(message);
// }) // shunaqa commanda bo'lsa reply qiladi ? bunda reply degani shunde javov qaytar degani ekan !
// bot.command(["test", "Test"], (ctx)=>{
//     ctx.reply("Hello world")
// })

// bot.use() // botdan foydalangan har kimni yozadi :
// bot.use((ctx, next) =>{
//     console.log(ctx.updateType);
//     next().then();
// })

// bot.on() = parametr type :
// handle text or update_type messages :
// bot.on("text", (ctx) =>{
//     ctx.reply("This is a text message")
// })

// // mention()
// bot.mention("botfather",(ctx) =>{
//     ctx.reply("This is a mention method")
// })
// //phone()
// bot.phone("+998909741228",(ctx) =>{
//     ctx.reply("This is a phone method")
// })
// //hashtag()
// bot.hashtag("botfather",(ctx) =>{
//     ctx.reply("This is a hashtag method")
// })


// extra fields
// bot.command("start", (ctx) =>{
//     bot.telegram.sendMessage(ctx.chat.id ,"Hello World" , {
//         parse_mode : 'MarkdownV2',
//         disable_notification : true
//     })
// })

// always read all updates
bot.use((ctx,next) =>{
    ctx.telegram.sendChatAction(ctx.chat.id, "typing") // chat actions
    // logger(ctx);
    next(ctx).then();
})

// bot.start((ctx) =>{
//     ctx.reply(" click on /start command again")
// })

// logger function
// function logger(ctx){
//     if (ctx.message.text) {
//         console.log(ctx.from.first_name + " said : "+ ctx.message.text)
//     } else if (ctx.message.sticker) {
//         console.log(ctx.from.first_name + " sent sticker ")
//     } else if (ctx.message.animation){
//         console.log(ctx.from.first_name + " sent animation ")
//     }
// }
//


//                  Media bot :

bot.command('img' ,(ctx) =>{
   bot.telegram.sendPhoto(ctx.chat.id , 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/181687787.jpg?k=fdd09023f2c8bb5acc47bd20dd18b55559b81a3cbfc70bf715f2ff75cf0c0ce8&o=&hp=1');
})

bot.use((ctx, next) =>{
    // console.log(ctx.message);
    if (ctx.message.photo) {
        bot.telegram.sendPhoto(ctx.chat.id, ctx.message.photo[0].file_id)
    } else {
        console.log(ctx.message);
        bot.telegram.sendMessage(ctx.chat.id, "PLease send us photo\n\n"+ctx.message.text)
    }
})



/**
 * Launchs the bot
 */
bot.launch().then();
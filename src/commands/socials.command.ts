import { Markup, Telegraf } from "telegraf";
import { IBotContext } from "../context/context.interface";
import { Command } from "./command.class";
import fs from "fs";


export class SocialsCommand extends Command {
    constructor(bot: Telegraf<IBotContext>) {
        super(bot);
    }

    handle(): void {
        this.bot.command("socials", (ctx) => {
            const socials = [
                {
                    "name": "Twitter",
                    "url": "https://twitter.com/thejus1d"
                },
                {
                    "name": "GitHub",
                    "url": "https://github.com/jus1d"
                },
                {
                    "name": "VK",
                    "url": "https://vk.com/jus1d"
                }
            ];

            let markupButtons = [];

            for (let i = 0; i < socials.length; i++ ) {
                markupButtons.push(Markup.button.url(socials[i]["name"], socials[i]["url"]))
            }            

            ctx.reply("Click here 👇", Markup.inlineKeyboard(markupButtons));
        });
    }
}
import { Markup, Telegraf } from "telegraf";
import { IBotContext } from "../context/context.interface";
import { Command } from "./command.class";

export class GitHubCommand extends Command {
    constructor(bot: Telegraf<IBotContext>) {
        super(bot);
    }

    handle(): void {
        this.bot.command("github", (ctx) => {
            ctx.reply("Click 👇", Markup.inlineKeyboard([
                Markup.button.url('GitHub', 'https://github.com/jus1d/')
            ]));
        });
    }
}
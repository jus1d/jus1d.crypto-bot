import { Telegraf } from "telegraf";
import { IBotContext } from "../context/context.interface";
import { Command } from "./command.class";
import { ICryptomusService } from "../cryptomus/cryptomus.interface";
import { IDataBase } from "../database/database.interface";

export class PayCommand extends Command {
    constructor(
        bot: Telegraf<IBotContext>,
        private readonly cryptomusService: ICryptomusService,
        private readonly databaseService: IDataBase) {
        super(bot);
    }

    handle(): void {
        this.bot.command('pay', async (ctx) => {
            
            const res = await this.cryptomusService.createPayment(1, "10");

            if (!res) {
                ctx.reply('Payment error');
                return;
            }

            console.log(res);

            await this.databaseService.payment.create({
                data: {
                    uuid: res.result.uuid,
                    orderId: res?.result.order_id,
                    status: res?.result.status,
                    amount: res?.result.amount,
                    paymentAmount: res?.result.payment_amount,
                    isFinal: res?.result.is_final,
                    url: res?.result.url,
                    chatId: ctx.from.id
                }
            });

            ctx.reply(res.result.url);
        });
    }
}
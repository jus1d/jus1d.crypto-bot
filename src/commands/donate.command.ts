import { Markup, Telegraf } from "telegraf";
import { IBotContext } from "../context/context.interface";
import { Command } from "./command.class";
import { ICryptomusService } from "../cryptomus/cryptomus.interface";
import { IDataBase } from "../database/database.interface";
import { v4 as uuidv4 } from 'uuid';

export class DonateCommand extends Command {
    constructor(
        bot: Telegraf<IBotContext>,
        private readonly cryptomusService: ICryptomusService,
        private readonly databaseService: IDataBase) {
        super(bot);
    }

    handle(): void {
        this.bot.command('donate', async (ctx) => {

            ctx.sendMessage('Enter amount of a donation', Markup.inlineKeyboard([
                Markup.button.callback("1$", "donate_1_usd"),
                Markup.button.callback("5$", "donate_5_usd"),
                Markup.button.callback("10$", "donate_10_usd"),
                Markup.button.callback("20$", "donate_20_usd"),
                Markup.button.callback("100$", "donate_100_usd")
            ]))

            
            // const res = await this.cryptomusService.createPayment(1, uuidv4());

            // if (!res) {
            //     ctx.reply('Error with payment creating');
            //     return;
            // }

            // await this.databaseService.payment.create({
            //     data: {
            //         uuid: res.result.uuid,
            //         orderId: res.result.order_id,
            //         status: res.result.status,
            //         amount: res.result.amount,
            //         paymentAmount: res.result.payer_amount,
            //         isFinal: res.result.is_final,
            //         url: res.result.url,
            //         chatId: ctx.from.id
            //     }
            // });

            // ctx.reply(res.result.url);
        });

        this.bot.action('donate_1_usd', async (ctx) => {

            const res = await this.cryptomusService.createPayment(1, uuidv4());

            if (!res) {
                ctx.editMessageText('Error with payment creating');
                return;
            }

            if (!ctx.chat) {
                ctx.editMessageText('Error with payment creating');
                return;
            }

            await this.databaseService.payment.create({
                data: {
                    uuid: res.result.uuid,
                    orderId: res.result.order_id,
                    status: res.result.status,
                    amount: res.result.amount,
                    paymentAmount: res.result.payer_amount,
                    isFinal: res.result.is_final,
                    url: res.result.url,
                    chatId: ctx.chat.id
                }
            });

            ctx.editMessageText(`Click here to send 1$ donation 👇`, Markup.inlineKeyboard([
                Markup.button.url('Donate!', res.result.url)
            ]))
        });

        this.bot.action('donate_5_usd', async (ctx) => {

            const res = await this.cryptomusService.createPayment(5, uuidv4());

            if (!res) {
                ctx.editMessageText('Error with payment creating');
                return;
            }

            if (!ctx.chat) {
                ctx.editMessageText('Error with payment creating');
                return;
            }

            await this.databaseService.payment.create({
                data: {
                    uuid: res.result.uuid,
                    orderId: res.result.order_id,
                    status: res.result.status,
                    amount: res.result.amount,
                    paymentAmount: res.result.payer_amount,
                    isFinal: res.result.is_final,
                    url: res.result.url,
                    chatId: ctx.chat.id
                }
            });

            ctx.editMessageText(`Click here to send 5$ donation 👇`, Markup.inlineKeyboard([
                Markup.button.url('Donate!', res.result.url)
            ]))
        });

        this.bot.action('donate_10_usd', async (ctx) => {

            const res = await this.cryptomusService.createPayment(10, uuidv4());

            if (!res) {
                ctx.editMessageText('Error with payment creating');
                return;
            }

            if (!ctx.chat) {
                ctx.editMessageText('Error with payment creating');
                return;
            }

            await this.databaseService.payment.create({
                data: {
                    uuid: res.result.uuid,
                    orderId: res.result.order_id,
                    status: res.result.status,
                    amount: res.result.amount,
                    paymentAmount: res.result.payer_amount,
                    isFinal: res.result.is_final,
                    url: res.result.url,
                    chatId: ctx.chat.id
                }
            });

            ctx.editMessageText(`Click here to send 10$ donation 👇`, Markup.inlineKeyboard([
                Markup.button.url('Donate!', res.result.url)
            ]))
        });

        this.bot.action('donate_20_usd', async (ctx) => {

            const res = await this.cryptomusService.createPayment(20, uuidv4());

            if (!res) {
                ctx.editMessageText('Error with payment creating');
                return;
            }

            if (!ctx.chat) {
                ctx.editMessageText('Error with payment creating');
                return;
            }

            await this.databaseService.payment.create({
                data: {
                    uuid: res.result.uuid,
                    orderId: res.result.order_id,
                    status: res.result.status,
                    amount: res.result.amount,
                    paymentAmount: res.result.payer_amount,
                    isFinal: res.result.is_final,
                    url: res.result.url,
                    chatId: ctx.chat.id
                }
            });

            ctx.editMessageText(`Click here to send 20$ donation 👇`, Markup.inlineKeyboard([
                Markup.button.url('Donate!', res.result.url)
            ]))
        });

        this.bot.action('donate_100_usd', async (ctx) => {

            const res = await this.cryptomusService.createPayment(100, uuidv4());

            if (!res) {
                ctx.editMessageText('Error with payment creating');
                return;
            }

            if (!ctx.chat) {
                ctx.editMessageText('Error with payment creating');
                return;
            }

            await this.databaseService.payment.create({
                data: {
                    uuid: res.result.uuid,
                    orderId: res.result.order_id,
                    status: res.result.status,
                    amount: res.result.amount,
                    paymentAmount: res.result.payer_amount,
                    isFinal: res.result.is_final,
                    url: res.result.url,
                    chatId: ctx.chat.id
                }
            });

            ctx.editMessageText(`Click here to send 100$ donation 👇`, Markup.inlineKeyboard([
                Markup.button.url('Donate!', res.result.url)
            ]))
        });
    }
}
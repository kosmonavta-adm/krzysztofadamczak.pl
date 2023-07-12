import { Resend } from 'resend';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    if (method === 'POST') {
        const { replyTo, message, timeFromRenderToSend } = JSON.parse(req.body);

        await prisma.log.create({
            data: {
                replyTo,
                message,
            },
        });

        if (timeFromRenderToSend >= 5000) {
            await resend.emails.send({
                from: '<form@resend.dev>',
                to: ['krzadamczak@gmail.com'],
                reply_to: replyTo,
                subject: `Formularz, ${replyTo}`,
                text: message,
            });
        }

        res.status(200);
    }
}

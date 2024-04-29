import {NextApiResponse} from "next";
import {NextRequest, NextResponse} from "next/server";
import nodemailer from 'nodemailer';
import {TicketRequestSchemaType} from "@/objects/request/ticket.request";

export async function POST(request: NextRequest, response: NextApiResponse) {
    try {
        const ticket: TicketRequestSchemaType = await request.json();
        const {SMTP_EMAIL, SMTP_PASSWORD} = process.env;

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            service: "gmail",
            secure: true,
            auth: {
                user: SMTP_EMAIL,
                pass: SMTP_PASSWORD,
            },
        })

        const mailOption = {
            from: SMTP_EMAIL,
            to: ticket.email,
            cc: SMTP_EMAIL,
            subject: "Demande de devis - Echafaudage Mons",
            html: emailToMarkdown(ticket),
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({message: "Email Sent Successfully"}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Error when sending email"}, {status: 500})
    }
}

function emailToMarkdown(ticket: TicketRequestSchemaType) {
    return `
Bonjour <b>{name}</b>,<br/>
<br/>
Voici votre devis personnalisé :<br/>
<br/>
________________________________________<br/>
<b>Quantité</b><br/>
<br/>
1<br/>
________________<br/>
<b>Description</b><br/>
<br/>
{description}<br/>
________________<br/>
<b>Prix unitaire HTVA</b><br/>
<br/>
{estimatedPrice}<br/>
________________<br/>
<b>Prix total HTVA</b><br/>
<br/>
{estimatedPrice}<br/>
________________<br/>
<br/>
Total HTVA {estimatedPrice}€<br/>
TVA {vat}€<br/>
---<br/>
Total TVAC {estimatedPriceVat}€<br/>
________________________________________<br/>
<br/>
<b>N'hésitez à revenir vers nous à l'adresse email suivante {email} ou par téléphone au {phone}.</b><br/>
<br/>
Bien à vous,<br/>
Echafaudage Mons
<br/><br/><br/><br/>
Veuillez ne pas répondre à cet email svp, aucune réponse n'y sera apportée.`
        .replaceAll("{name}", ticket.name)
        .replaceAll("{description}", `${ticket.sale ? "Achat" : "Location"} ${ticket.area}m²${ticket.duration < 1 ? "" : ` - ${ticket.duration} semaine(s)`}`)
        .replaceAll("{estimatedPrice}", String(ticket.estimatedPrice))
        .replaceAll("{vat}", String(ticket.estimatedPrice * 0.21))
        .replaceAll("{estimatedPriceVat}", String(ticket.estimatedPrice * 1.21))
        .replaceAll("{email}", "")
        .replaceAll("{phone}", "");
}

/*export function compileWelcomeTemplate(ticket: TicketRequestSchemaType) {
    const template = handlebars.compile(email_template);
    const htmlBody = template({
        name: ticket.name,
        description: `${ticket.sale ? "ACHAT" : "LOCATION"} ${ticket.area}m²${ticket.duration < 1 ? "" : ` - ${ticket.duration} semaine(s)`}`,
        estimatedPrice: ticket.estimatedPrice,
        vat: ticket.estimatedPrice * 0.21,
        estimatedPriceVat: ticket.estimatedPrice * 1.21,
    });
    return htmlBody;
} */
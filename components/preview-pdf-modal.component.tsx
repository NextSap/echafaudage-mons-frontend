import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import {TicketResponseSchemaType} from "@/objects/response/ticket.response";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Separator} from "@/components/ui/separator";

type TicketModalProps = {
    ticket: TicketResponseSchemaType,
    children: React.ReactNode,
}

export function PdfModal(props: TicketModalProps) {

    const {ticket} = props;

    return (
        <Dialog>
            <DialogTrigger asChild>
                {props.children}
            </DialogTrigger>
            <DialogContent className="flex flex-col sm:max-w-[825px] gap-10 light text-foreground">
                <DialogHeader className="flex flex-col gap-5">
                    <p className="text-2xl underline">FACTURE PROFORMA</p>
                    <div className="flex justify-between">
                        <div>
                            <p>Echafaudage Mons</p>
                            <p>Adresse</p>
                            <p>Adresse email</p>
                            <p>Numéro de téléphone</p>
                        </div>
                        <div>
                            <p>{ticket.name}</p>
                            <p>{ticket.address}</p>
                            <p>{ticket.email}</p>
                            <p>{ticket.phoneNumber}</p>
                        </div>
                    </div>
                </DialogHeader>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Quantité</TableHead>
                            <TableHead className="w-[300px]">Description</TableHead>
                            <TableHead className="w-[200px]">Prix Unitaire HTVA</TableHead>
                            <TableHead className="text-right">Total HTVA</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">1</TableCell>
                            <TableCell>Echafaudage type 2</TableCell>
                            <TableCell>250</TableCell>
                            <TableCell className="text-right">250.00</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <div className="flex justify-end w-full">
                    <div className="flex flex-col items-end mr-4 text-sm w-[200px]">
                        <div className="flex justify-between w-[200px]">
                            <p>Total HTVA</p>
                            <p>250.00</p>
                        </div>
                        <div className="flex justify-between w-[200px]">
                            <p>TVA</p>
                            <p>250.00</p>
                        </div>
                        <Separator className="w-full h-[1px] my-2 bg-primary"/>
                        <div className="flex justify-between w-[200px]">
                            <p>Total TVAC</p>
                            <p>250.00</p>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

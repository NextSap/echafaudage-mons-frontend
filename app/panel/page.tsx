"use client"

import * as React from "react"
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import {MoreHorizontal} from "lucide-react"

import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {TicketResponseSchemaType} from "@/objects/response/ticket.response";
import {TicketModal} from "@/components/ticket_modal.component";
import {useToast} from "@/components/ui/use-toast";

const data: TicketResponseSchemaType[] = [
    {
        id: 0,
        name: "Sophie Martin",
        phoneNumber: "+32 485 56 78 90",
        email: "sophiemartin@example.com",
        address: "address",
        vatPayer: true,
        materialType: "Type 1",
        height: 10,
        length: 10,
        area: 100,
        seen: false,
        creationDate: 0,
        duration: 0,
        estimatedPrice: 100,
    },
    {
        id: 1,
        name: "Alexandre Dupont",
        phoneNumber: "+32 478 45 67 89",
        email: "alexandredupont@example.com",
        address: "address",
        vatPayer: true,
        materialType: "Type 1",
        height: 10,
        length: 10,
        area: 100,
        seen: false,
        creationDate: 0,
        duration: 0,
        estimatedPrice: 100,
    },
    {
        id: 2,
        name: "Camille Lefebvre",
        phoneNumber: "+32 497 34 56 78",
        email: "camillelefebvre@example.com",
        address: "address",
        vatPayer: true,
        materialType: "Type 1",
        height: 10,
        length: 10,
        area: 100,
        seen: false,
        creationDate: 0,
        duration: 0,
        estimatedPrice: 100,
    },
    {
        id: 3,
        name: "Thomas Dubois",
        phoneNumber: "+32 486 23 45 67",
        email: "thomasdubois@example.com",
        address: "address",
        vatPayer: true,
        materialType: "Type 1",
        height: 10,
        length: 10,
        area: 100,
        seen: false,
        creationDate: 0,
        duration: 0,
        estimatedPrice: 100,
    },
    {
        id: 4,
        name: "Laura Petit",
        phoneNumber: "+32 479 12 34 56",
        email: "laurapetit@example.com",
        address: "address",
        vatPayer: true,
        materialType: "Type 1",
        height: 10,
        length: 10,
        area: 100,
        seen: false,
        creationDate: 0,
        duration: 0,
        estimatedPrice: 100,
    },
    {
        id: 0,
        name: "Sophie Martin",
        phoneNumber: "+32 485 56 78 90",
        email: "sophiemartin@example.com",
        address: "address",
        vatPayer: true,
        materialType: "Type 1",
        height: 10,
        length: 10,
        area: 100,
        seen: false,
        creationDate: 0,
        duration: 0,
        estimatedPrice: 100,
    },
    {
        id: 1,
        name: "Alexandre Dupont",
        phoneNumber: "+32 478 45 67 89",
        email: "alexandredupont@example.com",
        address: "address",
        vatPayer: true,
        materialType: "Type 1",
        height: 10,
        length: 10,
        area: 100,
        seen: false,
        creationDate: 0,
        duration: 0,
        estimatedPrice: 100,
    },
    {
        id: 2,
        name: "Camille Lefebvre",
        phoneNumber: "+32 497 34 56 78",
        email: "camillelefebvre@example.com",
        address: "address",
        vatPayer: true,
        materialType: "Type 1",
        height: 10,
        length: 10,
        area: 100,
        seen: false,
        creationDate: 0,
        duration: 0,
        estimatedPrice: 100,
    },
    {
        id: 3,
        name: "Thomas Dubois",
        phoneNumber: "+32 486 23 45 67",
        email: "thomasdubois@example.com",
        address: "address",
        vatPayer: true,
        materialType: "Type 1",
        height: 10,
        length: 10,
        area: 100,
        seen: false,
        creationDate: 0,
        duration: 0,
        estimatedPrice: 100,
    },
    {
        id: 4,
        name: "Laura Petit",
        phoneNumber: "+32 479 12 34 56",
        email: "laurapetit@example.com",
        address: "address",
        vatPayer: true,
        materialType: "Type 1",
        height: 10,
        length: 10,
        area: 100,
        seen: false,
        creationDate: 0,
        duration: 0,
        estimatedPrice: 100,
    },
    {
        id: 0,
        name: "Sophie Martin",
        phoneNumber: "+32 485 56 78 90",
        email: "sophiemartin@example.com",
        address: "address",
        vatPayer: true,
        materialType: "Type 1",
        height: 10,
        length: 10,
        area: 100,
        seen: false,
        creationDate: 0,
        duration: 0,
        estimatedPrice: 100,
    },
    {
        id: 1,
        name: "Alexandre Dupont",
        phoneNumber: "+32 478 45 67 89",
        email: "alexandredupont@example.com",
        address: "address",
        vatPayer: true,
        materialType: "Type 1",
        height: 10,
        length: 10,
        area: 100,
        seen: false,
        creationDate: 0,
        duration: 0,
        estimatedPrice: 100,
    },
    {
        id: 2,
        name: "Camille Lefebvre",
        phoneNumber: "+32 497 34 56 78",
        email: "camillelefebvre@example.com",
        address: "address",
        vatPayer: true,
        materialType: "Type 1",
        height: 10,
        length: 10,
        area: 100,
        seen: false,
        creationDate: 0,
        duration: 0,
        estimatedPrice: 100,
    },
    {
        id: 3,
        name: "Thomas Dubois",
        phoneNumber: "+32 486 23 45 67",
        email: "thomasdubois@example.com",
        address: "address",
        vatPayer: true,
        materialType: "Type 1",
        height: 10,
        length: 10,
        area: 100,
        seen: false,
        creationDate: 0,
        duration: 0,
        estimatedPrice: 100,
    },
    {
        id: 4,
        name: "Laura Petit",
        phoneNumber: "+32 479 12 34 56",
        email: "laurapetit@example.com",
        address: "address",
        vatPayer: true,
        materialType: "Type 1",
        height: 10,
        length: 10,
        area: 100,
        seen: false,
        creationDate: 0,
        duration: 0,
        estimatedPrice: 100,
    },
]

const columns: ColumnDef<TicketResponseSchemaType>[] = [
    {
        accessorKey: "name",
        header: "Name",
        cell: ({row}) => (
            <div className="capitalize">{row.getValue("name")}</div>
        ),
    },
    {
        accessorKey: "email",
        header: () => <div className="text-left">Email</div>,
        cell: ({row}) => <div className="lowercase">{row.getValue("email")}</div>,
    },
    {
        accessorKey: "phoneNumber",
        header: () => <div className="text-left">Téléphone</div>,
        cell: ({row}) => <div className="lowercase">{row.getValue("phoneNumber")}</div>,
    },
    {
        accessorKey: "area",
        header: () => <div className="text-left">Surface - m²</div>,
        cell: ({row}) => <div className="lowercase">{row.getValue("area")}</div>,
    },
    {
        accessorKey: "estimatedPrice",
        header: () => <div className="text-right">Prix estimé</div>,
        cell: ({row}) => {
            const amount = parseFloat(row.getValue("estimatedPrice"))

            // Format the amount as a dollar amount
            const formatted = new Intl.NumberFormat("fr-BE", {
                style: "currency",
                currency: "EUR",
            }).format(amount)

            return <div className="text-right font-medium">{formatted}</div>
        },
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({row}) => {
            const ticket: TicketResponseSchemaType = row.original
            const { toast } = useToast()

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4"/>
                        </Button>
                    </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem
                                // onClick={() => navigator.clipboard.writeText(payment.id)}
                            >
                                Voir le détail
                            </DropdownMenuItem>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem
                                onClick={() => {toast({variant: "destructive", title: "⚠️ Fonctionnalité indisponible", description: "Cette fonctionnalité arrivera dans une prochaine version de l'application", duration: 5000})}}
                            >Envoyer un mail</DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => {toast({variant: "destructive", title: "⚠️ Fonctionnalité indisponible", description: "Cette fonctionnalité arrivera dans une prochaine version de l'application", duration: 5000})}}
                            >Modifier le devis</DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => {toast({variant: "destructive", title: "⚠️ Fonctionnalité indisponible", description: "Cette fonctionnalité arrivera dans une prochaine version de l'application", duration: 5000})}}
                            >Envoyer le devis</DropdownMenuItem>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem>Supprimer</DropdownMenuItem>
                        </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]

export default function DataTableDemo() {

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    })

    return (
        <div className="w-full p-5">
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex justify-center mt-4">
                <div className="flex justify-center gap-10">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Précédent
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Suivant
                    </Button>
                </div>
            </div>
        </div>
    )
}

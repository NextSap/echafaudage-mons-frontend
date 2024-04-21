"use client"

import React from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {TicketResponseSchemaType} from "@/objects/response/ticket.response";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {useRouter} from "next/navigation";
import {Separator} from "@radix-ui/react-menu";
import {useToast} from "@/components/ui/use-toast";

const Consult = ({params}: { params: { id: string } }) => {

    const router = useRouter();
    const {toast} = useToast()

    const ticket: TicketResponseSchemaType = { // TODO Fetch the ticket with params.id
        id: 0,
        name: "Sophie Martin",
        phoneNumber: "+32 485 56 78 90",
        email: "sophiemartin@example.com",
        address: "address",
        vatPayer: true,
        vatNumber: "BE0123456789",
        materialType: "Type 1",
        height: 10,
        length: 10,
        area: 100,
        seen: false,
        creationDate: 0,
        duration: 0,
        estimatedPrice: 100,
        sale: true,
    };

    return (
        <Card className="m-auto md:w-[80%] w-[90%] mt-5">
            <CardHeader className="flex">
                <CardTitle>Devis de {ticket.name} - {ticket.sale ? "Vente" : "Location"} d'échafaudage</CardTitle>
                <CardDescription>Créé le {new Date(ticket.creationDate).toLocaleDateString("fr-be")}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                <Label className="text-xl underline">Informations du client</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <Label>Nom</Label>
                        <p>{ticket.name}</p>
                    </div>
                    <div>
                        <Label>Téléphone</Label>
                        <p>{ticket.phoneNumber}</p>
                    </div>
                    <div>
                        <Label>Email</Label>
                        <p>{ticket.email}</p>
                    </div>
                    <div>
                        <Label>Adresse</Label>
                        <p>{ticket.address}</p>
                    </div>
                    <div>
                        <Label>Assujetti à la TVA</Label>
                        <p>{ticket.vatPayer ? "Oui" : "Non"}</p>
                    </div>
                    {ticket.vatPayer &&
                        <div>
                            <Label>Numéro de TVA</Label>
                            <p>{ticket.vatNumber}</p>
                        </div>}
                </div>
                <Label className="text-xl underline">Informations du devis</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <Label>Type de matériau</Label>
                        <p>{ticket.materialType}</p>
                    </div>
                    <div>
                        <Label>Hauteur</Label>
                        <p>{ticket.height} cm</p>
                    </div>
                    <div>
                        <Label>Longueur</Label>
                        <p>{ticket.length} cm</p>
                    </div>
                    <div>
                        <Label>Surface</Label>
                        <p>{ticket.area} cm²</p>
                    </div>
                    {!ticket.sale &&
                        <div>
                            <Label>Durée</Label>
                            <p>{ticket.duration} semaine(s)</p>
                        </div>}
                    <div>
                        <Label>Estimé</Label>
                        <p>{ticket.estimatedPrice} €</p>
                    </div>
                </div>
            </CardContent>
            <Separator className="w-16 h-[1px] m-6 bg-primary" />
            <CardFooter className="flex md:flex-row flex-col items-start gap-5">
                <Button variant="outline" onClick={() => {router.push(`/panel/modify/${params.id}`)}}>Modifier</Button>
                <Button variant="outline" onClick={() => {
                    window.location.href = `mailto:${ticket.email}`;
                }}
                >Envoyer un email</Button>
                <Button variant="outline" onClick={() => {
                    toast({
                        variant: "destructive",
                        title: "⚠️ Fonctionnalité indisponible",
                        description: "Cette fonctionnalité arrivera dans une prochaine version de l'application",
                        duration: 5000
                    })
                }}>Télécharger en PDF</Button>
                <Button variant="destructive" onClick={() => {
                    toast({
                        variant: "destructive",
                        title: "⚠️ Fonctionnalité indisponible",
                        description: "Cette fonctionnalité arrivera dans une prochaine version de l'application",
                        duration: 5000
                    })
                }}>Supprimer</Button>
            </CardFooter>
        </Card>
    );
};

export default Consult;
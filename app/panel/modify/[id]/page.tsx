"use client"

import React, {useState} from 'react';
import {useRouter} from "next/navigation";
import {useToast} from "@/components/ui/use-toast";
import {TicketResponseSchemaType} from "@/objects/response/ticket.response";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Separator} from "@radix-ui/react-menu";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Checkbox} from "@/components/ui/checkbox";
import {Slider} from "@/components/ui/slider";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {z} from "zod";
import {TicketRequestSchema} from "@/objects/request/ticket.request";

const Modify = ({params}: { params: { id: string } }) => {

    const router = useRouter();
    const {toast} = useToast();

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
        duration: -1,
        estimatedPrice: 100,
        sale: true,
    };

    const form = useForm<z.infer<typeof TicketRequestSchema>>({
        resolver: zodResolver(TicketRequestSchema),
        defaultValues: {
            name: ticket.name,
            phoneNumber: ticket.phoneNumber,
            email: ticket.email,
            address: ticket.address,
            vatPayer: ticket.vatPayer,
            vatNumber: ticket.vatNumber,
            materialType: ticket.materialType,
            height: ticket.height,
            length: ticket.length,
            area: [ticket.area],
            duration: ticket.duration,
            estimatedPrice: ticket.estimatedPrice,
            sale: ticket.sale,
        }
    });

    function onSubmit(values: z.infer<typeof TicketRequestSchema>) {
        console.log(values)
    };

    const [vatPayer, setVatPayer] = useState(ticket.vatPayer);
    const [sale, setSale] = useState(ticket.sale);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <Card className="m-auto md:w-[80%] w-[90%] mt-5">
                    <CardHeader className="flex">
                        <CardTitle>Devis
                            de {ticket.name} - {sale ? "Vente" : "Location"} d'échafaudage</CardTitle>
                        <CardDescription>Créé
                            le {new Date(ticket.creationDate).toLocaleDateString("fr-be")}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <Label className="text-xl underline">Informations du client</Label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Nom</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Nom" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phoneNumber"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Téléphone</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Téléphone" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Email" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Adresse</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Adresse" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                                <FormField
                                    control={form.control}
                                    name="vatPayer"
                                    render={({field: {value, onChange}}) => (
                                        <FormItem>
                                            <div className="flex items-center gap-2">
                                                <FormControl>
                                                    <Checkbox checked={value} onCheckedChange={(e) => {
                                                        onChange(e);
                                                        setVatPayer(!value);
                                                    }} id={"vat"}/>
                                                </FormControl>
                                                <FormLabel htmlFor={"vat"}>Assujetti à la TVA</FormLabel>
                                            </div>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                                <FormField
                                    control={form.control}
                                    name="sale"
                                    render={({field: {value, onChange}}) => (
                                        <FormItem>
                                            <div className="flex items-center gap-2">
                                                <FormControl>
                                                    <Checkbox checked={value} onCheckedChange={(e) => {
                                                        onChange(e);
                                                        setSale(!value);
                                                        if(form.getValues("duration") < 1) form.setValue("duration", 1);
                                                    }} id={"sale"}/>
                                                </FormControl>
                                                <FormLabel htmlFor={"sale"}>Vente d'échafaudage</FormLabel>
                                            </div>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                                {vatPayer &&
                                    <FormField
                                        control={form.control}
                                        name="vatNumber"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Numéro de TVA</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Numéro de TVA" {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}/>}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label className="text-xl underline">Informations du devis</Label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <FormField
                                    control={form.control}
                                    name="materialType"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Type d'échafaudage</FormLabel>
                                            <FormControl>
                                                <Select defaultValue={field.value} onValueChange={field.onChange}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Type d'échafaudage"/>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="Type 1">Type 1</SelectItem>
                                                        <SelectItem value="Type 2">Type 2</SelectItem>
                                                        <SelectItem value="Type 3">Type 3</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                                <FormField
                                    control={form.control}
                                    name="height"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Hauteur - {field.value}m</FormLabel>
                                            <FormControl>
                                                <Input type={"number"} min={"0"} defaultValue={field.value}
                                                       onChange={field.onChange}
                                                       step={0.5} placeholder="Hauteur"/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                                <FormField
                                    control={form.control}
                                    name="length"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Longueur - {field.value}m</FormLabel>
                                            <FormControl>
                                                <Input type={"number"} min={"0"} defaultValue={field.value}
                                                       onChange={field.onChange}
                                                       step={0.5} placeholder="Longueur"/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                                <FormField
                                    control={form.control}
                                    name="area"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Superficie - {field.value}m²</FormLabel>
                                            <FormControl>
                                                <Slider defaultValue={field.value} onValueChange={field.onChange}
                                                        step={1}
                                                        min={0}
                                                        max={100}/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                                <FormField
                                    control={form.control}
                                    name="estimatedPrice"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Prix estimé - €</FormLabel>
                                            <FormControl>
                                                <Input type={"number"} min={"1"} defaultValue={field.value}
                                                       step={0.01} placeholder="Prix estimé" onChange={field.onChange} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                                {!sale &&
                                    <FormField
                                        control={form.control}
                                        name="duration"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Durée
                                                    - {field.value} semaine{field.value > 1 ? "s" : ""}</FormLabel>
                                                <FormControl>
                                                    <Input type={"number"} min={"1"} defaultValue={field.value}
                                                           step={1} placeholder="Durée" onChange={field.onChange} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}/>
                                }
                            </div>
                        </div>
                    </CardContent>
                    <Separator className="w-16 h-[1px] m-6 bg-primary"/>
                    <CardFooter className="flex md:flex-row flex-col items-start gap-5">
                        <Button type="submit" variant="outline"
                                onClick={() => {
                                    if(sale) form.setValue("duration", -1);
                                    if(!form.getValues("vatPayer")) form.setValue("vatNumber", "N/A")
                                }}
                        >Appliquer les modifications</Button>
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
            </form>
        </Form>
    );
};

export default Modify;
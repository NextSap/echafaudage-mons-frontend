"use client"

import {z} from "zod";
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {zodResolver} from "@hookform/resolvers/zod";
import {Slider} from "@/components/ui/slider";
import {Checkbox} from "@/components/ui/checkbox";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Card} from "@/components/ui/card";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {useState} from "react";

const formSchema = z.object({
    name: z.string().min(2, {message: "Nom requis"}),
    email: z.string().email({message: "Adresse email invalide"}),
    phoneNumber: z.string().min(10, {message: "Numéro de téléphone invalide"}),
    address: z.string().min(5, {message: "Adresse invalide"}),
    vatPayer: z.boolean(),
    materialType: z.string(),
    height: z.coerce.number().min(0.5, {message: "Hauteur minimum: 0,5m"}),
    length: z.coerce.number().min(0.5, {message: "Longueur minimum: 0,5m"}),
    area: z.array(z.number()),
    vatNumber: z.string(),
    duration: z.number().min(1, {message: "Durée minimum: 1 semaine"}),
})

export default function Home() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phoneNumber: "",
            address: "",
            vatPayer: false,
            materialType: "",
            height: 0,
            length: 0,
            area: [0],
            vatNumber: "",
            duration: 0
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    };

    const [vatPayer, setVatPayer] = useState(false);
    const [location, setLocation] = useState(false);

    return (
        <Tabs defaultValue="selling" onValueChange={() => setLocation(!location)}
              className="flex flex-col items-center gap-5 p-10">
            <TabsList className="md:w-[80%] w-[95%]">
                <TabsTrigger value="selling" className="w-full">Vente</TabsTrigger>
                <TabsTrigger value="renting" className="w-full">Location</TabsTrigger>
            </TabsList>
            <Card className="md:w-[80%] w-[95%]">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}
                          className="flex flex-col gap-5 md:w-[80%] w-[95%] m-auto p-5">
                        <div className="flex flex-col justify-around gap-5 md:gap-10 md:flex-row">
                            <div className="flex flex-col gap-5 w-full">
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
                                    name="phoneNumber"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Numéro de téléphone</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Numéro de téléphone" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
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
                                {location &&
                                    <FormField
                                        control={form.control}
                                        name="duration"
                                        render={({field: {value, onChange}}) => (
                                            <FormItem>
                                                <FormLabel>Durée - {value} semaine{value > 1 ? "s" : ""}</FormLabel>
                                                <FormControl>
                                                    <Input type={"number"} min={"1"} defaultValue={value}
                                                           onChange={onChange} step={1} placeholder="Durée"/>
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}/>}
                            </div>
                            <div className="flex flex-col gap-5 w-full">
                                <FormField
                                    control={form.control}
                                    name="materialType"
                                    render={({field: {value, onChange}}) => (
                                        <FormItem>
                                            <FormLabel>Type d'échafaudage</FormLabel>
                                            <FormControl>
                                                <Select onValueChange={onChange}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Type d'échafaudage"/>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="type1">Type 1</SelectItem>
                                                        <SelectItem value="type2">Type 2</SelectItem>
                                                        <SelectItem value="type3">Type 3</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                                <FormField
                                    control={form.control}
                                    name="height"
                                    render={({field: {value, onChange}}) => (
                                        <FormItem>
                                            <FormLabel>Hauteur - {value}m</FormLabel>
                                            <FormControl>
                                                <Input type={"number"} min={"0"} onChange={onChange} step={0.5}
                                                       placeholder="Hauteur"/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                                <FormField
                                    control={form.control}
                                    name="length"
                                    render={({field: {value, onChange}}) => (
                                        <FormItem>
                                            <FormLabel>Longueur - {value}m</FormLabel>
                                            <FormControl>
                                                <Input type={"number"} min={"0"} onChange={onChange} step={0.5}
                                                       placeholder="Longueur"/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                                <FormField
                                    control={form.control}
                                    name="area"
                                    render={({field: {value, onChange}}) => (
                                        <FormItem>
                                            <FormLabel>Superficie - {value}m²</FormLabel>
                                            <FormControl>
                                                <Slider defaultValue={value} onValueChange={onChange} step={1} min={0}
                                                        max={100}/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                            </div>
                        </div>
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
                        <Button type="submit">Demander un devis gratuit</Button>
                    </form>
                </Form>
            </Card>
        </Tabs>
    )
}

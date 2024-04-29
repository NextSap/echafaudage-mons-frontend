"use client"

import React, {useState} from 'react';
import {Button} from "@/components/ui/button";
import {setToken} from "@/utils/jwt.utils";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {useForm} from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {LoginRequestSchema} from "@/objects/request/auth.request";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {login} from "@/services/auth.service";
import {useToast} from "@/components/ui/use-toast";
import {useRouter} from "next/navigation";

const Page = () => {

    const {toast} = useToast();
    const router = useRouter();

    const form = useForm<z.infer<typeof LoginRequestSchema>>({
        resolver: zodResolver(LoginRequestSchema),
        defaultValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
    });

    const [rememberMe, setRememberMe] = useState(false);

    function onSubmit(data: z.infer<typeof LoginRequestSchema>) {
        login(data).then((response) => {
            setToken(response.token);
            router.push("/panel")
            toast({
                title: "Connexion réussie",
                description: "Vous êtes maintenant connecté"
            });

        }).catch((error) => {
            toast({
                title: "Erreur de connexion",
                description: `Connexion échouée ${error}`
            });
        });
    }

    return (
        <Card className="md:w-[60%] w-[95%] m-auto mt-5">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <CardHeader>
                        <CardTitle>Connexion au panel admin</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-5">

                        <FormField control={form.control}
                                   name={"email"}
                                   render={({field}) => (
                                       <FormItem>
                                           <FormLabel>Email</FormLabel>
                                           <FormControl>
                                               <Input placeholder={"Email"} {...field}/>
                                           </FormControl>
                                           <FormMessage/>
                                       </FormItem>
                                   )}/>
                        <FormField control={form.control}
                                   name={"password"}
                                   render={({field}) => (
                                       <FormItem>
                                           <FormLabel>Mot de passe</FormLabel>
                                           <FormControl>
                                               <Input placeholder={"Mot de passe"} type={"password"} {...field}/>
                                           </FormControl>
                                           <FormMessage/>
                                       </FormItem>
                                   )}/>
                        <FormField control={form.control}
                                   name={"rememberMe"}
                                   render={({field}) => (
                                       <FormItem>
                                           <div className="flex items-center gap-2">
                                               <FormControl>
                                                   <Checkbox checked={field.value} onCheckedChange={(e) => {
                                                       field.onChange(e);
                                                       setRememberMe(!rememberMe);
                                                   }} id={"rememberMe"}/>
                                               </FormControl>
                                               <FormLabel htmlFor={"rememberMe"}>Se souvenir de moi</FormLabel>
                                           </div>
                                           <FormMessage/>
                                       </FormItem>
                                   )}/>
                    </CardContent>
                    <CardFooter>
                        <Button
                            onClick={() => form.setValue("rememberMe", rememberMe)}
                            type="submit">Connexion</Button>
                    </CardFooter>
                </form>
            </Form>
        </Card>
    );
};

export default Page;
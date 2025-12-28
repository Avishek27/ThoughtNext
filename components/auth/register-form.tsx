"use client"

import { useForm } from "react-hook-form";
import CardWrapper from "./card-wrapper";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { useState, useTransition } from "react";
import FormError from "./form-error";
import FormSuccess from "./form-success";
import { Button } from "../ui/button";
import Register from "@/actions/register";

const RegisterForm = () => {
    

    const [isPending,startTransition] = useTransition();
    const [success,setSuccess] = useState<string | undefined>("");
    const [error,setError] = useState<string | undefined>("");

   const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
        name: "",
        email: "",
        password: "",
    }
   })


   const onSubmitHandler = (values: z.infer<typeof RegisterSchema>) => {
        startTransition(()=>{
            Register(values).then((data) => {
                setSuccess(data?.success);
                setError(data?.error);
            })
        })
   }

   return  (
    <div>
        <CardWrapper 
        backButtonHref="/auth/login"
        backButtonLabel="Already have an account?"
        headerLabel="Welcome"
        showSocial>
            <Form {...form}>
                <form className="space-y-4" onSubmit={form.handleSubmit(onSubmitHandler)}>
                   <FormField
                   control={form.control}
                   name="name"
                   render={({field}) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                        type="text"
                        placeholder="though next"
                        disabled= {isPending}
                        {...field}
                        />
                      </FormControl>
                    </FormItem>
                   )}
                   >

                   </FormField>
                   <FormField
                   control={form.control}
                   name="email"
                   render={({field}) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                        type="text"
                        placeholder="thoughnext25email.com"
                        disabled= {isPending}
                        {...field}
                        />
                      </FormControl>
                    </FormItem>
                   )}
                   >

                   </FormField>
                   <FormField
                   control={form.control}
                   name="password"
                   render={({field}) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                        type="password"
                        placeholder="thoughnext@25"
                        disabled={isPending}
                        {...field}
                        />
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                   )}
                   >

                   </FormField>
                   <FormError label={error}/>
                   <FormSuccess label={success}/>
                   <Button variant={"default"} className="w-full curor-pointer" type="submit" size={"lg"}>Create an account</Button>
                </form>
            </Form>
        </CardWrapper>
    </div>
   )

}


export default RegisterForm;
"use client"

import { useForm } from "react-hook-form";
import CardWrapper from "./card-wrapper";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { useState, useTransition } from "react";
import Login from "@/actions/login";
import FormError from "./form-error";
import FormSuccess from "./form-success";
import { Button } from "../ui/button";

const LoginForm = () => {
    

    const [isPending,startTransition] = useTransition();
    const [success,setSuccess] = useState<string | undefined>("");
    const [error,setError] = useState<string | undefined>("");

   const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
        email: "",
        password: "",
    }
   })


   const onSubmitHandler = (values: z.infer<typeof LoginSchema>) => {
        startTransition(()=>{
            Login(values).then((data) => {
                setSuccess(data?.success);
                setError(data?.error);
            })
        })
   }

   return  (
    <div>
        <CardWrapper 
        backButtonHref="/auth/register"
        backButtonLabel="Don't have an account?"
        headerLabel="Welcome back"
        showSocial>
            <Form {...form}>
                <form className="space-y-4" onSubmit={form.handleSubmit(onSubmitHandler)}>
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
                   <Button variant={"default"} className="w-full curor-pointer" type="submit" size={"lg"}>Log In</Button>
                </form>
            </Form>
        </CardWrapper>
    </div>
   )

}


export default LoginForm;
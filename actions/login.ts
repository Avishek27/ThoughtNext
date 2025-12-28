"use server"
import { LoginSchema } from '../schemas/index';
import * as z from "zod"

const Login = async (values: z.infer<typeof LoginSchema>) => {

    const validatedInputs = LoginSchema.safeParse(values);

    if(!validatedInputs.success){
        return ({
            error: "Invalid input formats"
    })
    }

    return ({
       success: "Successfully logged in"
    })
}

export default Login;
"use server"
import { RegisterSchema } from '@/schemas/index';
import * as z from "zod"

const Register = async (values: z.infer<typeof RegisterSchema>) => {

    const validatedInputs = RegisterSchema.safeParse(values);

    if(!validatedInputs.success){
        return ({
            error: "Invalid input formats"
    })
    }

    return ({
       success: "Successfully created an account"
    })
}

export default Register;
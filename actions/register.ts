"use server"
import { getUserByEmail } from '@/data';
import { db } from '@/lib/db';
import { RegisterSchema } from '@/schemas/index';
import bcrypt from 'bcryptjs';
import * as z from "zod"

const Register = async (values: z.infer<typeof RegisterSchema>) => {

    const validatedInputs = RegisterSchema.safeParse(values);

    if(!validatedInputs.success){
        return ({
            error: "Invalid input formats"
    })
    }
     
    const { name, email, password } = validatedInputs.data;
    
    const checkExistingUser = await getUserByEmail(email);
    
    if(checkExistingUser){
       return {
        error: "User already exists."
       } 
    }
    const hashedPassword = await bcrypt.hash(password,10);
    
    try{
     await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        }
     });
    }catch(e){
        return {
            error: "User creation failed"
        }
    }
     
     
    return ({
       success: "Successfully created an account"
    })
}

export default Register;
"use client"

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";


const Social = () => {

    return (
        <div className="space-x-3 w-full flex items-center justify-center">
          <Button className="" variant={"outline"} size={"lg"}><FcGoogle></FcGoogle></Button>
          <Button variant={"outline"} size={"lg"}><FaGithub></FaGithub></Button>
        </div>
    )
}


export default Social;
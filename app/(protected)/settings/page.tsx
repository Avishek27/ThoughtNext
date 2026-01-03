"use client"

import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { signOut } from "next-auth/react";


const Settings = () => {
    const user = useCurrentUser();

    const onClick = () => { signOut()}
    return (
        <div>
          {JSON.stringify(user)}
          
            <Button variant={"default"} onClick={onClick}>Sign Out</Button>
          
        </div>
    )
}

export default Settings;
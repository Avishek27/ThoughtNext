"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Header from "@/components/auth/header";
import BackButton from "./back-button";
import Social from "./social";

interface CardWrapperProps{
    children: React.ReactNode;
    showSocial?: boolean;
    backButtonLabel: string;
    backButtonHref: string;
    headerLabel: string;
}


const CardWrapper = ({children,showSocial,backButtonHref,backButtonLabel,headerLabel}:CardWrapperProps) => {
    
    return  (
       <Card className="w-100 shadow-md bg-slate-300">
          <CardHeader>
            <Header label={headerLabel}/>
          </CardHeader>
          <CardContent>
            {children}
          </CardContent>
          {showSocial && (
            <CardFooter>
                <Social/>
            </CardFooter>
          )}
          <CardFooter>
            <BackButton href={backButtonHref} label={backButtonLabel}/>
          </CardFooter>
       </Card>
    )
}


export default CardWrapper;
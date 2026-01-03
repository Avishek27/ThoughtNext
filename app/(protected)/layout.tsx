import NavBar from "@/app/(protected)/_components/navbar";


interface ProtectedLayoutProps{
    children: React.ReactNode;
}



const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
    
    
    return (
       <div className="h-screen w-full flex flex-col justify-center items-center bg-black text-white gap-y-4">
        <NavBar/>
         {children}
       </div>
    )
}

export default ProtectedLayout;
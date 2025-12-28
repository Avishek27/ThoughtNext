"use client"

interface AuthLayoutProps {
    children: React.ReactNode;
}


const AuthLayout = ({children} : AuthLayoutProps) => {
   

    return  (
        <div className="h-screen bg-black flex flex-col justify-center items-center p-5 text-white">
           {children}
        </div>
    )
}

export default AuthLayout;
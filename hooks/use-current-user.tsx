import { useSession } from "next-auth/react";

//For client components

export const useCurrentUser = () => {
    const session = useSession();

    return session.data?.user;
}
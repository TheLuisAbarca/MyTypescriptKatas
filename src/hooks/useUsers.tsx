import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResList, User } from "../interfaces/reqRes";

export const useUsers = () => {
    const [users, setUser] = useState<User[]>([]);
    const pageRef = useRef(1);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async() => {
        const answer = await reqResApi.get<ReqResList>('/users', {
            params: {
                page: pageRef.current
            }
        });

        if( answer.data.data.length > 0){
            setUser( answer.data.data );
            pageRef.current ++;
        } else {
            alert("There is no more registries or pages.");
        }
        setUser( answer.data.data );
    }
    return { users, loadUsers };
}
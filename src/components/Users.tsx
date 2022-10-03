import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResList, User } from "../interfaces/reqRes";

export const Users = () => {

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
        /*
        .then( resp => {
            console.log(resp.data.data[0].last_name);
            setUser(resp.data.data);
        })
        .catch( console.log );
        */
    }

    const renderItem = ( {id, first_name, last_name, email, avatar}: User ) => {
        return (
            <tr key={ id.toString() }>
                <td>
                    <img 
                        src={ avatar }
                        alt={ first_name }
                        style={{
                            width: 35,
                            borderRadius: 100
                        }}
                    />
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        );
    }

  return (
    <>
        <h3>Users:</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map( renderItem )
                }
            </tbody>
        </table>
        <button
            className="btn btn-primary"
            onClick={ loadUsers }
        >
            Next 
        </button>
    </>
  )
}

import { useEffect, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResList, User } from "../interfaces/reqRes";

export const Users = () => {

    const [users, setUser] = useState<User[]>([]);

    useEffect(() => {
        reqResApi.get<ReqResList>('/users')
        .then( resp => {
            console.log(resp.data.data[0].last_name);
            setUser(resp.data.data);
        })
        .catch( console.log );
    }, []);

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
            
        >
            Next 
        </button>
    </>
  )
}

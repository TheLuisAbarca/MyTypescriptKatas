import { useEffect } from "react";
import { reqResApi } from "../api/reqRes";

export const Users = () => {

    useEffect(() => {
        reqResApi.get('/users')
        .then( resp => {
            console.log(resp.data.data);
        })
        .catch( console.log );
    }, []);
    

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

            </tbody>
        </table>
    </>
  )
}

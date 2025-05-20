import Link from "next/link";
import { useState } from "react";
const Index = () => {
    const [users, setUsers] = useState([
        {id:1, name:'Maks'},
        {id:2, name:'Iryna'},
    ])
    return (
        <dev>
            <ul>
                {users.map(user=>
                <Link href={`/users/${user.id}`}>
                    <li>
                        {user.name}
                    </li>
                </Link>
                )}
            </ul>
        </dev>
    )
}

export default Index;
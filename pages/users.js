import Link from "next/link";
import { useEffect, useState } from "react";
import A from "../components/UI/A";
import Navbar from "../components/Navbar";
const Users = ({users}) => {
    return (
        <div>
            <Navbar />
            <h2>Пользователи:</h2>
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <A href={`/users/${user.id}`} text={user.name} />
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Users;

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    // Props returned will be passed to the page component
    return { props: { users } }
}
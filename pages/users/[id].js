import { useRouter } from "next/router"
import Head from "next/head"

export default function User({ user }) {
    const { query } = useRouter()
    console.log(query)
    const router = useRouter()
    console.log(router)
    return (
        <>
            <Head>
                <meta keywords={"Справочник " + user.address.city}></meta>
                <meta name="description" content={"Чей номер телефона " + user.phone + " " + user.name}></meta>
                <meta property="og:title" content={"Справочник " + user.address.city} />
                <meta property="og:description" content={"Чей номер телефона " + user.phone + " " + user.name} />
                {/* <meta property="og:image" content="image_url_here" /> */}
                <title>Телефон {user.name}</title>
            </Head>
            <div>
                <p>Пользователь {user.name} [{query.id}]</p>
                <p>Номер телефона: {user.phone}</p>
                <p>Город: {user.address.city}</p>
                {/* <p>{query.id}</p> */}
            </div>
        </>
    )
}

export async function getServerSideProps({ params }) {
    console.log(params)
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();
    // Props returned will be passed to the page component
    return { props: { user } }

}

// export async function getStaticProps() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const user = await response.json();
//     // Props returned will be passed to the page component
//     return { props: { user } }
// }
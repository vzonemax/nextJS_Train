import Link from "next/link";
import A from "../components/UI/A";

const Index = () => {
    return (
        <dev>
            <div className="navbar">
                <A href={'/'} text='Главная' />
                <A href={'/users'} text='Пользователи' />

                {/* <Link className="link" href="/">
                    <span className="link">main</span>
                </Link>
                <Link href="/users" >
                    <span className="link">users</span>
                </Link> */}
            </div>
            <h1>Main page</h1>
            <style jsx>
                {`
                    .link{
                        margin: 5px;
                        color: orange;
                    }
                `}
            </style>
        </dev>
    )
}

export default Index;
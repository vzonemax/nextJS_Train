import Link from "next/link";

const Index = () => {
    return (
        <dev>
            <div>
                <Link href="/">main </Link>
                <Link href="/users">users</Link>
            </div>
            <h1>Main page</h1>
        </dev>
    )
}

export default Index;
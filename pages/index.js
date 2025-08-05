import Link from "next/link";
import A from "../components/UI/A";
import Navbar from "../components/Navbar";
import Head from "next/head";

const Index = () => {
    return (
        <>
            <Head>
                <meta keywords="TestPage For Best SEO"></meta>
                <title>Главная страница</title>
            </Head>
            <div>

                <Navbar />
                <h1>Main page</h1>
                <style jsx>
                    {`
                    .link{
                        margin: 5px;
                        color: orange;
                    }
                `}
                </style>
            </div>
        </>
    )
}

export default Index;
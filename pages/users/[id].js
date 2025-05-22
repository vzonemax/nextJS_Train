import { useRouter } from "next/router"

export default function () {
    const {query} = useRouter()
    console.log(query)
    return (
        <div>
            Пользователь
            <p>{query.id}</p>
        </div>
    )
}
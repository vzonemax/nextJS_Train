import { useRouter } from "next/navigation"

export default function () {
    const {router} = useRouter()
    console.log(router)
    return (
        <div>
            Пользователь
            {/* <p>{router.id}</p> */}
        </div>
    )
}
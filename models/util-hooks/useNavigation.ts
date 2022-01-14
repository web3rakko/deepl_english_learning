import { useRouter } from "next/router"
import useUser from "./useUser"

export default () => {
    const router = useRouter()
    const { user } = useUser()

    const goHome = () => {
        if (user) {
            router.push("/home")
        } else {
            router.push("/")
        }
    }

    return { goHome }
}
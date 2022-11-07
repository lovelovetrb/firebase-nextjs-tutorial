import { useRouter } from "next/router";
import { db } from "../../../src/firebase";

export default async function id(req, res) {
    const router = useRouter()
    console.log(router.query)
    res.status(200).end()
}

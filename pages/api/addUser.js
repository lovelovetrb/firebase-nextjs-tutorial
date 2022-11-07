import { db } from "../../src/firebase";

export default async function handler(req, res) {
    const docRef = db.collection('users').doc();
    await docRef.set(req.body)
        .catch((e) => {
            console.log(e)
            res.status(500).end()
        })
    console.log("Document written with ID: ", docRef.id);
    res.status(200).end()
}

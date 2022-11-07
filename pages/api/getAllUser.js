import { db } from "../../src/firebase";

const getAllUser = async (req, res) => {
    const snapshot = await db.collection('users').get();
    const datas = []
    snapshot.forEach((doc) => {
        const data = doc.data()
        data.id = doc.id
        datas.push(data)
    })
    if (datas.length !== 0) {
        res.status(200).json(datas)
    } else {
        res.status(500).json({ status: 'data is empty' })
    }

}

export default getAllUser;
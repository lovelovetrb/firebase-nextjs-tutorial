import { getFirestore } from 'firebase-admin/firestore';

const { cert } = require('firebase-admin/app');
const serviceAccount = require('../firebase-test-serviceAccount.json'); // 秘密鍵を取得
const admin = require('firebase-admin');


if (admin.apps.length === 0) {
    admin.initializeApp({
        credential: cert(serviceAccount),
    });
}

//firestore初期化
const db = getFirestore();

export { db };
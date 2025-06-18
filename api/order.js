import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACkIZUx50LbxfgvW606eLaD6XhwNxIOuM",
  authDomain: "memberr-card.firebaseapp.com",
  databaseURL: "https://memberr-card-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "memberr-card",
  storageBucket: "memberr-card.firebasestorage.app",
  messagingSenderId: "532758260849",
  appId: "1:532758260849:web:309f8d8db5df773e64ffd0",
  measurementId: "G-CRH5Z9NQ6S"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Hanya menerima POST' });
  }

  const { nama, produk, harga } = req.body;

  if (!nama || !produk || !harga) {
    return res.status(400).json({ error: 'Data tidak lengkap' });
  }

  try {
    const orderRef = ref(db, 'pesanan');
    await push(orderRef, { nama, produk, harga, waktu: Date.now() });
    return res.status(200).json({ message: 'Pesanan berhasil dikirim' });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
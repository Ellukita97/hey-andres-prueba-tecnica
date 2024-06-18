import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'

export const loadDataTableFirebase = async (collecName) => {
    const colectionRef = collection(db, collecName)
    const res = await getDocs(colectionRef)

    return res.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
    })
}
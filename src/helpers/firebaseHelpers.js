import {addDoc, collection} from "firebase/firestore";
import {db} from "../firebase";

const addToFirebase = async({objectToSave}, fbcollection) => {
    try {
        const docRef = await addDoc(collection(db, fbcollection), {objectToSave});
        console.log("Document written to table" + collection + "with ID: ", docRef.id)
    }catch (e) {
        console.error("Error adding document: ", e)
    }
}

const getFromFirebase = async(fbcollection) => {
    const docRef = db.collection(fbcollection);
    const snapshot = await docRef.get();
    snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
    });
}
const updateFromFirebase = async() => {

}

const deleteFromFirebase = async() => {

}

export {addToFirebase, getFromFirebase, updateFromFirebase, deleteFromFirebase};
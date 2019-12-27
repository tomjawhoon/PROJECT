import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import { firebaseConfig } from '../config'; //เริ่มจากตรงนี้ไป GET ค่ามาจาก Firebase ก่อน เลย จร้าๆ หาตั้งนานนะรู้ไหมเธอ

function getFirebase() {
    try {
        firebase.initializeApp(firebaseConfig);
        const database = firebase.database();
        console.log("Showdatabase_form_Firebase",database)
    } catch (e) {
        // console.error(e);
    } finally {
        return {
             leadsRef : database.ref('users'),
            /*auth: firebase.auth(),
            db: firebase.firestore(),
            storage: firebase.storage()*/
        }
    }
}

export default getFirebase;

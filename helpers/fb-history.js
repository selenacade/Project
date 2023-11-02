import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set, push, remove } from "firebase/database";
import { firebaseConfig } from "./fb-credentials";

export function initHistoryDB(){
    console.log('initializing db')
    initializeApp(firebaseConfig);
}

export function storeHistoryItem(item) {
    console.log("Writing item to database; ", item);
    const db = getDatabase();
    const reference = ref(db, "historyData/");
    push(reference, item);
}

export function setUpHistoryListener(updateFunc) {
    const db = getDatabase();
    const reference = ref(db, "historyData/")
    onValue(reference, (snapshot) => {
        console.log("setupHistoryListener fires up with: ", snapshot);
        if (snapshot?.val()) {
          const fbObject = snapshot.val();
            const newArr = [];
            Object.keys(fbObject).map((key, index) => {
                console.log(key, "||", index, "||", fbObject [key]);
                newArr.push({ ...fbObject[key], id: key});
            });
            updateFunc(newArr);
        } else {
            updateFunc([]); 
        }
    });
}

export function updateHistory(item) {
    const key = item.id;
    delete item.id;
    const db = getDatabase();
    const reference = ref(db, `historyData/${key}`);
    set(reference, item);
}

export function deleteHistory(item) {
    const db = getDatabase();
    const reference = ref(db, `historyData/${item.id}`);
    remove(reference);
}


import { initializeApp } from "firebase/app"
import { getDatabase, ref, set, get, child } from "firebase/database";
import { query, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

function Firebase() {

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyA8ZEsE85Ab8ALL9Kc1EVE7kc6XoQzFyEs",
        authDomain: "react-database-a5bc3.firebaseapp.com",
        projectId: "react-database-a5bc3",
        storageBucket: "react-database-a5bc3.appspot.com",
        messagingSenderId: "396287650997",
        appId: "1:396287650997:web:e344c5ba24b799bea2a2fc",
        databaseURL: "https://react-database-a5bc3-default-rtdb.europe-west1.firebasedatabase.app",
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);


    function writeUserData(userId, name, password) {
        const db = getDatabase();
        set(ref(db, 'users/' + userId), {
            username: name,
            password: password
        })
        .then(() => {
            console.log('Data saved successfully!');
        })
        .catch((error) => {
            console.log('The write failed...');
        });
    }

    function getUserData(userId) {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users`)).then((snapshot) => {
            if (snapshot.exists()) {
                // console.log(snapshot.val());
                console.log(snapshot.size);
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });

        const q = query(dbRef, where('users', '==', ['misho']));
        console.log(q);

    }

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    function handleInput(event) {
        const { name, value } = event.target
        setFormData(oldValue => {
            return {
                ...oldValue,
                [name]: value
            }
        })
    }

    function handleSubmit() {
        let randomID = Math.floor(Math.random() * 1000)
        writeUserData(randomID, formData.username, formData.password)
        getUserData(381)
        console.log(formData, randomID);
    }

    

    return (
        <div>
            <input type="text" name="username" onChange={handleInput} placeholder="username" /><br />
            <input type="text" name="password" onChange={handleInput} placeholder="password" /><br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )

}


export default Firebase;
import app from 'firebase/app';
import firestore from 'firebase/firestore'
import 'firebase/auth';
import { Component } from 'react';


const config = {
    apiKey: "AIzaSyANqas_rgSUkhfX6EOmXSMIii-BhBEj6vo",
    authDomain: "fmcgdistributor-32d41.firebaseapp.com",
    databaseURL: "https://fmcgdistributor-32d41.firebaseio.com",
    projectId: "fmcgdistributor-32d41",
    storageBucket: "fmcgdistributor-32d41.appspot.com",
    messagingSenderId: "539508231568"
};

const settings = { timestampsInSnapshots: true };
class Firebase extends Component {
    constructor() {
        super();
        if (!app.apps.length) {

            app.initializeApp(config);
        //    app.firestore();
        }
        this.auth = app.auth();
        this.db=app.firestore();
    }
}
export default new Firebase();

const express = require('express');
// const router = express.Router();
const firebase = require("firebase/app");
const app = express();
const port = process.env.PORT || 4000;

const firebaseConfig = {
    apiKey: "AIzaSyBPNfTEMJvq3lojLBdNYHxVn6qXvoOL5m8",
    authDomain: "exercise-five-11d34.firebaseapp.com",
    projectId: "exercise-five-11d34",
    storageBucket: "exercise-five-11d34.appspot.com",
    messagingSenderId: "382140343079",
    appId: "1:382140343079:web:28ca16ed76be9195ffbf02",
    measurementId: "G-0SMCZEN7ZV"
  };
firebase.initializeApp(firebaseConfig);
  

const indexRoute = require('./routes/index');
const singlePostRoute = require('./routes/singlePost');
const createPostRoute = require('./routes/createPost');

app.use('/', indexRoute);
app.use('/post', singlePostRoute);
app.use('/create', createPostRoute);

app.listen(port, () => console.log("Working!"));
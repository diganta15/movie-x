import { initializeApp } from 'firebase/app';
import { getFunctions } from 'firebase/functions';

const app = initializeApp({
	apiKey: "AIzaSyB25eioZPtVPJDjTOxGDPH8pJzzF0rV_jA",
	authDomain: "movies-x-diganta15.firebaseapp.com",
	projectId: "movies-x-diganta15",
	storageBucket: "movies-x-diganta15.appspot.com",
	messagingSenderId: "400089691348",
	appId: "1:400089691348:web:d33ca8287c41a43dcb3741",
	measurementId: "G-LBMBVFNQ26"
});
const functions = getFunctions(app);

export default  functions;
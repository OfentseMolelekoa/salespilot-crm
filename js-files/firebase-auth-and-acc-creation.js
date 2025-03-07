import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaijBnL1uDAR75NlDcn3NIpkrPQSX8tLE",
    authDomain: "salespilot-crm-tool-b9b7e.firebaseapp.com",
    projectId: "salespilot-crm-tool-b9b7e",
    storageBucket: "salespilot-crm-tool-b9b7e.firebasestorage.app",
    messagingSenderId: "1066142112651",
    appId: "1:1066142112651:web:262369040401a978a66d8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Register user function 
const registerBtn = document.getElementById('register-btn');
const registerStatus = document.getElementById('register-status');

registerBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password-register').value;
    const organizationId = document.getElementById('organization-id-register').value;
    if (!email || !password || !organizationId) {
        registerStatus.style.color = 'red';
        registerStatus.textContent = 'Enter all required fields...';
        alert('Enter all required fields...');
        return;
    }
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        alert('Registering...');
        registerStatus.style.color = 'green';
        registerStatus.textContent = 'Registering...';
        window.location.href = 'dashboard-main.html'; // Redirect on success
    } catch (error) {
        alert(error.message);
        console.error(error);
    }
});

// Login user function 
const loginBtn = document.getElementById('login-btn');
const loginStatus = document.getElementById('login-status');

loginBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const organizationId = document.getElementById('organization-id').value;
    if (!email || !password || !organizationId) {
        loginStatus.style.color = 'red';
        loginStatus.textContent = 'Enter all required fields...';
        alert('Enter all required fields...')
        return;
    }
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert('Logging in...');
        loginStatus.style.color = 'green';
        loginStatus.textContent = 'Logging in...';
        window.location.href = 'dashboard-main.html'; // Redirect on success
    } catch (error) {
        alert(error.message);
        console.error(error);
        loginStatus.style.color = 'red';
        loginStatus.textContent = error.message;
    }
});

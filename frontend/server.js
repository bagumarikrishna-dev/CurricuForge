const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('CV Website Backend is Running Successfully');
});
app.get('/profile', (req, res) => {
    const profile = {
        name: 'Your Name',
        email: 'yourmail@gmail.com',
        skills: ['Java', 'Python', 'HTML', 'CSS', 'JavaScript'],
        projects: ['Portfolio Website', 'Student Learning App']
    };

    res.json(profile);
});
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    console.log('Contact Form Data:');
    console.log(name);
    console.log(email);
    console.log(message);

    res.json({
        success: true,
        message: 'Message received successfully'
    });
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

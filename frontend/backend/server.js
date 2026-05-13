const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home Route
app.get('/', (req, res) => {
    res.send('CV Website Backend is Running Successfully');
});

// Profile API
app.get('/profile', (req, res) => {
    const profile = {
        name: 'Your Name',
        email: 'yourmail@gmail.com',
        skills: ['Java', 'Python', 'HTML', 'CSS', 'JavaScript'],
        projects: ['Portfolio Website', 'Student Learning App']
    };

    res.json(profile);
});

// Contact Form API
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

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

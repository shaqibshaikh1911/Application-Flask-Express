const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/api/message', async (req, res) => {
    const response = await fetch('http://localhost:5000');
    const data = await response.json();
    res.json(data);
});

app.listen(3000, () => console.log('Frontend on port 3000'));
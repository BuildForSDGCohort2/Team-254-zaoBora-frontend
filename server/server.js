const path = require('path');
const express = require('express');

console.log(process.env.PORT)
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(PORT, console.log(`server listening on port ${PORT}`));
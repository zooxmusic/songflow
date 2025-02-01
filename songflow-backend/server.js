const express = require('express');
const app = express();
const PORT = 3000;  // Or 3000 if you're using a custom port

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});

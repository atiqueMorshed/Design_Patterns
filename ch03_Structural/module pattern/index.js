// Organize your code in pure functions
// Concept of import/export or require

import express from 'express';
import calc from './calc';

const aNumber = calc();

const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.send(`Module Pattern, the number: ${aNumber}`));

app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));

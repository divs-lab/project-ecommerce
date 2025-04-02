require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./database/db').default;

const app = express();

app.use(express.json());
app.use(cors());

console.log(process.env.MONGO_URI);
connectDB();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

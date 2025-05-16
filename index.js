const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

// Basic status route
app.get('/', (req, res) => {
  res.send('Absence Manager API is running!');
});

// Route to get members
app.get('/members', (req, res) => {
  const membersPath = path.join(__dirname, 'data/members.json');
  const membersData = fs.readFileSync(membersPath, 'utf-8');
  res.json(JSON.parse(membersData));
});

// Route to get absences
app.get('/absences', (req, res) => {
  const absencesPath = path.join(__dirname, 'data/absences.json');
  const absencesData = fs.readFileSync(absencesPath, 'utf-8');
  res.json(JSON.parse(absencesData));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

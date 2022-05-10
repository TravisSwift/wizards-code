const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

router = require('express').Router();
// const { User } = require('../../models');

// const { characters } = require('./data/charcters');

// GET /api/characters
router.get('/', (req, res) => {});

app.get('/api/characters/:id', (req, res) => {
    const result = findById(req.params.id, characters);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
  });

  app.post('/api/characters', (req, res) => {});
  // req.body is where our incoming content will be
  console.log(req.body);
  res.json(req.body);


// POST /api/characters
router.post('/', (req, res) => {});

// DELETE /api/characters
router.delete('/:id', (req, res) => {});

app.get('/api/characters', (req, res) => {
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });


  module.exports = router;
const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
  const users = [
    { id: 0, firstName: 'John', lastName: 'Doe' },
    { id: 1, firstName: 'Mary', lastName: 'Swason' },
    { id: 2, firstName: 'Steve', lastName: 'Smith' }
  ];

  res.status(200).json(users);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

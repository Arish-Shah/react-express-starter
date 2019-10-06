const express = require('express');
const app = express();
const port = 5000;

app.get('/api/users', (req, res) => {
	const users = [
		{ id: 0, firstName: 'John', lastName: 'Doe' },
		{ id: 1, firstName: 'Mary', lastName: 'Swason' },
		{ id: 2, firstName: 'Arish', lastName: 'Shah' }
	];

	res.json(users);
});

app.listen(port, () => console.log(`Server started on port ${port}.`));
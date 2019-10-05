const express = require('express');
const app = express();
const port = 5000;

app.get('/api/users', (req, res) => {
	const users = [
		{ id: 1, firstName: 'John', lastName: 'Doe' },
		{ id: 2, firstName: 'Mary', lastName: 'Swanson' },
		{ id: 3, firstName: 'Arish', lastName: 'Shah' }
	];

	res.json(users);
});

app.listen(port, () => console.log(`Server started at port ${port}.`));

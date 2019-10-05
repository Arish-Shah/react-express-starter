import React, { useState, useEffect } from 'react';
import styles from './Users.module.css';

const Users = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('/api/users')
			.then(response => response.text())
			.then(response => console.log(response));
	}, []);

	return (
		<div className={styles.Users}>
			<h1>Users:</h1>
			<ul></ul>
		</div>
	);
};

export default Users;

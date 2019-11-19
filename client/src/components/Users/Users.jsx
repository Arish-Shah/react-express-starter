import React, { useState, useEffect } from 'react'
import styles from './Users.module.css'

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    const response = await fetch('/api/users')
    const json = await response.json()
    setUsers(json)
  }

  return (
    <div className={styles.Users}>
      <h2>Users:</h2>
      <ul className={styles.Users}>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users

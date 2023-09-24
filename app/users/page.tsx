import React, { FC } from 'react'

interface User {
  id: string
  name: string
  email: string
}

const UsersPage: FC = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    { cache: 'no-store' }
  )
  const users: User[] = await response.json()

  return (
    <>
      <h1>Users</h1>
      <p>{ new Date().toLocaleTimeString() }</p>
      <table
        className='table table-zebra'
      >
        <thead>
          <tr>
            <th>NAME</th>
            <th>EMAIL</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user => (
              <tr key={ user.id }>
                <td>{ user.name }</td>
                <td>{ user.email }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default UsersPage
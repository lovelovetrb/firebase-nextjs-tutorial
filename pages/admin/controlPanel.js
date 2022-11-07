import { Stack, Button } from '@mui/material'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

const controlPanel = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('/api/getAllUser')
            const data = await response.json()
            setUsers(data)
        }
        fetchUsers()
    }, [])



    return (
        <Stack
            direction="column"
            alignItems='center'
            textAlign='center'>
            <table>
                <thead>
                    <tr>
                        <th>username</th>
                        <th>email</th>
                    </tr>
                </thead>
                {users.map((user) => {
                    return (
                        <tbody>
                            <tr>
                                <td>{`${user.email}`}</td>
                                <td>{`${user.name}`}</td>
                                <td><Button
                                    // onClick={handleSubmit(onSubmit)}
                                    variant="contained"
                                    size="large"
                                    sx={{ m: 1, width: '10ch' }}
                                >change</Button></td>
                                <td><Button
                                    onClick={() => { deleteUser(user.id) }}
                                    variant="contained"
                                    size="large"
                                    sx={{ m: 1, width: '10ch' }}
                                >delete</Button></td>
                            </tr>
                        </tbody>

                    )
                })}
            </table>
        </Stack>
    )
}

async function deleteUser(id) {
    await axios.get(`/api/removeUser/${id}`)
}

export default controlPanel
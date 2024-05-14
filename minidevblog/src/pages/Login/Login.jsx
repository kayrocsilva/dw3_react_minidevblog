import React from 'react'
import styles from './Login.module.css'
import { useState, useEffect } from 'react'
import { useUserAuthentication } from '../../hooks/userAuthentication'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const { login, error: authError, loading } = useUserAuthentication()
    const navigate = useNavigate()

    
  return (
    <div>Login</div>
  )
}

export default Login
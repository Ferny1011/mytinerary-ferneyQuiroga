import axios from 'axios'
import React, { useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userLoggedInGoogle } from '../store/actions/userActions'

const API_URL = import.meta.env.VITE_API_URL;

const GoogleSignin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const googleButton = useRef();

    const handleCredentialResponse = async (response) => {
        try {
            const data = {
                token_id: response.credential
            }
            const userResponse = await axios.post(`${API_URL}/auth/google`, data)
            dispatch(userLoggedInGoogle(userResponse.data.response))
            navigate("/")
        } catch (error) {
            console.error("Error en login con Google:", error)
        }
    }

    useEffect(() => {
        if (window.google) {
            window.google.accounts.id.initialize({
                client_id: "538739451079-44oaoqlk306ast0o7q7ts7co63rtbjhi.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                googleButton.current,
                {
                    type: 'standard',
                    shape: 'rectangular',
                    theme: 'outline',
                    text: 'signin_with',
                    size: 'large',
                    logo_alignment: 'center',
                    width: '400px'
                }
            );
        }
    }, [])

    return (
        <div ref={googleButton}>GoogleSignin</div>
    )
}

export default GoogleSignin

import axios from 'axios'
import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userLoggedInGoogle } from '../store/actions/userActions'


const GoogleSignin = () => {

    const dispatch = useDispatch()
    const googleButton = useRef();

    const handleCredentialResponse = async (response) => {
        const data = {
            token_id: response.credential
        }
        const userResponse = await axios.post('http://localhost:3000/api/auth/google', data)
        console.log(userResponse.data.response)
        
        dispatch(userLoggedInGoogle(userResponse.data.response))
    }

    useEffect(() => {
        if (window.google) {
            window.google.accounts.id.initialize({
                client_id: "538739451079-44oaoqlk306ast0o7q7ts7co63rtbjhi.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                googleButton.current,
                { type: 'standard', shape: 'rectangular', theme: 'outline', text: 'signin_with', size: 'large', logo_alignment: 'center', width: '400px' }  // customization attributes
            );
        }
    }, [])
    return (
        <div ref={googleButton}>GoogleSignin</div>
    )
}

export default GoogleSignin
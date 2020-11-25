import React from 'react'
import {SignOutBotton} from "./signOut.styled"
import {signOut} from "../../firebase/firebase.util.store"
import { useNavigate } from 'react-router-dom';




function SignOut() {
    let navigate = useNavigate();
    const signOutHandler = async () => {
    await signOut () ;
    navigate('/signin', { replace: true });
}
    return (
        <SignOutBotton type="button" onClick = {signOutHandler}> Sign out</SignOutBotton>
    )
}

export default SignOut ;

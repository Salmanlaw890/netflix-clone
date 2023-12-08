import React from 'react'
import "./profile.css";
import Navbar from './Navbar'
import { auth } from '../firebase'
import { useSelector } from 'react-redux'

export default function ProfileScreen() {
    const user = useSelector((state) => state.user.value);
    return (
        <div className="profile">
            <Navbar />
            <div className="profile_body">
                <h1>Edit Profile</h1>
                <div className="profile_info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
                    <div className="profile_details">
                        <h2>{user.email}</h2>
                        <div className="profile_plans">
                            <button className='profile_signout'
                                onClick={() => auth.signOut()}>
                                Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../services/firebase";
import { doc, onSnapshot } from "firebase/firestore"

const Profile = () => {
    const [movies, setMovies] = useState([]);
    const { user } = UserAuth();

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user.email}`), (doc) => {
            if (doc.data()) {
                setMovies(doc.data().favShows)
            }
        })
    }, [user?.email]);

    if (!user) {
        return <><p>fetching shows...</p></>
    }

    return (
        <>
            <div>
                <div>
                    <img src="" alt="//" />

                    <div></div>
                    <div>
                        <h1>My Shows</h1>
                        <p>{user.email}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;
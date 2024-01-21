import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { UserAuth } from "../context/AuthContext";
import { db } from "../services/firebase";
import { createImageUrl } from "../services/movieServices";
import { arrayremove, doc, onSnapshot, updateDoc } from "firebase/firestore"

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
                        { /* Add stuff to get fav movies and delete btn */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;
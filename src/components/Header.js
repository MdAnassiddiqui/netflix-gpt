import React from 'react';
import { signOut , onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {addUser ,removeUser} from "../utils/userSlice";
import { LOGO } from '../utils/constants';
const Header = () => {
    const dispatch =useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // sign-out successfully
            
        }).catch((error) => {
            navigate("/error");
        });
    };
    useEffect(() => {
      const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if(user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid:uid, email:email, displayName:displayName, photoURL:photoURL }));
                navigate("/browser");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });
          //Unsubscribe when component unmounts
        return () => unsubscribe();
         // Cleanup function
    }, [dispatch]); // Make sure to include dispatch in the dependency array
    return (
        <div className='absolute w-screen  px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
            <img
                className='w-40'
               src={LOGO}
                alt="logo"
            />
            {/* //if there is not a user then not show signout  */}
            {user && (
                <div className='flex p-2'>
                    <img
                        className='w-20 h-12'
                        alt='usericon'
                        src={user.photoURL} // corrected property name from phototURL to photoURL
                    />
                    <button onClick={handleSignOut} className='font-bold text-white'>(SignOut)</button>
                </div>
            )}
        </div>
    );
};

export default Header;

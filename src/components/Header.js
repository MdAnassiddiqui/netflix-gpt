import React from 'react';
import { signOut , onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {addUser ,removeUser} from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView }from "../utils/gptSlice";
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
    const dispatch =useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const showGptSearch =useSelector((store) => store.gpt.showGptSearch)
    
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
    const handleGptSearchClick =() =>{
        //Toggle GPT search
        dispatch(toggleGptSearchView());
    };
    const handleLanguageChange =(e) =>{
        dispatch(changeLanguage(e.target.value));
    
    };
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
                  { showGptSearch && ( <select className='p-2 bg-gray-900 text-white m-2 my-4 '
                  onChange={handleLanguageChange}>
                       {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                    </select>)}
                    <button className='px-4 m-2 mx-4 my-4 bg-purple-800 text-white rounded-lg' onClick={handleGptSearchClick}>
                      {showGptSearch ?"Homepage" :"GPT Search"}  
                    </button>
                    <img
                        className='w-20 h-12  '
                        alt='usericon'
                        src={user.photoURL} // corrected property name from phototURL to photoURL
                    />
                    <button onClick={handleSignOut} className='font-bold text-white '>(SignOut)</button>
                </div>
            )}
        </div>
    );
};

export default Header;

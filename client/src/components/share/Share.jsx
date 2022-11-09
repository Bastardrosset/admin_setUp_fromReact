import React, { useContext } from 'react'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import {AuthContext} from '../../context/AuthContext'
import { useRef } from 'react';
import { useState } from 'react';
import axios from 'axios';


export default function Share() {

    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user} = useContext(AuthContext);
    const message = useRef();
    const [file, setFile] = useState(null);

    const handlerSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            message: message.current.value
        };

        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append('file', file);
            data.append('name', fileName);
            newPost.postPicture = fileName;
            try {
                await axios.post('/post', data);
            } catch (error) {
                console.log(error)
            }
        }
        try {
            await axios.post('/post', newPost)
        } catch (error) {

        }
    }

  return (
    <div className='share'>
        <div className="share-wrapper">
            <div className="share-top">
                <img 
                    className='share-profil-img' 
                    src={
                        user.profilPicture
                        ? publicFolder + user.profilPicture
                        : publicFolder + 'noAvatar.png'
                    } 
                    alt='Avatar par default' />
                <input 
                    placeholder= {"What news " + user.username + "?"}
                    type='text' 
                    className='share-input'
                    ref={message} />
            </div>
            <hr className='share-hr' />
            <form className="share-bottom" onSubmit={handlerSubmit}>
                <div className="share-options">
                    <label htmlFor="file" className="share-option">
                        <PermMediaIcon className='share-icon' />
                        <span className='share-option-text'>Photo or vidéo</span>
                        <input 
                            type="file" 
                            id="file" 
                            accept='.jpg,.png,.jpeg ' 
                            onChange={(e) => setFile(e.target.files[0])} />
                    </label>
                </div>
                <button className='share-button' type='submit'>Share</button>
            </form>
        </div>
    </div>
  )
}

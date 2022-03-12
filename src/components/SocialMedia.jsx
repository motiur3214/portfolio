import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';



const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a href='https://github.com/motiur3214' target='_blank' rel="noreferrer"> <AiFillGithub /></a>
            </div>
            <div>
                <a href='https://www.linkedin.com/in/md-motiur-rahman-1b5183179/' target='_blank' rel="noreferrer"> <AiFillLinkedin /></a>
            </div>
            <div>
                <a href='https://www.facebook.com/md.motiur.rahman.masum' target='_blank' rel="noreferrer"> <AiFillFacebook /></a>
            </div>

        </div>
    )
}

export default SocialMedia
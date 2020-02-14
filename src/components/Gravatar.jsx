import React from 'react';
import md5 from 'md5';

export default function Gravatar(props) {
    const hash = md5(props.email);
    return(
        <img
            className={props.className}
            src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
            alt="Avatar"
        />
    );
}
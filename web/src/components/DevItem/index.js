import React from 'react';

import api from '../../services/api';

import './styles.css';

function DevItem({ dev }) {

    function handleClickRemove(e) {
        e.preventDefault();
        
    }

    return (
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name}/>
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
            </header>

            <p>{dev.bio}</p>
            <div className="user-options">
                <a href={`https://github.com/${dev.github_username}`}>Acessar Perfil</a>
                <button className="user-remove" onClick={handleClickRemove}>Remove</button>
            </div>
        </li>
    );
}


export default DevItem;
import React, { useState } from 'react';
import './style.css';
const ShowCard = ({ data }) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(prevState => !prevState)

   
    return (
        <>
    <div className='show-card'>

        <div className={`repos ${isExpanded ? ' expanded' : ''}`}>
            
        <h1 onClick={toggleExpand}>{data.name}</h1>

        <ul className={`repodata-container ${isExpanded ? "show" : "hide"}`}>
            
            <li className="tooltip"> forks: {data.forks} </li>
            <li className="tooltip">language:  {data.language}</li>
            <li className="tooltip">stars:  {data.stargazers_count}</li>
            <li className="tooltip">issues:  {data.open_issues} </li>
            <li className="tooltip">watchers:  {data.watchers}</li>

        </ul>

    </div>
    
    </div>
            </>
    )
            
}

export default ShowCard;
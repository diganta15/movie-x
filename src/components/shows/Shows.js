import React from 'react';
import ShowItem from "./ShowItem";

const Shows = ({shows}) => {
    return (
        <div className="shows grid grid-6">
            {shows.map(show => (<ShowItem key={show.id} show={show}  />))}
        </div>
    );
};

export default Shows;

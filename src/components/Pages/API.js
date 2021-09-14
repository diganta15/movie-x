import React from 'react';
import logo from '../../assets/attr-logo.svg';

const API = () => {
	return (
		<div className="api">
			<h1 className="api-header">API</h1>
				<p className="api-details">
					This website uses The Movie Database API to get details of movies and shows
					<br/>
					For more, check - <a href="https://www.themoviedb.org/documentation/api">The Movie Database</a>
				</p>
			<img className="tmdb-logo" src={logo} alt="The Movie Database"/>
		</div>
	);
};

export default API;

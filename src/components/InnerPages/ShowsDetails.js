import React, {useState} from 'react';

const ShowsDetails = () => {
	const [data, setData] = useState({
		"backdrop_path": "/4N6zEMfZ57zNEQcM8gWeERFupMv.jpg",
		"created_by": [],
		"episode_run_time": [
			34
		],
		"first_air_date": "2021-08-11",
		"genres": [
			{
				"id": 16,
				"name": "Animation"
			},
			{
				"id": 10759,
				"name": "Action & Adventure"
			},
			{
				"id": 10765,
				"name": "Sci-Fi & Fantasy"
			}
		],
		"homepage": "https://www.disneyplus.com/series/what-if/7672ZVj1ZxU9",
		"id": 91363,
		"in_production": true,
		"languages": [
			"en"
		],
		"last_air_date": "2021-08-25",
		"last_episode_to_air": {
			"air_date": "2021-08-25",
			"episode_number": 3,
			"id": 3062391,
			"name": "What If… The World Lost Its Mightiest Heroes?",
			"overview": "Nick Fury struggles to launch The Avengers when candidates are targeted by a serial killer.",
			"production_code": "",
			"season_number": 1,
			"still_path": "/jUFFhj6bFtQbvhmVEt0GDpJAPuf.jpg",
			"vote_average": 7.333,
			"vote_count": 6
		},
		"name": "What If...?",
		"next_episode_to_air": {
			"air_date": "2021-09-01",
			"episode_number": 4,
			"id": 3062392,
			"name": "",
			"overview": "",
			"production_code": "",
			"season_number": 1,
			"still_path": null,
			"vote_average": 0.0,
			"vote_count": 0
		},
		"networks": [
			{
				"name": "Disney+",
				"id": 2739,
				"logo_path": "/gJ8VX6JSu3ciXHuC2dDGAo2lvwM.png",
				"origin_country": "US"
			}
		],
		"number_of_episodes": 9,
		"number_of_seasons": 1,
		"origin_country": [
			"US"
		],
		"original_language": "en",
		"original_name": "What If...?",
		"overview": "Taking inspiration from the comic books of the same name, each episode explores a pivotal moment from the Marvel Cinematic Universe and turns it on its head, leading the audience into uncharted territory.",
		"popularity": 3925.88,
		"poster_path": "/lztz5XBMG1x6Y5ubz7CxfPFsAcW.jpg",
		"production_companies": [
			{
				"id": 420,
				"logo_path": "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
				"name": "Marvel Studios",
				"origin_country": "US"
			},
			{
				"id": 42171,
				"logo_path": "/yTvfCUChMCmeEbjWNyIFGwgiXQE.png",
				"name": "Blue Spirit",
				"origin_country": "FR"
			},
			{
				"id": 129671,
				"logo_path": null,
				"name": "Squeeze",
				"origin_country": "CA"
			}
		],
		"production_countries": [
			{
				"iso_3166_1": "CA",
				"name": "Canada"
			},
			{
				"iso_3166_1": "FR",
				"name": "France"
			},
			{
				"iso_3166_1": "US",
				"name": "United States of America"
			}
		],
		"seasons": [
			{
				"air_date": "2021-08-11",
				"episode_count": 9,
				"id": 134723,
				"name": "Season 1",
				"overview": "",
				"poster_path": "/lztz5XBMG1x6Y5ubz7CxfPFsAcW.jpg",
				"season_number": 1
			}
		],
		"spoken_languages": [
			{
				"english_name": "English",
				"iso_639_1": "en",
				"name": "English"
			}
		],
		"status": "Returning Series",
		"tagline": "One question changes everything.",
		"type": "Scripted",
		"vote_average": 8.6,
		"vote_count": 944
	})
	return (
		<div className="shows-details">
			<div className="shows-background-wrapper">
				<div className="grid grid-2 jc">
					<div className="row-1 poster">
						<img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt=""
							 className="movie-poster"/>
					</div>
					<div className="row-2">
						<h1 className="name">
							{data.name}
						</h1>
						<h3 className="tagline">
							{data.tagline}
						</h3>

						<div className="flex">
							<p className="release-date">
								{data.release_date}
							</p>
							<div className="rating">
								<span>{data.vote_average}</span>
							</div>
						</div>

						<div className="overview">
							{data.overview}
						</div>


					</div>


				</div>
				<div className="seasons">
					{data.seasons.map(season => <div className="season">
						<h2>{season.name}</h2>

						<div className="flex js season-details">
							<img className="season-img" src={`https://image.tmdb.org/t/p/original/${season.poster_path}`} alt=""/>
							<p>Episodes: {season.episode_count}</p>
							<p>Air Data: {season.air_date}</p>
						</div>



					</div>)}
				</div>


			</div>

		</div>
	);
};

export default ShowsDetails;

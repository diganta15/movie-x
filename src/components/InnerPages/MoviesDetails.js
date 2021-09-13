import React,{useEffect, useState} from 'react';
import axios from 'axios';

const MoviesDetails = (props) => {
	const [data, setData] = useState({
		"adult": false,
		"backdrop_path": "/swcF9sPlruc6s4gAHuWfbYicbqG.jpg",
		"belongs_to_collection": null,
		"budget": 0,
		"genres": [
			{
				"id": 16,
				"name": "Animation"
			},
			{
				"id": 10751,
				"name": "Family"
			},
			{
				"id": 12,
				"name": "Adventure"
			},
			{
				"id": 35,
				"name": "Comedy"
			}
		],
		"homepage": "https://www.pawpatrol.movie",
		"id": 675445,
		"imdb_id": "tt11832046",
		"original_language": "en",
		"original_title": "PAW Patrol: The Movie",
		"overview": "Ryder and the pups are called to Adventure City to stop Mayor Humdinger from turning the bustling metropolis into a state of chaos.",
		"popularity": 3609.458,
		"poster_path": "/ic0intvXZSfBlYPIvWXpU1ivUCO.jpg",
		"production_companies": [
			{
				"id": 71738,
				"logo_path": "/9SiK63A0hOmn3FiLCEqydtE1ZQW.png",
				"name": "Spin Master",
				"origin_country": "CA"
			},
			{
				"id": 2348,
				"logo_path": "/m31fQvZJuUvAgxoqTiCGYFBfZYe.png",
				"name": "Nickelodeon Movies",
				"origin_country": "US"
			},
			{
				"id": 4,
				"logo_path": "/fycMZt242LVjagMByZOLUGbCvv3.png",
				"name": "Paramount",
				"origin_country": "US"
			},
			{
				"id": 8649,
				"logo_path": null,
				"name": "Mikros Image",
				"origin_country": "FR"
			}
		],
		"production_countries": [
			{
				"iso_3166_1": "US",
				"name": "United States of America"
			}
		],
		"release_date": "2021-08-09",
		"revenue": 39180335,
		"runtime": 90,
		"spoken_languages": [
			{
				"english_name": "English",
				"iso_639_1": "en",
				"name": "English"
			}
		],
		"status": "Released",
		"tagline": "Our fate is in their paws.",
		"title": "PAW Patrol: The Movie",
		"video": false,
		"vote_average": 7.8,
		"vote_count": 162
	});


	useEffect(()=>{
		console.log(props.match.params.id);

		async function fetchData(){
			const id = props.match.params.id;
			const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIEDB_CLIENT_ID}&language=en-US`)
			setData(res.data);
		}

		fetchData();
		
	},[]);

	return (
		<div className="movie-details">
			<div className="movie-background-wrapper">
				<div className="grid grid-2 jc">
					<div className="row-1 poster">
						<img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt="" className="movie-poster"/>
					</div>
					<div className="row-2">
						<h1 className="original-title">
							{data.original_title}
						</h1>
						<h3 className="tagline">
							{data.tagline}
						</h3>

							<div className="d">
								<p className="release-date">
									Release Date: {data.release_date}
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

			</div>

		</div>
	);
};

export default MoviesDetails;

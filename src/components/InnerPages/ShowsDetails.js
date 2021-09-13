import React, {useState, useEffect, Fragment} from 'react';
import axios from "axios";
import Loading from "../layout/Loading";

const ShowsDetails = (props) => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		console.log(props.match.params.id);

		async function fetchData(){
			const id = props.match.params.id;
			const res = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_MOVIEDB_CLIENT_ID}&language=en-US`)
			await setData(res.data);
			await  setLoading(false);
		}

		fetchData();
	}, []);

	return (
		loading ? <Loading />:<Fragment><div className="shows-details">
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

			</div></Fragment>
	);
};

export default ShowsDetails;

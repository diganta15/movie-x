import React,{useEffect, useState, Fragment} from 'react';
import axios from 'axios';
import Loading from "../layout/Loading";

const MoviesDetails = (props) => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true)

	useEffect(()=>{


		async function fetchData(){
			const id = props.match.params.id;
			const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIEDB_CLIENT_ID}&language=en-US`)
			await  setData(res.data);
			await setLoading(false)
		}

		fetchData();
		
	},[]);

	return (
		loading? <Loading />:<Fragment>
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
		</Fragment>
	);
};

export default MoviesDetails;

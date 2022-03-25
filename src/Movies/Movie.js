import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
	Box,
	Border,
	Crowd,
	Form,
	MovieHeader,
	NavContainer
} from './MovieStyles'
import text from '../Assets/MyTestApp.png'

function Movie() {
	const [movies, setMovies] = useState([])

	useEffect(() => {
		axios
			.get('http://www.omdbapi.com/swagger.json')
			.then((res) => {
				console.log(res)
				setMovies(res.data.tags)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	return (
		<NavContainer>
			<MovieHeader>
				<Border>
					{' '}
					<img src={text} alt="logo" />
				</Border>
			</MovieHeader>
			<Crowd>
				<h2>
					Watch <br></br>something <br></br>incredible.
				</h2>
			</Crowd>

			<Form>
				<h2>Search</h2>
				<form action="/" method="get">
					<label htmlFor="header-search"></label>
					<input type="text" id="header-search" name="s" />
				</form>
			</Form>
			<div>
				{movies.map((movie) => (
					<h2 style={{ textAlign: 'left', marginLeft: 25 }} key={movie.id}>
						{movie.name}
						<Box>
							<div class="row">
								<div class="column">{movie.name}</div>
								<div class="column">{movie.name}</div>
								<div class="column">{movie.name}</div>
								<div class="column">{movie.name}</div>
							</div>
						</Box>
					</h2>
				))}
			</div>
		</NavContainer>
	)
}

export default Movie

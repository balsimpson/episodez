/* eslint-disable */
const API_KEY = "api_key=bcde1195dc8ce8278f7fd88e160d3d72";
const BASE_URL = "https://api.themoviedb.org/3";

// const getEpisodesURL = "https://api.themoviedb.org/3/tv/8592/season/1?api_key=bcde1195dc8ce8278f7fd88e160d3d72";

// getTVShow details - https://api.themoviedb.org/3/tv/8592?api_key=bcde1195dc8ce8278f7fd88e160d3d72&append_to_response=credits,external_ids

/*
"backdrop_sizes": [
	  "w300",
	  "w780",
	  "w1280",
	  "original"
	],
	"logo_sizes": [
	  "w45",
	  "w92",
	  "w154",
	  "w185",
	  "w300",
	  "w500",
	  "original"
	],
	"poster_sizes": [
	  "w92",
	  "w154",
	  "w185",
	  "w342",
	  "w500",
	  "w780",
	  "original"
	],
	"profile_sizes": [
	  "w45",
	  "w185",
	  "h632",
	  "original"
	],
	"still_sizes": [
	  "w92",
	  "w185",
	  "w300",
	  "original"
	]
*/

// const BACKDROP_SIZES = ["w300", "w780", "w1280", "original"];

const tmdb = {
	// search tv shows
	async search(query) {
		let url = `${BASE_URL}/search/tv?${API_KEY}&query=${query}`;
		return await doFetch(url);
	},

	async getEpisodes(showId, seasonNo = 1) {
		let url = `${BASE_URL}/tv/${showId}/season/${seasonNo}?${API_KEY}`;
		return await doFetch(url);
	},

	async getShowDetails(showId) {
		let url = `${BASE_URL}/tv/${showId}?${API_KEY}`;
		return await doFetch(url);
	},

	async getFormattedShowDetails(showId, seasonNo = 1) {

		let showDetails = await doFetch(`${BASE_URL}/tv/${showId}?${API_KEY}`);
		let episodes = await doFetch(`${BASE_URL}/tv/${showId}/season/${seasonNo}?${API_KEY}`);

		let seasons = [];
		let specials = "";

		for (const season of showDetails.seasons) {
			// console.log('seasons', season);
			if (season.name != "Specials") {
				seasons.push(season);
			} else {
				specials = season;
			}
		}

		if (specials) {
			seasons.push(specials);
		}

		let show = {
			id: showDetails.id,
			name: showDetails.name,
			created_by: showDetails.created_by,
			backdrop_path: showDetails.backdrop_path,
			poster_path: showDetails.poster_path,
			overview: showDetails.overview,
			first_air_date: showDetails.first_air_date,
			number_of_episodes: showDetails.number_of_episodes,
			number_of_seasons: showDetails.number_of_seasons,
			episode_run_time: showDetails.episode_run_time || [],
			seasons: seasons,
			genres: showDetails.genres,
			homepage: showDetails.homepage,
		}

		show.seasons[seasonNo - 1].episodes = episodes.episodes;
		return show;
	},


	// convert genre ids to genre text
	getGenre(genreIds) {
		const genres = {
			28: "Action",
			12: "Adventure",
			10759: "Action & Adventure",
			16: "Animation",
			35: "Comedy",
			80: "Crime",
			99: "Documentary",
			18: "Drama",
			10751: "Family",
			14: "Fantasy",
			36: "History",
			27: "Horror",
			10762: "Kids",
			10402: "Music",
			9648: "Mystery",
			10763: "News",
			10764: "Reality",
			10749: "Romance",
			878: "Science Fiction",
			10765: "Sci-Fi & Fantasy",
			10766: "Soap",
			10767: "Talk",
			10770: "TV Movie",
			53: "Thriller",
			10752: "War",
			10768: "War & Politics",
			37: "Western",
		};
		const genretxt = [];
		genreIds.forEach(id => {
			if (genres[id]) {
				genretxt.push(genres[id]);
			}
		});
		return genretxt;
	},

	getImageURL(poster_path, type, size = "w154") {
		if (poster_path) {
			return `https://image.tmdb.org/t/p/${size}${poster_path}`;
		} else {
			if (type == 'portrait') {

				return "imgnotfound_portrait.png";
			} else {

				return "imgnotfound.png";
			}
		}
	},

	// format tv show details
	formatShowDetails() {

	}
};

async function doFetch(url) {
	try {
		let res = await fetch(url);
		let result = await res.json();
		return result;
	} catch (error) {
		console.log(error.message);
	}
}

export default tmdb;

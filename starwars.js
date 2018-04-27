// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado
let filmesRequest = new XMLHttpRequest();
filmesRequest.onreadystatechange = callbackFilme;
filmesRequest.open('GET', 'https://swapi.co/api/films/', true);
filmesRequest.send(null);

function callbackFilme()
{
	if(this.readyState === 4)
	{
		if (this.status === 200) 
		{
			let filmes = JSON.parse(filmesRequest.responseText);
			filmes = filmes.results.sort(function(a,b){return a.episode_id - b.episode_id;});

			let lista = "";
			for(let film of filmes)
			{
				lista += `<li data-episode-url="http://swapi.co/api/films/${film.episode_id}/">Episode ${film.episode_id}: ${film.title}</li>`;


			}
			document.querySelector("#movies ul").innerHTML = lista;
			document.querySelector('.reading-animation').innerHTML = 'Episode ' + film.episode_id + '\n' + film.title.toUpperCase() + '\n\n' + film.opening_crawl;
		}
	}
}
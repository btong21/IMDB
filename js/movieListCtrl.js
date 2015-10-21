app.controller('MovieListCtrl', MovieListCtrl);

function MovieListCtrl(movieService, $location) {
  /*TODO #3: Load all of the movies from the movieService*/
  this.movies = movieService.getMovies();
  this.location = $location;
  // this.movieService = movieService
  
  this.sortOptions = [
    {label: 'Title', sortField: 'Title', reverse: false},
    {label: 'Rating', sortField: "imdbRating", reverse: true}
  ]
  
  this.selectedOption = this.sortOptions[0];

  this.curPage = 0;
  this.moviesPerPage = 4;
}

MovieListCtrl.prototype.ChangeID = function(id) {
	this.location.path('/movie/' + id);

}

MovieListCtrl.prototype.getNumPages = function() {
	return Math.ceil(this.movies.length/this.moviesPerPAge);
}
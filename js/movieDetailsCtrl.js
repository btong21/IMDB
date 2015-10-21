app.controller('MovieDetailsCtrl', MovieDetailsCtrl);

function MovieDetailsCtrl(movieService, $routeParams) {
  /*TODO #4: Load the movie from the movieService using the id form the route params*/
 
  this.movieService = movieService;
  this.routeParams = $routeParams;
  this.movieID = this.routeParams.movieID;
  this.movie = this.movieService.getMovie(this.movieID);
}






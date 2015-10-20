app.controller('MovieDetailsCtrl', MovieDetailsCtrl);

function MovieDetailsCtrl(movieService) {
  /*TODO #4: Load the movie from the movieService using the id form the route params*/
  this.movieID = $routeParams.movieID;
}


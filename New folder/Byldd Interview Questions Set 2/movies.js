// Given the set of movies below, write some functions to analyze the data

const movies = [
  {
    name: 'The Dark Knight',
    rating: 'PG-13',
    year: 2012,
    bestScene: {
      name: 'fight',
      location: 'sewer',
      sceneLength: 10,
      actors: ['Christian Bale', 'Tom Hardy'],
    }
  },
  {
    name: 'Good Burger',
    rating: 'PG',
    year: 1994,
    bestScene: {
      name: 'jump',
      location: 'giant milkshake',
      sceneLength: 5,
      actors: ['Kenan Thompson', 'Kel Mitchell'],
    }
  },
  {
    name: 'Sharknado 2: The Second One',
    rating: 'TV-14',
    year: 2013
  },
  {
    name: 'The Big Short',
    rating: 'R',
    year: 2015,
    bestScene: {
      name: 'explanation',
      location: 'casino',
      sceneLength: 20,
      actors: ['Christian Bale', 'Steve Carrell']
    }
  },
];

/** 
 * return the total length of all of the best scenes in the movies
 * answer: 35
 * */
function bestSceneTotalLength (movies) {

}
/**
 * return an array of unique actors in the best scenes
 * 
 * [
    'Christian Bale',
    'Tom Hardy',
    'Kenan Thompson',
    'Kel Mitchell',
    'Steve Carrell'
  ]
 * 
*/
function getUniqueActors (movies) {

}

// Challenge question
// Which movies only have unique actors (e.g. not in other best scenes)
// answer: Good Burger
function getMoviesWithUniqueActors (movies) {

}

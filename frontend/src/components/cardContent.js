import movie_card from './images/movie_card.jpg';
import favImage from './images/fav.jpg';
const cardsContent = [
  {
    title: 'Search for Movies/Series',
    description:
      'Search for any movies/series and get information about the plot, cast, year of release, etc',
    imageUrl:  movie_card,
    time: 1500,
    goTo: "/search"
  },
  {
    title: 'View Favorite Movies',
    description: 'View, add/remove your favorites from this favorites page easily',
    imageUrl:  favImage,
    time: 1500,
    goTo: "/showFavorites"
  }
  ];
  
  export default cardsContent;
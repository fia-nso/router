import './App.css';
import MoviesList from  './Components/MoviesList';
import MovieCard from './Components/MovieCard';
import Navbar from './Components/Navbar';
import Description from './Components/Description';
import BandeAnnonce from './Components/BandeAnnonce';
import React, {useState} from 'react';
import {Route,Routes} from 'react-router-dom'
function App() {
  const[movies,setMovies] = useState([
    { id: Math.random(), 
      Title: "Prison Break",
      Description :"His brother unjustly accused of murder, a civil engineer decides to make him escape from the famous Fox River penitentiary.",
      PosterURL : "https://www.netflix.com/tn-fr/title/70140425",
      rating : "5",
      ImageMovies : "https://i.pinimg.com/originals/6f/12/e9/6f12e9b6c3e1f5e2fca290d82955dec2.jpg",
      Annonces: "https://www.youtube.com/embed/AL9zLctDJaU"
  },

    { id:  Math.random(), 
      Title: "The Punisher",
      Description :"A former Marine determined to punish the criminals who murdered his wife and children finds himself in the middle of a military plot.",
      PosterURL : "https://www.netflix.com/tn-fr/title/80117498",
      rating : "4",
      ImageMovies: "https://cutewallpaper.org/21/the-punisher-netflix-wallpaper/Marvels-The-Punisher-TV-Show-News,-Videos,-Full-Episodes-.jpg",
      Annonces : "https://www.youtube.com/embed/s4QV6OZdmWY"
      },

      { id:  Math.random(), 
        Title: "Queen of the South",
        Description :"Forced to work for the cartel that murdered her boyfriend, Teresa relies on instinct, a loyal friend and a mysterious notebook to survive.",
        PosterURL : "https://www.netflix.com/tn-fr/title/80107369#:~:text=Contrainte%20de%20travailler%20pour%20le,un%20myst%C3%A9rieux%20carnet%20pour%20survivre.&text=Une%20adaptation%20du%20best%2Dseller,Sud%22%20avec%20Kate%20del%20Castillo.",
        rating : "3",
        ImageMovies: "https://fr.web.img6.acsta.net/pictures/16/04/19/11/23/421985.jpg",
        Annonces : "https://www.youtube.com/embed/txqu2WoiqT8"
        },

        { id:  Math.random(), 
          Title: "Shooter",
          Description :"A former sniper returns to service to foil an impending plot against the President of the United States, but finds himself charged with attempted murder.",
          PosterURL : "https://www.netflix.com/tn-fr/title/80109194",
          rating : "2",
          ImageMovies: "https://cache.pressmailing.net/thumbnail/story_hires/9815f03b-6202-4442-adb5-420996e04e40/image.jpg",
          Annonces : "https://www.youtube.com/embed/X2x6IR3FhbQ"

          },

          { id:  Math.random(), 
            Title: "Stranger Things",
            Description :"When a young boy goes missing, a small town discovers a mysterious affair, secret experiences, terrifying supernatural forces ... and a little girl.",
            PosterURL : "https://www.netflix.com/tn-fr/title/80057281",
            rating : "4",
            ImageMovies: "http://linstant-m.tn/dev/media/4405.png",
            Annonces : "https://www.youtube.com/embed/b9EkMc79ZSU"

            },

            { id:  Math.random(), 
              Title: "Breaking Bad",
              Description :"A chemistry teacher with cancer teams up with a former student to make and sell methamphetamine to secure his family's financial future.",
              PosterURL : "https://www.netflix.com/tn-fr/title/70143836",
              rating : "5",
              ImageMovies: "https://fr.web.img3.acsta.net/r_1280_720/pictures/18/07/23/11/26/2778599.jpg",
              Annonces : "https://www.youtube.com/embed/HhesaQXLuRY"
              }
  ]);

        const [movie, setMovie] = useState({
          Title: "",
          ImageMovies: "",
          Descreption: "",
          PosterURL: "",
          Rating:""
        });

      const addMovie = (movieAdd) => {
        setMovies([...movies, movieAdd]);
      };

      const handleSearch= (Title,rating) =>{
        const mv = movies.filter((item) => (item.Title.includes(Title) ) && (item.rating >= rating)) 
        setMovies(mv)
      }

      const handleChange = (e) =>{
        setMovie({...movie, [e.target.name]: e.target.value})
      }

      const handleSubmit = (e) =>{
        e.preventDefault()
        addMovie({...movie})
      };
  return (
    <div className="App"> 
        <Navbar addMovie={addMovie} handleSearch={handleSearch} />
        <Routes>
        <Route exact path='/Description/:description' element={<Description movies={movies}/>}>
        <Route path='' element={<BandeAnnonce movies={movies}/>}/>
        </Route>
        <Route path='/' element={<><MoviesList  movies={movies}/> <MovieCard handleChange={handleChange} handleSubmit={handleSubmit}/> </>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var movies = {
    Action: [
      {
        movieName: "Top Gun",
        movieRating: "8",
        description:
          "Top Gun is a 1986 American action film directed by Tony Scott, and produced by Don Simpson and Jerry Bruckheimer, in association with Paramount Pictures."
      },
      {
        movieName: "Top Gun: Maverick",
        movieRating: "10",
        description:
          "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot."
      },
      {
        movieName: "Top Gun 3: Upcoming",
        movieRating: "-",
        description:
          "This is an upcoming movie in Top Gun series, and sequel of Top Gun 2."
      }
    ],
    "Sci-Fi": [
      {
        movieName: "Robot",
        movieRating: "7.5",
        description:
          "Robo is a science fiction film co-written and directed by S. Shankar and it is dubbed version of tamil movie Endhiran."
      },
      {
        movieName: "Robo 2.0",
        movieRating: "8",
        description:
          "2.0 is a 2018 Indian Tamil-language science fiction action film directed by S. Shankar who co-wrote the film with B. Jeyamohan and Madhan Karky."
      },
      {
        movieName: "Avatar",
        movieRating: "8.5",
        description:
          "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."
      }
    ],
    Superhero: [
      {
        movieName: "Batman 2022",
        movieRating: "9",
        description:
          "The Batman is a 2022 American superhero film based on the DC Comics character Batman. Produced by Warner Bros. Pictures, DC Films, 6th & Idaho, and Dylan Clark Productions, and distributed by Warner Bros. Pictures, it is a reboot of the Batman film franchise."
      },
      {
        movieName: "Superman",
        movieRating: "9.2",
        description:
          "Superman is a superhero who appears in American comic books published by DC Comics. The character was created by writer Jerry Siegel and artist Joe Shuster."
      },
      {
        movieName: "Lights Shazam",
        movieRating: "8.5",
        description:
          "A newly fostered young boy in search of his mother instead finds unexpected super powers and soon gains a powerful enemy."
      }
    ]
  };

  var categories = Object.keys(movies);
  var [recommendedMovieCategory, setRecommendedMovieCategory] = useState(
    "Action"
  );

  function categoryClickHandler(event) {
    var choosedCategory = event.target.innerText;
    setRecommendedMovieCategory(choosedCategory);
  }

  return (
    <div className="App">
      <h1>Movies</h1>
      <h2>Check out my recommended movies.</h2>
      <ul className="list-non-bullet">
        {categories.map((category) => {
          return (
            <li
              key={category}
              onClick={categoryClickHandler}
              className="category inline-list-item"
            >
              {category}
            </li>
          );
        })}
      </ul>
      <hr />

      <ul>
        {movies[recommendedMovieCategory].map((movie) => {
          return (
            <li key={movie.movieName} className="list-non-bullet movie">
              <h2>{movie.movieName}</h2>
              <small>Rating: {movie.movieRating}</small>
              <p>{movie.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

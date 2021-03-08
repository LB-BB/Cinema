const { db } = require("./server/db");
const { green, red } = require("chalk");

const Films = require("./server/db/models/Films");
const Actors = require("./server/db/models/Actors");
const Genres = require("./server/db/models/Genres");

// here's some sample films to get you started
// feel free to edit these or add your own!
const films = [
  {
    name: "The General",
    era: "1920's",
    year: 1926,
    runtime: "80 mins",
    "Imdb Rating": 8.1,
    "Rotten Tomatoes Score": "93%",
    Oscars: 0,
    Director: "Buster Keaton",
  },
  {
    name: "Bringing Up Baby",
    era: "1930's",
    year: 1938,
    runtime: "102 mins",
    "Imdb Rating": 7.8,
    "Rotten Tomatoes Score": "93%",
    Oscars: 0,
    Director: "Howard Hawks",
  },
  {
    name: "Best Years of Our Lives",
    era: "1940's",
    year: 1946,
    runtime: "170 mins",
    "Imdb Rating": 8.0,
    "Rotten Tomatoes Score": "97%",
    Oscars: 8,
    Director: "William Wyler",
  },
  {
    name: "The Way Back",
    era: "2020's",
    year: 2020,
    runtime: "108 mins",
    "Imdb Rating": 6.7,
    "Rotten Tomatoes Score": "83%",
    Oscars: 0,
    Director: "Gavin O'Connor",
  },
  {
    name: "The Vast of Night",
    era: "2010's",
    year: 2019,
    runtime: "91 mins",
    "Imdb Rating": 6.7,
    "Rotten Tomatoes Score": "92%",
    Oscars: 0,
    Director: "Andrew Patterson",
  },
  {
    name: "The Trip to Greece",
    era: "2020's",
    year: 2020,
    runtime: "103 mins",
    "Imdb Rating": 6.6,
    "Rotten Tomatoes Score": "87%",
    Oscars: 0,
    Director: "Michael Winterbottom",
  },
  {
    name: "The Trial of the Chicago 7",
    era: "2020's",
    year: 2020,
    runtime: "129 mins",
    "Imdb Rating": 7.8,
    "Rotten Tomatoes Score": "90%",
    Oscars: 0,
    Director: "Aaron Sorkin",
  },
  {
    name: "Soul",
    era: "2020's",
    year: 2020,
    runtime: "100 mins",
    "Imdb Rating": 8.1,
    "Rotten Tomatoes Score": "95%",
    Oscars: 0,
    Director: '"Pete Docter", "Kemp Powers"',
  },
];

const actors = [
  {
    name: "Bustor Keaton",
  },
  {
    name: "Katherine Hepburn",
  },
  {
    name: "Cary Grant",
  },
  {
    name: "Myrna Loy",
  },
  {
    name: "Fredric March",
  },
  {
    name: "Dana Andrews",
  },
  {
    name: "Teresa Wright",
  },
  {
    name: "Virgina Mayo",
  },

  {
    name: "Ben Affleck",
  },
  {
    name: "Al Madrigal",
  },
  {
    name: "Janina Gavankar",
  },
  {
    name: "Sierra McCormick",
  },
  {
    name: "Jake Horowitz",
  },
  {
    name: "Gail Cronauer",
  },
  {
    name: "Steve Coogan",
  },
  {
    name: "Rob Brydon",
  },
  {
    name: "Claire Keelan",
  },
  {
    name: "Eddie Redmayne",
  },
  {
    name: "Alex Sharp",
  },
  {
    name: "Sacha Baron Cohen",
  },
  {
    name: "Jamie Foxx",
  },
  {
    name: "Tina Fey",
  },
  {
    name: "Graham Norton",
  },
];

const genres = [
  {
    name: "Romance",
  },
  {
    name: "Horror",
  },
  {
    name: "War",
  },
  {
    name: "Comedy",
  },
  {
    name: "Drama",
  },
  {
    name: "Exploitation",
  },
  {
    name: "Adventure",
  },
  {
    name: "Adventure",
  },
  {
    name: "Family",
  },
  {
    name: "Romantic Comedy",
  },
  {
    name: "History",
  },
  {
    name: "Thriller",
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(
      films.map((film) => {
        return Films.create(film);
      })
    );
    await Promise.all(
      actors.map((actor) => {
        return Actors.create(actor);
      })
    );
    await Promise.all(
      genres.map((genre) => {
        return Genres.create(genre);
      })
    );

    console.log(green("Seeding success!"));
    db.close();
  } catch (err) {
    console.error(red("Oh noes! Something went wrong!"));
    console.error(err);
    db.close();
  }
};

seed();

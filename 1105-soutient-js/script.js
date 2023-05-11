const data = [
    {
        title: "Titanic",
        lengthInMin: 220,
        category: "Drame",
        year: 1997
    },
    {
        title: "Comedy 1",
        lengthInMin: 123,
        category: "Comedy",
        year: 1997
    },
    {
        title: "Godzilla",
        lengthInMin: 160,
        category: "Action",
        year: 1999
    },
    {
        title: "Saw",
        lengthInMin: 140,
        category: "Horror",
        year: 2003
    },
    {
        title: "Action movie 2",
        lengthInMin: 180,
        category: "Action",
        year: 2007
    },
    {
        title: "Action movie 3",
        lengthInMin: 120,
        category: "Action",
        year: 2010
    },
]

// data.forEach(movie => console.log(`Title : ${movie.title}, duration : ${movie.lengthInMin}, category : ${movie.category}, release year : ${movie.year}`));

// const filterCategory = function (category) {
//     const filteredMovies = [];
//     for (const movie of data) {
//         if (movie.category === category) {
//             filteredMovies.push(movie);
//         }
//     }
//     return filteredMovies;
// }
// const filterYear = function (year) {
//     const filteredMovies = [];
//     for (const movie of data) {
//         if (movie.year === year) {
//             filteredMovies.push(movie);
//         }
//     }
//     return filteredMovies;
// }

const filter = function(data, property, value, callback){
    const filteredMovies = [];
    for (const movie of data) {
        if (movie[property] === value) {
            filteredMovies.push(movie);
        }
    }
    callback(filteredMovies);
    return filteredMovies;
}
const sortAlpha = function(data){
    return data.sort((a,b)=> a.title.localeCompare(b.title));
    // return data.sort((a,b)=> a.year<b.year);
}
const actionMovies = filter(data,"category","Action", sortAlpha);
console.log(actionMovies);
// const year97 = filterYear(1997);
// console.log(year97);


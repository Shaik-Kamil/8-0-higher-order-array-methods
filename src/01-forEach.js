/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Logs out all of the song titles.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 */
function printAllSongTitles(songs) {
  if (songs.length === 0) {
    throw "Songs must have at least one song in iit";
  }
  // songs.forEach((s) => {
  //   console.log(s.title);
  // });

  songs.forEach(({ title }) => console.log(title));
}

/**
 * Logs out the song title and song artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 *
 * EXAMPLE:
 *  printSongDetails(songs);
 *  //> "Berlin Tsukin by Taiyo Ky"
 *  //> "Up by Sebastian Kamae"
 *  //> ...
 */
function printSongDetails(songs) {
  if (songs.length === 0) {
    throw "Songs must have at least one song in iit";
  }
  // songs.forEach((details) => {
  //   console.log(`${details.title} by ${details.artist}`);
  // });
  songs.forEach(({ title, artist }) => console.log(`${title} by ${artist}`));
}

/**
 * Logs out all of the song titles which have a runtime over three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 */
function printSongTitlesOverThreeMinutes(songs) {
  if (songs.length === 0) {
    throw "Songs must have at least one song in iit";
  }
  // songs.forEach((threeMins) => {
  //   if (threeMins.runtimeInSeconds > 180) console.log(`${threeMins.title}`);
  // });
  songs.forEach(({ title, runtimeInSeconds }) => {
    if (runtimeInSeconds > 180) {
      console.log(`${title}`); //string interpolation is not need. you can just use title and it will be okay
    }
  });
}

module.exports = {
  printAllSongTitles,
  printSongDetails,
  printSongTitlesOverThreeMinutes,
};

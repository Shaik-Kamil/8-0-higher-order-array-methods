/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const songs = require("../data/songs");
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Returns an array of all of the song titles.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are song titles.
 */
function getSongTitles(songs) {
  if (songs.length === 0) {
    throw "Songs array must have at least one song in it";
  }
  // const titles = songs.map((t) => {
  //   return t.title;
  // });
  // return titles;

  // 2nd way
  // return songs.map(({ title }) => title);

  // 3rd way
  const titles = songs.map(({ title }) => title);
  return titles;
}

/**
 * Returns an array of all of the song titles with the artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are in the format "<TITLE> by <ARTIST>".
 *
 * EXAMPLE:
 *  getSongDetails(songs);
 *  //> [ "Berlin Tsukin by Taiyo Ky", "Up by Sebastian Kamae", ... ]
 */
function getSongDetails(songs) {
  if (songs.length === 0) {
    throw "Songs array must have at least one song in it";
  }
  // const details = songs.map((details) => {
  //   return `${details.title} by ${details.artist}`;
  // });
  // return details;

  // 2nd way
  // return songs.map(({ title, artist }) => {
  //   return `${title} by ${artist}`;
  // });

  // 3rd way
  return songs.map(({ title, artist }) => title + " by " + artist);
}

/**
 * Returns an array of objects, where each object has a key that is the song title and has a value that is the song artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 *
 * EXAMPLE:
 *  getTitleAndArtist(songs);
 *  //> [ { "Berlin Tsukin": "Taiyo Ky" }, { Up: "Sebastian Kamae" }, ... ]
 */
function getTitleAndArtist(songs) {
  if (songs.length === 0) {
    throw "Songs array must have at least one song in it";
  }
  // const both = songs.map((b) => {
  //   let newObj = {};
  //   newObj[b.title] = b.artist;
  //   return newObj;
  // });
  // return both;

  // 2nd way
  // const both = songs.map((b) => ({ [b.title]: b.artist }));
  // return both;

  // 3rd way
  // return songs.map((b) => ({ [b.title]: b.artist }));
}

console.log(getTitleAndArtist(songs));
module.exports = {
  getSongTitles,
  getSongDetails,
  getTitleAndArtist,
};

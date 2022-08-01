/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Returns an array of all songs by the artist "Saib".
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 */
function getSongsBySaib(songs) {
  if (songs.length === 0) {
    throw "Songs array must have at least one song in it";
  }
  // const saibSongs = songs.filter((song) => {
  //   if (song.artist === "Saib") {
  //     return song;
  //   }
  // });

  // alternative to 1
  const saibSongs = songs.filter((song) => song.artist === "Saib");

  //2nd way
  // return songs.filter((s) => s.artist === "Saib");

  //3rd way deconstructor way
  return songs.filter(({ artist }) => artist === "Saib");
}

/**
 * Returns an array of all songs where the runtime is over three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 */
function getSongsOverThreeMinutes(songs) {
  if (songs.length === 0) {
    throw "Songs array must have at least one song in it";
  }
  // const threeMinSongs = songs.filter((song) => {
  //   return song.runtimeInSeconds > 180;
  // });

  //concise version to 1st way
  const threeMinSongs = songs.filter((a) => a.runtimeInSeconds > 180);
  return threeMinSongs;

  // return threeMinSongs;
  // 2nd way
  // return songs.filter((a) => a.runtimeInSeconds > 180);

  //3rd way deconstructor way
  // return songs.filter(({ runtimeInSeconds }) => runtimeInSeconds > 180);
}

/**
 * Returns an array of songs where the song title is the same as the song album.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 */
function getTitleTracks(songs) {
  if (songs.length === 0) {
    throw "Songs array must have at least one song in it";
  }

  const same1 = songs.filter((song) => {
    return song.title === song.album;
  });
  return same1;
  // concise way to 1st way
  // const same2 = songs.filter((song) => song.title === song.album);
  // return same2;

  // 2nd way
  // return songs.filter((b) => b.title === b.album);

  // 3rd way deconstructor way
  // return songs.filter(({ title, album }) => title === album);
}

module.exports = {
  getSongsBySaib,
  getSongsOverThreeMinutes,
  getTitleTracks,
};

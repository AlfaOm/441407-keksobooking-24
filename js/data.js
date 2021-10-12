import {createAuthor, getRandomLocation, createOffer} from './utils.js';

const createAd = function (index) {
  return {
    author: createAuthor(index + 1),
    offer: createOffer(),
    location: getRandomLocation(),
  };
};


const mockData = new Array(10).fill('').map((__, index) => createAd(index));

mockData;
// console.log(mockData);

import pic1 from '../assets/slider/1.png';
import pic2 from '../assets/slider/2.png';
import pic3 from '../assets/slider/3.png';
import pic4 from '../assets/slider/4.png';
import pic5 from '../assets/slider/5.png';
import pic6 from '../assets/slider/6.png';
import pic7 from '../assets/slider/7.png';
import pic8 from '../assets/slider/8.png';

export const pics = [
    {
        src: pic1,
        width: 511,
        height: 437,
    },
    {
        src: pic2,
        width: 1024,
        height: 1589,
    },
    {
        src: pic3,
        width: 510,
        height: 418,
    },
    {
        src: pic4,
        width: 509,
        height: 438,
    },
    {
        src: pic5,
        width: 1024,
        height: 1557,
    },
    {
        src: pic6,
        width: 509,
        height: 415,
    },
    {
        src: pic7,
        width: 509,
        height: 426,
    },
    {
        src: pic8,
        width: 1024,
        height: 1544,
    },
];

export const picsArr = pics.slice(0, 8).map((pic) => pic.src);

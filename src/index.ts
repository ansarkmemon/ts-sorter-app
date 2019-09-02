import Sorter from "./Sorter";
import NumbersCollection from "./NumbersCollection";
import {CharactersCollection} from "./CharactersCollection";

const numCollection = new NumbersCollection([-5, 0, 3, -1]);
const stringToSort = new CharactersCollection('ansar');
const sorter = new Sorter(numCollection);
const stringSorter = new Sorter(stringToSort);

sorter.sort();
stringSorter.sort();

console.log(numCollection.data);
console.log(stringToSort.data);
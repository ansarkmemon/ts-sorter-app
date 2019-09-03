import Sorter from "./Sorter";
import NumbersCollection from "./NumbersCollection";
import {CharactersCollection} from "./CharactersCollection";
import {LinkedList} from "./LinkedList";

const numCollection = new NumbersCollection([-5, 0, 3, -1]);
numCollection.sort();
const stringToSort = new CharactersCollection('anSar');
stringToSort.sort();
const listToSort = new LinkedList();
listToSort.add(300);
listToSort.add(5);
listToSort.add(3);
listToSort.add(-1);

listToSort.sort();

console.log(numCollection.data);
console.log(stringToSort.data);
listToSort.print();

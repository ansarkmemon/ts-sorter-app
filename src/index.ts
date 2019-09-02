import NumbersCollection from "./NumbersCollection";

class Sorter {
    constructor(public collection: NumbersCollection) {}

    sort(): void {
        for(let i = 0; i < collection.length; i++) {
            for(let j = 0; j < collection.length - i - 1; j++) {
                if(this.collection.compare(j, j+1)) {
                    this.collection.swap(j, j+1)
                }
            }
        }
    }
}

const collection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(collection);
sorter.sort();
console.log(collection.data);
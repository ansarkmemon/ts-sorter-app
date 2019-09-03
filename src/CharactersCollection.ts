import Sorter, {Sortable} from "./Sorter";

export class CharactersCollection extends Sorter implements Sortable{
   constructor(public data: string) {
       super();
   }

   get length(): number {
       return this.data.length;
   }

   compare(leftIndex: number, rightIndex: number): boolean {
       return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
   };

   swap(leftIndex: number, rightIndex: number): void {
       const char = this.data.split('');
       const temp = char[leftIndex];
       char[leftIndex] = char[rightIndex];
       char[rightIndex] = temp;

       this.data = char.join('');
   }
}
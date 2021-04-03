import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";

const arrayToSort = [10, 3, -5, 0];
const stringToSort = "sdfaXasfdasAE";

const numberCollection = new NumbersCollection(arrayToSort);
const charactersCollection = new CharactersCollection(stringToSort);
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();

numberCollection.sort();
console.log(numberCollection.data);

charactersCollection.sort();
console.log(charactersCollection.data);

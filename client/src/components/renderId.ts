import { ArrayTaskList, Task } from "../types";

export function renderId(lengthID: number): string {
  const arrSymbol: string[] = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const id = [];
  const lengthArray: number = arrSymbol.length - 1;
  for (let i: number = 0; i < lengthID; i++) {
    id.push(arrSymbol[Math.floor(Math.random() * lengthArray)]);
  }

  const returnId = id.join("");
  return returnId;
}

export function getId(arr: ArrayTaskList[] | Task[], idLength: number = 3): string {
  const id = renderId(idLength);
  let idIsArray;
  if (Array.isArray(arr)) {
    idIsArray = arr.findIndex((item) => item.id === id);
  } else {
    idIsArray = -1;
  }

  if (idIsArray >= 0) {
    return getId(arr, idLength);
  }
  return id;
}

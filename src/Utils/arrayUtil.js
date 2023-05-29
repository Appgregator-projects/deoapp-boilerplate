import { Stack, Text } from "@chakra-ui/react";
import React from "react";

function ArrayUtil() {
  const numbers = [1, 2, 3, 4, 5];

  // Menggunakan map untuk mengubah setiap elemen dalam array
  const mappedArray = numbers.map((number) => number * 2);

  // Menggunakan key untuk memberikan key unik pada setiap elemen dalam array
  const keyedArray = numbers.map((number, index) => ({
    id: index,
    value: number,
  }));


  // Menggunakan sort untuk mengurutkan elemen array
  const sortedArray = numbers.sort((a, b) => a - b);

  // Menggunakan filter untuk menyaring elemen dalam array
  const filteredArray = numbers.filter((number) => number % 2 === 0);

  // Menggunakan slice untuk mengambil sebagian elemen dari array
  const slicedArray = numbers.slice(0, 3);

  // Menggunakan reduce untuk mengurangi array menjadi satu nilai
  const reducedValue = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  // Menggunakan forEach untuk melakukan operasi pada setiap elemen dalam array
  const forEachArray = [];
  numbers.forEach((number) => {
    forEachArray.push(number * 2);
  });

  // Menggunakan every untuk memeriksa apakah setiap elemen memenuhi kondisi
  const everyResult = numbers.every((number) => number > 0);

  // Menggunakan some untuk memeriksa apakah setidaknya satu elemen memenuhi kondisi
  const someResult = numbers.some((number) => number > 5);

  // Menggunakan includes untuk memeriksa apakah elemen ada dalam array
  const includesResult = numbers.includes(3);

  // Menggunakan find untuk mencari elemen berdasarkan kondisi
  const findResult = numbers.find((number) => number > 3);

  // Menggunakan push untuk menambahkan elemen ke akhir array
  const pushArray = [...numbers];
  pushArray.push(6);

  // Menggunakan splice untuk memodifikasi array dengan menghapus atau menambahkan elemen
  const spliceArray = [...numbers];
  spliceArray.splice(2, 1, 10, 11);

  // Menggunakan shift untuk menghapus elemen pertama dari array
  const shiftArray = [...numbers];
  shiftArray.shift();

  // Menggunakan unshift untuk menambahkan elemen di awal array
  const unshiftArray = [...numbers];
  unshiftArray.unshift(0);

  // Menggunakan join untuk menggabungkan elemen array menjadi string dengan pemisah yang ditentukan
  const joinResult = numbers.join(" - ");

  // Menggunakan flatMap untuk menggabungkan dan memetakan array bersarang menjadi array datar
  const nestedArray = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  const flatMapResult = nestedArray.flatMap((subArray) => subArray);

  return (
    <Stack>
      <Stack>
        <Text>Array Utils</Text>
        <Text>Mapped Array: {mappedArray.join(", ")}</Text>
        <Text>Keyed Array: {JSON.stringify(keyedArray)}</Text>
        <Text>Sorted Array: {sortedArray.join(', ')}</Text>
        <Text>Filtered Array: {filteredArray.join(", ")}</Text>
        <Text>Sliced Array: {slicedArray.join(", ")}</Text>
        <Text>Reduced Value: {reducedValue}</Text>
        <Text>ForEach Array: {forEachArray.join(", ")}</Text>
        <Text>Every Result: {everyResult ? "True" : "False"}</Text>
        <Text>Some Result: {someResult ? "True" : "False"}</Text>
      </Stack>

      <Stack>
        <Text>Includes Result: {includesResult ? "True" : "False"}</Text>
        <Text>Find Result: {findResult}</Text>
        <Text>Push Array: {pushArray.join(", ")}</Text>
        <Text>Splice Array: {spliceArray.join(", ")}</Text>
        <Text>Shift Array: {shiftArray.join(", ")}</Text>
        <Text>Unshift Array: {unshiftArray.join(", ")}</Text>
      </Stack>

      <Stack>
        <Text>Join Result: {joinResult}</Text>
        <Text>FlatMap Result: {flatMapResult.join(", ")}</Text>
      </Stack>
    </Stack>
  );
}

export default ArrayUtil;

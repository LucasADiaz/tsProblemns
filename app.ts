(function () {
    // funcion multiplicar 2 numeros sin utilizar eñ *

    function multiplicarDosNumeros(a: number, b: number) {
        let acumulador: number = 0;
        for (let i = 0; i < b; i++) {
            acumulador = acumulador + a;
        }
        return acumulador;
    }

    console.log(
        "multiplicar 2 numeros sin utilizar eñ *",
        multiplicarDosNumeros(24, 86),
    );

    // obtener el numero mayor de un arreglo numerico iterando una vez

    function getBiggest(array: number[]) {
        return array.reduce((acc, el) => (acc > el ? acc : el));
    }

    const array = [1, 2, 3, 4, 4, 4, 5, 6, 134, 5];

    console.log(
        "devolver el mayor elemento del array iterando 1 vez",
        getBiggest(array),
    );

    // limpiar de un array los undefined, null, los 0 y los nulos

    const array2 = [10, undefined, , 12, 0, 1, 2, , false];

    function clean(array: any[]) {
        return array.reduce((acc, el) => {
            if (el) {
                acc.push(el);
            }
            return acc;
        }, []);
    }

    console.log("limpiar un array de valores nulos unifined 0", clean(array2));

    // escribir una funcion que aplane un nivel de arreglo
    const array3 = [[1, 2], [[3, 4]], 5, [[]]];
    // esperado [1,2,[3,4],5,[]] => se sube un nivel

    function planArrays(array: any[]) {
        return array.reduce((acc: any[], el) => acc.concat(el), []);
    }

    console.log("aplanar un arreglo", array3, planArrays(array3));

    // escribir una funcion que cuente la cantidad de veces que se repite una palabra

    function repited(str: string) {
        const lowered = str.toLowerCase();
        const splitted = lowered.split(" ");
        const reduced = splitted.reduce((acc: any, el: any) => {
            if (acc[el]) {
                acc[el]++;
            } else {
                acc[el] = 1;
            }
            return acc;
        }, {});
        // elimino las palabras repetdidas
        // return Object.keys(reduced);
        return Object.entries(reduced).reduce((acc: any, el: any) =>
            acc[1] > el[1] ? acc : el,
        );
    }

    console.log("repited", repited("this is a repeated word test this is a a"));

    // verificar si una palabra es un palindromo se lee igual al drecho y a revz

    function isAPalindromo(str: string) {
        console.log(str);
        str = str.replace(/\s/g, "");
        console.log(str);
        const lowered = str.toLowerCase();
        console.log(lowered);
        const splitted = lowered.split("");
        console.log(splitted);
        const reversed = splitted.reverse();
        console.log(reversed);
        const joined = reversed.join("");
        console.log(joined);

        return lowered === joined;
    }

    console.log("palindromo", isAPalindromo("do geese see God"));

    // traer la palabra mas grande
    function longWord(str: string) {
        const array = str.split(" ");
        const resolve = array.sort((a, b) => {
            return b.length - a.length;
        });
        return resolve[0];
    }
    console.log(
        "primer metodo longWord",
        longWord("hola mundo nosotros somos unos katanga scuad"),
    );

    function longWordsecond(str: string) {
        const words = str.split(" ");
        let myLongestWord = "";
        for (let word of words) {
            if (word.length > myLongestWord.length) {
                myLongestWord = word;
            }
        }
        // for (let i = 0; i < words.length; i++) {
        //     if (words[i].length > myLongestWord.length) {
        //         myLongestWord = words[i];
        //     }
        // }
        return myLongestWord;
    }
    console.log(
        "segundo metodo longWord",
        longWordsecond("hola mundo nosotros somos unos katanga scuad"),
    );

    // PROBLEMA DISEÑAR UN ALGORITMO QUE RECORRA UN ARRAY de palabras, el cual debe primero limpiar de toda palabra que tenga elementos repetidos, y luego devolver la cadena mas larga

    function characterRepeat(str: string) {
        str = str.replace(/\s/g, "");
        const splited = str.split("");
        let repeat: boolean = true;
        for (let item of splited) {
            const resolve = splited.filter((element) => element === item);
            if (resolve.length > 1) {
                repeat = false;
            }
        }
        return repeat;
    }

    console.log(characterRepeat("abcdefg"));

    // recibe un array, y limpia aquellas cadenas con elementos repetidos
    function cleanArray(arr: string[]) {
        const arrayClean: string[] = [];
        arr.forEach((element) => {
            // traemos la respuesta si el elemento tiene una caracter repetido
            // si es false es porque tiene caracter repetido
            const response = characterRepeat(element);
            if (response) {
                arrayClean.push(element);
            }
        });
        return arrayClean;
    }

    // fucion que recorrera un array limpio, y vera la cadena mas larga
    function longWordOfArray(arr: string[]) {
        let myLongestWord = "";
        for (let word of arr) {
            if (word.length > myLongestWord.length) {
                myLongestWord = word;
            }
        }
        // for (let i = 0; i < words.length; i++) {
        //     if (words[i].length > myLongestWord.length) {
        //         myLongestWord = words[i];
        //     }
        // }
        return myLongestWord;
    }

    function index(arr: string[]) {
        const cleaner = cleanArray(arr);
        const longerWord = longWordOfArray(cleaner);
        return longerWord;
    }

    const strings = ["a", "ab", "avcsde", "aaa", "asda", "carroza"];

    console.log(index(strings));
})();

//ejercicio resuelto de diccionario
//  const diccionario: string[] = ["a", "aa", "aaa"];

//     let palabra = "aaabaa";

//     const subString = (dic: string[], pal: string) => {
//         const array = [];
//         dic.forEach((item) => {
//             let word = pal;
//             while (word.length > 0) {
//                 const res = word.indexOf(item);
//                 if (res !== -1) {
//                     if (res === 0) {
//                         word = word.substr(res + 1);
//                         array.push(item);
//                     } else {
//                         word = word.substr(res);
//                     }
//                 } else {
//                     word = "";
//                 }
//             }
//         });
//         return array;
//     };

//     const result: string[] = subString(diccionario, palabra);
//     console.log(result);

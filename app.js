(function () {
    // funcion multiplicar 2 numeros sin utilizar eñ *
    function multiplicarDosNumeros(a, b) {
        var acumulador = 0;
        for (var i = 0; i < b; i++) {
            acumulador = acumulador + a;
        }
        return acumulador;
    }
    console.log("multiplicar 2 numeros sin utilizar eñ *", multiplicarDosNumeros(24, 86));
    // obtener el numero mayor de un arreglo numerico iterando una vez
    function getBiggest(array) {
        return array.reduce(function (acc, el) { return (acc > el ? acc : el); });
    }
    var array = [1, 2, 3, 4, 4, 4, 5, 6, 134, 5];
    console.log("devolver el mayor elemento del array iterando 1 vez", getBiggest(array));
    // limpiar de un array los undefined, null, los 0 y los nulos
    var array2 = [10, undefined, , 12, 0, 1, 2, , false];
    function clean(array) {
        return array.reduce(function (acc, el) {
            if (el) {
                acc.push(el);
            }
            return acc;
        }, []);
    }
    console.log("limpiar un array de valores nulos unifined 0", clean(array2));
    // escribir una funcion que aplane un nivel de arreglo
    var array3 = [[1, 2], [[3, 4]], 5, [[]]];
    // esperado [1,2,[3,4],5,[]] => se sube un nivel
    function planArrays(array) {
        return array.reduce(function (acc, el) { return acc.concat(el); }, []);
    }
    console.log("aplanar un arreglo", array3, planArrays(array3));
    // escribir una funcion que cuente la cantidad de veces que se repite una palabra
    function repited(str) {
        var lowered = str.toLowerCase();
        var splitted = lowered.split(" ");
        var reduced = splitted.reduce(function (acc, el) {
            if (acc[el]) {
                acc[el]++;
            }
            else {
                acc[el] = 1;
            }
            return acc;
        }, {});
        // elimino las palabras repetdidas
        // return Object.keys(reduced);
        return Object.entries(reduced).reduce(function (acc, el) {
            return acc[1] > el[1] ? acc : el;
        });
    }
    console.log("repited", repited("this is a repeated word test this is a a"));
    // verificar si una palabra es un palindromo se lee igual al drecho y a revz
    function isAPalindromo(str) {
        console.log(str);
        str = str.replace(/\s/g, "");
        console.log(str);
        var lowered = str.toLowerCase();
        console.log(lowered);
        var splitted = lowered.split("");
        console.log(splitted);
        var reversed = splitted.reverse();
        console.log(reversed);
        var joined = reversed.join("");
        console.log(joined);
        return lowered === joined;
    }
    console.log("palindromo", isAPalindromo("do geese see God"));
    // traer la palabra mas grande
    function longWord(str) {
        var array = str.split(" ");
        var resolve = array.sort(function (a, b) {
            return b.length - a.length;
        });
        return resolve[0];
    }
    console.log("primer metodo longWord", longWord("hola mundo nosotros somos unos katanga scuad"));
    function longWordsecond(str) {
        var words = str.split(" ");
        var myLongestWord = "";
        for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
            var word = words_1[_i];
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
    console.log("segundo metodo longWord", longWordsecond("hola mundo nosotros somos unos katanga scuad"));
    // PROBLEMA DISEÑAR UN ALGORITMO QUE RECORRA UN ARRAY de palabras, el cual debe primero limpiar de toda palabra que tenga elementos repetidos, y luego devolver la cadena mas larga
    function characterRepeat(str) {
        str = str.replace(/\s/g, "");
        var splited = str.split("");
        var repeat = true;
        var _loop_1 = function (item) {
            var resolve = splited.filter(function (element) { return element === item; });
            if (resolve.length > 1) {
                repeat = false;
            }
        };
        for (var _i = 0, splited_1 = splited; _i < splited_1.length; _i++) {
            var item = splited_1[_i];
            _loop_1(item);
        }
        return repeat;
    }
    console.log(characterRepeat("abcdefg"));
    // recibe un array, y limpia aquellas cadenas con elementos repetidos
    function cleanArray(arr) {
        var arrayClean = [];
        arr.forEach(function (element) {
            // traemos la respuesta si el elemento tiene una caracter repetido
            // si es false es porque tiene caracter repetido
            var response = characterRepeat(element);
            if (response) {
                arrayClean.push(element);
            }
        });
        return arrayClean;
    }
    // fucion que recorrera un array limpio, y vera la cadena mas larga
    function longWordOfArray(arr) {
        var myLongestWord = "";
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var word = arr_1[_i];
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
    function index(arr) {
        var cleaner = cleanArray(arr);
        var longerWord = longWordOfArray(cleaner);
        return longerWord;
    }
    var strings = ["a", "ab", "avcsde", "aaa", "asda", "carroza"];
    console.log(index(strings));
    // OTRA FORMA DE DEVOLVER LA CADENA MAS LARGA PERTENECIENTE AL ARRAY
    function whatsLonger(str1, str2) {
        return str2.length > str1.length ? str2 : str1;
    }
    function longestWord(str) {
        var words = str.split(" ");
        return words.reduce(whatsLonger);
    }
    console.log(longestWord("hola mundosssssss como estaadasdasdasdadsdaan todo bien"));
    // fin de mejor metodo
    // extraer todas las cadenas de un string
    var cadena = "holamundocomo estan todo bien";
    var cadena2 = "abcdefghijklmñopqabcdefj";
    function extract(str) {
        var result = [];
        for (var i = 0; i < str.length; i++) {
            console.log(i);
            var resolve = allStringsOfWave(str, i);
            result = result.concat(resolve);
        }
        return result;
    }
    function allStringsOfWave(str, n) {
        var result = [];
        for (var i = 0; i < str.length; i++) {
            var subString = str.substring(i, i + n);
            result.push(subString);
        }
        return result;
    }
    function main(str) {
        str = str.replace(/\s/g, "");
        var array = extract(str);
        var cleaner = cleanArray(array);
        var longerWord = longWordOfArray(cleaner);
        return longerWord;
    }
    console.log(main(cadena2));
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
// OTRA FORMA DE DEVOLVER LA CADENA MAS LARGA PERTENECIENTE AL ARRAY

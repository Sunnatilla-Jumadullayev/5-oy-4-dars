console.log(`start`);
// 50 - masala
{
  console.log(`50 - masala`);
  // var singleNumber = function(nums) {};
  //singleNumber( [4,1,2,1,2,9, true] )
  // function argumentiga berilgan arrayning ichidagi takrorlanmagan element yoki element larni chiqaring
  //misol uchun: 4, 9 soni 1 marta ishtirok etgan qolgan sonlar 1 martadan ko’p qatnashgani uchun javob 4, 9 bo’lgan namunada
  let arr2 = [4, 1, 2, 1, 2, 9, true];
  let result = [];
  function singleNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (arr.indexOf(element) === arr.lastIndexOf(element)) {
        result.push(element);
      }
    }
    return result;
  }
  console.log(singleNumber(arr2));
}
// 51 - masala
{
  console.log(`51 - masala`);
  // array ichidagi o’rtadagi sonni topadigan function tuzing
  //Input: arr = [1,2,3,4,5] middleNumber = 3
  //Input arr = [1,2,3,4] middleNumber = 2.5 o’rtadagi 2 ta sonning o’rta arifmetigi
  let user = [1, 2, 3, 4];
  function ortaQiymat(arr) {
    if (arr.length % 2 === 0) {
      let a = arr[arr.length / 2] + arr[arr.length / 2 - 1];
      return a / 2;
    } else {
      return arr[Math.floor(arr.length / 2)];
    }
  }
  console.log(ortaQiymat(user));
}
// 52 - masala
{
  console.log(`52 - masala`);
  // Id si 4 bo'lgan productni o'chiruvchi dastur yozing. (filter)
  //let products = [{id: 6,name: "Smarthpone", price: 12000, rating: 4.5, discount: 20},{id: 2,name: "Acer", price: 12000, rating: 4.3, discount: 10},{id: 1,name: "Mac book", price: 17000, rating: 4.7, discount: 40},{id: 4,name: "HP", price: 21000, rating: 4.1, discount: 16},];
  let products = [
    { id: 4, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20 },
    { id: 2, name: "Acer", price: 12000, rating: 4.3, discount: 10 },
    { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40 },
    { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 16 },
  ];
  let result = products.filter((item) => item.id !== 4);
  console.log(result);
}
// 53 - masala
{
  console.log(`53 - masala`);
  // Berilgan stringni faqatgina harflardan iborat ekanligiga tekshiring
  function stringExpent(str) {
    let count = 0;
    for (let item of str) {
      if (!isNaN(Number(item))) {
        count++;
      }
    }
    return count === 0;
  }
  let a = `qwe3r`;
  console.log(stringExpent(a));
}
// 54 - masala
{
  console.log(`54 - masala`);
  // Arraydagi bir xil so’zlar sonini hosil qiluvchi obyekt yarating
  // Input: const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
  // Output: {dog: 2, chicken: 3, cat: 1, rabbit: 1}
  const animals = [
    "dog",
    "chicken",
    "cat",
    "dog",
    "chicken",
    "chicken",
    "rabbit",
    "rabbit",
  ];
  countElement(animals);
  function countElement(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      let count = 0;
      for (let g = 0; g < arr.length; g++) {
        if (element === arr[g]) {
          count++;
        }
      }
      result[element] = count;
    }
    return console.log(result);
    console.log(result);
  }
}

// 55 - masala
{
  console.log(`55 - masala`);
  // String berilgan. Stringdagi so'zlar uzunligidan iborat bo'lgan array qaytaring. (split, map)
  //Input: "Hello world"
  //Output: [3, 9, 12]
  let sentens = `bugun yomgir yogdi olamga`;
  const wordLength = (str) => str.split(" ").map((b) => b.length);
  console.log(wordLength(sentens));
}
// 56 - masala
{
  console.log(`56 - masala`);
  // Stringni bo'sh joy bor yoki yo'qligini tekshiring. (split, some)
  // Input: "salom dunyo"
  // Output: true
  function emptySearch(str) {
    return str.split("").includes(" ");
  }
  console.log(emptySearch(`boshJoyYoq`));
  console.log(emptySearch(`bo'sh joy bor`));
}
// 57 - masala
{
  console.log(`57 - masala`);
  // Objectning kalit va qiymatlarining string ko'rinishidagi yig'indisidan iborat array qaytaring. (Object.entries, map, join)
  // Input: {a: 2, b: 5, c: 7}
  // Output: ['a2', 'b5', 'c7']
  let obj = { a: 2, b: 5, c: 7 };
  let result = [];
  for (const [key, value] of Object.entries(obj)) {
    result.push(`${key}${value}`);
  }
  console.log(result);
}
// 58 - masala
{
  console.log(`58 - masala`);
  // Necha kishi imtihondan o'tdi va necha kishi imtihonda o'ta olmadi shuni ham hisoblang. (reduce) 80 ≤ protcent exam dan o’tgan bo’ladi
  const pupils = [
    { name: "Elbek", protcent: 95 },
    { name: "Zafar", protcent: 78 },
    { name: "Aziz", protcent: 83 },
    { name: "Jasur", protcent: 88 },
    { name: "Bobur", protcent: 66 },
    { name: "Kamron", protcent: 80 },
  ];
  let passExam = 0;
  let failExam = 0;
  for (let i = 0; i < pupils.length; i++) {
    const element = pupils[i];
    if (element.protcent >= 80) passExam++;
    else failExam++;
  }
  console.log(`pass in exam: ${passExam}`, `fail exam: ${failExam}`);
}
// 59 - masala
{
  console.log(`59 - masala`);
  // var findMedianSortedArrays = function(nums1, nums2) {};
  // nums1 = [1,2], nums2 = [3,4]
  // result: 2.5
  // arraylar qushilib va sort lanib urtasidagi son topilsin
  let num1 = [1, 2, 8, 6];
  let num2 = [3, 4, 5, 7];

  var findMedianSortedArrays = function (nums1, nums2) {
    let nums = [...nums1, ...nums2].sort((a, b) => a - b);
    console.log(nums);
    if (nums.length % 2 === 0) {
      let a = nums[nums.length / 2] + nums[nums.length / 2 - 1];
      return a / 2;
    } else {
      return nums[Math.floor(nums.length / 2)];
    }
  };
  console.log(findMedianSortedArrays(num1, num2));
}
//  60 - masala
{
  console.log(`60 - masala`);
  let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ];
  let result = false;
  let searchMatrix = function (arr, target) {
    arr.forEach((x) => {
      if (x.includes(target)) {
        result = true;
      }
    });
    return result;
  };
  console.log(searchMatrix(matrix, 3));
}
//  61 - masala
{
  console.log(`61 - masala`);
}
//  62 - masala
{
  console.log(`62 - masala`);
  function matrix(arr) {
    let result = [];
    arr.forEach((x) => {
      result.push(x[0]);
    });
    return result;
    var hy = 8;
  }
  console.log(
    matrix([
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ])
  );
}
//  63 - masala
{
  console.log(`63 - masala`);
  // sizda qandaydir string bor va shundagi oxirgi so’zning length ni toping.
  let string = `An array of the given object's own enumerable string-keyed propertys`;
  function lastStringLength(str) {
    let arrStr = str.split(" ");
    return arrStr[arrStr.length - 1].length;
  }
  console.log(lastStringLength(string));
}
// 64 - masala
{
  console.log(`64 - masala`);
  // berilgan array lar index ma index bir biriga teng bo'lsa true bo'lmasa false
  // chiqishi kerak
  let p = [1, 2, 3];
  let q = [1, 2, 3];
  function fitArr(arr1, arr2) {
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
      const element1 = arr1[i];
      const element2 = arr2[i];
      if (element1 !== element2) {
        count++;
      }
    }
    return count > 0 ? false : true;
  }
  console.log(fitArr(p, q));
}
// 65 - masala
{
  console.log(`65 - masala`);
  // Objectning kalit va qiymatlarining string ko'rinishidagi yig'indisidan iborat array qaytaring. (Object.entries, map, join)
  // Input: {a: 2, b: 5, c: 7}
  // Output: ['a2', 'b5', 'c7']
  let obj = { a: 2, b: 5, c: 7 };
  let result = [];
  for (const [key, value] of Object.entries(obj)) {
    result.push(`${key}${value}`);
  }
  console.log(result);
}
// 67 - masala
{
  console.log(`67 - masala`);
  let arrr = [1, 5, 1, 2, 3, 5, 4];
  function doubleArr(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (arr.indexOf(element) !== arr.lastIndexOf(element)) {
        result.push(element);
      }
    }
    return result.sort((a, b) => a - b);
  }
  console.log(doubleArr(arrr));
}
// 68 - masala

{
  console.log(`68 - masala`);
  //Array truthy va falsy elementlardan tuzilgan. O’sha arraydagi truthy va falsy elementlarni alohida arraylarga ajratib object qilib qaytaruvchi getTruthyFalsy funksiya tuzing. (filter)

  let argument = [false, 1, 10, "", null, "sultonqul", 1.13, 0];
  function getTruthyFalsy(arr) {
    let obj = {};
    let truthy = arr.filter((item) => Boolean(item));
    let falsy = arr.filter((item) => !Boolean(item));
    obj.truthy = truthy;
    obj.falsy = falsy;
    return obj;
  }
  console.log(getTruthyFalsy(argument));
}
// 69 - masala
{
  console.log(`69 - masala`);
  // Array ning prototype ga shunday bir method yaratib qo’shinki xoxlagan arrayda shu method ni chaqirganda ichidagi sonlarni yig’indisini topib bersin
  Array.prototype.calcSum = function () {
    let result = 0;
    this.forEach((item) => {
      if (!isNaN(item)) {
        result += item;
      }
    });
    return result;
  };
  let arr = [1, 2, `q`, 4, 5, 4, `as`, 4];
  console.log(arr.calcSum());
}
// 70 - masala
{
  console.log(`70 - masala`);
  // String prototype ga shunday method yaratib qo’shinki xoxlagan bir stringda chaqirganda o’sha stringda nechta unli harf borligini aniqlab bersin
  String.prototype.countVowel = function () {
    let count = 0;
    this.toLowerCase()
      .split("")
      .forEach((item) => {
        if (item === `e`) {
          count++;
        } else if (item === `u`) {
          count++;
        } else if (item === `i`) {
          count++;
        } else if (item === `o`) {
          count++;
        } else if (item === `a`) {
          count++;
        }
      });
    return count;
  };
  let str = `sunnatilla`;
  console.log(str.countVowel());
}
// 71 - masala
{
  console.log(`71 - masala`);
  // String prototype ga shunday method yaratib qo’shinki xoxlagan bir stringda chaqirganda o’sha stringni length ni aniqlab bersin
  String.prototype.lengthSum = function () {
    return this.length;
  };
  let str = `sunnatilla`;
  console.log(str.lengthSum());
}
// 72 - masala
{
  //word arraydagi harflar orasida bor yoki yo'qligini tekshiring
  console.log(`72 - masala`);
  function WordCheck(arr, str) {
    let newArr = [];
    let count = 0;
    arr.forEach((item) => {
      item.forEach((x) => {
        newArr.push(x);
      });
    });
    for (const i of str) {
      if (newArr.includes(i)) {
        count++;
      }
    }
    return count === str.length;
  }
  let board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ];
  let word = "ABCCEDA";
  console.log(WordCheck(board, word));
}
// 73 - masala
{
  console.log(`73 - masala`);
  //val head da bo'lsa head dan o'sha element ni olib tashlash kerak
  function delet(arr, el) {
    return arr.filter((item) => item !== el);
  }
  let head = [1, 2, 6, 3, 4, 5, 6];
  let val = 6;
  console.log(delet(head, val));
}

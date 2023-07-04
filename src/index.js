/**
 * ES2015(ES6)
 */

/**
 * const,letの変数宣言
 */

var val = "従来はvarでのみ変数宣言していた";
console.log(val);
var testEl = document.getElementById("testEl");
testEl1.innerHTML = val;

// var 変数は上書き可能
val = "varは上書きできちゃう";
console.log(val);
var testE2 = document.getElementById("testE2");
testEl2.innerHTML = val;
//var変数は再宣言可能
var val = "varは再宣言もできちゃう";
var testE3 = document.getElementById("testE3");
console.log(val);

testEl3.innerHTML = val;

// letは上書き可能だが再宣言不可能
// constは上書きも再宣言も不可能
//だがオブジェクト/配列の中身は変更可能

const object = {
  name: "じゃけえ",
  age: 28,
};

console.log(object);
var testEl4 = document.getElementById("testEl4");
object.name = "aaaa";

testEl4.innerHTML = object.name;

const array = ["a", "b"];
array[0] = "aa";
array.push("cc");

var testEl5 = document.getElementById("testEl5");

testEl5.innerHTML = array[2];

/**
 * テンプレート文字列
 */

//私の名前はじゃけえです。年齢は28歳です。
const name = "じゃけえ";
const age = 28;
//従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

//テンプレート文字列を用いたやり方
//バッククォート
const message2 = `私の名前は${name}です。年齢は${age}です`;
console.log(message2);

/**
 * アロー関数
 */

//従来の関数

// function func1(str) {
//   return str;
// }

const func1 = function (str) {
  return str;
};

console.log(func1("func1を呼び出しました"));

//アロー関数
const func2 = (str) => {
  return str;
};

console.log(func2("func2を呼び出しました"));

const func3 = (str) => str;

console.log(
  func3(
    "func3を呼び出しました。アロー関数は処理が1行であればreturnと{}を省略できます。し過ぎです。ただし{}を付けるのであればreturnは必須です。ややこしいです。"
  )
);

const func4 = (num1, num2) => num1 + num2;

console.log(func4(1, 5));

/**
 * 分割代入
 */
const myProfile = { name2: "jakee", age2: 28 };

const message3 = `名前は${myProfile.name2}です。年齢は${myProfile.age2}です`;
console.log(message3);

//オブジェクトのプロパティ名と一致する必要あり
const { name2, age2 } = myProfile;
const message4 = `名前は${name2}です。年齢は${age2}です`;
console.log(message4);

//配列版
const myProfileArray = ["jakee", 28];
const message5 = `名前は${myProfileArray[0]}です。年齢は${myProfileArray[1]}です。`;
console.log(message5);

const [a, b] = myProfileArray;
const message6 = `名前は${a}です。年齢は${b}です。`;
console.log(message6);

/**
 * デフォルト値
 */

const sayHello = (name) => console.log(`こんちゃっす!${name}`);

sayHello("hogehoge");
sayHello();

const sayHelloDefault = (name = "gest") => console.log(`こんちゃっす!${name}`);
sayHelloDefault();

/**
 * スプレッド構文
 *...どっと3つ連続
 *
 */

//配列の展開
const arraySpread = [1, 2];
console.log(arraySpread);
console.log(...arraySpread);

const sumFunc = (num1 = 1, num2 = 4) => console.log(num1 + num2);
sumFunc();
sumFunc(arraySpread[0], arraySpread[1]);
sumFunc(...arraySpread);

//まとめる
const arraySpread2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arraySpread2;

console.log(num1);
console.log(num2);
console.log(arr3);

//配列のコピー/結合
const arraySpread3 = [10, 20];
const arraySpread4 = [30, 40];
//配列のコピー(スプレッド構文でなく代入コピーにすると参照渡しになるのでコピー元の変更が起きる可能性あり)
const arraySpread5 = [...arraySpread3];
console.log(arraySpread5);
//配列の結合
const arraySpread6 = [...arraySpread3, ...arraySpread4];
console.log(arraySpread6);

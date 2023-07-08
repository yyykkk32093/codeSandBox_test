// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/index.js":[function(require,module,exports) {
var _console;
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

var object = {
  name: "じゃけえ",
  age: 28
};
console.log(object);
var testEl4 = document.getElementById("testEl4");
object.name = "aaaa";
testEl4.innerHTML = object.name;
var array = ["a", "b"];
array[0] = "aa";
array.push("cc");
var testEl5 = document.getElementById("testEl5");
testEl5.innerHTML = array[2];

/**
 * テンプレート文字列
 */

//私の名前はじゃけえです。年齢は28歳です。
var name = "じゃけえ";
var age = 28;
//従来の方法
var message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

//テンプレート文字列を用いたやり方
//バッククォート
var message2 = "\u79C1\u306E\u540D\u524D\u306F".concat(name, "\u3067\u3059\u3002\u5E74\u9F62\u306F").concat(age, "\u3067\u3059");
console.log(message2);

/**
 * アロー関数
 */

//従来の関数

// function func1(str) {
//   return str;
// }

var func1 = function func1(str) {
  return str;
};
console.log(func1("func1を呼び出しました"));

//アロー関数
var func2 = function func2(str) {
  return str;
};
console.log(func2("func2を呼び出しました"));
var func3 = function func3(str) {
  return str;
};
console.log(func3("func3を呼び出しました。アロー関数は処理が1行であればreturnと{}を省略できます。し過ぎです。ただし{}を付けるのであればreturnは必須です。ややこしいです。"));
var func4 = function func4(num1, num2) {
  return num1 + num2;
};
console.log(func4(1, 5));

/**
 * 分割代入
 */
var myProfile = {
  name2: "jakee",
  age2: 28
};
var message3 = "\u540D\u524D\u306F".concat(myProfile.name2, "\u3067\u3059\u3002\u5E74\u9F62\u306F").concat(myProfile.age2, "\u3067\u3059");
console.log(message3);

//オブジェクトのプロパティ名と一致する必要あり
var name2 = myProfile.name2,
  age2 = myProfile.age2;
var message4 = "\u540D\u524D\u306F".concat(name2, "\u3067\u3059\u3002\u5E74\u9F62\u306F").concat(age2, "\u3067\u3059");
console.log(message4);

//配列版
var myProfileArray = ["jakee", 28];
var message5 = "\u540D\u524D\u306F".concat(myProfileArray[0], "\u3067\u3059\u3002\u5E74\u9F62\u306F").concat(myProfileArray[1], "\u3067\u3059\u3002");
console.log(message5);
var a = myProfileArray[0],
  b = myProfileArray[1];
var message6 = "\u540D\u524D\u306F".concat(a, "\u3067\u3059\u3002\u5E74\u9F62\u306F").concat(b, "\u3067\u3059\u3002");
console.log(message6);

/**
 * デフォルト値
 */

var sayHello = function sayHello(name) {
  return console.log("\u3053\u3093\u3061\u3083\u3063\u3059!".concat(name));
};
sayHello("hogehoge");
sayHello();
var sayHelloDefault = function sayHelloDefault() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "gest";
  return console.log("\u3053\u3093\u3061\u3083\u3063\u3059!".concat(name));
};
sayHelloDefault();

/**
 * スプレッド構文
 *...どっと3つ連続
 *
 */

//配列の展開
var arraySpread = [1, 2];
console.log(arraySpread);
//分割代入以外で使うと、配列が展開
(_console = console).log.apply(_console, arraySpread);
var sumFunc = function sumFunc() {
  var num1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var num2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  return console.log(num1 + num2);
};
sumFunc();
sumFunc(arraySpread[0], arraySpread[1]);
sumFunc.apply(void 0, arraySpread);

//まとめる
var arraySpread2 = [1, 2, 3, 4, 5];
//分割代入するとまとまる
var num1 = arraySpread2[0],
  num2 = arraySpread2[1],
  arr3 = arraySpread2.slice(2);
console.log(num1);
console.log(num2);
console.log(arr3);

//配列のコピー/結合
var arraySpread3 = [10, 20];
var arraySpread4 = [30, 40];
//配列のコピー(スプレッド構文でなく代入コピーにすると参照渡しになるのでコピー元の変更が起きる可能性あり)
var arraySpread5 = [].concat(arraySpread3);
console.log(arraySpread5);
//配列の結合
var arraySpread6 = [].concat(arraySpread3, arraySpread4);
console.log(arraySpread6);

/**
 * 配列の操作
 *
 */
var nameArr = ["arex", "brex", "crex"];
for (var index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}

//新しい配列を生成するパターン
var nameArr2 = nameArr.map(function (name) {
  return name + "map処理";
});

//ループ処理するパターン
nameArr.map(function (name, index) {
  console.log(index + "番目" + name + "map処理");
});
var numArr = [1, 2, 3, 4, 5];
var newNumArr = numArr.filter(function (num) {
  //2で割った余りが１の数値のみを返却する
  return num % 2 === 1;
});
console.log(newNumArr);
var newArr3 = nameArr.map(function (name) {
  if (name === "crex") {
    return name;
  } else {
    return "".concat(name, "\u3055\u3093");
  }
});
console.log(newArr3);
nameArr.map(function (name) {
  if (name === "crex") {
    console.log(name);
  } else {
    console.log("".concat(name, "\u3055\u3093"));
  }
});

// ||　は　左側が　false なら　右側を返す。

//nullはfalse判定
var num = null;
var fee = num || "金額未設定";
console.log(fee);

//&& は左側がtrueなら右側を返す
var numTwo = 100;
var feeTwo = numTwo && "何か設定されました";
console.log(feeTwo);
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "40817" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map
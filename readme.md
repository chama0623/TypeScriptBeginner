# TypeScriptのお勉強メモ

url : https://www.youtube.com/watch?v=kd8VH10jXwc&list=PLX8Rsrpnn3IW0REXnTWQp79mxCvHkIrad  

## コンパイルと自動リロード
TYpeScriptのファイルは拡張子が.ts形式である. これをコンパイルするコマンドを次に示す.
```
tsc ファイル名.ts
```
コンパイルが完了するとjsファイルが生成される. これをnode.jsで実行する.
```
node ファイル名.js
```

さらに環境設定を行うことで自動リロードを行うことができる. 自動リロードは作業ディレクトリで次のnpmコマンドを実行してhttp://localhost:8080にアクセスすればよい. ファイルに更新が生じたら自動で再コンパイルしてリロードが行われる.
```
npm start
```

## TypeScriptって何?
TypeScript(TS)はjSに型システムが組み合わさったもの. TSはtsファイルをコンパイルしてjsファイルを生成し, これをweb上で取り扱っている. なのでTSだけで動くというわけではなく, TSをコンパイルしてJSに直してJSが動いている.

## 型定義とアノテーション
ここでは型推論と型アノテーション, プリミティブ型, について説明する.

### 型推論と型アノテーション
型推論 : TSは型を推論してくれる  
型アノテーション : 明示的に型を指定する方法  
型推論と型アノテーションの例を次に示す.

```ts
const name = "chama" // string型と型推論される(明示的に型を示していない)
const name: string = "chama" // string型と型アノテーション(明示的に型を示している)
```

### プリミティブ型
プリミティブ型には次のようなものがある.
- string: 文字列
- number : 整数, 浮動小数, Infinity, NaN
- boolean : true/false

```ts
const name: string = "chama"
const age: number = 21
const isSingle: boolean = true

// 結果を代入することもできる
const isOver20: bolean = age >= 20
```
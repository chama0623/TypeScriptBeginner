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
ここでは型推論と型アノテーション, プリミティブ型, 存在しないことを表現する型について説明する.

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

### 存在しないことを表現する型
- null : 値が欠如していないことを表す
- undefined : 初期化されておらず値が割り振られていないことを表す(推奨)

TSにはanyというどんな型にでもなれる安全でない型がある. これは使いたくない. 一方でunknownというどんな型になるか不明な型がある. これは値が代入されたら型が決まるためanyのようにヤバイ型ではない.

## 関数のパラメータ, 戻り値に型をつける

ここでは関数の使い方について説明する.

### 関数の戻り値に使える特殊な型
関数の戻り値では特別に次の2つの型が用いられることがある.
- void : return文を持たない関数の戻り値
- never : 決して戻ることがない関数の戻り値

```ts
// voidを用いた例
const logMessage = (message: string): void => {
    console.log("ログをだすよ")
}

// neverを用いた例
// 例外を吐くので戻ってこない
const alwaysThrowError = (message: string): never => {
    throw new Error(message)
}
```

### 型定義の方法
関数定義には次に示すような用語がある.
1. パラメータ: 関数宣言時に渡される値(仮パラメータ)
2. 引数 : 関数を呼び出すときに戻す値(実パラメータ)
3. 戻り値 : 関数が返す値

次の例ではmessage: stringがパラメータ, "こんにちわ"が引数, voidが戻り値となる.
```ts
const logMessage = (message: string): void => {
    console.log("ログ:", message)
}

logMessage("こんにちわ")
```

### オプションパラメータ. デフォルトパラメータ
- オプションパラメータ: パラメータの最後に記述する. オプショナルを表す?をつける
- デフォルトパラメータ : パラメータの順序は関係なく記述でき, =で指定したデフォルト値が入る.

```ts
// オプションパラメータ
const isUserSignedIn = (userID: string, username?:string): boolean =>{

}

// デフォルトパラメータ
const isUserSignedIn2 = (userId: string, username = "NO NAME"):boolean => {

}
```

### 可変長引数関数
可変長引数 : 関数を呼び出すときに引数をいくつ渡してもOK, 安定な型ではない(any)  
可変長引数を実現するのがレストパラメータである. 引数の最後に1つだけ指定できる 
```ts
const sumPrice = (...price:number[]): number =>{

}
```

### 呼び出しシグネチャ
呼び出しシグネチャは関数がどんな関数なのかを表す型定義である. 
```ts
// アロー関数に似た記法で書いた関数シグネチャ
type LogMessage = (message: string) => void

// 完全な記法で書いた関数シグネチャ
type FullLogMessage = {
    (message:string):void
}

// 関数にLogmessageをアノテーション
const logMessage: LogMessage = (message) =>{
    console.log("ログ", message)
}
```
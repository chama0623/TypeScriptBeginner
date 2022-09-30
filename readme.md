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

## 型エイリアスで型を定義する
ここでは型エイリアス, typeについて説明する.

### オブジェクト
object型はobjectであることを伝えるだけで, つぎのようなものはエラーになる
```ts
const a: object = {
    name: "chama",
    age: "21"
}
a.name //エラー
```

そこでオブジェクトリテラル記法を用いる
```ts
let country: { // 構造を定義
    language: string
    name:string
} = { // 値を入れる
    language: "Japanese",
    name:"Japan"
}
```

オブジェクトの更新は次のように行う.
```ts
country = { // 値を入れる
    language: "English",
    name:"USA"
}
```

### 特別なプロパティを扱う
オプショナル(>)なプロパティはあってもなくても良い. またreadonlyのついたプロパティは上書きできない.
```ts
let chama: {
    age: number
    lastName: string
    readonly firstName: string
    gender?; string
} = {
    age: 28,
    lastName: "Yamada",
    firstName: "Taro"
}

chama.gender = "male"
chama.lastName = "kobayasi"
chama.FirstName = "Jiro" // エラー
```

### インデックスシグネチャ
オブジェクトが複数のプロパティを持つ可能性を示す. [key: T]: Uというふうに定義する. keyはstringもしくはnumberのみ扱える.
```ts
const capitals:{
    [countryName: string]: string
} = {
    Japan: "Tokyo",
    Korea: "Seoul"
}

capitals.China =  "Beijing"
capitals.Canada = "Ottawa"
```

### 型エイリアス
typeを用いて型に名前をつけて宣言できる. これによって同じ型を何度も定義する必要がないため再利用でき, 型に名前を付けることで変数の役割を明確化する.
```ts
type Country = {
    capital: string
    language: string
    name: string
}

const japan: Country = {
    capital: "Tokyo",
    language: "Japanese",
    name: "japan"
}

const china: Country = {
    capital: "Beijing",
    language: "Chainese",
    name: "china"
}
```

### 合併型と交差型
- 合併型(union) : 型Aと型Bのどちらかをもつ
- 交差型(intersection) : 型Aと型B両方の型をもつ

```ts
    // union, intersection
    type Knight = {
        hp: number
        sp: number
        weapon: string
        swordSkill: string
    }

    type Wizard = {
        hp: number
        mp: number
        weapon: string
        magicSkill: string
    }

    // union
    type Adventurer = Knight | Wizard
    // intersection
    type Paladin = Knight & Wizard

    // KnightよりのAdventurer
    const adventurer1:Adventurer = {
        hp:100,
        sp:30,
        weapon:"はやぶさの剣",
        swordSkill:"はやぶさ切り"
    }

    // WizardよりのAdventurer
    const adventurer2:Adventurer = {
        hp:100,
        mp:30,
        weapon:"木の杖",
        magicSkill:"メラミ"
    }

    console.log(adventurer1, adventurer2)

    const adventurer3:Paladin = {
        hp:300,
        sp:100,
        mp:70,
        weapon:"ロトの剣",
        swordSkill:"ギガスラッシュ",
        magicSkill:"メラガイアー"
    }

    console.log(adventurer3)
```

## 配列とタプル
ここでは配列やタプルの使い方について説明する.

### 配列の定義
配列の定義方法を次に示す.
```ts
// 基本的な定義方法と要素の追加方法
const colors: string[] = ["red", "blue"]
colors.push("yellow")
colors.push(123) // エラー

// 型定義方法(どちらも同じ)
const odd: number[] = [1,3,5]
const even: Array<number> = [2,4,6]

// 合併型
const ids:(string | number)[] = ["ABC", 123] // 取り出して使うときは判定が必要
ids.push("DEF")
ids.push(456)
```

### 配列の型推論
配列はアノテーションしなくても型推論される. 例と型がどうなっているのかを次に示す.
追加された値によって型推論が自動で行われていることがわかる. ただし最後に推論された型以外の型を追加しようとするとエラーになる.
```ts
const generateSomeArray = () => {
    const _someArray = [] // any[]
    _someArray.push(123) // number[]
    _someArray.push("ABC") // (string | number)[]
    return _someArray
}

const someArray = generateSomeArray()
someArray.push(true) // エラー
```

### タプル
タプルは配列の各要素の数と定義をすることができる. また可変長(レストパラメータ)も使える.
```ts
let response: [number, string] = [200, "OK"]
response = [200, "OK", "Email Params"] // エラー
response = ["400", "Bad Gateway"] // エラー

// レストパラメータ
// 最初の1つは必ず文字列, それ以降は何個でも入れられる
const girlfriends: [string, ...string[]] = ["Natuki", "Yuko", "Nozomi", "Mizore"]
```

### イミュータブルな配列
復習 : JSの配列はconstで宣言してもイミュータブルだった！  
TSではイミュータブルな配列/タプルが作れる

```ts
const command: readonly string[] = ["git add", "git commit", "git push"]
command.push("git clone") // 追加不可能
command[2] = "git pull" // 代入不可能

// 他の記述方法
const numbers: ReadonlyArray<number> = [1,2,3]
const numbers: Readonly<string[]> = ["Taro", "Jiro"]
```

## ジェネリック型とポリモーフィズム

ここではジェネリック型とポリモーフィズムについて説明する.
ジェネリック型 : 型の種類が異なるが同じデータ構造のものを共通化, 抽象化するための型  
```ts
// 型の種類が異なるが同じデータ構造の例
const stringReduce = (array: string[], initialValue:string): string => {}
const numberReduce = (array: number[], initialValue:number): number => {}
```

ジェネリック型パラメータ
- 型をパラメータ化する
- T, U, V, Wがよく用いられる

```ts
// ジェネリック型を定義
// 引数がT型の配列とT型のinitialValueで, 戻り値がTs
type Reduce<T> = {
    (array: T[], initialValue: T): T
}
// 使うときにTに型をはめる
const reduce: Reduce<string> = (array, initialValue) => {}
```

### ジェネリックの宣言方法
ジェネリック型の宣言方法には呼び出しシグネチャの記法と, ジェネリック型の割り当て範囲の2つがある.
```ts
// 完全な呼び出しシグネチャ
type GenericReduce<T> = {
    (array: T[], initialValue: T): T
}

// 完全な呼び出しシグネチャ
type GenericReduce = {
    <T>(array: T[], initialValue: T):T
    <U>(array: U[], initialValue: U):U

}

// 呼び出しシグネチャの省略記法
type GenericReduce<T> = (array: T[], initialValue:T) => {}
type GenericReduce = <T>(array: T[], initialValue:T) => {}
```

このようにジェネリック型を用いると型を抽象化して共通化できる. そして呼び出すときに具体的な値を渡すようになる. このようないろいろな形に変化できる多態性・多相性のことをポリモーフィズムという.

## オブジェクト指向
オブジェクト指向ってなんだっけ? (詳しくはAPの勉強資料見ろ)  
ざっくりいうと
- まとめる : ある機能のプロパティ(データ)とメソッド(振る舞い)をまとめる
- 隠す : 外部から参照・改変できないようにする
- たくさん作る : 同じ機能を持つクローンを量産できる

TSでオブジェクト指向の勉強しながら将棋を作るよ(src/oop)
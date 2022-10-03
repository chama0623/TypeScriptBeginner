// interfaceの例
interface Bread {
  calories: number
}

interface Bread {
  type: string
}

const francePan: Bread = {
  calories: 350,
  type: 'hard',
}

// 同じものを型エイリアスで表現
// 型エイリアスでは複数同じ型を定義できないからunionで合体させる
type MaboDohu = {
  calories: number
  spicyLevel: number
}

type Rice = {
  calories: number
  gram: number
}

type MaboDon = MaboDohu & Rice // union

const mabodon: MaboDon = {
  calories: 500,
  spicyLevel: 10,
  gram: 350,
}

// interfaceの継承
interface Book {
  page: number
  title: string
}

interface Magazine extends Book {
  cycle: 'daily' | 'weekly' | 'monthly' | 'yearly'
}

const jump: Magazine = {
  cycle: 'weekly',
  page: 300,
  title: '週刊少年ジャンプ',
}

// Type Aliasを継承してみる
type BookType = {
  page: number
  title: string
}

interface Handbook extends BookType {
  theme: string
}

const cotirp: Handbook = {
  page: 120,
  title: 'ことりっぷ',
  theme: '旅行',
}

// implementsを用いてclassに型を定義する
class Comic implements Book {
  page: number
  title: string

  constructor(page: number, title: string, private publishYear: string) {
    this.page = page
    this.title = title
  }

  getPublishYear() {
    return this.title + 'が発売されたのは' + this.publishYear + '年です'
  }
}

const favComic = new Comic(200, 'CCさくら', '1995')
console.log(favComic.getPublishYear())

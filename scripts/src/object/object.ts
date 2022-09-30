export default function objectSample() {
  /* これはエラーになる
    const a:object = {
        name:"chama",
        age:11
    }

    console.log(a.name)
*/

  let country: {
    // 構造を定義
    language: string
    name: string
  } = {
    // 値を入れる
    language: 'Japanese',
    name: 'Japan',
  }

  console.log(country.language, country.name)

  // 値の更新
  country = {
    // 値を入れる
    language: 'English',
    name: 'USA',
  }

  console.log(country.language, country.name)

  // 特別なプロパティ
  const chama: {
    age: number
    lastName: string
    readonly firstName: string // 書きこみ不可
    gender?: string // オプショナル
  } = {
    age: 28,
    lastName: 'Yamada',
    firstName: 'Taro',
  }

  chama.gender = 'male'
  chama.lastName = 'kobayasi'
  //chama.FirstName = "Jiro" // エラー

  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  }

  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'

  console.log(capitals)

  // 型エイリアス
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'japan',
  }

  const china: Country = {
    capital: 'Beijing',
    language: 'Chainese',
    name: 'china',
  }

  console.log(japan)
  console.log(china)

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
  const adventurer1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: 'はやぶさの剣',
    swordSkill: 'はやぶさ切り',
  }

  // WizardよりのAdventurer
  const adventurer2: Adventurer = {
    hp: 100,
    mp: 30,
    weapon: '木の杖',
    magicSkill: 'メラミ',
  }

  console.log(adventurer1, adventurer2)

  const adventurer3: Paladin = {
    hp: 300,
    sp: 100,
    mp: 70,
    weapon: 'ロトの剣',
    swordSkill: 'ギガスラッシュ',
    magicSkill: 'メラガイアー',
  }

  console.log(adventurer3)
}

export default function objectSample() {
  const colors: string[] = ['red', 'blue']
  console.log(colors)
  colors.push('yellow')
  console.log(colors)
  // colors.push(123) // エラー

  // 配列の型推論
  const generateSomeArray = () => {
    const _someArray = [] // any[]
    _someArray.push(123) // number[]
    _someArray.push('ABC') // (string | number)[]
    return _someArray
  }

  const someArray = generateSomeArray()
  console.log(someArray)

  const command: readonly string[] = ['git add', 'git commit', 'git push']
  //command.push("git clone") // 追加不可能
  //command[2] = "git pull" // 代入不可能
}

export default function notExistSample() {
  const name = null
  console.log(typeof name, name)

  // null判定
  if (!name) {
    // nameがnullなら
    console.log('I am ???')
  } else {
    // nameがnullでなければ
    console.log('I am', name)
  }

  const age = undefined
  console.log(typeof age, age)

  // undefined判定
  if (!age) {
    // ageがundefinedなら
    console.log('年齢不詳')
  } else {
    // nameがundefinedでなければ
    console.log('年齢 : ', age)
  }
}

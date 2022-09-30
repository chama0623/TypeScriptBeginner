export default function tupleSample() {
  const response: [number, string] = [200, 'OK']
  //response = [200, "OK","Email header"] // エラー
  const girlfriend: [string, ...string[]] = ['Natuki', 'Yuko', 'Nozomi', 'Mizore']
  console.log(response)
  console.log(girlfriend)
}

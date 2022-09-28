export default function unknownSample() {
  const name: unknown = 10
  console.log(typeof name, name)

  const isFoo = name === 'fooo'
  console.log(typeof isFoo, isFoo)
}

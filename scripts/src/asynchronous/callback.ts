export default function callbackSample() {
  const url = 'https://api.github.com/users/yudai0731'

  const fetchProfile = () => {
    return fetch(url)
      .then((res) => {
        res
          .json()
          .then((json) => {
            console.log('log1', json) // githubAPIの結果が表示される
            return json
          })
          .catch((error) => {
            console.log(error)
          })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const profile = fetchProfile()
  console.log('log2', profile) // Promiseが表示される
}

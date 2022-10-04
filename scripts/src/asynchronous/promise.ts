export default function promiseSample() {
  const url = 'https://api.github.com/users/yudai0731'

  type Profile = {
    login: string
    id: number
  }

  type FetchProfile = () => Promise<Profile | null>

  const fetchProfile: FetchProfile = () => {
    return new Promise((resolv, reject) => {
      return fetch(url)
        .then((res) => {
          res
            .json()
            .then((json: Profile) => {
              console.log('log1', json) // githubAPIの結果が表示される
              resolv(json)
            })
            .catch((error) => {
              console.log(error)
              reject(null)
            })
        })
        .catch((error) => {
          console.log(error)
          reject(null)
        })
    })
  }

  fetchProfile() // Promise型で帰ってくるのでthenメソッドが使える
    .then((profile: Profile | null) => {
      if (profile) {
        console.log('log2', profile)
      }
    })
}

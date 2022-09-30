// オプションパラメータの例
export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'ABC') {
    console.log('User is signed in. Username is', username)
    return true
  } else {
    console.log('User is not signed in.')
    return false
  }
}

// デフォルトパラメータの例
export const isUserSignedIn2 = (userId: string, username = 'chama'): boolean => {
  if (userId === 'ABC') {
    console.log('User is signed in. Username is', username)
    return true
  } else {
    console.log('User is not signed in.')
    return false
  }
}

// レストパラメータの例
export const sumPrice = (...price: number[]): number => {
  // priceの要素を1つずつ取り出して足し合わせる
  return price.reduce((prevTotal, price) => {
    return prevTotal + price
  }, 0) // 初期値
}

// 呼び出しシグネチャ
// アロー関数に似た記法で書いた関数シグネチャ
type LogMessage = (message: string) => void

// 関数にLogmessageをアノテーション
export const logMessage: LogMessage = (message) => {
  console.log('ログ', message)
}

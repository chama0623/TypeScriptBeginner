// アロー関数
export const logMessage = (message: string): void => {
  console.log('ログ:', message)
}

// 名前付き関数
export function logMessage2(message: string): void {
  console.log('ログ2:', message)
}

// 関数式
export const logMessage3 = function (message: string): void {
  console.log('ログ3:', message)
}

// 省略アロー関数
export const logMessage4 = (message: string): void => console.log('ログ4:', message)

// 戻り値neverのテスト
export const alwaysThrowError = (message: string): never => {
  throw new Error(message)
}

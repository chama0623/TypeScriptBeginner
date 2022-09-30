// import { primitiveSample, notExistSample, anySample, unknownSample } from './basic'
//import { logMessage, logMessage2, logMessage3, logMessage4,alwaysThrowError } from "./function/basic"
import { isUserSignedIn, isUserSignedIn2, sumPrice, logMessage } from './function/params'

/* primitiveSample()
notExistSample()
anySample()
unknownSample()
logMessage("ログだよ～")
logMessage2("ログだよ～")
logMessage3("ログだよ～")
logMessage4("ログだよ～")
alwaysThrowError("エラーだよ～")
*/

isUserSignedIn('ABC', 'chama')
isUserSignedIn('DEF') // 第二引数はオプショナルなのでエラーにならない

isUserSignedIn2('ABC', 'natuki')
isUserSignedIn2('ABC') // デフォルトパラメータが表示される
console.log(sumPrice(100, 200, 300))
logMessage('ログだよ～')

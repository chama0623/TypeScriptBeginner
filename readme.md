# TypeScriptのお勉強メモ

url : https://www.youtube.com/watch?v=kd8VH10jXwc&list=PLX8Rsrpnn3IW0REXnTWQp79mxCvHkIrad  

## コンパイルと自動リロード
TYpeScriptのファイルは拡張子が.ts形式である. これをコンパイルするコマンドを次に示す.
```
tsc ファイル名.ts
```
コンパイルが完了するとjsファイルが生成される. これをnode.jsで実行する.
```
node ファイル名.js
```

さらに環境設定を行うことで自動リロードを行うことができる. 自動リロードは作業ディレクトリで次のnpmコマンドを実行してhttp://localhost:8080にアクセスすればよい. ファイルに更新が生じたら自動で再コンパイルしてリロードが行われる.
```
npm start
```

## TypeScriptって何?
TypeScript(TS)はjSに型システムが組み合わさったもの. TSはtsファイルをコンパイルしてjsファイルを生成し, これをweb上で取り扱っている.
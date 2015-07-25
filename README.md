# BackStopJS Starter Kit

[BackStopJS](https://github.com/garris/BackstopJS)のスターターキット

## Usage

ZIPファイルを[ダウンロード](https://github.com/frontainer/backstop-starter-kit/archive/master.zip)して展開

### 必要な環境を構築

```shell
npm run ready
```

### テストを開始

```
npm run test
```

### 比較元キャプチャの更新

```
npm run ref
```

### バックアップしてあったrefファイルを復元

```
npm run restore
```

### 新しいコンフィグファイルの作成

```
npm run config
```

## チームで使う場合

1. プロジェクトが始まったときに`npm run ref`してbackupファイルを作る
2. backupファイルをgitで管理するようにコミットする。
3. リリース前に`npm run restore`してから`npm run test`してレイアウトが崩れていないかチェックする。
4. 特に問題なければ`npm run ref`して新しいbackupファイルを作る。
5. backupファイルをコミット
6. 3番以降繰り返し
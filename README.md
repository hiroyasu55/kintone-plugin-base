# kintone-plugin-base
kintoneプラグイン開発用ベース

## Description
kintoneプラグインを作成するための雛形です。

## Requirement
* Node.js
* npm (>5.2.0)

## How to Use

### Download
このリポジトリをダウンロードし、フォルダ名をプラグイン名称に変更します。

```
$ git clone git://github.com/logicheart/kintone-plugin-base.git
$ mv kintone-plugin-base my-plugin
```

### Directory
```
kintone-plugin-base (my-plugin)
├── src
│   ├── manifest.json マニフェストファイル
│   ├── js
│   │   ├── desktop.js PCアプリ用JavaScriptファイル
│   │   ├── mobile.js スマホアプリ用JavaScriptファイル
│   │   └── config.js 設定画面用JavaScriptファイル
│   ├── sass
│   │   ├── desktop.scss PCアプリ用sassファイル
│   │   └── config.scss 設定画面用sassファイル
│   ├── css
│   │   └── 51-modern-default.css
│   ├── html
│   │   └── config.html 設定画面用HTMLファイル
│   └── image
│       └── icon.png プラグインアイコン画像
├── dist （ビルド後に生成）
│   └── my-plugin.zip （ビルド後に生成）
└── README.md
```

### Install libraries
必要なライブラリをインストールします。

```
$ cd my-plugin
$ npm install
```

### Customize
作成するプラグインの情報に応じてmanifest.jsonファイルを編集します。

```src/manifest.json
{
  :
  "name": {
    "en": "kintone demo plugin",
    "ja": "kintoneデモプラグイン"
  },
  "description": {
    "en": "Demo plugin, using kinton-plugin-base",
    "ja": "kinton-plugin-baseを利用したデモプラグイン"
  },
  "icon": "image/icon.png",
  "homepage_url": {
    "ja": "https:〜"
  },
  ：
}
```

* 参考: kintone プラグイン開発手順 https://developer.cybozu.io/hc/ja/articles/203455680-kintone-%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3%E9%96%8B%E7%99%BA%E6%89%8B%E9%A0%86

### Build
srcディレクトリ以下のファイルを編集した後、gulpを実行してビルドします。

```
$ gulp
```

プラグインファイルとして　dist/my-plugin.zip が出力されます。

* ソースの変更を監視しプラグインファイルを自動生成する場合

```
$ gulp　ｗａｔｃｈ
```

## Reference
* kintone プラグイン開発の準備 https://developer.cybozu.io/hc/ja/articles/203283794
* kintone プラグイン開発手順 https://developer.cybozu.io/hc/ja/articles/203455680-kintone-%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3%E9%96%8B%E7%99%BA%E6%89%8B%E9%A0%86


## Licence

MIT License

## Copyright

Copyright(c) LogicHeart

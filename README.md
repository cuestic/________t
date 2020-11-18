# ________t

```
===
apt update
apt install build-essential -y
apt install python-pip
pip install shadowsocks

===
apt update
apt install libssl-dev libsodium-dev -y
curl https://sh.rustup.rs -sSf | sh
source $HOME/.cargo/env
cargo install shadowsocks-rust

===
apt update
apt install zsh -y
curl -L https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh | sh
chsh -s /bin/zsh
apt install nginx -y

===
sudo ufw status
sudo ufw enable
sudo ufw deny 4321
sudo ufw allow 4567
sudo ufw allow 'OpenSSH'
sudo ufw allow 'Nginx Full'

===
adduser matttrix1999
usermod -a -G sudo matttrix1999
passwd matttrix1999

sudo ssserver -p {{}} -k {{}} -m rc4-md5 --user nobody -d start
sudo ssserver -s {{}} -k {{}} -m aes-256-gcm -d
```

```
GIT_TRACE=1 GIT_CURL_VERBOSE=1
```

```
{
    "editor.fontSize": 16,
    "workbench.enableExperiments": false,
    "explorer.decorations.badges": false,
    "extensions.autoUpdate": false,
    "workbench.startupEditor": "newUntitledFile",
    "window.zoomLevel": 2,
    "editor.tabSize": 2,
    "dart.checkForSdkUpdates": false,
    "dart.flutterCreateAndroidLanguage": "kotlin",
    "dart.flutterCreateIOSLanguage": "swift",
    "dart.flutterHotReloadOnSave": false,
    "dart.promptToGetPackages": false,
    "dart.reportAnalyzerErrors": false,
    "dart.runPubGetOnPubspecChanges": false,
    "editor.fontFamily": "'Fira Code', Menlo, Monaco, 'Courier New', monospace",
    "files.trimTrailingWhitespace": true,
    "files.insertFinalNewline": true,
    "files.trimFinalNewlines": true,
    "editor.renderWhitespace": "boundary",
    "editor.wordWrap": "on",
    "workbench.colorTheme": "Abyss",
    "workbench.iconTheme": null,

}
```

```
@menu-item-vertical-margin: 4px;
@menu-item-boundary-margin: 8px;

```
```
HOMEBREW_NO_AUTO_UPDATE
privoxy
/usr/local/sbin/privoxy /usr/local/etc/privoxy/config
export http_proxy='http://localhost:8118'
export https_proxy='http://localhost:8118'
https://test.james.ac.cn/api/ubuntu
export http_proxy='http://192.168.31.7:8118'
export https_proxy='http://192.168.31.7:8118'
gradle
postgresql
pygments
starship
```

```
@menu-dark-bg: @layout-header-background;
@menu-dark-submenu-bg: #000c17;
@menu-dark-item-hover-bg: transparent;
@menu-dark-item-active-bg: @primary-color;
@menu-dark-color: @text-color-secondary-dark;
@menu-dark-arrow-color: #fff;
```

```
@layout-header-background: #001529;
@layout-sider-background: @layout-header-background;
```
https://cloud-cdn-digitalocean-com.global.ssl.fastly.net/aurora/assets/images/cloud-logo--white-ddc0eb211b605dc641fef57ca3526f77.svg
```
MANAGE
Apps
NEW
Droplets
Kubernetes
Volumes
Databases
Spaces
Container Registry
Images
Networking
Monitoring
DISCOVER
Marketplace
ACCOUNT
Settings
Billing
API
```

```
export default {
  cssPreprocessOptions: {
    less: {
      javascriptEnabled: true,
      modifyVars: {
        '@blue-6': oc.blue[6],
        '@cyan-6': oc.cyan[6],
        '@green-6': oc.green[6],
        '@lime-6': oc.lime[6],
        '@pink-6': oc.pink[6],
        '@red-6': oc.red[6],
        '@orange-6': oc.orange[6],
        '@yellow-6': oc.yellow[6],

        'font-size-sm': '14px',
        'font-size-base': '16px',
        'btn-font-size-sm': '14px',

        'btn-height-sm': '32px',
        'btn-height-base': '40px',
        '@btn-height-lg': '48px',

        '@radio-size': '18px',
        '@checkbox-size': '18px',

        'input-height-sm': '32px',
        'input-height-base': '40px',
        'input-height-lg': '48px',

        'input-padding-vertical-sm': '4px',
        'input-padding-vertical-base': '8px',
        'input-padding-vertical-lg': '12px',

        'input-padding-horizontal-lg': '12px',

        '@pagination-item-size-sm': '32px',
        '@pagination-item-size': '40px',

        '@dropdown-line-height': '32px',
        '@select-dropdown-height': '46px',
        '@dropdown-vertical-padding': '7px',

        '@badge-status-size': '11px',
      }
    }
  }
}
```

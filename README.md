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
HOMEBREW_NO_AUTO_UPDATE
privoxy
/usr/local/sbin/privoxy /usr/local/etc/privoxy/config
export http_proxy='http://localhost:8118'
export https_proxy='http://localhost:8118'
https://test.james.ac.cn/api/ubuntu
export http_proxy='http://192.168.31.7:8118'
export https_proxy='http://192.168.31.7:8118'
```

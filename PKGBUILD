# Maintainer: Guillaume Friloux <guillaume@friloux.me>
# Co-Maintainer: Maxime "pep" Buquet <archlinux@bouah.net>

_pkgbase='movim'
pkgname=movim-git
pkgver=r5307.5705ffc9
pkgrel=4
pkgdesc="Movim is a decentralized social network, written in PHP and HTML5 and based on the XMPP standard protocol."
arch=('any')
url='https://movim.eu'
license=('AGPL3')
provides=('movim')
conflicts=('movim')
depends=('php-gd' 'php-imagick')
optdepends=('postgresql: to use the postgresql database backend'
            'php-pgsql: php bindings for postgresql'
            'mariadb: to use the mysql database backend'
            'nginx: reverse proxy'
            'apache: reverse proxy'
            'php-fpm: PHP FactCGI process manager')
makedepends=('git' 'composer')
source=("$_pkgbase::git+https://github.com/movim/movim"
        movim.env
        movim.service)
install=movim.install
sha256sums=('SKIP'
            '5dfff91dd4a54f3d3713530e204370a96d37898b670a61123d8cad42f92da306'
            'd90b407dc62540980e001c9d65e4e70a74f72f2bd8503855efb4828ee2e33fa4')
backup=("etc/webapps/$_pkgbase/db.inc.php"
        "etc/default/movim")

pkgver() {
  cd $srcdir/$_pkgbase
  echo "r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

build() {
  cd $srcdir/$_pkgbase
  XDG_CACHE_HOME="$srcdir/cache" composer install \
    --no-interaction --no-dev --no-suggest
}

package() {
  cd "$srcdir/$_pkgbase"

  install -m755 -d "$pkgdir/usr/share/webapps/$_pkgbase"

  # Cache
  install -m750 -d "$pkgdir/var/cache/webapps/$_pkgbase/cache"\
    "$pkgdir/var/cache/webapps/$_pkgbase/users"
  chown -R root:http "$pkgdir/var/cache/webapps/$_pkgbase"
  chmod -R u+rwX,g+rwX,o-rwx "$pkgdir/var/cache/webapps/$_pkgbase"
  ln -s "/var/cache/webapps/$_pkgbase/cache" "$pkgdir/usr/share/webapps/$_pkgbase/cache"
  ln -s "/var/cache/webapps/$_pkgbase/users" "$pkgdir/usr/share/webapps/$_pkgbase/users"

  cp -r app lib locales src themes vendor "$pkgdir/usr/share/webapps/$_pkgbase"
  install -Dm644 VERSION CHANGELOG.md INSTALL.md README.md index.php \
    linker.php manifest.webapp "$pkgdir/usr/share/webapps/$_pkgbase"
  install -Dm755 daemon.php mud.php "$pkgdir/usr/share/webapps/$_pkgbase"

  # Configuration file
  install -m750 -d "$pkgdir/etc/webapps/$_pkgbase"
  install -Dm750 config/db.example.inc.php "$pkgdir/etc/webapps/$_pkgbase/db.inc.php"
  chown -R root:http "$pkgdir/etc/webapps/$_pkgbase"
  chmod -R u+rwX,g+rwX,o-rwx "$pkgdir/etc/webapps/$_pkgbase"
  ln -s "/etc/webapps/$_pkgbase" "$pkgdir/usr/share/webapps/$_pkgbase/config"

  # Log files
  install -m770 -d "$pkgdir/var/log/webapps/$_pkgbase"
  chown -R root:http "$pkgdir/var/log/webapps/$_pkgbase"
  ln -s "/var/log/webapps/$_pkgbase" "$pkgdir/usr/share/webapps/$_pkgbase/log"

  # Systemd unit file
  install -m755 -d "$pkgdir/etc/default"
  install -g http -Dm640 "$srcdir/movim.env" "$pkgdir/etc/default/$_pkgbase"
  install -Dm644 "$srcdir/movim.service" "$pkgdir/usr/lib/systemd/system/movim.service"

  # Easy access to mud.php
  install -d "$pkgdir/usr/bin"
  ln -s "/usr/share/webapps/$_pkgbase/mud.php" "$pkgdir/usr/bin/mud"
}

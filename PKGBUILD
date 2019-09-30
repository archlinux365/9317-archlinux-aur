# Maintainer: Florian Bruhin (The Compiler) <archlinux.org@the-compiler.org>
# vim: ft=sh

pkgname=baikal
pkgver=0.6.0
pkgrel=2
pkgdesc='Lightweight CalDAV+CardDAV server'
url='http://sabre.io/baikal/'
arch=('any')
license=('GPL')
depends=('php')
optdepends=('sqlite: Database' 'mariadb: Alternate database' 'php-sqlite: To use the sqlite backend')
source=("https://github.com/fruux/Baikal/releases/download/$pkgver/baikal-$pkgver.zip"
        'baikal.install'
        'Fixed-getcontenttype-being-null.patch::https://github.com/sabre-io/dav/commit/7badab41ca48b2705426907d533aca374ba6401f.patch')
sha1sums=('47398b00cad4330bfac9df8abc03df896e2d206f'
          'deb948e61c3cd8d6ad560321f78c0b288f7a6210'
          '955a7957e013b6f643d53b5d6c648c52d42550b9')
options=('!strip')
install=baikal.install

prepare() {
  cd "${srcdir}/baikal/vendor/sabre/dav"

  # fix https://github.com/sabre-io/Baikal/issues/819 / https://github.com/sabre-io/dav/issues/1178
  patch -p1 -i "$srcdir/Fixed-getcontenttype-being-null.patch"
}

package() {
  cd "${srcdir}/baikal"

  install -dm 755 "$pkgdir"/usr/share/{webapps,doc}"/$pkgname"
  install -dm 700 -o http -g http "$pkgdir/var/lib/$pkgname"
  cp -R Core html vendor "$pkgdir/usr/share/webapps/$pkgname"
  install -Dm644 CHANGELOG.md README.md "$pkgdir/usr/share/doc/$pkgname"
  ln -s "/var/lib/$pkgname" "$pkgdir/usr/share/webapps/$pkgname/Specific"
}

# vim:set ts=2 sw=2 et:

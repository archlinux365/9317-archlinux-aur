#Maintainer: KlarkKable <KlarkKable at protonmail dot com>
pkgname=dart-sdk-dev
pkgver=2.15.0_257.0.dev
pkgrel=1
pkgdesc="The official Dart sdk from dart-lang project (Development branch)"
arch=('x86_64')
url="https://www.dartlang.org/tools/sdk/archive"
license=('custom')
depends=('unzip')
conflicts=('dart')
provides=('dart=$pkgver')
source=(dartsdk-linux-x64-release-${pkgver}.zip::"https://storage.googleapis.com/dart-archive/channels/dev/release/${pkgver//_/-}/sdk/dartsdk-linux-x64-release.zip")
sha256sums=('ce17d4b26a75748ab8208fb54eb05c3a1fd8b3a12ced4bcf12a1e8a81d5362b6')

package() {
  # Uncompressed name is "dart-sdk" not "dart-sdk-dev"
  cd $srcdir/dart-sdk

  # Install Application
  install -d $pkgdir/{opt/$pkgname,usr/bin}
  cp -a . $pkgdir/opt/$pkgname
  for f in "$pkgdir"/opt/$pkgname/bin/*; do
    ln -s /opt/$pkgname/bin/${f##*/} "$pkgdir"/usr/bin/
  done

  chmod -R ugo+rX $pkgdir/opt
}

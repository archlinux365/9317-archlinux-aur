# Maintainer: Peter Cai <peter at typeblog dot net>
# Thanks: Kevin MacMartin <prurigro at gmail dot com>

pkgname=shattered-pixel-dungeon
_pkgname=$pkgname-gdx
pkgver=0.6.3a
_srcdir=$_pkgname-$pkgver
pkgrel=2
pkgdesc='Shattered fork of the popular rogue-like game'
url='http://shatteredpixel.tumblr.com'
license=('GPL3')
depends=('java-runtime' 'bash' 'xorg-xrandr')
makedepends=('git' 'java-environment' 'jdk8-openjdk')
conflicts=('shattered-pixel-dungeon-git')
arch=('any')
source=(
  "https://github.com/00-Evan/shattered-pixel-dungeon-gdx/archive/v$pkgver.tar.gz"
  "$pkgname.sh"
  "$pkgname.desktop"
)
sha512sums=('fb4be8c9a5bfa96eea580c78a198140385caf9f6ad0f2914470c5a24dee29f4c3b5b90e00605f90414d35edfbfc08600247af063cdc5e1c8f03a053c5671a0f4'
            '88814d1f33eea6bd5656d3ca731ed5a6cfce10ecdae24012252c5b32c4b194ec75fb0e22cac70897802679086c6a32e210d52933ec45ca94ff350ac4ad7c266e'
            '204a7bcedbbc14bdad6586e4b759b326191a7fd2c344dadc7032495d4caa5fe32edac4118d7294229a6fe24f6684416fff37e260bbc9dde9e50846a03ba77db8')

build() {
  cd $_srcdir
  unset _JAVA_OPTIONS
  # Force the system to build the package using JDK8
  export PATH=/usr/lib/jvm/java-8-openjdk/jre/bin/:$PATH
  GRADLE_USER_HOME="$srcdir" ./gradlew desktop:dist
}

package() {
  install -Dm755 $pkgname.sh "$pkgdir/usr/bin/$pkgname"
  install -Dm644 $pkgname.desktop "$pkgdir/usr/share/applications/$pkgname.desktop"
  install -Dm644 $_srcdir/android/res/drawable-xxxhdpi/ic_launcher.png "$pkgdir/usr/share/pixmaps/$pkgname.png"
  install -Dm644 $_srcdir/desktop/build/libs/desktop-*.jar "$pkgdir/usr/share/$pkgname/$pkgname.jar"
}

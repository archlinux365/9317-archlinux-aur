# Maintainer: Kevin MacMartin <prurigro at gmail dot com>
# Thanks: Peter Cai <peter at typeblog dot net>
# Thanks: unknown78 <Schmusekater78 at hotmail dot com>
# Thanks: Moxon <sascha at meta-x dot de>

_pkgname=shattered-pixel-dungeon
pkgname=$_pkgname-git
pkgver=5876v1.4.0
pkgrel=1
pkgdesc='Shattered fork of the popular rogue-like game'
url='https://shatteredpixel.com'
license=('GPL3')
depends=('java-runtime' 'bash')
makedepends=('git' 'java-environment')
arch=('any')

source=(
  "$_pkgname::git+https://github.com/00-Evan/shattered-pixel-dungeon.git"
  "$_pkgname.sh"
  "$_pkgname.desktop"
  'fix-build.patch'
)

sha512sums=(
  'SKIP'
  '88814d1f33eea6bd5656d3ca731ed5a6cfce10ecdae24012252c5b32c4b194ec75fb0e22cac70897802679086c6a32e210d52933ec45ca94ff350ac4ad7c266e'
  '204a7bcedbbc14bdad6586e4b759b326191a7fd2c344dadc7032495d4caa5fe32edac4118d7294229a6fe24f6684416fff37e260bbc9dde9e50846a03ba77db8'
  '2abddbb6e8e46045c406e3728cf0a616db279d807a129b860d86e692be97943052e0dffb9e30b051c0a99db9a13629913f411f887fe1a02b04fa9b2bf54d3d26'
)

pkgver() {
  cd $_pkgname
  printf '%s' "$(git rev-list --count HEAD)v$(grep 'appVersionName =' build.gradle | sed "s|^[^']*'||;s|'.*||")"
}

prepare() {
  cd "$_pkgname"

  # Make the gradlew script executable
  chmod 755 gradlew

  # Fix the build
  # patch -p1 < ../fix-build.patch
}

build() {
  cd $_pkgname
  unset _JAVA_OPTIONS
  GRADLE_USER_HOME="$srcdir" ./gradlew desktop:release
}

package() {
  install -Dm755 $_pkgname.sh "$pkgdir/usr/bin/$_pkgname"
  install -Dm644 $_pkgname.desktop "$pkgdir/usr/share/applications/$_pkgname.desktop"
  install -Dm644 $_pkgname/desktop/src/main/assets/icons/icon_256.png "$pkgdir/usr/share/pixmaps/$_pkgname.png"
  install -Dm644 $_pkgname/desktop/build/libs/desktop-*.jar "$pkgdir/usr/share/$_pkgname/$_pkgname.jar"
}

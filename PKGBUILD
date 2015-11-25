# Maintainer: Chris Cromer <chris@cromer.cl>

pkgbase=droidquest
pkgname=('droidquest')
pkgver=2.7.master.0.ece5292
pkgrel=1
pkgdesc='A Java recreation of the classic game Robot Odyssey'
arch=('any')
url='https://github.com/cromerc/DroidQuest'
license=('GPL3')
depends=('java-environment')
makedepends=('gcc' 'maven')
source=('droidquest::git+https://github.com/cromerc/DroidQuest.git')
sha256sums=('SKIP')

pkgver() {
  cd droidquest

  echo "2.7.master.$(git rev-list --count master..HEAD).$(git rev-parse --short HEAD)"
}

build() {
  cd droidquest
  make
}

package() {
  cd droidquest
  mkdir -p "$pkgdir/usr/bin"
  mkdir -p "$pkgdir/usr/share/pixmaps"
  mkdir -p "$pkgdir/usr/share/applications"
  mkdir -p "$pkgdir/usr/share/DroidQuest/chips"
  cp -dR "src/main/resources/chips" "$pkgdir/usr/share/DroidQuest"
  cp "target/dq-2.7.jar" "$pkgdir/usr/share/DroidQuest/dq-2.7.jar"
  cp "DroidQuest" "$pkgdir/usr/bin/DroidQuest"
  cp "DroidQuest.png" "$pkgdir/usr/share/pixmaps/DroidQuest.png"
  cp "DroidQuest.desktop" "$pkgdir/usr/share/applications/DroidQuest.desktop"
}

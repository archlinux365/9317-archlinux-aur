# Maintainer: Felix M. Cobos <felix.cobos@gmail.com>

pkgname=intellij-jdk
_major=8
_minor=152
_build=837.5
pkgver=${_major}u${_minor}b${_build}
pkgrel=1
pkgdesc="OpenJDK Java 8 development kit with some fixes and enhancements by JetBrains"
arch=('x86_64')
url="https://bintray.com/jetbrains/intellij-jdk"
license=('GPL2')
depends=( 'java-runtime-common'          'ca-certificates-java'              'java-environment-common' )
provides=("java-runtime=$_major"         "java-runtime-headless=$_major"     "java-environment=$_major"
          "java-runtime-openjdk=$_major" "java-runtime-headless-jre=$_major" "java-environment-openjdk=$_major")
_zipname="jbsdk${pkgver}_linux_x64.tar.gz"
source=("https://dl.bintray.com/jetbrains/intellij-jdk/${_zipname}")
sha256sums=('14a10de7dad926461093dbd2cd01e08183c3d8c5ac65a7b8c85b6a70b7e8c222')

package() {
	rm "$srcdir/$_zipname"
	find "$srcdir" -exec chmod g+r,o+r {} +
	mkdir -p "$pkgdir/usr/lib/jvm"
	cp -a "$srcdir" "$pkgdir/usr/lib/jvm/$pkgname"
	ln -sf /etc/ssl/certs/java/cacerts "$pkgdir/usr/lib/jvm/$pkgname/jre/lib/security/cacerts"
}


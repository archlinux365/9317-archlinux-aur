# Maintainer: Christian Krause ("wookietreiber") <christian.krause@mailbox.org>

pkgname=scalafmt
pkgver=0.5.3
pkgrel=1
pkgdesc="code formatter for the Scala programming language"
arch=(any)
url="https://olafurpg.github.io/scalafmt/"
license=('Apache')
depends=('java-environment' 'bash')

source=("$pkgname-$pkgver.tar.gz::https://github.com/olafurpg/scalafmt/releases/download/v$pkgver/scalafmt.tar.gz"
        scalafmt.sh)

package() {
  install -Dm644 $srcdir/cli/target/scala-2.11/scalafmt.jar $pkgdir/usr/share/java/scalafmt/scalafmt.jar
  install -Dm755 $srcdir/scalafmt.sh                        $pkgdir/usr/bin/scalafmt
}

md5sums=('3bc54b7a408ef324c67cec81f555ad2e'
         '85c5625e53067977576925c9dfc0c553')

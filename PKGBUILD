# Maintainer: Zhanibek Adilbekov <zhanibek.adilbekov@pm.me>
pkgname=cypher-shell
pkgver=1.1.12
pkgrel=1
pkgdesc="A command line shell where you can execute Cypher against an instance of Neo4j"
arch=('any')
url="https://github.com/neo4j/cypher-shell"
license=('GPL3')
depends=('java-runtime>=8')
source=(
	"$pkgname-$pkgver.zip::https://github.com/neo4j/cypher-shell/releases/download/$pkgver/cypher-shell.zip")
md5sums=('476c36f6e7c9762cd0dd3d4f8b8d313d')

package() {
	mkdir -p $pkgdir/usr/share/$pkgname
	install -Dm755 $srcdir/$pkgname/cypher-shell $pkgdir/usr/share/$pkgname/cypher-shell
	install -Dm755 $srcdir/$pkgname/cypher-shell.bat $pkgdir/usr/share/$pkgname/cypher-shell.bat
	install -Dm644 $srcdir/$pkgname/cypher-shell.jar $pkgdir/usr/share/$pkgname/cypher-shell.jar
	install -dm755 $pkgdir/usr/bin
	ln -sf /usr/share/$pkgname/cypher-shell $pkgdir/usr/bin/cypher-shell
}

# Maintainer: Jonathan Duck <duckbrain30@gmail.com>
pkgname=typora
pkgver=0.9.29
pkgrel=1
pkgdesc="Typora will give you a seamless experience as both a reader and a writer."
arch=('x86_64')
filename="${pkgname}_${pkgver}_amd64.deb"
license=('custom:"Copyright (c) 2014 GitHub Inc."')
url="https://typora.io/"
depends=('gconf' 'libxss')
source=("https://typora.io/./linux/$filename")
md5sums=('3f15aaaeadb8680e1362113333e94de3')

package() {
	bsdtar -xf data.tar.xz -C "$pkgdir/"
	rm -rf "$pkgdir"/usr/share/lintian/
	find "$pkgdir" -type d -exec chmod 755 {} \;
}

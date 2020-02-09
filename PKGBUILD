# Maintainer: Jake <aur@ja-ke.tech>
# Co-Maintainer: Rein Fernhout <public@reinfernhout.xyz>
# Contributor: Youngbin Han <sukso96100@gmail.com>
# Contributor: Andrew Kluger <evilgnome@gmail.com>

pkgname=micro-git
pkgver=v2.0.0.rc3.63046ae9
pkgrel=1
pkgdesc="A modern and intuitive terminal-based text editor"
arch=('x86_64' 'i686' 'armv6h' 'armv7h' 'aarch64')
url="https://github.com/zyedidia/micro"
license=('MIT')
makedepends=('go' 'git')
optdepends=('xclip: Required for copying/pasting text')
conflicts=('micro-bin' 'micro' 'micro-nightly-bin')
provides=('micro')
source=("${pkgname}"::"git+https://github.com/zyedidia/micro.git")
md5sums=(SKIP)

pkgver() {
	cd "${srcdir}/${pkgname}"
	echo "$(git tag | sort -V | tail -1 | sed s/-/./).$(git rev-parse --short HEAD)"
}

build(){
 cd "${srcdir}/${pkgname}"

 make
}

package(){

 install -Dm755 $srcdir/$pkgname/micro "$pkgdir/usr/bin/micro"
 install -Dm644 $srcdir/$pkgname/assets/packaging/micro.1 "$pkgdir/usr/share/man/man1/micro.1"
 install -Dm644 $srcdir/$pkgname/LICENSE "$pkgdir/usr/share/licenses/micro/LICENSE"

}

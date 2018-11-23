# Maintainer: vimacs <https://vimacs.lcpu.club>

pkgname=rust-mrustc
pkgver=1.19.0
pkgrel=2
pkgdesc='Rust built with mrustc'
arch=('x86_64')
url='https://github.com/thepowersgang/mrustc'
license=('MIT')
depends=('mrustc-git')
makedepends=()
provides=("rust=$pkgver")
conflicts=()
source=("https://static.rust-lang.org/dist/rustc-$pkgver-src.tar.gz" 'openssl.patch')
sha256sums=('15231f5053fb72ad82be91f5abfd6aa60cb7898c5089e4f1ac5910a731090c51'
	'44d51a440ec2a0a052a64088fcbc95ccf6af62ea73feb76cc7269e2d0ff8f206')

build() {
	WORK="$srcdir/rust-mrustc"
	mkdir -p "$WORK"
	mv "$srcdir/rustc-$pkgver-src" "$WORK"
	cp -r /usr/share/mrustc/run_rustc "$WORK"
	cd "$WORK"

	cd rustc-1.19.0-src
	patch -p1 -i "$srcdir/openssl.patch"

	# lli doesn't build, remove it
	sed -i '/lli/d' src/llvm/tools/LLVMBuild.txt
	rm -rf src/llvm/tools/lli

	cd ..

	make -f /usr/share/mrustc/minicargo.mk output/rustc output/cargo
	make -C run_rustc
}

package() {
	cp -r "$srcdir/rust-mrustc/run_rustc/prefix/"{bin,lib} "$pkgdir/"
}

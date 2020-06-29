# Maintainer: satcom886 <rostik.medved@gmail.com>

pkgname=vc4c-git
pkgver=1
pkgrel=5
pkgdesc="Compiler for the VC4CL OpenCL-implementation"
arch=('any')
url="https://github.com/doe300/VC4C"
license=('MIT')
groups=()
depends=('llvm' 'clinfo' 'ocl-icd')
makedepends=('wget' 'gcc' 'cmake' 'clang' 'opencl-headers')
optdepends=()
requires=('vc4clstdlib-git')
provides=('vc4c' 'vc4-compiler' 'opencl-compiler')
source=("VC4C.tar.gz::https://github.com/doe300/VC4C/archive/master.tar.gz" "auto_dummy.patch")
md5sums=('SKIP' 'e409cafcdc79aa53aef1484e53bd25e7')

prepare() {
	patch -R $srcdir/VC4C-master/src/ProcessUtil.cpp $srcdir/auto_dummy.patch
}

build() {
	mkdir -p $srcdir/VC4C-master/build
	cd $srcdir/VC4C-master/build
	cmake "$srcdir/VC4C-master" -DCMAKE_BUILD_TYPE=Release -DMULTI_THREADED=true -DCLANG_FOUND=/usr/bin/clang
	make
}

package() {
	cd $srcdir/VC4C-master/build
	make DESTDIR="$pkgdir"/ install
}

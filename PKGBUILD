# Maintainer: Elias Kosunen <elias dot kosunen at gmail dot com>
pkgname=varuna-git
pkgver=v0.1.0.rc2.r1.gc367dca
pkgrel=1
pkgdesc="Compiler for the language"
arch=('i686' 'x86_64')
url="https://varuna-lang.github.io"
license=('BSD')
depends=('llvm-libs>=4.0.0' 'libutil-linux')
makedepends=('cmake>=3.2.3' 'git')
source=("git+https://github.com/varuna-lang/${pkgname%-git}.git"
    "git+https://github.com/gabime/spdlog.git"
    "git+https://github.com/USCiLab/cereal.git"
    "git+https://github.com/onqtam/doctest.git"
    "git+https://github.com/datenwolf/binreloc.git"
    "git+https://github.com/graeme-hill/crossguid.git"
    "git+https://github.com/vit-vit/CTPL.git"
    "git+https://github.com/varuna-lang/vastd.git"
    "git+https://github.com/varuna-lang/vart.git"
    "git+https://github.com/varuna-lang/llvm-binutils.git")
md5sums=('SKIP' 'SKIP' 'SKIP' 'SKIP' 'SKIP' 'SKIP' 'SKIP' 'SKIP' 'SKIP' 'SKIP')

pkgver() {
    cd "${pkgname%-git}"
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
    cd "$srcdir/${pkgname%-git}"
    git submodule init
    git config submodule.third-party/spdlog.url "$srcdir/spdlog"
    git config submodule.third-party/cereal.url "$srcdir/cereal"
    git config submodule.third-party/doctest.url "$srcdir/doctest"
    git config submodule.third-party/binreloc/src.url "$srcdir/binreloc"
    git config submodule.third-party/crossguid/guid.url "$srcdir/crossguid"
    git config submodule.third-party/ctpl.url "$srcdir/CTPL"
    git config submodule.projects/vastd.url "$srcdir/vastd"
    git config submodule.projects/vart.url "$srcdir/vart"
    git config submodule.projects/llvm-binutils.url "$srcdir/llvm-binutils"
    git submodule update
}

build() {
    mkdir -p "$srcdir/${pkgname%-git}/build"
    cd "$srcdir/${pkgname%-git}/build"

    cmake -G "Unix Makefiles" -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Release ..
	make
}

package() {
    cd "$srcdir/${pkgname%-git}/build"
	make DESTDIR="$pkgdir/" install
    install -D -m644 "../LICENSE" "$pkgdir/usr/share/licenses/${pkgname}/LICENSE"
}

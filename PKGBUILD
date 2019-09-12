# Maintainer: Milk (milk / milkii on Freenode)
# Maintainer: Jean Pierre Cimalando <jp-dev@inbox.ru>
# Contributor: osch <oliver@luced.de>
pkgname=surge-synthesizer-git
_pkgname=surge
pkgver=r992.0d338d8
pkgrel=1
pkgdesc="Surge Synthesizer plugin (LV2/VST3, git head)"
arch=('x86_64')
url="https://surge-synthesizer.github.io"
license=('GPL3')
groups=('lv2-plugins')
depends=('cairo'  'fontconfig'          'freetype2'
         'libx11' 'xcb-util-cursor'     'xcb-util'
         'libxcb' 'xcb-util-renderutil' 'xcb-util-image'
         'xcb-util-keysyms' 'libxkbcommon-x11')
makedepends=('premake-git' 'git' 'python')
provides=('surge-synthesizer' 'surge-synthesizer-bin')
conflicts=('surge-synthesizer' 'surge-synthesizer-bin')
source=("git+https://github.com/surge-synthesizer/surge.git")
options=()
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/$_pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	cd "$srcdir/$_pkgname"
	git submodule update --init --recursive

	# version number extraction from the source code
	cat << EOF > extract_version.cpp
#include "src/common/version.h"
#include <stdio.h>
int main() { puts(VERSION_STR); }
EOF
	g++ -Ivst3sdk -o extract_version extract_version.cpp
	printf "%s+git%s" "$(./extract_version)" "$(git rev-parse --short HEAD)" > VERSION
}

build() {
	cd "$srcdir/$_pkgname"

	# work around parallel make issues
	export MAKEFLAGS=

	premake5 --cc=gcc --os=linux gmake2
	make -f surge-lv2.make config=release_x64
	make -f surge-vst3.make  config=release_x64
}

package() {
	cd "$srcdir/$_pkgname"

	install -d "$pkgdir/usr/lib/lv2"
	cp -rfd target/lv2/Release/Surge.lv2 "$pkgdir/usr/lib/lv2/"

	install -d "$pkgdir/usr/lib/vst3"
	cp -rfd products/Surge.vst3 "$pkgdir/usr/lib/vst3/"

	install -d "$pkgdir/usr/share/Surge"
	cp -rfd resources/data/* "$pkgdir/usr/share/Surge/"

	install -D -m644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname/"
	install -D -m644 README.md AUTHORS -t "$pkgdir/usr/share/doc/Surge/"
}

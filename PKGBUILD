# Maintainer : Özgür Sarıer <echo b3pndXJzYXJpZXIxMDExNjAxMTE1QGdtYWlsLmNvbQo= | base64 -d>

pkgname=natron
pkgver=2.1.2
pkgrel=1
pkgdesc="Open source compositing software. Node-graph based. Similar in functionalities to Adobe After Effects and Nuke by The Foundry."
arch=("i686" "x86_64")
url="http://natron.fr/"
license=("GPL")
depends=('fontconfig' 'qt4' 'python2-pyside' 'python2-shiboken' 'boost' 'pixman' 'glfw-x11' 'cairo')
makedepends=('expat')
optdepends=(
  'tuttleofx: plugins'
  'openfx-io: read anything else than standard 8-bits images'
  'openfx-misc: plugins'
  'openfx-arena: Extra OpenFX plugins for Natron'
  )
conflicts=('natron-rc' 'natron-bin' 'natron-bin-dev')
source=("$pkgname::git://github.com/MrKepzie/Natron.git#tag=$pkgver"
	"https://github.com/MrKepzie/OpenColorIO-Configs/archive/Natron-v${pkgver%.*}.tar.gz"
	"natron.install"
	"config.pri")
md5sums=('SKIP'
         '4ca4eca4856cae50cfa4645a090258dd'
         '9b894defa0493bca9518a74800d23ee7'
         '09f5ac67c0ad57eb853141b38eccb0ff')

prepare() {
	cd "$srcdir/$pkgname"

	mv "$srcdir/OpenColorIO-Configs-Natron-v${pkgver%.*}" "$srcdir/$pkgname/OpenColorIO-Configs"

	# For OpenFX update
	git submodule update -i --recursive

	mv "${srcdir}/config.pri" "${srcdir}/${pkgname%%-*}/config.pri"

	sed -i '1s/^/QMAKE_CXXFLAGS += -std=c++98\n/' Gui/Gui.pro
	sed -i '1s/^/QMAKE_CXXFLAGS += -std=c++98\n/' Engine/Engine.pro
	sed -i '1s/^/QMAKE_CXXFLAGS += -std=c++98\n/' Tests/Tests.pro
}

build() {
	cd "$srcdir/$pkgname"

	[[ -d build ]] && rm -r build; mkdir build; cd build

	qmake-qt4 -r "$srcdir/natron/Project.pro" PREFIX=/usr CONFIG+=release DEFINES+=QT_NO_DEBUG_OUTPUT

	make
}

package() {
	cd "$srcdir/$pkgname/build"

	make INSTALL_ROOT="$pkgdir" install
}

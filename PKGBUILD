# Maintainer: Peyrille Benjamin <peyrille.benjamin@gmail.com>
# Contributor : Rogalle Quentin <quentin.rogalle@etudiant.univ-perp.fr>
pkgname=othellox
pkgver=0_3
pkgrel=2
pkgdesc="Reversi game in C allowing AI-vs-AI automation"
arch=('any')
url="https://framagit.org/Arkhist/othellox"
license=('MIT')
depends=('ncurses')
makedepends=('clang')
source=("https://framagit.org/Arkhist/othellox/-/archive/master/othellox-master.zip")
sha256sums=('60e6f253c581b37f57b97a25c0127abea310aa18ae0eed8181623577fe97acd8')

prepare() {
	cd "${pkgname}-master"
}

build() {
	cd "${pkgname}-master"
	cd othellogame
	make
}

check() {
	cd "${pkgname}-master"
}

package() {
	cd "$pkgname-master"
	cd othellogame
	install -Dm755 othellox "${pkgdir}/usr/bin/othellox"
	install -Dm655 include/board.h "${pkgdir}/usr/include/othellox/board.h"
	install -Dm655 include/ai/ai_api.h "${pkgdir}/usr/include/othellox/ai_api.h"
	install -Dm655 include/gameState.h "${pkgdir}/usr/include/othellox/gameState.h"
	install -Dm655 basic-ai "${pkgdir}/usr/share/othellox/basic-ai"
	install -Dm655 ordinatrice-ai "${pkgdir}/usr/share/othellox/ordinatrice-ai"
}

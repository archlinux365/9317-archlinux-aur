pkgname=parity-git
_pkgname=parity
pkgdesc="Fast, light, robust Ethereum implementation"
pkgrel=1
pkgver=0.9.99.2244
arch=('i686' 'x86_64')
conflicts=("parity")
provides=("parity")
url="https://github.com/ethcore/parity"
license=('AGPL-3.0')
depends=('rocksdb')
makedepends=('rust' 'cargo' 'git' 'python-pytoml')
source=('git://github.com/ethcore/parity.git' 'fix-heapsize.patch' 'fix-ctrlc.patch')
sha256sums=(
	'SKIP'
	'3b2f97b2f7905580a3402be36acdff8f61fc248d0c1a0d7831742e2913f81c73'
	'203ef0e968a0eb46c6b2cde37f291d9f4584d615a9c51fd6e31804ae7dce5e30'
)

pkgver() {
	cd $_pkgname
	echo "$(python -c "print(__import__('pytoml').loads(open('Cargo.toml').read())['package']['version'])").$(git rev-list --count HEAD)"
}

build() {
	cd $_pkgname
	patch ./Cargo.toml <../fix-ctrlc.patch
	patch ./util/Cargo.toml <../fix-heapsize.patch
	cargo update
	cargo build --release
}

package() {
	cd $_pkgname
	install -D -m755 "${srcdir}/${_pkgname}/target/release/parity" "${pkgdir}/usr/bin/parity"
}

# Maintainer: Shalygin Konstantin <k0ste@k0ste.ru>
# Contributor: Shalygin Konstantin <k0ste@k0ste.ru>

pkgname='ivideon-server'
pkgver='3.9.0'
pkgrel='5674'
_rel='e393119'
pkgdesc='Ivideon Server (with QT5 GUI)'
arch=('x86_64')
url='https://ivideon.com'
license=('freeware')
depends=('ivideon-server-headless' 'qt5-base' 'qt5-multimedia' 'libsndfile' 'libxcb' 'libsm')
conflicts=('ivideon-video-server-nogui' 'ivideon-video-server')
source=("https://packages.ivideon.com/ubuntu/pool/non-free/i/ivideon-video-server/ivideon-video-server_${pkgver}-${pkgrel}~${_rel}_amd64.deb")
md5sums=('2b3d9afb2fe3623ad09215c6427445a7')

build() {
  cd "$srcdir"
  bsdtar xf "${srcdir}/data.tar.xz"
}

package() {
  cp -ax "${srcdir}/opt" "$pkgdir"
  cp -ax "${srcdir}/usr" "$pkgdir"
}

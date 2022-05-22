# Maintainer: Manuel Hüsers <aur@huesers.de>

pkgname=clonezilla-unstable
_pkgname=clonezilla
pkgver=5.1.5
pkgrel=1
pkgdesc="ncurses partition and disk imaging/cloning program"
arch=('any')
url="https://clonezilla.org"
license=('GPL2')
depends=('drbl' 'partclone' 'ntfs-3g' 'partimage' 'pigz' 'sshfs' 'parted'
         'gptfdisk' 'dosfstools' 'gzip' 'bzip2' 'pbzip2' 'lbzip2' 'lrzip'
         'xz' 'pixz' 'lzop' 'ecryptfs-utils' 'screen' 'perl' 'cifs-utils')
backup=('etc/drbl/drbl-ocs.conf')
conflicts=("${_pkgname}")
provides=("${_pkgname}")
source=("https://free.nchc.org.tw/drbl-core/src/unstable/${_pkgname}-${pkgver}.tar.xz"
        'usrbin.patch')
sha256sums=('54168743e8bff5e08b5c6ab1b1c447765b29eabc428073631d5d7dea8c20a26e'
            '9340f18b27a1b3b41c4935c5831f6503e4cadf333f03433769906da40a6e38e6')

prepare() {
  cd "${_pkgname}-${pkgver}"

  patch -Np0 -i "${srcdir}/usrbin.patch"
}

package() {
  cd "${_pkgname}-${pkgver}"

  make DESTDIR="${pkgdir}" install
}

# Maintainer: solsTiCe d'Hiver <solstice.dhiver@gmail.com>

pkgname=atool-git
_pkgname=atool
pkgver=r4.1b89353
pkgrel=1
pkgdesc="A script for managing file archives of various types (with zstd support)"
arch=('any')
url="https://github.com/solsticedhiver/atool"
license=('GPL3')
depends=('file' 'perl')
conflicts=('atool')
optdepends=('bzip2: for using atool with bzip2 compressed archives'
            'cpio: for using atool with cpio archives'
            'gzip: for using atool with gzip compressed archives'
            'lha: for using atool with lha, lharc and similar archives'
            'xz: for using atool with lzma compressed archives'
            'lzop: for using atool with lzop compressed archives'
            'p7zip: for using atool with 7z archives'
            'tar: for using atool with tar archives'
            'unace: for using atool with ace archives'
            'unrar: for using atool with rar archives'
            'zip: for using atool for creating zip archives'
            'unzip: for using atool for unpacking archives'
            'zstd: for using atool with zstandard archives')
source=(atool::git+https://github.com/solsticedhiver/atool.git)
sha256sums=('SKIP')

pkgver() {
  cd ${_pkgname}
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)" 
}

build() {
  cd "${srcdir}"/${_pkgname}

  ./configure --prefix=/usr --sysconfdir=/etc
}

package() {
  cd "${srcdir}"/${_pkgname}

  make DESTDIR="${pkgdir}" install
}

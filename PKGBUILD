# Maintainer: Dimitris Kiziridis <ragouel at outlook dot com>
# Maintainer: Uncle Hunto <unclehunto äτ ÝãΗ00 Ð0τ ÇÖΜ>
# Contributor: Limao Luo <luolimao+AUR@gmail.com>
# Contributor: TuxSpirit <tuxspirit@archlinux.fr>
# Contributor: Jamesjon <universales@protonmail.com>

pkgname=peazip-qt-bin
pkgver=7.5.0
pkgrel=1
pkgdesc="File and archive manager, 7Z BR RAR TAR ZST ZIP files extraction utility
"
arch=('i686' 'x86_64')
url='http://www.peazip.org/peazip-linux.html'
license=('LGPL3')
depends=('lib32-curl'
         'lib32-gmp4'
         'lib32-qt4pas'
         'lib32-ncurses'
         'balz'
         'paq8o'
         'p7zip'
         'upx'
         'zpaq'
         'lib32-gcc-libs'
         'lib32-xz'
         'lib32-libx11'
         'lib32-zlib')
options=('!emptydirs' '!strip')
optdepends=('quad: A ROLZ-based file compressor' 
            'unace: Support for ace files'
            'arc: Support for arc files')
provides=('peazip')
conflicts=('peazip'
           'peazip-qt'
           'peazip-qt-opensuse-latest')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/giorgiotani/PeaZip/releases/download/${pkgver}/peazip_portable-${pkgver}.LINUX.Qt.tar.gz")
sha256sums=('55c1a02f01df9882236629adddfac4369f4199f371721de4e9431e412ef3fd0c')

package() {
  install -d "${pkgdir}/opt" "${pkgdir}/usr/bin"
  mv peazip_portable-${pkgver}.LINUX.Qt "${pkgdir}/opt/peazip-qt"
  ln -s /opt/peazip-qt/peazip "${pkgdir}/usr/bin"
  install -Dm644 "${pkgdir}/opt/peazip-qt/FreeDesktop_integration/peazip.desktop" -t "${pkgdir}/usr/share/applications"
  install -Dm644 "${pkgdir}/opt/peazip-qt/FreeDesktop_integration/peazip.png" -t "${pkgdir}/usr/share/pixmaps"
}

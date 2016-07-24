# Maintainer: Miguel Revilla <yo@miguelrevilla.com>
# Contributor: joyfulgirl <joyfulgirl (at) archlinux.us>
pkgname=pspp
pkgver=0.10.2
pkgrel=1
pkgdesc="Statistical analysis program. Free replacement for SPSS."
arch=('i686' 'x86_64')
url="http://www.gnu.org/software/pspp/"
license=('GPL3')
depends=('gsl' 'gtksourceview3' 'postgresql-libs' 'desktop-file-utils')
optdepends=('zlib: GNUmeric support'
            'libxml2: GNUMERIC support')
options=('!libtool' '!emptydirs')
source=(ftp://ftp.gnu.org/gnu/pspp/pspp-${pkgver}.tar.gz)
md5sums=('9c5a3295d59b07a9a4462148371723ae')
install=pspp.install

build() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    ./configure --prefix=/usr \
                --sysconfdir=/etc \
                --without-libreadline-prefix
    make
}

package() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    make DESTDIR="${pkgdir}" install
    rm -f "${pkgdir}/usr/share/info/dir"
    install -d "${pkgdir}"/usr/share/pspp/contrib
    install -m 644 pspp-mode.el "${pkgdir}"/usr/share/pspp/contrib/pspp-mode.el
}

# End of file

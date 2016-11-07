# derived from community/filezilla PKGBULID

pkgname=filezillasecure
pkgver=3.18.0
pkgrel=2
pkgdesc="Fork of the well-known Filezilla client with password encryption"
arch=('i686' 'x86_64')
url="http://filezillasecure.com/"
license=('GPL')
depends=('dbus' 'xdg-utils' 'wxgtk' 'libidn' 'hicolor-icon-theme' 'sqlite' 'gnutls' "libfilezilla")
makedepends=("automake")
source=("$pkgname-$pkgver.zip::http://www.filezillasecure.com/download.php?file=filezillasecure-${pkgver}s_src.zip")
md5sums=('f58a2d0e37f73a4661e5f3630df57ece')

prepare() {
    cd "${pkgname}-${pkgver}s_src"
    # make configure executable
    chmod +x configure
    chmod +x src/fzshellext/configure
    # automake 1.14 is hardcoded in, but arch uses a newer release
    _acver=$(automake --version|head -n1|cut -d" " -f4)
    find . -type f -exec sed -i "s/1.14/$_acver/g" {} \;
}

build() {
    cd "${pkgname}-${pkgver}s_src"

    ./configure \
      --prefix=/usr \
      --disable-manualupdatecheck \
      --disable-autoupdatecheck \
      --disable-static \
      --with-pugixml=builtin
  
    make
}

package() {
    cd "${pkgname}-${pkgver}s_src"
    make DESTDIR="${pkgdir}" install
}

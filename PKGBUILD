# Maintainer: Carlos Mogas da Silva <r3pek@r3pek.org>
# Contributer: ELmoussaoui Bilal <bil.elmoussaoui@gmail.com>

pkgname=budgie-screenshot-applet
pkgver=0.4.3
pkgrel=2
pkgdesc="A Budgie applet for taking and uploading screenshots to Imgur and Imagebin."
arch=('i686' 'x86_64')
license=('GPL2')
depends=('libpeas' 'budgie-desktop'  'json-glib' 'gnome-desktop')
makedepends=('intltool' 'meson' 'ninja' 'vala' 'gobject-introspection')
source=("https://github.com/cybre/${pkgname}/archive/v${pkgver}.tar.gz"
        "01-fix-gtk-3.24-compilation.patch")
sha256sums=('0a39cd01a76aaa825caccd62a46833163e113098f359074171eb134a27c7b67b'
            '328a13065e28d8d5a8ae623ebb0e5fb3341df5aa082d5d3dfc0630d9abda5704')

build() {
  cd "${pkgname}-${pkgver}"

  patch -p1 < "${srcdir}"/01-fix-gtk-3.24-compilation.patch

  meson builddir --prefix /usr --buildtype=plain
  ninja -C builddir
}

package() {
  cd "${pkgname}-${pkgver}"
  DESTDIR="${pkgdir}" ninja -C builddir install
}

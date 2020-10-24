# Maintainer:  budRich <robstenklippa@gmail.com>
# Contributor: twa022 <twa022 at gmail dot com>
# Contributor: Alad Wenter <nynq@nepuyvahk.vasb> (rot13)
# Contributor: Limao Luo <luolimao+AUR@gmail.com>
# Contributor: Evangelos Foutras <evangelos@foutrelis.com>
# Contributor: Andrew Simmons <andrew.simmons@gmail.com>

_pkgname=thunar
pkgname=${_pkgname}-budlabs-git
pkgver=4.16pre1+75+g87722dab
pkgrel=1
pkgdesc='file manager for xfce, patched for people with keyboards'
arch=('i686' 'x86_64' 'armv7h' 'aarch64')
license=('GPL')
groups=('xfce4-devel')
url='https://gitlab.xfce.org/budRich/thunar'
depends=('desktop-file-utils' 'exo' 'gtk3' 'hicolor-icon-theme' 'libgudev'
         'libexif' 'libnotify' 'libpng' 'libxfce4ui>=4.15.3' 'libxfce4util>=4.15.2')
makedepends=('intltool' 'xfce4-panel' 'gtk-doc' 'gobject-introspection' 'xfce4-dev-tools' 'git')
optdepends=('gvfs: trash support, mounting with udisks, and remote filesystems'
          'xfce4-panel: trash applet'
          'tumbler: for thumbnail previews'
          'thunar-volman: manages removable devices'
          'thunar-archive-plugin: create and deflate archives'
          'thunar-media-tags-plugin: view/edit id3/ogg tags')
provides=("${_pkgname}=${pkgver}")
conflicts=("${_pkgname}")
source=("${_pkgname}::git+https://gitlab.xfce.org/xfce/${_pkgname}.git")
sha256sums=('SKIP')

pkgver() {
  cd "${_pkgname}"
  git describe --long --tags | sed -r "s:^${_pkgname}.::;s/^v//;s/^xfce-//;s/-/+/g"
}

prepare() {
    cd "${_pkgname}"
    ./autogen.sh \
        --prefix=/usr \
        --sysconfdir=/etc \
        --libexecdir=/usr/lib \
        --localstatedir=/var \
        --disable-static \
        --enable-gio-unix \
        --enable-gudev \
        --enable-exif \
        --enable-pcre \
        --enable-gtk-doc \
        --disable-debug
}

build() {
    cd "${_pkgname}"
    make
}

package() {
    cd "${_pkgname}"
    make DESTDIR="$pkgdir" install
}

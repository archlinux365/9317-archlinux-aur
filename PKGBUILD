# Maintainer: Bruno Pagani (a.k.a. ArchangeGabriel) <bruno.n.pagani@gmail.com>
# Contributor: Jan de Groot <jgc@archlinux.org>

_pkgname=gvfs
pkgname=${_pkgname}-light
pkgver=1.36.1
pkgrel=1
pkgdesc="Virtual filesystem implementation for GIO, without network/optical/misc support."
url="https://wiki.gnome.org/Projects/gvfs"
arch=('i686' 'x86_64')
license=('LGPL')
conflicts=("${_pkgname}")
provides=("${_pkgname}=${pkgver}")
depends=('udisks2' 'gcr' 'libarchive' 'fuse')
makedepends=('git' 'gtk-doc' 'polkit' 'libcap' 'meson' 'openssh')
optdepends=('gvfs-gphoto2: gphoto2 (PTP camera/MTP media player) support'
            'gvfs-mtp: MTP device support'
            'gtk3: Recent files support')
groups=('gnome')
options=(!emptydirs)
_commit=1ed5c7a25d91d1e3039764e2c6eac089379df79c  # tags/1.36.1^0
source=("git+https://git.gnome.org/browse/gvfs#commit=${_commit}"
        'gvfsd.hook')
sha256sums=('SKIP'
            '478b9cf7b4c242959fc640dbf0cd4935f16c59b81f5828a3af102d608d7a9d72')

pkgver() {
    cd ${_pkgname}
    git describe --tags | sed 's/-/+/g'
}

build() {
    arch-meson ${_pkgname} build \
        -D man=true  \
        -D admin=true \
        -D afc=false \
        -D afp=false \
        -D archive=true \
        -D cdda=false \
        -D dnssd=false \
        -D gdu=false \
        -D goa=false \
        -D google=false \
        -D gphoto2=false \
        -D http=false \
        -D mtp=false \
        -D nfs=false \
        -D smb=false \
        -D udisks2=true \
        -D bluray=false \
        -D fuse=true \
        -D gcr=true \
        -D gcrypt=true \
        -D gudev=true \
        -D keyring=false \
        -D logind=true \
        -D libusb=true
    ninja -C build
}

check() {
    cd build
    meson test
}

package() {
    DESTDIR="${pkgdir}" ninja -C build install

    install -Dm644 gvfsd.hook -t "${pkgdir}"/usr/share/libalpm/hooks/
    install -d -o root -g 102 -m 750 "${pkgdir}"/usr/share/polkit-1/rules.d
}

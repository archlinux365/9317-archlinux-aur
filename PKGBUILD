# Maintainer: Daniel Bermond <dbermond@archlinux.org>

pkgname=xd-torrent
pkgver=0.3.4
pkgrel=2
pkgdesc='An I2P BitTorrent client'
arch=('x86_64')
url='https://xd-torrent.github.io/'
license=('MIT')
depends=('glibc')
makedepends=('go')
backup=('etc/xd.conf')
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/majestrate/XD/archive/v${pkgver}.tar.gz"
        '010-xd-torrent-fix-webui-target.patch'
        '020-xd-torrent-use-arch-ldflags.patch'
        '030-xd-torrent-rename-service-paths.patch'
        'xd-torrent.sysusers'
        'xd-torrent.tmpfiles'
        'xd.conf')
sha256sums=('90a3df7a52ec30effe4a287728c1fd2d93a3a08b59cd2c6a971513d487d9d48a'
            '53c9b91bceabfbb33c42d5dee73b50c79c81e5d2ef219b8c4e7d8f40f1bd9b3f'
            '3698cf45ae01e8e1dacea1b47cf255bc807138928cad5c3789e53268dac6fa2d'
            'e9dcf92897f2ece84ae8ee6aa8212bcd1ba945c942a01bfabe82a85867034b25'
            '5f2fb392c2fec68bb3861ece85b5bbdd4929c4ccccf3caeb835060213c309761'
            'f05777857bab4d18ad23582a746959cd13e07345fa74bbb3f1263a38398ac491'
            '2817f5eb6e204dd8e37fb4963a9b60d958ae063c6f082c41f92760802ea99530')

prepare() {
    patch -d "XD-${pkgver}" -Np1 -i "${srcdir}/010-xd-torrent-fix-webui-target.patch"
    patch -d "XD-${pkgver}" -Np1 -i "${srcdir}/020-xd-torrent-use-arch-ldflags.patch"
    patch -d "XD-${pkgver}" -Np1 -i "${srcdir}/030-xd-torrent-rename-service-paths.patch"
}

build() {
    export CGO_CPPFLAGS="$CPPFLAGS"
    export CGO_CFLAGS="$CFLAGS"
    export CGO_CXXFLAGS="$CXXFLAGS"
    export CGO_LDFLAGS="$LDFLAGS"
    export GOFLAGS='-buildmode=pie -trimpath -mod=readonly -modcacherw'
    make -C "XD-${pkgver}"
}

check() {
    make -C "XD-${pkgver}" test
}

package() {
    make -C "XD-${pkgver}" PREFIX="${pkgdir}/usr" install
    
    # config
    install -D -m644 xd.conf -t "${pkgdir}/etc"
    
    # sistemd
    install -D -m644 xd-torrent.sysusers "${pkgdir}/usr/lib/sysusers.d/xd-torrent.conf"
    install -D -m644 xd-torrent.tmpfiles "${pkgdir}/usr/lib/tmpfiles.d/xd-torrent.conf"
    install -D -m644 "XD-${pkgver}/contrib/systemd/xd.service" "${pkgdir}/usr/lib/systemd/system/xd-torrent.service"
    
    # docs
    install -D -m644 "XD-${pkgver}/docs/en/readme.md" -t "${pkgdir}/usr/share/doc/${pkgname}"
    
    # license
    install -D -m644 "XD-${pkgver}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}

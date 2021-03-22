# Maintainer: Ashley Whetter <(firstname) @ awhetter.co.uk>
# Co-Maintainer: NicoHood <archlinux {cat} nicohood {dog} de>
# PGP ID: 97312D5EB9D7AE7D0BD4307351DAE9B7C1AE9161
# Contributor: Eothred <yngve.levinsen@gmail.com>

pkgname=spotify-snap
pkgver=1.1.55.498.gf9a83c60
_snapid=pOBIoZ2LrCB3rDohMxoYGnbN14EHOgD7
_revision=46
pkgrel=1
pkgdesc='A proprietary music streaming service'
arch=('x86_64')
conflicts=('spotify')
provides=('spotify')
license=('custom')
url='https://www.spotify.com'
depends=('gtk3' 'libcurl-gnutls' 'libsm' 'nss')
makedepends=('squashfs-tools')
source=('spotify.protocol'
        'LICENSE')
# Get latest version info: curl -H 'Snap-Device-Series: 16' http://api.snapcraft.io/v2/snaps/info/spotify
source_x86_64=("https://api.snapcraft.io/api/v1/snaps/download/${_snapid}_${_revision}.snap")
sha512sums=('999abe46766a4101e27477f5c9f69394a4bb5c097e2e048ec2c6cb93dfa1743eb436bde3768af6ba1b90eaac78ea8589d82e621f9cbe7d9ab3f41acee6e8ca20'
            '2e16f7c7b09e9ecefaa11ab38eb7a792c62ae6f33d95ab1ff46d68995316324d8c5287b0d9ce142d1cf15158e61f594e930260abb8155467af8bc25779960615')
sha512sums_x86_64=('dabb55d2ba41f977b6d3f03bfcf147d11785136dd1277efc62011c8371ef25cc04531266bd16608639b9b6a500c1a18a45f44ba7a43e17ab5ac139e36eff7149')

prepare() {
    cd "${srcdir}"
    unsquashfs ${_snapid}_${_revision}.snap
}

package() {
    cd "${srcdir}"

    mkdir -p "${pkgdir}/opt"
    cp -a squashfs-root/usr/share/spotify "${pkgdir}/opt"

    install -Dm644 "${pkgdir}"/opt/spotify/spotify.desktop "${pkgdir}"/usr/share/applications/spotify.desktop
    sed -i 's/\/usr\/share\/spotify\/icons\/spotify-linux-128.png/spotify/' "${pkgdir}"/usr/share/applications/spotify.desktop

    for size in 22 24 32 48 64 128 256 512; do
        install -Dm644 "${pkgdir}/opt/spotify/icons/spotify-linux-$size.png" \
            "${pkgdir}/usr/share/icons/hicolor/${size}x${size}/apps/spotify.png"
    done

    # Symlink spotify binary which is located in /opt
    mkdir -p "${pkgdir}/usr/bin"
    ln -sf /opt/spotify/spotify "${pkgdir}/usr/bin/spotify"

    # Remove unneeded files
    rm -r "${pkgdir}/opt/spotify/apt-keys"
    rm -r "${pkgdir}/opt/spotify/icons"
    rm "${pkgdir}/opt/spotify/spotify.desktop"

    # Copy protocol file for KDE
    install -Dm644 "${srcdir}/spotify.protocol" "${pkgdir}/usr/share/kservices5/spotify.protocol"

    # Install license
    # https://www.spotify.com/legal/end-user-agreement
    install -Dm 644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

    # Fix permissions
    chmod -R go-w "${pkgdir}"
}

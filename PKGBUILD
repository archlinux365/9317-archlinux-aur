pkgname='enpass-bin'
_pkgname='enpass'
pkgver=6.8.0.1059
pkgrel=1
pkgdesc='A multiplatform password manager'
arch=('x86_64')
url='http://enpass.io/'
license=('custom')
depends=('libxss' 'lsof' 'curl' 'libxkbcommon-x11')
optdepends=('libxdg-basedir: Open links in the default browser.'
            'libqtxdg: Open links in the default browser (Qt implementation)')
provides=("${_pkgname}")
install='enpass-bin.install'
source=("https://apt.enpass.io/pool/main/e/enpass/${_pkgname}_${pkgver}_amd64.deb")
sha256sums=('e9329d258e078e09e0be52b7a2211f0c2a23c3c7e7538d2bde285d922ab6786a')

# Disable strip as otherwise the browser extension will not work
options=('!strip')

package() {
    # Extract data
    tar xfz "${srcdir}/data.tar.gz" -C "${pkgdir}"

    # Remove unnecessary files which are included in the .deb
    # find "${pkgdir}" -name '*~' -delete

    # Update permissions to match the default system ones
    chmod 755 "${pkgdir}/opt/"
    find "${pkgdir}/usr/" -type d -exec chmod 755 {} \;

    # Symlink "runenpass.sh" to "/usr/bin" so it is accessible via cli
    mkdir -p "${pkgdir}/usr/bin"
    ln -s '/opt/enpass/Enpass' "${pkgdir}/usr/bin/enpass"
}


# vim: set syntax=sh:

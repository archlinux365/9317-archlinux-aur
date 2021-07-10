# Maintainer  : Yamada Hayao <hayao@fascode.net>
# Contributer : Katherine J. Cumberbatch <stykers@stykers.moe>

_pkgname="vlc-plugin-fluidsynth"
pkgname="${_pkgname}-bin"
pkgdesc="FluidSynth plugin for VLC"
arch=('x86_64' "i386" "aarch64" "i686")
url="http://www.videolan.org/vlc/"

depends=('vlc>3.0.0' 'fluidsynth')
optdepends=("soundfont-fluid: FluidR3_GM soundfont")

deb_pkgver="3.0.16"
deb_pkgrel="1"
pkgver="${deb_pkgver}.${deb_pkgrel}"
pkgrel="1"

conflicts=("${pkgname}-git" "${_pkgname}" "${_pkgname}-git")
replaces=("${pkgname}-git" "${_pkgname}" "${_pkgname}-git")
provides=("${_pkgname}")

install="notes.install"
license=('LGPL2.1')

source_x86_64=("https://ftp.debian.org/debian/pool/main/v/vlc/${_pkgname}_${deb_pkgver}-${deb_pkgrel}_amd64.deb")
source_i386=("https://ftp.debian.org/debian/pool/main/v/vlc/${_pkgname}_${deb_pkgver}-${deb_pkgrel}_i386.deb")
source_i686=("${source_i386[@]}")
source_aarch64=("https://ftp.debian.org/debian/pool/main/v/vlc/${_pkgname}_${deb_pkgver}-${deb_pkgrel}_arm64.deb")

md5sums_x86_64=('bb58f688bb26b7453d011855a635225c')
md5sums_i386=('643e656315a20ffee3859dacba287fba')
md5sums_aarch64=('10fd133fd00be8f0941a1aaaceae407d')
md5sums_i686=('643e656315a20ffee3859dacba287fba')
sha512sums_x86_64=('12b96bacf58a5fb2412f3a3c8727a427cf99e71b386b870ec5cc117077094a965ad6d47ce1d967324cce2a6258f734236a9f2bcbcc6db0c2473747fc161c9a63')
sha512sums_i386=('0e5f8c7c8fcf7759408cecf68b964cb1d51c895b151fc762460c3a26cb0aed840876151306e55f130635e7986de2f99a65963f1657bfd57068e1b0dae1130f09')
sha512sums_aarch64=('c514aa25b705e430a224f55304d36d07fc49c7dfa31c28b95e61819509f7f3e5888ba0a6d2612f20c0a6b9cf3418666707edc21202e9924c05f107d8567e1519')
sha512sums_i686=('0e5f8c7c8fcf7759408cecf68b964cb1d51c895b151fc762460c3a26cb0aed840876151306e55f130635e7986de2f99a65963f1657bfd57068e1b0dae1130f09')

prepare() {
    tar -xvf "${srcdir}/data.tar.xz"
}

package() {
    mkdir -p "${pkgdir}/usr/share"
    cp -r "${srcdir}/usr/share" "${pkgdir}/usr/share"
    local plugin=$(find "${srcdir}/usr/lib" -name "libfluidsynth_plugin.so")
    echo "Found ${plugin}"
    install -Dm0755 "${plugin}" "${pkgdir}/usr/lib/vlc/plugins/codec/libfluidsynth_plugin.so"
}

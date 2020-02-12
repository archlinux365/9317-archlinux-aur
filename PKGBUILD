#Submitter:   Anton Yermalovich <zuzu@bk.ru>
# Maintainer:  David Latorre <david@latorredev.com>
# Contributor: zwergnase <zwergnase@posteo.de>

pkgname=sunvox-1.x
pkgver=1.9.5c
pkgrel=2
pkgdesc="Small, fast and powerful modular synthesizer with pattern-based sequencer (tracker)."
arch=('i686' 'x86_64')
url="http://warmplace.ru/soft/sunvox/"
license=(custom)
groups=()
depends=(
        'libx11'
        'glibc'
        'gcc-libs'
        'alsa-lib'
        'sdl'
        'libxcb'
        'libxau'
        'libxdmcp'
)
makedepends=('unzip')
source=('https://raw.githubusercontent.com/LatorreDev/sunvox_mirror/1.9.5c/1.9.5c/sunvox-1.9.5c.zip')
sha256sums=('4ce93d3df85f3be8f19420c472c758fbbbb5a2433e0dcb08b52664719b1a2a5f')
package() {
	install -dm755 "${pkgdir}/opt/sunvox"
	install -dm755 "${pkgdir}/usr/share/licenses/sunvox"  
	if [ "$CARCH" = "x86_64" ]; then
		install -Dm755 "${srcdir}/sunvox/sunvox/linux_x86_64/sunvox" "${pkgdir}/usr/bin/sunvox"
        install -Dm755 "${srcdir}/sunvox/assets/sunvox.desktop" "${pkgdir}/usr/share/applications/sunvox.desktop"
        install -Dm755 "${srcdir}/sunvox/assets/sunvox.svg" "${pkgdir}/usr/share/pixmaps/sunvox.svg"
	else
		install -Dm755 "${srcdir}/sunvox/sunvox/linux_x86/sunvox" "${pkgdir}/usr/bin/sunvox"
		install -Dm755 "${srcdir}/sunvox/sunvox/linux_x86/sunvox_lofi" "${pkgdir}/usr/bin/sunvox_lofi"
		install -Dm755 "${srcdir}/sunvox/sunvox/linux_x86/sunvox_no_simd" "${pkgdir}/usr/bin/sunvox_no_simd"
	fi
	cp -a "${srcdir}/sunvox/examples" "${pkgdir}/opt/sunvox/examples"
	cp -a "${srcdir}/sunvox/instruments" "${pkgdir}/opt/sunvox/instruments"
	cp -a "${srcdir}/sunvox/effects" "${pkgdir}/opt/sunvox/effects"
	install -Dm644 "${srcdir}/sunvox/docs/license/SunVox.txt"  "${pkgdir}/usr/share/licenses/sunvox/LICENSE"
}

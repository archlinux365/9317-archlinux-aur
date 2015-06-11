# Maintainer: Christian Mauderer <c_mauderer[at]yahoo[dot]de>
pkgname=stlink-git
pkgver=20120217
pkgrel=1
pkgdesc="stm32 discovery line linux programmer."
arch=('x86_64')
url="https://github.com/texane/stlink"
license=('custom')
depends=('libusb>=1.0' 'pkg-config')
makedepends=('git')
conflicts=('stlink')
provides=('stlink')
install='stlink-git.install'

_gitroot="https://github.com/texane/stlink"
_gitname="stlink"

build() {
	cd "${srcdir}"

	msg "Connecting to GIT server...."
	if [ -d ${_gitname} ] ; then
		cd ${_gitname} && git pull origin
		msg "The local files are updated."
	else
		git clone --depth=1 ${_gitroot} ${_gitname}
	fi
	msg "GIT checkout done or server timeout"

	msg "Create working copy"
	# do not copy over the .git folder
	rm -rf "${srcdir}/${_gitname}-build"
	mkdir "${srcdir}/${_gitname}-build"
	cd "${srcdir}/${_gitname}" && ls -A | grep -v .git | xargs -d '\n' cp -r -t ../${_gitname}-build

	msg "Start actual build"
	cd "${srcdir}/${_gitname}-build"
	sed 's/-Werror //g' gdbserver/Makefile > gdbserver/Makefile_new
	mv gdbserver/Makefile_new gdbserver/Makefile
	make
} 

package() {
	cd "${srcdir}/${_gitname}-build"
	install -Dm644 "stlink_v1.modprobe.conf" "${pkgdir}/etc/modprobe.d/stlink_v1.modprobe.conf"
	install -Dm644 "49-stlinkv1.rules" "${pkgdir}/etc/udev/rules.d/49-stlinkv1.rules"
	install -Dm644 "49-stlinkv2.rules" "${pkgdir}/etc/udev/rules.d/49-stlinkv2.rules"
	install -Dm755 "flash/st-flash" "${pkgdir}/usr/bin/st-flash"
	install -Dm755 "gdbserver/st-util" "${pkgdir}/usr/bin/st-util"
	install -Dm644 "LICENSE" "${pkgdir}/usr/share/doc/${pkgname}/LICENSE"
	install -Dm644 "README" "${pkgdir}/usr/share/doc/${pkgname}/README"
	install -Dm644 "ACKNOWLEDGMENTS" "${pkgdir}/usr/share/doc/${pkgname}/ACKNOWLEDGMENTS"
	install -Dm644 "doc/tutorial/tutorial.pdf" "${pkgdir}/usr/share/doc/${pkgname}/tutorial.pdf"
	install -d "${pkgdir}/usr/share/doc/${pkgname}/"
	cp -dpr --no-preserve=ownership "example" "${pkgdir}/usr/share/doc/${pkgname}/example"
}

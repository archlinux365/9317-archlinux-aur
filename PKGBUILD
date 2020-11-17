# Generated by debtap
# Maintainer: Bruno Inec <brunoinec at gmail dot com>
pkgname=txm-bin
pkgver=0.8.1
pkgrel=1
pkgdesc="Analyse textométrique de corpus textuels."
arch=('x86_64')
url="http://textometrie.ens-lyon.fr"
license=('GPL')
depends=('blas' 'bzip2' 'cairo' 'desktop-file-utils' 'gcc-libs' 'glib2' 'glibc>=2.15' 'gtk2-perl' 'hicolor-icon-theme' 'jdk7-openjdk' 'lapack' 'gcc-fortran' 'libjpeg' 'libpaper' 'libpng' 'libpng12' 'libtiff' 'ncurses5-compat-libs' 'libx11' 'libxt' 'pcre' 'po-debconf' 'readline' 'tcl' 'tk' 'unzip' 'webkit2gtk' 'xdg-utils' 'xz' 'zenity' 'zip' 'zlib')
options=('!strip' '!emptydirs')
install=${pkgname}.install
source_x86_64=("https://gitlab.huma-num.fr/txm/txm-software/-/raw/master/files/software/TXM/0.8.1/TXM_0.8.1_2020-06-29_Linux64_installer.deb")
sha512sums_x86_64=('63f8df5d686453557f1ae8a2c45d3999b5228b9854bdf01b46c46d365eb087928428103a7db21d2e8b6d0b5c9d2af18f74cc374faa0766380e6c2dc74a8ad48b')

package(){

	# Extract package data
	tar xf data.tar.xz -C "${pkgdir}"

	install -D -m644 "/usr/lib/TXM-0.8.1/plugins/org.txm.statsengine.r.core.linux_1.0.0.202006290905/res/linux64/share/licenses/license.db" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	install -D -m644 "/usr/share/doc/txm-0.8.1/copyright" "${pkgdir}/usr/share/licenses/${pkgname}/COPYRIGHT"

}

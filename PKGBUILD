# Maintainer: RubenKelevra <cyrond@gmail.com>
# Contributor: Francesco Masala <mail@francescomasala.me>

_pkgname=bottles
pkgname=${_pkgname}-fixed
_pkgver_main=2022.8.28
_release_name=brescia
_pkgver_sub=1
pkgver="$_pkgver_main.$_pkgver_sub"
pkgrel=1
pkgdesc='Run Windows software on Linux with Bottles!'
arch=(any)
changelog=changelog.md
url="https://github.com/bottlesdevs/$_pkgname"
license=(GPL3)
depends=(
	# from dependency list
	'python>=3.9'
	'python-yaml>=5.0'
	'python-requests>=2.25'
	'python-urllib3>=1.22'
	'python-chardet>=3.0'
	'python-certifi>=2019.11.28'
	'python-idna>=2.6'
	'python-markdown>=3.1'
	'python-pefile>=2021.9.3'
	'patool>=1.12'

	# not listed as dependency but needed
	python-gobject
	python-orjson
	python-pillow

	# from dependency list
	gtk4
	gtksourceview5
	libadwaita-testing

	# additional not listed dependencies
	libportal-gtk4
	gedit
	libgexiv2
	libaccounts-glib
	libibus
	gnumeric
	gom
	goocanvas
	xapp
	libsignon-glib
	libblockdev
	fvs
	appstream-glib
	gnome-builder
	gst-editing-services

	# from dependency list
	'cabextract>=1.9.0'
	'p7zip>=16.02'
	xorg-xdpyinfo
	icoextract
	imagemagick

	# runner compabilities
	'libpcap>=1.8'
	'libcapi>=3.2.3'
	lib32-libusb
	libusb
	lib32-faudio
	faudio
	lib32-vkd3d
	vkd3d
	lib32-vulkan-icd-loader
	vulkan-icd-loader
	openldap

	dconf # needed for glib schemas
	hicolor-icon-theme # needed for hicolor theme hierarchy
)
optdepends=(
	'gamemode>=1.6: Support gamemode'
	'gamescope>=3.10: Support gamescope'
	'wine: as runtime alternative'
)
makedepends=(
	'meson'
	'ninja'
)
conflicts=('bottles' 'bottles-git')
provides=('bottles')


# use if _pkgver_sub is not 0
source=("${_pkgname}-${_pkgver_main}-${_release_name}-${_pkgver_sub}.tar.gz::$url/archive/refs/tags/${_pkgver_main}-${_release_name}-${_pkgver_sub}.tar.gz")
# use if _pkgver_sub is 0
#source=("${_pkgname}-${_pkgver_main}-${_release_name}-${_pkgver_sub}.tar.gz::$url/archive/refs/tags/${_pkgver_main}-${_release_name}.tar.gz")


b2sums=('07649eb450d31b706d483d8c4f919f16fc7e5c365fa5107b2c49fcc33dee1790902cd7d502737b89c77f68c510f4a41ffbace74a1aa92a06258088f7a2b40b0c')

build() {
	if [[ -d Bottles ]]; then
		rm -rf Bottles
	fi;
	mv Bottles*/ Bottles/
	cd "Bottles"
	meson --prefix='/usr' build
	ninja -C build
}

package() {
	cd "Bottles"
	DESTDIR="${pkgdir}" ninja -C build install
}

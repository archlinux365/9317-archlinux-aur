# Maintainer: Philipp A. <flying-sheep@web.de>

_name=scanpydoc
pkgname=python-$_name
pkgver=0.5.5
pkgrel=1
pkgdesc='A series of Sphinx extensions to get easy to maintain, numpydoc style documentation.'
arch=(any)
url="https://github.com/theislab/$_name"
license=(GPL3)
depends=(python-sphinx python-get_version)
_pyarch=py3
_wheel="${_name/-/_}-$pkgver-$_pyarch-none-any.whl"
source=("https://files.pythonhosted.org/packages/$_pyarch/${_name::1}/$_name/$_wheel")
sha256sums=('4a7881af6a6a5f5f797a76230483654aeb300de6f6284bb7e41da8dd6c9283c1')
noextract=("$_wheel")

package() {
	local site="$pkgdir/usr/lib/$(readlink /bin/python3)/site-packages"
	mkdir -p "$site"
	unzip "$_wheel" -d "$site"
	#fix permissions
	find "$site" -type f -exec chmod 644 {} \;
}

# Maintainer: Philipp A. <flying-sheep@web.de>
_name=aiohttp
pkgname=python-aiohttp
pkgver=1.1.6
pkgrel=2
pkgdesc='http client/server for asyncio'
arch=('i686' 'x86_64' 'arm' 'armv6h' 'armv7h' 'aarch64')
url="http://pypi.python.org/pypi/$_name"
license=('Apache')
depends=('python>=3.5' 'python-chardet' 'python-multidict' 'python-async-timeout' 'python-yarl')
makedepends=('python-pip')

# binary packages
#_wheelbase="$_name-$pkgver-cp36-cp36m-manylinux1"
#source_i686=(  "https://files.pythonhosted.org/packages/cp36/${_name::1}/$_name/${_wheelbase}_i686.whl")
#source_x86_64=("https://files.pythonhosted.org/packages/cp36/${_name::1}/$_name/${_wheelbase}_x86_64.whl")
#md5sums_i686=('')
#md5sums_x86_64=('')
#noextract=("${_wheelbase}_"{i686,x86_64}.whl)

# source code package
_s="https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz"
source=("$_s")
source_arm=("$_s")
source_armv6h=("$_s")
source_armv7h=("$_s")
source_aarch64=("$_s")
_m=('dc080616b14155a202288bb3dbf07f8b')
md5sums=("$_m")
md5sums_arm=("$_m")
md5sums_armv6h=("$_m")
md5sums_armv7h=("$_m")
md5sums_aarch64=("$_m")

package() {
	case "$CARCH" in
#		i686|x86_64)
#			cd "$srcdir"
#			pip install --compile --no-deps --ignore-installed --root="$pkgdir" "${_wheelbase}_$CARCH.whl"
#			;;
		*)
			cd "$srcdir/$_name-$pkgver"
			python setup.py install --root="$pkgdir/" --optimize=1
			;;
	esac
}

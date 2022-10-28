# Maintainer: Guillaume Horel <guillaume.horel@gmail.com>
# Maintainer: Caleb Maclennan <caleb@alerque.com>

pkgname=python-skia-pathops
_pkgname=${pkgname#python-}
pkgver=0.7.3
pkgrel=1
pkgdesc='Python bindings for the Skia library’s Path Ops (wheel)'
arch=(x86_64)
url="https://github.com/fonttools/$_pkgname"
license=(BSD)
depends=(python)
makedepends=(python-pip)
options=(!strip)
_py=cp310
_wheel="${_pkgname/-/_}-$pkgver-$_py-$_py-manylinux_2_17_$CARCH.manylinux2014_$CARCH.whl"
source=("https://files.pythonhosted.org/packages/$_py/${_pkgname::1}/$_pkgname/$_wheel")
sha256sums=('14d303d72df4738a9de5f38ca03f57cf802f5a985a15cb0d84dca57295873858')

# If anybody wants to mess around with the Chromium tree and figure out how to
# build skia from source on Arch I'm open to patches, but even after mucking
# around with ninja and python2 and various patched build toolchains I have
# come up short of a way to build this against Arch packages as dependencies.
# Drop a comment on the AUR page if you have ideas.

package() {
	export PIP_CONFIG_FILE=/dev/null
	pip install --isolated --root="$pkgdir" --ignore-installed --no-deps $_wheel
	python -O -m compileall "$pkgdir"
}

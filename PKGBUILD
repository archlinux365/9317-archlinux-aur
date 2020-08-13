# Maintainer: Eric Langlois <eric@langlois.xyz>
pkgname=python-mujoco-py
_name=${pkgname#python-}
pkgver=2.0.2.12
pkgrel=1
pkgdesc="Python interface to the MuJoCo physics engine"
arch=('x86_64')
url="https://github.com/openai/mujoco-py"
license=('MIT' 'custom')
depends=(
	'cython'
	'glew'
	'libgl'
	'mesa'
	'mujoco'
	'python'
	'python-cffi'
	'python-fasteners'
	'python-glfw'
	'python-imageio'
	'python-numpy'
)
makedepends=('patchelf' 'python-setuptools')
optdepends=()
# Stripping breaks the generated cymj_*.so file
options=(!strip)
# There is no license file included in the pip package
# Get it from the mujoco-py github repo instead.
# Also, there is no release marked for the recent pip package version,
# so use the lastest commit (at the time of writing).
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz"
        "$_name-$pkgver-LICENSE.md::https://raw.githubusercontent.com/openai/mujoco-py/89a953c5baea15b03fade1365ddf10d206591f68/LICENSE.md"
        "$_name.patch")
sha256sums=('1e214a70902c91b73223f43b8ace9791a54d8163480f90cbfb4c9e30d2e3fec0'
            'fb896a8cbad505b0fe1f324e7d4f02032e56885c6544b7644180258d6077a71a'
            '21163edd7ef1046d504caec64d517a79af8603e54cc0edb6819d34e9d9529865')

prepare() {
	cd "$_name-$pkgver"
	patch -p1 -i "$srcdir/$_name.patch"
}

build() {
	cd "$_name-$pkgver"
	python setup.py build
}

package() {
	cd "$_name-$pkgver"
	python setup.py install --root="$pkgdir" --optimize=1 --skip-build

	install -Dm644 "$srcdir/$_name-$pkgver-LICENSE.md" \
		"$pkgdir/usr/share/licenses/$pkgname/LICENSE.md"
}

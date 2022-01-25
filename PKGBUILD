_name=iredis
pkgname=iredis
pkgver=1.11.0
pkgrel=1
pkgdesc="Terminal client for Redis with auto-completion and syntax highlighting."
arch=(any)
url="https://github.com/laixintao/iredis"
license=('BSD-3-Clause')
depends=('python' 'python-redis' 'python-prompt_toolkit' 'python-pygments' 'python-mistune' 'python-configobj' 'python-click' 'python-pendulum' 'python-importlib_resources' 'python-wcwidth')
makedepends=('python-setuptools')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/iredis-1.11.0.tar.gz")
sha256sums=('b4a5d80c321bd267f5dc8f49d0f1d064966bffea69a6a04aa807c057860d3130')

build() {
  cd "$srcdir/iredis-1.11.0"
  python3 setup.py build
}

package() {
  cd "$srcdir/iredis-1.11.0"
  python3 setup.py install --root=$pkgdir --optimize=1 --skip-build

  # make sure we don't install any world-writable or root-readable-only files
  # we shouldn't need to fix ownership as we extract tarballs as a non-root user
  # https://github.com/pypa/setuptools/issues/1328
  # https://github.com/LonamiWebs/Telethon/issues/1605
  chmod u=rwX,go=rX -R "$pkgdir"
  # make sure we don't install annoying files
  local _site_packages=$(python -c "import site; print(site.getsitepackages()[0])")
  rm -rf "$pkgdir/$_site_packages/tests/"
}


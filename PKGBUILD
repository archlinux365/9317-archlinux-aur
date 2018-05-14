# Maintainer: Josip Janzic <josip@jjanzic.com>

pkgbase=('python-cfn-lint-git')
pkgname=('python-cfn-lint-git')
_module='cfn-lint'
pkgver=r71.d2e1e46
pkgrel=1
pkgdesc="checks cloudformation for practices and behaviour         that could potentially be improved"
url="https://github.com/awslabs/cfn-python-lint"
depends=('python' 'python-yaml' 'python-requests')
makedepends=('python-setuptools')
license=('MIT No Attribution')
arch=('any')
source=("git+https://github.com/awslabs/cfn-python-lint.git")
md5sums=('SKIP')

pkgver() {
    cd "$srcdir"/cfn-python-lint
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "$srcdir"/cfn-python-lint
  python setup.py build
}


package() {
  cd "$srcdir"/cfn-python-lint
  python setup.py install --root="$pkgdir" --optimize=1
}

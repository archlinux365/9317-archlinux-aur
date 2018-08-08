pkgname=python-flask-misaka
pkgver=0.4.1
pkgrel=1
pkgdesc='Misaka bindings for Flask'
url='https://github.com/singingwolfboy/flask-misaka'
license=('MIT')
arch=('any')
depends=('python' 'python-flask' 'python-misaka' 'python-cffi')
makedepends=('python-setuptools')
source=("https://github.com/singingwolfboy/flask-misaka/archive/v${pkgver}.tar.gz")

build() {
  cd "$srcdir/Flask-Misaka-${pkgver}"
  python setup.py build
}

package() {
  cd "$srcdir/Flask-Misaka-${pkgver}"
  python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
  install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkname}/LICENSE"
}

md5sums=('08c748530708297a0af7eaba9d4fb909')
sha1sums=('7f59e8c7a740ad5235a21f7b66ff18c325f676da')
sha256sums=('0142b955bf69c330acd88d8ad0049541c7d4d455515f5b96d885d633b6bee38c')
sha384sums=('af68e07c971b532006f5fbaa36661f060201760b71f965245f9feb068cfc3493266d0f1602281e5543adfdd51b972e56')
sha512sums=('8ca962b19c2098122ca3e2b241578f22602b1e2dd2994647bc9293baeb812bc7f3c9c6af61acd6062dceefccc9ef4bd212013d71840c9e387fa8f1379042626e')

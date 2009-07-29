# $Id$
# Contributor: Shahar Weiss <sweiss4@gmx.net>
# Contributor: simo <simo@archlinux.org>
# Maintainer: Douglas Soares de Andrade <douglas@archlinux.org>

pkgname=django
pkgver=1.1
pkgrel=1
pkgdesc="A high-level Python Web framework."
arch=('i686' 'x86_64')
license=('BSD')
url="http://www.djangoproject.com"
depends=('setuptools')
source=("http://media.djangoproject.com/releases/$pkgver/Django-$pkgver.tar.gz")

build() {
    cd $startdir/src/Django-$pkgver
    python setup.py install --root=$startdir/pkg || return 1
    install -D -m644 LICENSE $startdir/pkg/usr/share/licenses/$pkgname/LICENSE
}
md5sums=('b2d75b4457a39c405fa2b36bf826bf6b')

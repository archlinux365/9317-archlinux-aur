# Maintainer: Srevin Saju <srevinsaju@sugarlabs.org>

pkgname=archivy
pkgver=1.4.0
pkgrel=1
pkgdesc="A self-hosted knowledge repository, to preserve useful content to your knowledge bank."
arch=('any')
url="https://github.com/archivy/archivy"
license=('MIT')
makedepends=('python-setuptools')
depends=('python-flask' 'python-flask-wtf' 'python-wtforms'
         'python-werkzeug' 'python-appdirs' 'python-attrs'
         'python-beautifulsoup4' 'python-elasticsearch'
         'python-dotenv' 'python-frontmatter' 'python-requests'
         'python-tinydb' 'python-validators' 'python-flask-login' 'python-brotli'
         'python-click-plugins' 'python-html2text' 'python-flask-compress')
optdepends=('elasticsearch')
source=("git+https://github.com/archivy/archivy#tag=v$pkgver"
        "00-do-not-pin-requirements.patch")
sha256sums=('SKIP'
            '538f7d96138f421d70ed72a8f101c1095726d5ee53c19e6cd924b30ca6a7a3a4')

prepare() {
    cd "$srcdir/$pkgname"
    git apply "$srcdir/00-do-not-pin-requirements.patch"
}

build() {
	cd "$srcdir/$pkgname"
	python setup.py build
}

package() {
	cd "$srcdir/$pkgname"
	python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
    rm -rf "${pkgdir}/$(python -c 'import site; print(site.getsitepackages()[0])')/tests/"
}

# Maintainer: Srevin Saju <srevinsaju@sugarlabs.org>

pkgname=archivy-git
pkgver=v1.0.0.r1.g83da64b
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
source=("git+https://github.com/archivy/archivy.git#commit=83da64b191b0524bcbd7730e159ff8ef2b68c6ae"
        "00-do-not-pin-requirements.patch")
sha256sums=('SKIP'
            '339f305aded981272230193c446307c2731477edf49e9ec6ea684351e5e62b8b')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")


prepare() {
    cd "$srcdir/${pkgname%-git}"
    git apply "$srcdir/00-do-not-pin-requirements.patch"
}

build() {
	cd "$srcdir/${pkgname%-git}"
	python setup.py build
}

package() {
	cd "$srcdir/${pkgname%-git}"
	python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
}

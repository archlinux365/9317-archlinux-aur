# Maintainer: J. Nathanael Philipp (jnphilipp) <nathanael@philipp.land>

pkgname=python-spacy-de_core_news_md
pkgver=3.2.0
pkgrel=1
pkgdesc="German pipeline optimized for CPU. Components: tok2vec, tagger, morphologizer, parser, senter, ner, attribute_ruler, lemmatizer."
url="https://spacy.io/models/de#de_core_news_md"
depends=('python-spacy')
makedepends=('python-setuptools')
license=('MIT')
arch=(any)
source=("https://github.com/explosion/spacy-models/releases/download/de_core_news_md-${pkgver}/de_core_news_md-${pkgver}.tar.gz"
        "https://raw.githubusercontent.com/explosion/spaCy/master/LICENSE")
sha256sums=("55f10bcf91f7ee807cc167cf564e3181abdd5a3ddde9a669f24c446795b7c1a0"
            "b90775797175e7aa165a5508c8132da463b8ae029b419f4fc52450276d9f2872")

build() {
    cd de_core_news_md-${pkgver}
    python setup.py build
}

package() {
    install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
    cd de_core_news_md-${pkgver}
    python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
}

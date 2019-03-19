# Maintainer: Andy B. <brofi.archlinux at gmail dot com>

pkgname=haskell-alsa-mixer
_hkgname=alsa-mixer
pkgver=0.3.0
pkgrel=1
pkgdesc="Provides bindings to the ALSA simple mixer API"
url=https://hackage.haskell.org/package/alsa-core
license=('BSD')
arch=('i686' 'x86_64')
depends=('ghc-libs' 'haskell-alsa-core' 'haskell-base' 'haskell-unix')
makedepends=('ghc' 'c2hs')
source=("https://hackage.haskell.org/packages/archive/${_hkgname}/${pkgver}/${_hkgname}-${pkgver}.tar.gz")
sha256sums=('cb6a197de99c6b4339a7f552e1c6b71eaefa11bb96102d5ba4519a23c615de02')

build() {
    cd ${_hkgname}-${pkgver}

    runhaskell Setup configure -O --enable-shared --enable-executable-dynamic --disable-library-vanilla \
        --prefix=/usr --docdir="/usr/share/doc/${pkgname}" \
        --dynlibdir=/usr/lib --libsubdir=\$compiler/site-local/\$pkgid
    runhaskell Setup build
    runhaskell Setup haddock
    runhaskell Setup register --gen-script
    runhaskell Setup unregister --gen-script
    sed -i -r -e "s|ghc-pkg.*update[^ ]* |&'--force' |" register.sh
    sed -i -r -e "s|ghc-pkg.*unregister[^ ]* |&'--force' |" unregister.sh
}

package() {
    cd ${_hkgname}-${pkgver}
    install -D -m744 register.sh   "${pkgdir}/usr/share/haskell/register/${pkgname}.sh"
    install -D -m744 unregister.sh "${pkgdir}/usr/share/haskell/unregister/${pkgname}.sh"

    install -d -m755 "${pkgdir}/usr/share/doc/ghc/html/libraries"
    ln -s /usr/share/doc/${pkgname}/html "${pkgdir}/usr/share/doc/ghc/html/libraries/${_hkgname}"
    runhaskell Setup copy --destdir="${pkgdir}"
    install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    rm -f "${pkgdir}/usr/share/doc/${pkgname}/LICENSE"
}


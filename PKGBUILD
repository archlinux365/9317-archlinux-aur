# Maintainer: ValHue <vhuelamo at gmail dot com>
#
# Contributor: jpatufet <jpatufet86@gmail.com>
# Contributor: Jorge Barroso <jorge.barroso.11 at gmail dot com>

pkgname=hunspell-ca
pkgver=3.0.4
pkgrel=1
pkgdesc="Catalan hunspell dictionaries. Includes Valencian ca_ES-valencia"
arch=(any)
url="http://www.softcatala.org/corrector"
license=('GPL2' 'LGPL2')
makedepends=('hunspell')
optdepends=('hunspell:	the spell checking libraries and apps')
source=("https://github.com/Softcatala/catalan-dict-tools/releases/download/v${pkgver}/ca.${pkgver}-all.zip")
sha256sums=('0321e732ea856e6b2a5315cd02626811d245c5337495c300d82224c7a2475d79')

package(){

    #copy hunspell
    cd "${srcdir}"
    install -dm755 "${pkgdir}"/usr/share/hunspell
    cp -p catalan.aff "${pkgdir}"/usr/share/hunspell/ca_ES.aff
    cp -p catalan.dic "${pkgdir}"/usr/share/hunspell/ca_ES.dic
    cp -p catalan-valencia.aff "${pkgdir}"/usr/share/hunspell/ca_ES-valencia.aff
    cp -p catalan-valencia.dic "${pkgdir}"/usr/share/hunspell/ca_ES-valencia.dic

    #alias hunspell - comment/delete if you don't want all these alias
    ca_ES_alias="ca_AD ca_FR ca_IT"
    pushd "${pkgdir}"/usr/share/hunspell/
        for lang in ${ca_ES_alias}; do
            ln -s ca_ES.aff "${lang}".aff
            ln -s ca_ES.dic "${lang}".dic
        done
    popd

    #myspell symlinks
    install -dm755 "${pkgdir}"/usr/share/myspell/dicts
    pushd "${pkgdir}"/usr/share/myspell/dicts
        for file in "${pkgdir}"/usr/share/hunspell/*; do
            ln -sv /usr/share/hunspell/"$(basename "${file}")" .
        done
    popd

    #docs
    #install -dm755 "${pkgdir}"/usr/share/doc/"${pkgname}"

    # licenses
    install -dm755 "${pkgdir}"/usr/share/licenses/"${pkgname}"
    Copyright_ca_alias="ca_AD ca_ES ca_ES-valencia ca_FR ca_IT"
    pushd "${pkgdir}"/usr/share/licenses/"${pkgname}"
        for lang in ${Copyright_ca_alias}; do
            install -D -m644 "${srcdir}"/LICENSE Copyright_${lang}/LLICENCIA
        done
    popd
}

# vim: set ts=4 sw=4 et syn=sh ft=sh:

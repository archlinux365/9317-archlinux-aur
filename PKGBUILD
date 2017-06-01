# Maintainer: Frederik Schwan <frederik dot schwan at linux dot com>
# Contributor: Ghost of Kendo <ghostofkendo at gmail dot com>
# Contributor: Thomas Dziedzic < gostrc at gmail >
# Contributor: Pierre Chapuis <catwell@archlinux.us>
# Contributor: Earnest <zibeon@gmail.com>

pkgname=spin
pkgver=6.4.6
pkgrel=1
pkgdesc='Tool for the formal verification of distributed software systems'
arch=('i686' 'x86_64')
url='https://spinroot.com/'
license=('custom:SPIN')
depends=('glibc')
optdepends=('tcl: ispin graphical interface'
            'swarm: improved performance on large verification problems'
            'modex: extract verification models from implementation C code'
            'ispin: GUI for Spin')
source=(https://spinroot.com/spin/Src/spin${pkgver//./}.tar.gz
        LICENSE.txt)
sha512sums=('4ce720a1234c3bfe37320b6a41ee27346237592ca0a9437a67a13078b9ae0f8f1ad321c6715329799d6295084649c4dab5164cb32682bf1033a94c8ee960e1de'
            'a5b63fc7136a2631c9a27619953abe2e9d6cab179042dd56bb76afbffe1966ad7edb41a131af5d6663f3cdbf77128833232e9174c0ef817b8522bfd978add595')

build() {
  cd "${srcdir}/Spin/Src${pkgver}"
  make
}

package() {
  cd "${srcdir}/Spin/Src${pkgver}"

  # install binary and license file
  install -D spin "${pkgdir}/usr/bin/spin"
  install -D -m644 "${srcdir}/LICENSE.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.txt"

  # install manpage and docs
  install -d "${pkgdir}/usr/share/man/man1/"
  install -d "${pkgdir}/usr/share/doc/${pkgname}/examples"

  gzip -9c "${srcdir}/Spin/Man/spin.1" > "${pkgdir}/usr/share/man/man1/spin.1.gz"
  cp -a "${srcdir}/Spin/Examples/"* "${pkgdir}/usr/share/doc/${pkgname}/examples/"
}

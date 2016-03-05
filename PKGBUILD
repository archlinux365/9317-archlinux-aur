# Maintainer: Brian Bidulock <bidulock@openss7.org>
# Contributor: Chet Gray <chetgray@gmail.com>
pkgname=bfg
pkgver=1.12.8
pkgrel=1
pkgdesc='Removes large or troublesome blobs like git-filter-branch does, but faster. And written in Scala.'
arch=('any')
url='http://rtyley.github.io/bfg-repo-cleaner/'
license=('GPL3')
depends=('java-runtime')
source=("http://repo1.maven.org/maven2/com/madgag/${pkgname}/${pkgver}/${pkgname}-${pkgver}.jar"
        "${pkgname}.sh")
noextract=("${pkgname}-${pkgver}.jar")
md5sums=('a65f4b981122e2eced73990b3ced5bba'
         'bd25a99f7c9b59549d70df0687ca90b4')

package() {
	cd "${srcdir}"
	install -D -m755 "${pkgname}.sh" "${pkgdir}/usr/bin/${pkgname}"
	install -D -m644 "${pkgname}-${pkgver}.jar" "${pkgdir}/usr/share/java/${pkgname}/${pkgname}.jar"
}

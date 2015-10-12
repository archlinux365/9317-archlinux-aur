# Maintainer: Arthur Zamarin <arthurzam@gmail.com>
# Contributor: Shanto <shanto@hotmail.com>
# Contributor: Jonathan Wiersma <archaur at jonw dot org>

pkgname=eclipse-wtp
pkgver=3.7.1
_pkgdate=20150915020029
pkgrel=1
pkgdesc="Webtools framework for the Eclipse platform"
url="http://www.eclipse.org/webtools/"
license="Eclipse Public License"
arch=('any')
depends=( 'eclipse' 'eclipse-emf' 'eclipse-gef' 'java-runtime>=5' )
optdepends=("java-environment>=5" "eclipse-dtp")
provides=('eclipse-wtp-wst')
options=(!strip)
_mirror="http://www.eclipse.org/downloads/download.php?r=1&mirror_id=1&file="
source=("$_mirror/webtools/downloads/drops/R$pkgver/R-$pkgver-$_pkgdate/wtp-repo-R-$pkgver-$_pkgdate.zip")
sha256sums=('438ad3d1d05da21679181a2c3d89833b8cfcf96bdf6a0748870d6a85d9e9022a')

package() {
  _dest="$pkgdir/usr/lib/eclipse/dropins/wtp/"
  
  cd "$srcdir"
  mkdir -p "${_dest}"
  
  cp -r {features,plugins} "$_dest/"

  find "$pkgdir/usr/lib/eclipse" -type d -exec chmod 755 {} \;
  find "$pkgdir/usr/lib/eclipse" -type f -exec chmod 644 {} \;
}

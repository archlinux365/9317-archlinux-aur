# Maintainer: Rémi BERTHO <remi.bertho@dalan.fr>
# Contributor: Rémi BERTHO <remi.bertho@dalan.fr>
pkgname=recettescuisine
pkgver=1.1.0
pkgrel=2
pkgdesc="A recipe manager written in java"
arch=(any)
url="https://www.dalan.fr"
license=('GPL')
depends=('java-runtime')
install="INSTALL"
source=('https://www.binaries.dalan.fr/RecettesCuisine/RecettesCuisine.jar'
		'logo.png'
		'recettescuisine.desktop'
		'recettescuisine')
sha256sums=('3db938a06ae7e7851a9eb7970135ce5d78e6f74596212f87c58ef8a2f084b69d'
			'b22cfa31a19a5027a236b2d968f39378967ee11e309d8405b3784699f64bde7a'
			'e553612b1a2086f79fec4253bfde61c66d6dcebe3bde74c38b43c895b7a7c5c1'
			'1a00beeaaaf5e0aece33f3428c9ea033c5e236a7362ad17016bebb887efe6f8e')

package()
{
    mkdir -p "$pkgdir/usr/bin/"
    mkdir -p "$pkgdir/usr/share/recettescuisine/"
    mkdir -p "$pkgdir/usr/share/applications/"

    cp recettescuisine "$pkgdir/usr/bin/"
    cp RecettesCuisine.jar "$pkgdir/usr/share/recettescuisine/"
    cp logo.png "$pkgdir/usr/share/recettescuisine/"
    cp recettescuisine.desktop "$pkgdir/usr/share/applications/"
}

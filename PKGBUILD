# Maintainer: JKA Network (JoseluCross, Kprkpr, Yukialba) <contacto@jkanetwork.com>
pkgname=apw
pkgver=1.7
pkgrel=1
pkgdesc="A Package Wrapper - package wrapper for pacman (and more)"
arch=('any')
url="http://proyecto.jkanetwork.com"
license=('GPL3')
groups=('jka-toolkit')
options=(!emptydirs)
source=("https://gitlab.com/JKANetwork/jka-toolkit/raw/master/jka-toolkit/apw"
	"https://gitlab.com/JKANetwork/jka-toolkit/raw/master/jka-toolkit/i18n/apw/es.mo")
md5sums=('80fa81d3b9d08eafe1ffda88d31daaf6'
         '5537d13a7c12f771da92d2bcca929b0f')

package() {
  echo "pacman" > "$srcdir/apw.conf"
  install -Dm644 $srcdir/apw.conf "${pkgdir}/etc/apw.conf"
  install -Dm644 $srcdir/es.mo "${pkgdir}/usr/share/locale/es/LC_MESSAGES/apw.mo"
  install -Dm755 $srcdir/apw "${pkgdir}/usr/bin/apw" 
}

# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=texlive-garamondx
pkgver=1.19
pkgrel=1
pkgdesc="URW Garamond No8 Adobe Type1 fonts from CTAN (for texlive)"
arch=('any')
license=('CUSTOM:alladin')
url=http://www.ctan.org/tex-archive/fonts/garamondx
depends=(texlive-core)
source=(http://mirrors.ctan.org/install/fonts/garamondx.tds.zip garamondx.maps)
md5sums=('723b01688a90491d571caac30012c87d'
         '80761a71120a9861400927b591ac463f')
noextract=('garamondx.tds.zip')

package() {
  _texmf_root=usr/share/texmf-dist
  install -d "$pkgdir"/var/lib/texmf/arch/installedpkgs
  install -m644 "$srcdir"/garamondx.maps "$pkgdir"/var/lib/texmf/arch/installedpkgs
  install -d "$pkgdir"/$_texmf_root/
  cd "$pkgdir"/$_texmf_root/
  bsdtar xf "$srcdir"/garamondx.tds.zip
  install -Dm644 "$pkgdir"/$_texmf_root/doc/fonts/garamondx/README \
	  "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
  rm "$pkgdir"/$_texmf_root/doc/fonts/garamondx/README
}


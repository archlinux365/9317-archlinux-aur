# Maintainer: bohoomil <@zoho.com>
# Maintainer: Solomon Choina <shlomochoina@gmail.com>
pkgbase=ttf-alegreya-fonts-ibx
_font=Alegreya
pkgname=('ttf-alegreya-ibx' 'ttf-alegreya-sans-ibx')
pkgver=2.008
pkgrel=1
depends=('fontconfig')
pkgdesc="Alegreya and Alegreya Sans are modern font families designed by Juan Pablo del Peral."
url="http://www.huertatipografica.com/"
arch=('any')
groups=('infinality-bundle-fonts-extra')
license=('custom:OFL')
# http://www.huertatipografica.com/free_download/24
# http://www.google.com/fonts
source=("$_font-sans-$pkgver.tar.gz::https://github.com/huertatipografica/"$_font"-Sans/archive/v"$pkgver".tar.gz"
        "$_font-$pkgver.tar.gz::https://github.com/huertatipografica/"$_font"/archive/v"$pkgver".tar.gz"
        45-alegreya.conf
        45-alegreya-sans.conf
        90-tt-alegreya.conf
        90-tt-alegreya-sans.conf)
sha1sums=('4ea9bb61264846dbeec7a438a2ec7c6f87980507'
          '08eb5b0634cf6228544c3f4b2bb71b68809c026d'
          'db08107ef08332b400ba3fcc5eb78fe0cd8ebebe'
          '8454c43dce5f6df1ed2bc7fa8c1a1aa8223766a5'
          'a6edf94a16a1768b3f6bb4e3bf87987b4ee833ab'
          '1f451f44fd9db1fd8fb1e5efacde25001cf7bd24')

package_ttf-alegreya-ibx(){
  pkgdesc="Alegreya is a serif typeface originally intended for literature. TrueType version."
  conflicts=('otf-alegreya-ibx')

  cd "$srcdir"/"$_font"-"$pkgver"/

  install -m755 -d "${pkgdir}"/usr/share/licenses/"${pkgname}"
  install -m644 OFL.txt "${pkgdir}"/usr/share/licenses/"${pkgname}"

  install -m755 -d "${pkgdir}"/usr/share/fonts/"${pkgname}"
  install -Dm644 fonts/ttf/*.ttf "${pkgdir}"/usr/share/fonts/"${pkgname}"

  install -m755 -d "${pkgdir}"/etc/fonts/conf.avail
  install -m755 -d "${pkgdir}"/etc/fonts/conf.d
  install -m644 ../45-alegreya.conf \
    "${pkgdir}"/etc/fonts/conf.avail/45-alegreya.conf
  install -m644 ../90-tt-alegreya.conf \
    "${pkgdir}"/etc/fonts/conf.avail/90-tt-alegreya.conf

  cd "${pkgdir}"/etc/fonts/conf.d
  ln -s ../conf.avail/45-alegreya.conf .
  ln -s ../conf.avail/90-tt-alegreya.conf .
}

package_ttf-alegreya-sans-ibx(){
  pkgdesc="Alegreya Sans is a humanist sans serif family with a calligraphic feeling that conveys a dynamic and varied rhythm. TrueType version."
  conflicts=('otf-alegreya-sans-ibx')

  cd "$srcdir"/"$_font"-Sans-"$pkgver"

  install -m755 -d "${pkgdir}"/usr/share/licenses/"${pkgname}"
  install -m644 OFL.txt "${pkgdir}"/usr/share/licenses/"${pkgname}"

  install -m755 -d "${pkgdir}"/usr/share/fonts/"${pkgname}"
  install -Dm644 fonts/ttf/*.ttf "${pkgdir}"/usr/share/fonts/"${pkgname}"

  install -m755 -d "${pkgdir}"/etc/fonts/conf.avail
  install -m755 -d "${pkgdir}"/etc/fonts/conf.d
  install -m644 ../45-alegreya-sans.conf \
    "${pkgdir}"/etc/fonts/conf.avail/45-alegreya-sans.conf
  install -m644 ../90-tt-alegreya-sans.conf \
    "${pkgdir}"/etc/fonts/conf.avail/90-tt-alegreya-sans.conf

  cd "${pkgdir}"/etc/fonts/conf.d
  ln -s ../conf.avail/45-alegreya-sans.conf .
  ln -s ../conf.avail/90-tt-alegreya-sans.conf .
}

# Contributor: Sebastian Wolf <fatmike303@gmail.com>
pkgname=advancemame
pkgver=3.7
pkgrel=2
pkgdesc="Unofficial MAME/MESS version with an advanced video support for use with TVs, Arcade monitors, PC monitors and LCD screens. Also includes AdvanceMENU frontend."
arch=('i686' 'x86_64' 'armv7h')
url="http://www.advancemame.it"
depends=('alsa-lib' 'freetype2' 'slang')
depends_i686=('sdl2')
depends_x86_64=('sdl2')
makedepends=('imagemagick')
conflicts=('advancemenu' 'advancemess')
provides=('advancemenu' 'advancemess')
license=('GPL')
source=(
  "https://github.com/amadvance/advancemame/releases/download/v${pkgver}/${pkgname}-${pkgver}.tar.gz"
  "http://www.advancemame.it/favicon.ico"
  "${pkgname}.desktop"
)
sha256sums=(
  '36c88305dc485e85ff86854b3d8bb75c4c81fa7356f6dbfcbfd6a5e192199b2c'
  '42c33684c5c6e44269c7102dc404652721e4802bb19a495c264127bfee52a9d0'
  '6633a06a972f69142af5c3ee538b80e0705ef79eed9f5f4097811015be1cfb41'
)

build() {
  cd ${srcdir}/${pkgname}-${pkgver}
  if [ "$CARCH" == 'armv7h' ]; then # Do not link SDL into Raspberry Pi build
    ./configure CFLAGS="-O2 -fno-strict-aliasing -fno-strict-overflow -fsigned-char -fno-stack-protector" --prefix=/usr --disable-sdl --disable-sdl2
  else
    ./configure CFLAGS="-O2 -fno-strict-aliasing -fno-strict-overflow -fsigned-char -fno-stack-protector" --prefix=/usr
  fi
  make || return 1
}

package() {
  cd ${srcdir}/${pkgname}-${pkgver}

  # Install files
  make bindir="${pkgdir}/usr/bin/" \
       datadir="${pkgdir}/usr/share/" \
       mandir="${pkgdir}/usr/share/man/" \
       pkgdocdir="${pkgdir}/usr/share/doc/${pkgname}/" \
       install

  # Install menu entry
  cd ..
  convert favicon.ico ${pkgname}.png
  install -Dm644 ${pkgname}.png "$pkgdir/usr/share/pixmaps/${pkgname}.png"
  install -Dm644 ${pkgname}.desktop "$pkgdir/usr/share/applications/${pkgname}.desktop"
}


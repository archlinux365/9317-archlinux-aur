# Maintainer: Marcel Korpel <marcel[dot]korpel[at]gmail>
# Contributor: Olaf Bauer <hydro@freenet.de>

pkgname=makemkv
pkgver=1.16.7
pkgrel=1
pkgdesc="DVD and Blu-ray to MKV converter and network streamer"
arch=('i686' 'x86_64')
url="https://www.makemkv.com"
license=('LGPL' 'MPL' 'custom')
depends=('qt5-base' 'libxkbcommon-x11' 'hicolor-icon-theme' 'icu' 'ffmpeg')
if [ "$CARCH" = "x86_64" ]; then
  optdepends=('lib32-glibc: dts support'
              'ccextractor: extract CC streams from some DVD media')
fi
install=makemkv.install
source=(${url}/download/${pkgname}-bin-${pkgver}.tar.gz
        ${url}/download/${pkgname}-oss-${pkgver}.tar.gz
        makemkv.1
        makemkvcon.1
        mmdtsdec.1)
sha256sums=('623b185b6326cc366a38c75896a134759dfdf50abc849450f4109588d7b12c7b'
            '4cbd0f44ffe90e0d7aaac6d88bd458c83d1e80d0dac6e029991f3a86247f46af'
            '5573b2e4bade10d8cd258a7c235eb46f66ef8c8c97e5d5eb090c38fa0f94389b'
            'f12c0facf2f0071a9f728b138986f0a4c2b4ff6ace2dfb2e96364e215e9fda6f'
            '2a6237d3d5ce073734c658c7ec5d2141ecd0047e6d3c45d1bd594135c928878f')

build() {
  cd "${srcdir}/${pkgname}-oss-${pkgver}"
  CFLAGS="$CFLAGS -std=c++11" CC=gcc CXX=g++ ./configure --prefix=/usr
  make
}

package() {
  cd "${srcdir}/${pkgname}-oss-${pkgver}"
  make DESTDIR=\""${pkgdir}"\" install

  cd "${srcdir}/${pkgname}-bin-${pkgver}"
  install -d tmp
  echo accepted > tmp/eula_accepted
  make DESTDIR=\""${pkgdir}"\" install

  install -Dm 644 src/eula_en_linux.txt "${pkgdir}/usr/share/licenses/${pkgname}/eula_en_linux.txt"

  cd "${srcdir}/"
  install -d "${pkgdir}/usr/share/man/man1/"
  install -m 644 -t "${pkgdir}/usr/share/man/man1/" makemkv.1 makemkvcon.1 mmdtsdec.1
}

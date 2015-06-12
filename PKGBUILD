# Maintainer: si_kabayan <aaizap4p at gmail dot com>
pkgname=raccoon
pkgver=3.5
pkgrel=1
arch=('any')
pkgdesc="Alternative Google Play client to download Android APK files to your computer"
url="http://www.onyxbits.de/raccoon"
license=('Apache')
depends=('java-runtime')
source=('raccoon.sh'
  'raccoon.desktop'
  'https://github.com/onyxbits/Raccoon/raw/master/artwork/icon.svg'
  "http://www.onyxbits.de/sites/default/files/download/25/${pkgname}-${pkgver}.jar")
noextract=("${pkgname}-${pkgver}.jar")
sha512sums=('cec22f5a0e5d2342a3465acd7fa1fd9e3282a90c83c7db0bd77761edfbd98b76a1c6cbcae2864a6ff2bb86aa5b704785fe697e595a1fb25faa64f34936b13fd4'
            '99ae7ab9aa77f6de0779c9179e16dbccd36362adc710cd5d7289c473b6aff62d39a0e29be63840bc7f614e360d17b51f877ff2bf2fda938da8fa13e3f9248647'
            'f63e94b86f5b111b8833d53767b0f6eada48426e1b0e30df0137bed455c80ec37087f656e2f0cac9386f4d25441686df82c988252120fc335028d2885b8653f6'
            'e5c7d8fd65ba7ffd3b29e13af6150305dbcd79902166d023ddaf43dee2836ffc7831848e53663da1ee118dc526e129667c406e6d87e6426c2c0bad14d9aa4f9f')
package() {
  cd "$srcdir"
  mkdir -p "$pkgdir"/usr/share/java/$pkgname
  install -Dm644 icon.svg "$pkgdir"/usr/share/pixmaps/raccoon.svg
  install -Dm755 raccoon.sh "$pkgdir"/usr/bin/raccoon
  sed -e "s/latest/$pkgver/" -i "$pkgdir"/usr/bin/raccoon
  install -Dm644 ${pkgname}-${pkgver}.jar "$pkgdir"/usr/share/java/$pkgname
  install -Dm644 raccoon.desktop  "$pkgdir"/usr/share/applications/raccoon.desktop
}

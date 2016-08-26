# This is an example PKGBUILD file. Use this as a start to creating your own,
# and remove these comments. For more information, see 'man PKGBUILD'.
# NOTE: Please fill out the license field for your package! If it is unknown,
# then please put 'unknown'.

# Maintainer: Your Name <youremail@domain.com>
pkgname=substance-designer
pkgver=5.5.0
pkgrel=1
pkgdesc="Substance Designer is a node-based non-destructive application for material authoring."
arch=('x86_64')
url='https://www.allegorithmic.com/products/substance-designer'
license=('custom')
depends=('fontconfig' 'gcc-libs-multilib' 'glu' 'hicolor-icon-theme' 'libtiff3'
)
makedepends=('pkgextract')
options=('!strip')
source=('https://alg-releases.s3.amazonaws.com/public_releases/substance-designer/5.x/Substance_Designer-5.5.0-1.el6.standard.full.x86_64.rpm'
        'substance-designer-icon.png'
        'substance-designer.desktop'
        'substance-designer')
noextract=()
md5sums=('634772ee767a854200f9f04994e2c667'
         '6cbffe7041d82640a39132d8b0dbb11a'
         'c58b3078d344453b2198d3ba5946bf71'
         '55a27095415c1e013649186c1a84228a')
validpgpkeys=()

package() {
  mkdir -p ${pkgdir}/opt/Allegorithmic
  mv ${srcdir}/opt/Allegorithmic/Substance_Designer ${pkgdir}/opt/Allegorithmic

  install -Dm644 ${pkgdir}/opt/Allegorithmic/Substance_Designer/eula.txt \
                 ${pkgdir}/usr/share/licenses/${pkgname}/eula.txt
  rm ${pkgdir}/opt/Allegorithmic/Substance_Designer/eula.txt

  install -Dm644 -t "${pkgdir}/usr/share/applications" "${srcdir}/substance-designer.desktop"
  install -Dm644 -t "${pkgdir}/usr/share/icons/hicolor/256x256/apps" "${srcdir}/substance-designer-icon.png"
  install -Dm755 -t "${pkgdir}/usr/bin" "${srcdir}/substance-designer"
}


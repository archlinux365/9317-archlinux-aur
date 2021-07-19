# Maintainer: Hao Long <aur@esd.cc>
# Contributor: Ryan Dowling <ryan@ryandowling.me>

pkgname=hyper-bin
pkgver=3.1.1
pkgrel=1
pkgdesc="A terminal built on web technologies"
arch=('x86_64')
url="https://hyper.is"
license=('MIT')
conflicts=('hyper' 'hyper-appimage')
provides=('hyper')
depends=('gtk3' 'libxss' 'nss')
options=('!strip')
source=("https://github.com/zeit/hyper/releases/download/v${pkgver}/Hyper_${pkgver}_amd64.deb"
        "https://github.com/zeit/hyper/raw/v${pkgver}/LICENSE")
sha256sums=('375dcdc33f7071fba8ae2d3739cecd304fdb95b66a5d1ab2cdc3cc44cc4f2949'
            '07a1ce5a08f3f385ea6f2aef0c8246c2d9bdd7c8dd21235b76b1cb7116efc13f')

package() {
  # extract the data file (already has everything as we need it)
  tar -xf "${srcdir}/data.tar.bz2" -C "${pkgdir}"

  # link the binary
  install -d -m755 "${pkgdir}/usr/bin"
  ln -sr "${pkgdir}/opt/Hyper/resources/bin/hyper" "${pkgdir}/usr/bin/hyper"

  # License
  install -Dm644 LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
}

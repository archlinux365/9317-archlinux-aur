# Maintainer: George Rawlinson <george@rawlinson.net.nz>
# Contributor: Max Zhao <alcasa dot mz at gmail dot com>
# Contributor: Leonard König <leonard.r.koenig at googlemail dot com>

pkgname=endless-sky
pkgver=0.9.11
pkgrel=2
arch=('i686' 'x86_64')
url="http://endless-sky.github.io/"
depends=(openal libpng glew hicolor-icon-theme libjpeg-turbo sdl2 libmad)
makedepends=(scons)
optdepends=('endless-sky-high-dpi: high resolution graphics assets'
            'endless-sky-editor: map editor')
license=('GPL3' 'CCPL' 'custom:public domain')
pkgdesc="A space exploration and combat game similar to Escape Velocity"
source=("$pkgname-$pkgver.tar.gz::https://github.com/endless-sky/endless-sky/archive/v${pkgver}.tar.gz")
sha512sums=('8e56795fb327fbdc977af056929478e16243b3a4ea8d96feecb59c1c4c0265d54144b6f7c39b2edc09f3bb12dbada8be5fa075a2670f372682cb7b73d9ce6a9f')

build() {
  cd $pkgname-$pkgver
  # remove -jnproc for reproducible builds
  scons -j "$(nproc)"
}


package() {
  cd $pkgname-$pkgver

  # Install executable
  install -Dm755 -t "${pkgdir}/usr/bin" endless-sky

  # resources
  install -Dm644 credits.txt "${pkgdir}/usr/share/games/${pkgname}/credits.txt"
  install -Dm644 keys.txt "${pkgdir}/usr/share/games/${pkgname}/keys.txt"
  cp -rf data images sounds "${pkgdir}/usr/share/games/${pkgname}/"

  # .desktop
  install -Dm644 -t "${pkgdir}/usr/share/applications" endless-sky.desktop

  # icons
  for res in 16 22 24 32 48 128 256 512; do
    install -Dm644 \
      "${srcdir}/${pkgname}-${pkgver}/icons/icon_${res}x${res}.png" \
      "${pkgdir}/usr/share/icons/hicolor/${res}x${res}/apps/${pkgname}.png"
  done

  # manpage
  install -Dm644 -t "${pkgdir}/usr/share/man/man6" endless-sky.6

  # copyright
  install -Dm644 copyright "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# vim:set ts=2 sw=2 et:

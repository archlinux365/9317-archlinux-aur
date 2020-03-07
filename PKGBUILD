# Maintainer: Andy Kluger <AndyKluger@gmail.com>
# Contributor: Markus Weimar <mail@markusweimar.de>
pkgname=ttf-iosevka-term-custom-git
pkgver=r1455.ac2576fa
pkgrel=1
pkgdesc='A slender monospace sans-serif and slab-serif typeface inspired by Pragmata Pro, M+ and PF DIN Mono.'
arch=('any')
url='https://be5invis.github.io/Iosevka/'
license=('custom:OFL')
makedepends=('git' 'nodejs' 'npm' 'ttfautohint' 'otfcc')
depends=('fontconfig' 'xorg-font-utils')
conflicts=()
provides=()
source=(
  'git+https://github.com/be5invis/Iosevka'
  'private-build-plans.toml.example'
  'toothless-G.patch'
)
sha256sums=(
  'SKIP'
  '287ecd7b677d384bcc2e29f6bf789328e5da5789d2e179d4bc516a0ca1cad0d8'
  '56d1d97b421ab462d71875ecadf57d65ee45fe26edee50922ae9ae96350cff52'
)

pkgver() {
  cd Iosevka
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  buildplans="$HOME/.config/iosevka/private-build-plans.toml"
  if [[ -f "$buildplans" ]]; then
    cp "$buildplans" Iosevka/
  else
    echo ">>> $buildplans not found, using private-build-plans.toml.example"
    cp private-build-plans.toml.example Iosevka/private-build-plans.toml
  fi

  cd Iosevka

  # patch -p1 < ../toothless-G.patch

  # Uncomment the above line to get back the smoother capital G,
  # as seen in this image (look for "LIGHT"):
  # https://raw.githubusercontent.com/be5invis/Iosevka/47023ab4058987f58844f6308d8175e735106b8a/images/preview-all.png
}

build() {
  cd Iosevka
  npm install
  npm update
  npm run build -- ttf::iosevka-term-custom
}

package() {
  install -d "${pkgdir}/usr/share/fonts/TTF"
  install -m644 Iosevka/dist/*/ttf/*.ttf "${pkgdir}/usr/share/fonts/TTF/"
  install -d "${pkgdir}/usr/share/licenses/${pkgname}"
  install -m644 Iosevka/LICENSE.md "${pkgdir}/usr/share/licenses/${pkgname}/"
}

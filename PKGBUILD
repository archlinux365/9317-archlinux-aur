# Maintainer: Malcolm Mallardi <mdmallardi at gmail dot com>
# Contributor: Wouter Wijsman <wwijsman at live dot nl>

pkgname=dosbox-staging-git
_pkgname=dosbox-staging
pkgver=0.78.0.alpha.258.gf8fecfda
pkgrel=1
pkgdesc="A modernized DOSBox project using current development practices and tools, fixing issues, adding features that better support today's systems"
arch=('any')
url="https://github.com/dosbox-staging/dosbox-staging"
license=('GPL2')
depends=('sdl2' 'sdl2_net' 'opusfile'  'alsa-lib' 'fluidsynth')
optdepends=('libpng' 'ncurses')
makedepends=('meson' 'gcc' 'gzip')
provides=("dosbox")
conflicts=("dosbox")
source=(
  "git+https://github.com/dosbox-staging/${_pkgname}.git"
)
md5sums=(
  'SKIP'
)

prepare() {
  cd "$srcdir/${_pkgname}"
  FLAGS="-Ofast"
  git submodule update --init --recursive
  meson setup -Dbuildtype=release -Db_lto=true -Dc_args="$FLAGS" -Dcpp_args="$FLAGS" -Db_asneeded=true -Dstrip=true -Ddefault_library=static -Dfluidsynth:enable-floats=true -Dfluidsynth:try-static-deps=true release
}

pkgver() {
  cd "$srcdir/${_pkgname}"
  git describe | sed -e 's/-/./g' -e 's/^v//g'
}

build() {
  cd "$srcdir/${_pkgname}"
  meson compile -C release

  # Add current commit info to the README
  sed -i "s|%GIT_COMMIT%|$(git rev-parse master)|" docs/README.template
  sed -i "s|%GIT_BRANCH%|master|" docs/README.template
  sed -i "s|%GITHUB_REPO%|dreamer/dosbox-staging|" docs/README.template
}

package() {
  # gzip the man file
  gzip -f "$srcdir/${_pkgname}/docs/dosbox.1" >  "$srcdir/${_pkgname}/docs/dosbox.1.gz"

  # install all files
  install -Dm 755 "$srcdir/${_pkgname}/release/dosbox" "$pkgdir/usr/bin/dosbox"
  install -Dm 644 "$srcdir/${_pkgname}/docs/dosbox.1.gz" "$pkgdir/usr/share/man/man1/dosbox.1.gz"

  # desktop file and icon
  install -Dm 644 "$srcdir/${_pkgname}/contrib/icons/dosbox-staging.svg" "$pkgdir/usr/share/icons/hicolor/scalable/apps/dosbox-staging.svg"
  install -Dm 644 "$srcdir/${_pkgname}/contrib/linux/dosbox-staging.desktop" "$pkgdir/usr/share/applications/dosbox-staging.desktop"

  # dosbox-staging documents
  install -Dm 644 "$srcdir/${_pkgname}/docs/README.template" "$pkgdir/usr/share/doc/${_pkgname}/README"
  install -Dm 644 "$srcdir/${_pkgname}/docs/README.video" "$pkgdir/usr/share/doc/${_pkgname}/video.txt"
  install -Dm 644 "$srcdir/${_pkgname}/README" "$pkgdir/usr/share/doc/${_pkgname}/manual.txt"

  }

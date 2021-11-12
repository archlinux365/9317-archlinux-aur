# Maintainer: willemw <willemw12@gmail.com>

# NOTE This "PIP install" package is similar to a VCS package:
#      it has a pkgver() function and a reinstall will update the package.
#      That is the only reason why this package ends on -git.

pkgname=sickchill-git
pkgver=2021.11.10.r0
pkgrel=1
pkgdesc="Automatic video library manager for TV shows"
arch=('any')
url="https://sickchill.github.io"
license=('GPL3')
makedepends=('jq' 'python-virtualenv')
optdepends=('libmediainfo: determine the resolution of MKV and AVI files with no resolution in the filename'
            'unrar: for RAR files')
provides=(${pkgname%-git})
conflicts=(${pkgname%-git})
options=('!strip')
install=$pkgname.install
source=('sickchill.service'
        'sickchill.sysusers'
        'sickchill.tmpfiles')
sha256sums=('a7bb9f2406721f9d5eb66dab954bfc54f6bfe74fa6efd646e1006903e3e42bc8'
            '1467f3613f5f25e678e373465dc09a28230f7cdf07af23875a0896a509c3b850'
            '2069f15e18fc7dd0f0f25b623f2067fc9028b1ca4122021a62364aa39914f88f')

pkgver() {
  local version
  version="$(curl -s "https://pypi.org/pypi/${pkgname%-git}/json" | jq --raw-output --join-output '.info.version')"
  printf "%s.r0" "$version" | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  #python -m venv build
  export XDG_CACHE_HOME=cache/pip
  VIRTUALENV_OVERRIDE_APP_DATA=cache/virtualenv virtualenv build
  PIP_CONFIG_FILE=/dev/null build/bin/pip install \
      --ignore-installed --isolated --cache-dir=cache --prefix=. --root=build \
      --default-timeout=60 --disable-pip-version-check --no-warn-script-location --progress-bar=off \
      sickchill

  sed -i '1s|.*|#!/opt/sickchill/app/bin/python|' build/bin/SickChill
}

package() {
  install -Dm644 sickchill.service -t "$pkgdir/usr/lib/systemd/system"
  install -Dm644 sickchill.sysusers "$pkgdir/usr/lib/sysusers.d/sickchill.conf"
  install -Dm644 sickchill.tmpfiles "$pkgdir/usr/lib/tmpfiles.d/sickchill.conf"

  install -dm755 "$pkgdir/opt/sickchill"
  cp -a build "$pkgdir/opt/sickchill/app"
}


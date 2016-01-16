# Maintainer: Stefan Auditor <stefan.auditor@erdfisch.de>

_pkgname=drush
pkgname=${_pkgname}-git-alternative
pkgver=8.0.2.r14.g30f88b2
pkgrel=1
pkgdesc="Drush is a command line shell and Unix scripting interface for Drupal"
arch=('any')
url="https://github.com/drush-ops/${_pkgname}"
license=('GPL')
depends=('php')
makedepends=("php-box" "php-composer" "git")
provides=("${_pkgname}=${pkgver}")
conflicts=("${_pkgname}")
source=("${_pkgname}"::"git+https://github.com/drush-ops/${_pkgname}.git")
sha512sums=('SKIP')

pkgver() {
  cd "${_pkgname}"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "${srcdir}/${_pkgname}"
  php /usr/bin/composer install --no-dev
  cp box.json.dist box.json
  php -d phar.readonly=Off /usr/bin/php-box build
}

package() {
  cd "${_pkgname}"

  install -m644 "examples/example.aliases.drushrc.php" "${pkgdir}/etc/${_pkgname}/aliases.drushrc.php"
  install -m644 "examples/example.drush.ini" "${pkgdir}/etc/${_pkgname}/drush.ini"
  install -m644 "examples/example.drushrc.php" "${pkgdir}/etc/${_pkgname}/drushrc.php"

  install -D -m755 "${_pkgname}.phar" "${pkgdir}/usr/share/webapps/bin/${_pkgname}.phar"
  ln -s "/usr/share/webapps/bin/${_pkgname}.phar" "${pkgdir}/usr/bin/${_pkgname}"
}

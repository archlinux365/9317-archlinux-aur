# Maintainer: Jonas Heinrich <onny@project-insanity.org>
# Contributor: Jonas Heinrich <onny@project-insanity.org>
# Contributor: Sergej Pupykin <pupykin.s+arch@gmail.com>

pkgname=nextcloud-app-calendar-git
epoch=1
pkgver=2.0.0.r1.g6a8575a0
pkgrel=1
pkgdesc="Calendar app for nextcloud"
arch=('any')
url="http://nextcloud.com"
license=('AGPL')
depends=('nextcloud')
makedepends=('npm' 'git')
conflicts=('nextcloud-app-calendar')
provides=('nextcloud-app-calendar')
options=('!strip')
source=("git+https://github.com/nextcloud/calendar.git")
sha512sums=('SKIP')

pkgver() {
  cd "calendar"
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-beta/beta/g;s/-rc/rc/g;s/-/./g' | cut -d "v" -f2
}

build() {
  cd "${srcdir}/calendar"
  # -j1 so that `npm install` runs before other steps
  make -j1 dev-setup build-js-production appstore
}

package() {
  install -d "$pkgdir"/usr/share/webapps/nextcloud/apps
  tar -xvf "${srcdir}/calendar/build/artifacts/appstore/calendar.tar.gz" -C "${pkgdir}/usr/share/webapps/nextcloud/apps/"
  # npm polishments
  chown -R root:root "$pkgdir"
  find "${pkgdir}"/usr -type d -exec chmod 755 {} +
  find "${pkgdir}"/usr -type f -exec chmod 644 {} +
}

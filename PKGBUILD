# Maintainer: 
# Contributor: Felix Golatofski <contact@xdfr.de>
# Contributor: Chih-Hsuan Yen <yan12125@gmail.com>
# Contributor: Jonas Heinrich <onny@project-insanity.org>
# Contributor: Sergej Pupykin <arch+pub@sergej.pp.ru>

pkgname=nextcloud-app-tasks-git
pkgver=0.9.5.r2181.g776a476d
pkgrel=2
pkgdesc="Enhanced task app for NextCloud"
arch=('any')
url="https://github.com/nextcloud/tasks"
license=('AGPL')
depends=('nextcloud')
makedepends=('yarn' 'zip' 'git' 'phantomjs' 'rsync')
provides=("nextcloud-app-tasks=$pkgver")
conflicts=('nextcloud-app-tasks')
options=('!strip')
source=("git+https://github.com/nextcloud/tasks.git")
sha512sums=('SKIP')

pkgver() {
  cd "${srcdir}/tasks"
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^v//'
}

build() {
  cd "${srcdir}/tasks" 

  make all appstore
}

package() {
  cd "${srcdir}/tasks" 

  install -Ddm755 "${pkgdir}/usr/share/webapps/nextcloud/apps"
  cp -dr --no-preserve=ownership build/appstore/tasks "${pkgdir}/usr/share/webapps/nextcloud/apps"
}

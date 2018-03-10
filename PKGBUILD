# Maintainer: Sonic-Y3k <sonic.y3k@googlemail.com>
# Contributor: Donald Webster <fryfrog@gmail.com>
# Contributor: whiskerz007 <whiskerz007@gmail.com>
# Based on package by: Denis Saintilma <1068des@gmail.com>

pkgname=tautulli-beta
pkgver=2.0.22
pkgrel=2
pkgdesc="A Python based monitoring and tracking tool for Plex Media Server."
arch=('any')
url="https://github.com/Tautulli/Tautulli"
license=('GPL')
makedepends=('curl')
depends=('python2')
conflicts=('plexpy-git' 'tautulli' 'plexpy')
provides=("tautulli")
replaces=("plexpy")
install='tautulli.install'
source=("$pkgname-$pkgver.tar.gz::https://github.com/Tautulli/Tautulli/archive/v$pkgver-beta.tar.gz"
        'tautulli.install'
        'tautulli.service'
        'tautulli.sysusers')

sha256sums=('f6baa56f8ba3a66caab8eef3f59e7335908502d36ace1508cc3cfdbc3f7809b7'
            '7e959ab5cd7343c1fd21fbd4e14d0740a391b67b01d421ec8c96a7d52527a1d4'
            'd755d5eae3d6b7332505654cc196406eeddefa08f90399c875118b6c295f5dd4'
            'e6bb046d1022f0d2623f42c092f993c395a938a1f2a16c2986e76506bbfb54f8')

package() {
  cd "${srcdir}/Tautulli-${pkgver}-beta"
  install -Dm755 PlexPy.py "${pkgdir}/usr/lib/tautulli/PlexPy.py"
  install -Dm755 Tautulli.py "${pkgdir}/usr/lib/tautulli/Tautulli.py"
  install -Dm644 pylintrc  "${pkgdir}/usr/lib/tautulli/"
  install -Dm644 CHANGELOG.md "${pkgdir}/usr/lib/tautulli/"
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/tautulli/LICENSE"

  cp -a data/ lib/ plexpy/ "${pkgdir}/usr/lib/tautulli/"

  install -Dm644 "${srcdir}/tautulli.service" "${pkgdir}/usr/lib/systemd/system/tautulli.service"
  install -Dm644 "${srcdir}/tautulli.sysusers" "${pkgdir}/usr/lib/sysusers.d/tautulli.conf"

  msg2 "To migrate your plexpy config and db, run the following commands:"
  msg2 "  sudo mv /var/lib/plexpy/* /var/lib/tautulli/"
  msg2 "  sudo sed 's#\/var\/lib\/plexpy#\/var\/lib\/tautulli#g' -i /var/lib/tautulli/config.ini"
  msg2 "  sudo chown -R tautulli: /var/lib/tautulli"
}


# Maintainer : Dobroslaw Kijowski [dobo] <dobo90_at_gmail.com>
# Contributor: Valentin Hăloiu <vially.ichb+aur [at] gmail.com>
# Contributor: Étienne Deparis <etienne [at] depar.is>
# Contributor: Yannik Stein <yannik.stein [at] gmail.com>
# Submitter: vbPadre <vbpadre [at] gmail.com>

pkgname=ajenti
pkgver=1.2.22.24
pkgrel=1
pkgdesc='An easy server administration frontend.'
arch=(any)
url='http://ajenti.org/'
license=(LGPL)
depends=(python2-gevent-socketio python2-lxml python2-passlib python2-psutil python2-daemon
         python2-catcher python2-reconfigure python2-pillow python2-exconsole)
makedepends=(python2-setuptools)
#makedepends=(coffee-script lessc yuicompressor)
optdepends=('python2-dbus: services plugin dependency' 'python2-ldap: LDAP and Active Directory user synchronization support')
install=ajenti.install
source=(https://pypi.python.org/packages/source/a/${pkgname}/${pkgname}-${pkgver}.tar.gz
        ajenti.service)
md5sums=(5fa0a56b5a1251cba7625abb682e2d78
         74e13666013eea439b08e6fcbeef3a6d)
backup=(etc/ajenti/config.json)

prepare() {
  cd ${srcdir}
  cd ${srcdir}/${pkgname}-${pkgver}
  
  msg2 'Replacing python shebang by python2 shebang...'
  find . -type f -exec sed -i \
    -e '1s|^#!/usr/bin/env python$|#!/usr/bin/env python2|' \
    -e '1s|^#!/usr/bin/python$|#!/usr/bin/env python2|' \
    "{}" \;
}

build() {
  cd ${srcdir}/${pkgname}-${pkgver}

  python2 setup.py build
  #make clean
  #make tgz

  #cd ${srcdir}/${pkgname}-${pkgver}/dist
  #tar xzf ${pkgname}-${pkgver}.tar.gz
}

package() {
  cd ${srcdir}/${pkgname}-${pkgver}
  # cd ${srcdir}/${pkgname}-${pkgver}/dist/${pkgname}-${pkgver}
  
  python2 setup.py install --root=${pkgdir} --optimize=1
 
  # Fix config file permissions
  chmod 0640 ${pkgdir}/etc/ajenti/config.json

  rm -r ${pkgdir}/etc/init.d

  install -D -m 644 ${srcdir}/ajenti.service ${pkgdir}/usr/lib/systemd/system/ajenti.service
}

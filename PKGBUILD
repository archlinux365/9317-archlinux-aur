# Maintainer: Christian Schendel <doppelhelix@gmail.com>

# Manjaro credits
# Maintainer: Mark Wagie <mark@manjaro.org>
# Contributor: Helmut Stult

# Arch credits:
# Contributor: Thomas Oster <thomas.oster@rwth-aachen.de>
# Maintainer: Zeph <zeph33@gmail.com>

pkgbase='rabbitvcs-git'

pkgname=('rabbitvcs-git'
         'rabbitvcs-cli-git'
         'rabbitvcs-caja-git'
         'rabbitvcs-nautilus-git'
         'rabbitvcs-nemo-git'
         'rabbitvcs-thunar-git')

pkgver=r1866.1b833c9
pkgrel=1
pkgdesc="A set of graphical tools written to provide simple and straightforward access to the version control systems you use"
arch=('any')
url="https://github.com/rabbitvcs/rabbitvcs"
source=("${pkgbase%-git}::git+${url}.git"
        "${pkgbase%-git}-ignore-post-install.patch"
        '328.patch')
makedepends=('git'
             'python-setuptools')

license=('GPL')
sha256sums=('SKIP'
            'b24d913ff1317281bab5bdcf7fb35e7f78d6cd4d43d0f4ce08d63330a1293c8b'
            '47ee39a0288c20183a4d8375fe32d783b886737501dac02ac666be3188e8605e')

pkgver() {
  cd "${srcdir}/${pkgbase%-git}"
  ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

prepare() {
  cd "${srcdir}/${pkgbase%-git}"
  patch -Np1 -i "${srcdir}/${pkgbase%-git}-ignore-post-install.patch"
  patch -Np1 -i "$srcdir/328.patch"
}

build() {
  cd "$srcdir/${pkgbase%-git}"
  python setup.py build 
}

package_rabbitvcs-git(){
  depends=('git'
           'gtk3'
           'python-configobj'
           'python-dulwich'
           'python-gobject'
           'python-pysvn'
           'python-simplejson'
           'tk')
  optdepends=('meld: graphical diff tool'
              'python-pygments: For syntax highlighting'
              'python-gtkspellcheck: For spell checking of commit messages'
              'hunspell: For spell checking of commit messages')
  provides=('rabbitvcs')
  conflicts=('rabbitvcs')

  cd "$srcdir/${pkgbase%-git}"
  python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}

package_rabbitvcs-cli-git() {
  pkgdesc="A command line client for RabbitVCS"
  depends=('rabbitvcs')
  provides=('rabbitvcs-cli')
  conflicts=('rabbitvcs-cli')

  cd "$srcdir/${pkgbase%-git}"
  install -Dm755 "clients/cli/${pkgbase%-git}" -t "$pkgdir/usr/bin"
}

package_rabbitvcs-caja-git() {
  pkgdesc="Caja extension for RabbitVCS"
  depends=('dbus-python' 'python-caja' 'rabbitvcs')
  provides=('rabbitvcs-caja')
  conflicts=('rabbitvcs-caja')
  install="${pkgname%-git}.install"

  cd "$srcdir/${pkgbase%-git}"
  install -Dm644 clients/caja/RabbitVCS.py "$pkgdir/usr/share/caja-python/extensions"
}

package_rabbitvcs-nautilus-git() {
  pkgdesc="Nautilus extension for RabbitVCS"
  depends=('dbus-python'
           'python-nautilus'
           'rabbitvcs')
  provides=('rabbitvcs-nautilus')
  conflicts=('rabbitvcs-nautilus')
  install="${pkgname%-git}.install"

  cd "$srcdir/${pkgbase%-git}"
  install -Dm644 clients/nautilus/RabbitVCS.py -t \
    "$pkgdir/usr/share/nautilus-python/extensions"
}

package_rabbitvcs-nemo-git() {
  pkgdesc="Nemo extension for RabbitVCS"
  depends=('dbus-python'
           'nemo-python'
           'rabbitvcs')
  provides=('rabbitvcs-nemo')
  conflicts=('rabbitvcs-nemo')
  install="${pkgname%-git}.install"

  cd "$srcdir/${pkgbase%-git}"
  install -Dm644 clients/nemo/RabbitVCS.py -t \
    "$pkgdir/usr/share/nemo-python/extensions"
}

package_rabbitvcs-thunar-git() {
  pkgdesc="Thunar extension for RabbitVCS"
  depends=('dbus-python'
           'rabbitvcs'
           'thunarx-python')
  install="${pkgname%-git}.install"

  cd "$srcdir/${pkgbase%-git}"
  install -Dm644 clients/thunar/RabbitVCS.py -t \
    "$pkgdir/usr/share/thunarx-python/extensions"
}

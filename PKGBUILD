# Maintainer:	Batuhan Baserdem <lastname dot firstname at gmail>

# AUR dependencies (*: I maintain, +: I co-maintain)
#+python-dbus-next
# python-pyro5
# python-sdnotify
#*python-survey
#*python-wrapio (as dependency for python-survey)
pkgname='maestral'
provides=('maestral')
conflicts=('maestral-git')
pkgver=1.4.3
pkgrel=1
pkgdesc='A light-weight and open-source CLI Dropbox client.'
arch=('x86_64')
url="https://github.com/SamSchott/${pkgname}"
license=('MIT')
source=("${url}/archive/v${pkgver}.tar.gz" "maestral@.service")
makedepends=('python-setuptools')
depends=(
    'python>=3.9'
    'python-click>=7.1.1'
    'python-desktop-notifier>=3.1.2'
    'python-dropbox>=10.9.0'        'python-dropbox<12.0'
    'python-fasteners>=0.15'
    'python-keyring>=22'
    'python-keyrings-alt>=3.1.0'
    'python-packaging'
    'python-pathspec>=0.5.8'
    'python-pyro5>=5.10'
    'python-requests>=2.16.2'
    'python-sdnotify>=0.3.2'
    'python-setuptools'
    'python-survey>=3.2.2'          'python-survey<4.0'
    'python-watchdog'
    'python-systemd'
    'python-wheel')
optdepends=('maestral-qt: Qt interface for the maestral daemon')
md5sums=('75883c2d356df51087e6e2f5be935480'
         '25d1041b158c1b1ea42d7290c9c0f91d')

prepare() {
    sed -i 's|watchdog>=2\.0\.1|watchdog|' "${pkgname}-${pkgver}/setup.py"
}

build() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    python setup.py build
}

package() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    # Run python setup function
    python setup.py install --root="${pkgdir}/" --optimize=1 --skip-build
    # Install the licence
    install -Dm644 "${srcdir}/${pkgname}-${pkgver}/LICENSE.txt" \
    	"${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    # Remove icons
    rm -r "${pkgdir}/usr/share/icons"
    # Install the systemd unit provided
    install -Dm644 "${srcdir}/maestral@.service" \
        "${pkgdir}/usr/lib/systemd/user/maestral@.service"
}

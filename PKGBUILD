# Maintainer: Hao Long <aur@esd.cc>

pkgname=archivebox
pkgver=0.4.13
pkgrel=2
pkgdesc="The open source self-hosted web archive"
arch=("any")
url="https://github.com/pirate/ArchiveBox"
license=('MIT')
provides=('archivebox')
conflicts=('archivebox')
depends=('python-django' 'python-mypy_extensions' 'wget'
         'python-crontab' 'python-atomicwrites' 'python-dateparser'
         'python-requests' 'python-base32_crockford' 'python-w3lib'
         'chromium' 'python-django-extensions' 'git'
         'youtube-dl' 'curl' 'single-file-git')
makedepends=('python-setuptools')
source=("https://files.pythonhosted.org/packages/source/${pkgname::1}/${pkgname}/${pkgname}-${pkgver}.tar.gz")
sha256sums=('69ec4e65a64db145bfcdd30a0362ce43a328f71b1f8b572402ca247396f6168b')

build() {
  cd ${pkgname}-${pkgver}
  python setup.py build
}

package() {
  cd ${pkgname}-${pkgver}
  python setup.py install --root="$pkgdir" --optimize=1 --skip-build
  install -Dm644 LICENSE -t ${pkgdir}/usr/share/licenses/${pkgname}/
}

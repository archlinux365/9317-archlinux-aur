# Maintainer: Emanuele 'Lele aka eldios' Calo' <lele@sshadm.in>
# Contributor: Emanuele 'Lele aka eldios' Calo' <lele@sshadm.in>

pkgname='trufflehogregexes'
pkgver=0.0.4
pkgrel=0
pkgdesc="These regexes power truffleHog."
url="https://github.com/dxa4481/truffleHogRegexes"
arch=('any')
license=('GPL-2.0')
depends=('python')
makedepends=()
provides=('python-trufflehogregexes')
source=("https://files.pythonhosted.org/packages/85/0d/52c6b4b2362c6330ddde58e2fa899937e4084916ac1918851d19bca4d5c8/truffleHogRegexes-${pkgver}.tar.gz")
sha512sums=('02e6e6ad741c75a1284b39db75e511517e8bd34960214db60ebdcde5f953fd05517c4806cb1bef7bfb9935f4cfc1cde813649a6eac246004c734e9398b91d7d5')

package() {
  cd "${srcdir}/truffleHogRegexes-${pkgver}"
  python setup.py install --root="$pkgdir/"
}

# vim:set ts=2 sw=2 et:

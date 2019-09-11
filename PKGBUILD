# Maintainer: Jorengarenar

pkgname=quiterss-backup
pkgver=0.6.3
pkgrel=1
pkgdesc='Simple script, which provides better than the build-in backup options for QuiteRSS'
arch=('any')
url='https://joren.ga'
license=('MIT')
source=("${pkgname}::https://github.com/Jorengarenar/${pkgname}/archive/${pkgver}.tar.gz")
sha512sums=(SKIP)

package() {
    cd "$srcdir/$pkgname-${pkgver}"
    mkdir -p "${pkgdir}/usr/bin"
    install -Dm755 $pkgname "${pkgdir}/usr/bin"
    mkdir -p "${pkgdir}/usr/share/bash-completion/completions/${pkgname}"
	install -Dm644 bash_completion "${pkgdir}/usr/share/bash-completion/completions/${pkgname}"
}

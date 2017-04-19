# Maintainer: Daniel Egeberg <daniel.egeberg@gmail.com>
pkgname="nzbhydra"
pkgver=0.2.214
pkgrel=2
pkgdesc="Meta search for NZB indexers"
arch=('any')
url="https://github.com/theotherp/nzbhydra"
license=('Apache')
depends=('python2')
optdepends=('python2-lxml: faster result processing')
conflicts=('nzbhydra-git')
install='nzbhydra.install'
provides=('nzbhydra')
source=("$pkgname-$pkgver.tar.gz::https://github.com/theotherp/nzbhydra/archive/$pkgver.tar.gz"
        'nzbhydra.sh'
        'nzbhydra.service'
        'nzbhydra.install'
        'nzbhydra.sysusers')

sha256sums=('81d01dc285988976640a1de484d677e9950dcb80a627a5bce8929989448fbe2f'
            '91552953d0d956101136cd3165f217de4d14eb65042b7dd3e9a09c8657319436'
            '0643666218ceb8b35a65c9b420de26ea9e334fccfc39472f698a090d2056176a'
            'f1d2028ef593ce367438fed6520d4387482da74e45aacafc72c028a2a0337614'
            '0c901b44980cdfcfd62a49883ea2edd954e8f60711f10b49958f9a402a7ad2d0')

package() {
    cd "${srcdir}"

    install -d -m 755 "${pkgdir}/usr/lib/nzbhydra"
    cp -dpr --no-preserve=ownership "${srcdir}/nzbhydra-${pkgver}/"* "${pkgdir}/usr/lib/nzbhydra"

    msg2 "Precompiling python files"
    python2 -m compileall -q "${pkgdir}/usr/lib/nzbhydra"

    install -D -m 755 "${srcdir}/nzbhydra.sh" "${pkgdir}/usr/bin/nzbhydra"

    install -d -m 755 "${pkgdir}/var/lib/nzbhydra"

    mkdir -m 755 "${pkgdir}/var/lib/nzbhydra/flask_session"
    touch "${pkgdir}/var/lib/nzbhydra/nzbhydra.log"
    touch "${pkgdir}/var/lib/nzbhydra/nzbhydra.pid"

    chmod 644 "${pkgdir}/var/lib/nzbhydra/nzbhydra.log"
    chmod 644 "${pkgdir}/var/lib/nzbhydra/nzbhydra.pid"

    ln -s "../../../var/lib/nzbhydra/nzbhydra.log" "${pkgdir}/usr/lib/nzbhydra/nzbhydra.log"
    ln -s "../../../var/lib/nzbhydra/nzbhydra.pid" "${pkgdir}/usr/lib/nzbhydra/nzbhydra.pid"
    ln -s "../../../var/lib/nzbhydra/flask_session" "${pkgdir}/usr/lib/nzbhydra/flask_session"

    install -d -m 750 "${pkgdir}/etc/nzbhydra"

    install -D -m 644 "${srcdir}/nzbhydra.service" "${pkgdir}/usr/lib/systemd/system/nzbhydra.service"
    install -D -m 644 "${srcdir}/nzbhydra.sysusers" "${pkgdir}/usr/lib/sysusers.d/nzbhydra.conf"
}

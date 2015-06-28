# Maintainer: Erhan SAHIN <erhan@ssahin.net>

pkgname=neutron-vpnaas-kilo
pkgver=2015.1.0
pkgrel=2
pkgdesc="Neutron VPN as a Service service"
arch=(any)
install=neutron-vpnaas.install
url=https://launchpad.net/neutron
license=(Apache)
depends=('python2-pbr>=0.6'
         'python2-pbr<1.0'
         'python2-requests>=2.2'
         'python2-jinja>=2.6'
         'python2-netaddr>=0.7.12'
         'python2-sqlalchemy-kilo'
         'python2-alembic>=0.7.2'
         'python2-six>=1.9.0'
         'python2-oslo-concurrency-kilo'
         'python2-oslo-config-kilo'
         'python2-oslo-db-kilo'
         'python2-oslo-log-kilo'
         'python2-oslo-messaging-kilo'
         'python2-oslo-serialization-kilo'
         'python2-oslo-utils-kilo'
         'neutron-kilo')
makedepends=(python2-setuptools)
source=("https://launchpad.net/neutron/kilo/${pkgver}/+download/neutron-vpnaas-${pkgver}.tar.gz"
        "neutron-vpnaas-agent.service")
md5sums=('1d97486d2ba4301db561abf0ff40fb8a'
         '67f283747d949f6e1181ab421acdd826')

build() {
    cd neutron-vpnaas-${pkgver}/
    python2 setup.py build
}

package() {
    cd neutron-vpnaas-${pkgver}/
    python2 setup.py install --root="${pkgdir}" --optimize=1
    mv "${pkgdir}"/usr/etc "${pkgdir}"/
    install -Dm644 LICENSE "${pkgdir}"/usr/share/licenses/neutron-vpnaas/LICENSE
    install -D -m 644 ${srcdir}/neutron-vpnaas-agent.service ${pkgdir}/usr/lib/systemd/system/neutron-vpnaas-agent.service
}


# Maintainer: Ivan Shapovalov <intelfx@intelfx.name>

pkgname=matrix-synapse-git
pkgver=0.34.1.1.r16.g34b25dcc8
pkgrel=1

pkgdesc="Matrix reference homeserver"
url="https://github.com/matrix-org/synapse"
arch=('any')
license=('Apache')

depends=('python-jsonschema' 'python-twisted' 'python-service-identity'
         'python-pyopenssl' 'python-yaml' 'python-pyasn1' 'python-pynacl'
         'python-daemonize' 'python-bcrypt' 'python-frozendict'
         'python-pillow' 'python-ujson'
         'python-pysaml2' 'python-setuptools'
         'python-systemd' 'python-unpaddedbase64' 'python-canonicaljson'
         'python-signedjson' 'python-pymacaroons-pynacl'
         'python-service-identity' 'python-msgpack'
         'python-phonenumbers' 'python-prometheus_client'
         'python-attrs' 'python-netaddr' 'python-sortedcontainers'
         'python-treq' 'python-psutil'
         'systemd')
makedepends=('python-mock' 'git')
checkdepends=('python-lxml' 'python-jinja')
optdepends=('python-psycopg2: PostgreSQL support'
            'python-lxml: URL previewing'
            'python-jinja: e-mail notifications'
            'python-bleach: e-mail notifications'
            'python-matrix-synapse-ldap3: LDAP support'
            'python-psutil: metrics')

source=("git://github.com/matrix-org/synapse.git#branch=develop"
        'synapse.service'
        'sysusers-synapse.conf'
        '0001-Bump-python_dependencies.patch')

md5sums=('SKIP'
         '276a99050f40601089255ea168bb7620'
         'ecd9f66fb57fe1a2e1e2df07a460a35b'
         '6a7ed53d1891acd37b13422b78f1cfbb')

backup=('etc/synapse/log_config.yaml')
install=synapse.install

provides=('matrix-synapse')
conflicts=('matrix-synapse')
replaces=('matrix-synapse-py3-git')

prepare() {
	cd synapse
	patch -p1 <"$srcdir"/0001-Bump-python_dependencies.patch
}

pkgver() {
	cd synapse
	git describe --long --tags | sed 's/^v//;s/-rc/rc/;s/-r/./;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
	cd synapse
	python setup.py build
}

check() {
	cd synapse
	PYTHONPATH=. trial3 tests
}

package() {
	install -Dm644 synapse.service "$pkgdir"/usr/lib/systemd/system/synapse.service

	cd synapse
	python setup.py install --root "$pkgdir" --optimize=1 --skip-build

	install -dm755 -o 198 -g 198 "$pkgdir"/etc/synapse
	install -Dm644 contrib/systemd/log_config.yaml "$pkgdir"/etc/synapse/log_config.yaml
	install -Dm644 "$srcdir"/sysusers-synapse.conf "$pkgdir"/usr/lib/sysusers.d/synapse.conf
}

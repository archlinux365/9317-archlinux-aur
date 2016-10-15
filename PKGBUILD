# Maintainer: Konstantin Shalygin <k0ste@k0ste.ru>
# Contributor: Konstantin Shalygin <k0ste@k0ste.ru>

pkgname='ovirt-engine-cli'
pkgver='3.6.9.1'
pkgrel='1'
pkgdesc='oVirt Engine Command Line Interface'
arch=('any')
url="http://ovirt.org/develop/release-management/features/infra/cli"
depends=('python2' 'python2-setuptools' 'python2-ply' 'python2-kitchen' 'ovirt-engine-sdk-python')
optdepends=('virtviewer: SPICE and VNC remote console support')
makedepends=('python2' 'python2-setuptools' 'python2-ply' 'python2-kitchen')
license=('ASL 2.0')
source=("http://resources.ovirt.org/pub/ovirt-master-snapshot/src/${pkgname}/${pkgname}-${pkgver}.tar.gz"
	"add_password_option.patch")
sha256sums=('718c2ed1f32c66b3cf3b35a6fd4444432a7d801f61eee49dc23e355f6d7adb3b'
            'a973931155cefd35ad5686b0a6cfe3ae595c2bfbb8ecaa152790b10966013370')

prepare() {
  cd "${srcdir}/${pkgname}/src/ovirtcli/infrastructure"
  patch -p0 -i "${srcdir}/add_password_option.patch"
}

build() {
  cd "${srcdir}/${pkgname}"
  python2 setup.py build
}

package() {
  cd "${srcdir}/${pkgname}"
  python2 setup.py install -O1 --skip-build --root="${pkgdir}"
}

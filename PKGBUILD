# Maintainer: fordprefect <fordprefect@dukun.de>
pkgname=zerodb-server
pkgver=0.1.25
pkgrel=1
pkgdesc="An end-to-end encrypted database protocol server"
url="http://www.zerodb.io/"
arch=('any')
license=('AGPL')
depends=("python-click")
source=("https://pypi.python.org/packages/d4/a2/353be56544fef86e95d03c609e5d3b232379baa983b7f54cf297583883fe/zerodb-server-0.1.25.tar.gz")
md5sums=('487f9387cfe62990f6b988d3e5559176')
 
package() {
    cd "${srcdir}/zerodb-server-$pkgver"
    python setup.py install --root="${pkgdir}/" --optimize=1
}

# Maintainer: Walter Dworak <preparationh67@gmail.com>
# Contributor: Philipp Schmitt (philipp<at>schmitt<dot>co)

pkgname=kanboard
pkgver=1.0.34
pkgrel=1
pkgdesc='Simple visual task board'
arch=('any')
url='http://kanboard.net/'
license=('AGL3')
depends=('php' 'php-gd')
optdepends=('mariadb: For MySQL storage' 'php-sqlite: For sqlite storage' 'php-pgsql: For postgres storage')
backup=('etc/webapps/kanboard/config.php' 'etc/webapps/kanboard/kanboard-apache.conf' 'etc/webapps/kanboard/kanboard-nginx.conf' 
'etc/webapps/kanboard/kanboard-nginx-subdir.conf')
install="$pkgname.install"
options=(!strip)
source=("http://kanboard.net/kanboard-$pkgver.zip"
	"kanboard-apache.conf"
	"kanboard-nginx.conf"
	"kanboard-nginx-subdir.conf"
	"kanboard-cron")

package() {
    mkdir -p ${pkgdir}/usr/share/webapps
    cp -R ${srcdir}/${pkgname} ${pkgdir}/usr/share/webapps/${pkgname}
    install -D "${srcdir}/kanboard-apache.conf" ${pkgdir}/etc/webapps/${pkgname}/kanboard-apache.conf
    install -D "${srcdir}/kanboard-nginx.conf" ${pkgdir}/etc/webapps/${pkgname}/kanboard-nginx.conf
    install -D "${srcdir}/kanboard-nginx-subdir.conf" ${pkgdir}/etc/webapps/${pkgname}/kanboard-nginx-subdir.conf
    install -D "${srcdir}/kanboard-cron" ${pkgdir}/etc/webapps/${pkgname}/kanboard-cron
    cp ${pkgdir}/usr/share/webapps/${pkgname}/config.default.php ${pkgdir}/etc/webapps/${pkgname}/config.php
    ln -s /etc/webapps/${pkgname}/config.php ${pkgdir}/usr/share/webapps/${pkgname}/config.php
}

sha256sums=('db47464821de50a62d9ae36296d90e092fadcbcfcd2d3eef4331c9afebad4d84'
            '6eb379e74f744d95a930c90ae7744cb8236501bdcd24c7efb6a2eaf1a857204f'
            '62853c973e5b0718ceae5dbeb76b478bb218ce89d732e66a5eef1c7c258ea4b4'
            '5fdf81a69cda8c3c813e5d21f62d4112264645c95d376d7b31dae4573724930a'
            'c777fe8364ca82db7956e665b8b700739b352fe4043869c33dc8ef788e3b1822')

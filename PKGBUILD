# Maintainer: danieltetraquark

pkgname=grocy
pkgver=3.3.0
pkgrel=2
pkgdesc="web-based self-hosted groceries & household management solution for your home"
depends=('php' 'php-sqlite' 'php-gd' 'php-intl')
makedepends=('composer' 'yarn' 'git')
license=('MIT')
arch=('any')
url="https://grocy.info/"
source=(
https://github.com/grocy/grocy/archive/v${pkgver}.zip
)
sha512sums=('f8b41379200ea0ba4d5018182ffabf509e752e444b0b5a8cb6b7f8b5c70c8a233c057f35dc116f3f6858b7d5de82ae9996b761ab58a06d09acb5d8ad6dd747a0')

backup=('etc/webapps/grocy/config.php')

build() {
    cd grocy-${pkgver}

    # composer need to have php-gd extension enabled, otherwise it will fail for a dependency of grocy.
    # note: you may need to adjust your php open_basedir setting, so that php can run!
    php -n -dextension=gd.so -dextension=intl.so /usr/bin/composer install --no-interaction --no-dev --optimize-autoloader
    php /usr/bin/composer clear-cache

    yarn install --modules-folder public/node_modules --production
    yarn cache clean
}

package() {
    cd grocy-${pkgver}

    _instdir="$pkgdir"/usr/share/webapps/grocy
    mkdir -p "$_instdir" "$pkgdir"/etc/webapps/grocy "$pkgdir"/var/lib/webapps


    # install license
    install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

    # copy files to install directory
    cp -ra . "$_instdir"/

    mv "$pkgdir"/usr/share/webapps/grocy/data "$pkgdir"/var/lib/webapps/grocy

#    mkdir "$pkgdir"/usr/share/webapps/grocy/data/
    ln -s /var/lib/webapps/grocy "$pkgdir"/usr/share/webapps/grocy/data

    ln -s /etc/webapps/grocy/config.php "$pkgdir"/var/lib/webapps/grocy/config.php

    mv config-dist.php "$pkgdir"/etc/webapps/grocy/config.php

    chown 33 "$pkgdir"/usr/share/webapps/grocy/data -R
}


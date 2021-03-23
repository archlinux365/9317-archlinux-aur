# Maintainer: Sebastian Dornack <sebastian AT dorni DOT net>
# Contributor: Jérôme Deuchnord <jerome@deuchnord.fr>
# Contributor: Morris Jobke <hey AT morrisjobke DOT de>
pkgname=php-blackfire
pkgver=1.53.0
pkgrel=0
pkgdesc='Blackfire Profiler - PHP extension'
arch=('i686' 'x86_64')
url='https://blackfire.io'
license=('custom')
backup=('etc/php/conf.d/blackfire.ini')
depends=('glibc' 'php>=8.0.0' 'php<8.1')

# Change this if you need to support an older version of PHP (think to update the SHA256 sums too)
PHP_VERSION=80

PHP_VERSION="80"

source=('blackfire.ini')
source_i686=("blackfire.so-${pkgver}_${PHP_VERSION}_i686::http://packages.blackfire.io/binaries/blackfire-php/${pkgver}/blackfire-php-linux_i386-php-${PHP_VERSION}.so")
source_x86_64=("blackfire.so-${pkgver}_${PHP_VERSION}_x86_64::http://packages.blackfire.io/binaries/blackfire-php/${pkgver}/blackfire-php-linux_amd64-php-${PHP_VERSION}.so")

sha256sums=('43f82aea3877cc0133cf2278cb85d0c612cf1f6c869ad430cbaa2b2598f78f33')
sha256sums_i686=('52ffa940b7c444d9a4717cd6dfde4c5390b8f1ae1cfcf00390d657e94e82c927')
sha256sums_x86_64=('d929461a08f49241d7d2fb98c0de13f0e97b276bde2f848aa3ef44c853ca09ed')

package(){
  install -Dm 644 blackfire.ini "$pkgdir"/etc/php/conf.d/blackfire.ini
  install -Dm 755 blackfire.so-${pkgver}_${PHP_VERSION}_$CARCH "$pkgdir"/usr/lib/php/modules/blackfire.so
}

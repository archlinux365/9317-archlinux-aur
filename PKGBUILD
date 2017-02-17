# Maintainer: Xianwen Chen <xianwen.chen@gmail.com>

pkgname=geoda
pkgver=1.8.12
pkgrel=1
pkgdesc='GeoDa is an Exploratory (Spatial) Data Analysis and Spatial Regression software, for spatial data analysis including spatial econometrics.'
arch=('x86_64')
license=('custom:free_for_non_commercial_use')
url="http://geodacenter.github.io/download_linux.html"
depends=('bash')
makedepends=('wget' 'dpkg' 'rsync')
install=$pkgname.install
source=(
  "https://s3.amazonaws.com/geoda/software/GeoDa-1.8.12-Ubuntu-64bit.deb"
)

package()
{
  cd "$srcdir/"
  dpkg -X ../GeoDa-1.8.12-Ubuntu-64bit.deb ./
  
  install -d $pkgdir/usr
  rsync -aPv usr/ $pkgdir/usr
    
  find $pkgdir/usr -type d -exec chmod 755 {} \;
}

sha512sums=('9bb5f266dc8005093e55f271cb3c0803df7b57e1b1889a1ad5d6c763c319f12f5a8736d88672d1cd17e1fcd6ec3b3e6f45b6f6eec421a02355c7df43b7a42e95')

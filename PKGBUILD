# Maintainer: Rod Kay <charlie5 on #ada at freenode.net>

pkgname=gnatcoll-postgres
pkgver=2019
pkgrel=1

pkgdesc='GNAT Components Collection - Postgres database support'
url='https://github.com/AdaCore/gnatcoll-db/'
arch=('i686' 'x86_64')
license=('GPL')

depends=('gnatcoll-sql' 'postgresql')
makedepends=('gprbuild')

source=('https://github.com/AdaCore/gnatcoll-db/archive/master.zip')
sha1sums=('dc4186e802daa71ab88170cd91708738c170d2fb')


build()
{
    cd "$srcdir/gnatcoll-db-master/postgres"

    make setup BUILD=PROD prefix=/usr
    make -j1 GPRBUILD_OPTIONS=-R
}


package()
{
    cd "$srcdir/gnatcoll-db-master/postgres"

    # Make one install at a time to avoid GPRinstall reading/writing to
    # the same installed project files at the same time.
    #
    make prefix="$pkgdir/usr" install -j1
}

# Contributor: Sietse van der Molen <sietse@vdmolen.eu>
# Contributor: Rod Kay              <charlie5 on #ada at freenode.net>

pkgname=florist
pkgver=2020
pkgrel=2
pkgdesc="An open-source implementation of IEEE Standard 1003.5b-1996, the POSIX Ada binding."

arch=('any')
url="https://github.com/Blady-Com/florist"
license=('GPL3')

depends=('gcc-ada')
options=(staticlibs)

source=('git+https://github.com/Blady-Com/florist.git')
sha1sums=(SKIP)


build() 
{
  cd "$srcdir/$pkgname"

  ./configure --prefix=$pkgdir/usr
  PROCESSORS="$(nproc)" make
}


package() 
{
  cd "$srcdir/$pkgname"

  make DESTDIR="$pkgdir/" install
}

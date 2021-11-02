# Maintainer: Rudy Matela <rudy@matela.com.br>
#
# Contributor: Rudy Matela <rudy@matela.com.br>
#
# This package can coexist with the latest version of GHC.
# If you would like to compile GHC yourself (AUR: ghc9.2),
# you can use this to bootstrap compilation.
pkgname=ghc9.2-bin
pkgver=9.2.1
pkgrel=1
pkgdesc='Legacy binary GHC 9.2 installed on /usr/bin/ghc-9.2 (Oct/2021 - Oct/2021).'
arch=('x86_64')
url='http://www.haskell.org/ghc/'
license=('custom')
depends=('gcc' 'gmp' 'libffi' 'perl')
makedepends=('ghc' 'perl' 'libxslt' 'docbook-xsl' 'ncurses5-compat-libs')
checkdepends=('python2')
install='ghc.install'
options=('staticlibs')
provides=('ghc9.2')
conflicts=('ghc9.2')
source=("https://www.haskell.org/ghc/dist/${pkgver}/ghc-${pkgver}-x86_64-deb10-linux.tar.xz")
noextract=("ghc-${pkgver}-${CARCH}-deb10-linux.tar.xz")
sha256sums=('53f1650ed092230480ff5750b94f409e5dfe66bd07ced00bbbcdf5d6b180234c')

prepare() {
	# for some reason, bsdtar cannot unpack this file:
	tar -xf "ghc-${pkgver}-${CARCH}-deb10-linux.tar.xz"
	# see https://wiki.archlinux.org/index.php/PKGBUILD#noextract
}

build() {
  cd ghc-${pkgver}

  sed -i 's,"$bindir/ghc","$bindir/ghc-9.2",' utils/runghc/runghc.wrapper

  ./configure \
    --prefix=/usr \
    --docdir=/usr/share/doc/ghc-9.2
}

package() {
  cd ghc-${pkgver}

  make DESTDIR=${pkgdir} install

  mv ${pkgdir}/usr/bin/ghc        ${pkgdir}/usr/bin/ghc-9.2
  mv ${pkgdir}/usr/bin/ghci       ${pkgdir}/usr/bin/ghci-9.2
  mv ${pkgdir}/usr/bin/ghc-pkg    ${pkgdir}/usr/bin/ghc-pkg-9.2
  mv ${pkgdir}/usr/bin/haddock    ${pkgdir}/usr/bin/haddock-ghc-9.2
  mv ${pkgdir}/usr/bin/hp2ps      ${pkgdir}/usr/bin/hp2ps-ghc-9.2
  mv ${pkgdir}/usr/bin/hpc        ${pkgdir}/usr/bin/hpc-ghc-9.2
  mv ${pkgdir}/usr/bin/hsc2hs     ${pkgdir}/usr/bin/hsc2hs-ghc-9.2
  mv ${pkgdir}/usr/bin/runghc     ${pkgdir}/usr/bin/runghc-9.2
  rm ${pkgdir}/usr/bin/runhaskell # use runghc-9.2 instead

  mv ${pkgdir}/usr/share/man/man1/ghc.1 ${pkgdir}/usr/share/man/man1/ghc-9.2

  install -d            ${pkgdir}/usr/share/licenses/ghc-9.2
  install -m644 LICENSE ${pkgdir}/usr/share/licenses/ghc-9.2
}

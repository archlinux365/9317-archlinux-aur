# Contributor: Médéric Boquien <mboquien@free.fr>
# Maintainer: Médéric Boquien <mboquien@free.fr>
pkgname=python2-astropy
pkgver=1.3
pkgrel=1
pkgdesc="A community python library for astronomy"
arch=('i686' 'x86_64')
url="http://www.astropy.org/"
license=('BSD')
depends=('python2>=2.7' 'python2-numpy>=1.7' 'python2-scipy' 'python2-h5py' 'cfitsio' 'expat' 'wcslib' 'erfa')
conflicts=('python2-pyfits' 'python-pywcs' 'python2-vo')
makedepends=('cython2')
source=("https://files.pythonhosted.org/packages/source/a/astropy/astropy-${pkgver}.tar.gz")
md5sums=('bf4c8a033a7085fbc9ec604eebbdbdc5')

build() {
  cd ${srcdir}/astropy-${pkgver}
  python2 setup.py build --use-system-libraries --offline
}

package() {
  cd ${srcdir}/astropy-${pkgver}

  install -d -m755 "${pkgdir}/usr/share/licenses/${pkgname}/"
  install -m644 -t "${pkgdir}/usr/share/licenses/${pkgname}/" licenses/*
  python2 setup.py install --offline --root=${pkgdir} --prefix=/usr --optimize=1

  mv ${pkgdir}/usr/bin/fitscheck ${pkgdir}/usr/bin/fitscheck2
  mv ${pkgdir}/usr/bin/fitsdiff ${pkgdir}/usr/bin/fitsdiff2
  mv ${pkgdir}/usr/bin/fitsheader ${pkgdir}/usr/bin/fitsheader2
  mv ${pkgdir}/usr/bin/fitsinfo ${pkgdir}/usr/bin/fitsinfo2
  mv ${pkgdir}/usr/bin/samp_hub ${pkgdir}/usr/bin/samp_hub2
  mv ${pkgdir}/usr/bin/volint ${pkgdir}/usr/bin/volint2
  mv ${pkgdir}/usr/bin/wcslint ${pkgdir}/usr/bin/wcslint2
  mv ${pkgdir}/usr/bin/fits2bitmap ${pkgdir}/usr/bin/fits2bitmap2
}


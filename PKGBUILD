# Maintainer: Baptiste Jonglez <archlinux at bitsofnetworks dot org>
# Contributor: Oleksandr Natalenko <oleksandr@natalenko.name>
# Contributor: Antoine Lubineau <antoine@lubignon.info>

pkgname=dnsperf
pkgver=2.1.0.0
_pkgsubver=1
pkgrel=3
pkgdesc="Tools that measure performance of authoritative Domain Name services"
arch=('x86_64')
url="https://www.akamai.com/us/en/products/network-operator/measurement-tools.jsp"
license=('GPL')
depends=('bind')
source=("http://wwwns.akamai.com/dnsperf-src-${pkgver}-${_pkgsubver}.tar.gz"
        "0001-Replace-ISC_PRINT_QUADFORMAT-with-inttypes.h-format-.patch"
        "0002-Replace-custom-isc_u-intNN_t-types-with-C99-u-intNN_.patch"
        "0003-Replace-custom-isc_boolean_t-with-C-standard-bool-ty.patch")
sha512sums=('5571bd0855aba4affcdf81724919e60ab6762d646f8d9a6abf177a2a588675c636842f2fb708bf648004b9c411e9c9b68789f7c6bbbd87afc24c8299a21aa6c9'
            '67409ee675dd74823126c1292724aadd2262b2a2ff0f0a681991e1d50c2645cff919df3ab6fda4a264bb8ba527289d26a934a21859deab01e152c425a5f99ae1'
            '4e56a1b1ad42569e31cfe941d6233dc3046f4265de475b083d31f32bea3b1c0735d17bdfa2f6deba0a88e08e1b23450f115917a52fc24da4c43e04c91524102d'
            '63bd9ef5d44af6854f1649cda93baa13b82d0f803adf5dd75f354f49851fc2cb894f8db72d878389dad990180e2b73780fcc3837be2e3b85959279dcad3cf553')

prepare() {
  cd "${srcdir}/${pkgname}-src-${pkgver}-${_pkgsubver}"
  patch -p3 < ../0001-Replace-ISC_PRINT_QUADFORMAT-with-inttypes.h-format-.patch
  patch -p3 < ../0002-Replace-custom-isc_u-intNN_t-types-with-C99-u-intNN_.patch
  patch -p3 < ../0003-Replace-custom-isc_boolean_t-with-C-standard-bool-ty.patch
}

build() {
  cd "${srcdir}/${pkgname}-src-${pkgver}-${_pkgsubver}"
  ./configure --prefix=/usr --mandir=/usr/share/man
  make
}

package() {
  cd "${srcdir}/${pkgname}-src-${pkgver}-${_pkgsubver}"
  make DESTDIR="${pkgdir}" install
}


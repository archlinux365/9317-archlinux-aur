# $Id$
# Maintainer: Adam Hirst <adam@aphirst.karoo.co.uk>
# Maintainer: Zuyi Hu <hzy0668808@gmail.com>
# Contributor: Maxime Gauduin <alucryd@gmail.com>
# Contributor: mortzu <me@mortzu.de>
# Contributor: fnord0 <fnord0@riseup.net>

pkgname=acpi_call-ck
pkgver=1.1.0
pkgrel=9
_extramodules=extramodules-4.4-ck
pkgdesc='A linux-ck kernel module that enables calls to ACPI methods through /proc/acpi/call'
arch=('i686' 'x86_64')
url="http://github.com/mkottman/${pkgname%-*}"
license=('GPL')
depends=('linux-ck>=4.4' 'linux-ck<4.5')
makedepends=('linux-ck-headers>=4.4' 'linux-ck-headers<4.5')
provides=("${pkgname%-*}")
install="${pkgname}.install"
source=("${url}/archive/v${pkgver}.tar.gz")
sha256sums=('d0d14b42944282724fca76f57d598eed794ef97448f387d1c489d85ad813f2f0')

build() {
  cd ${pkgname%-*}-${pkgver}

  sed -i '9s/acpi/linux/' acpi_call.c

  _kernver="$(cat /usr/lib/modules/${_extramodules}/version)"

  make KVERSION="${_kernver}"
}

package() {
  cd ${pkgname%-*}-${pkgver}

  install -dm 755 "${pkgdir}"/usr/lib/{modules/${_extramodules},modules-load.d}
  install -m 644 ${pkgname%-*}.ko "${pkgdir}"/usr/lib/modules/${_extramodules}/
  gzip "${pkgdir}"/usr/lib/modules/${_extramodules}/${pkgname%-*}.ko
  echo ${pkgname%-*} > "${pkgdir}"/usr/lib/modules-load.d/${pkgname}.conf

  install -dm 755 "${pkgdir}"/usr/share/${pkgname}
  cp -dr --no-preserve='ownership' {examples,support} "${pkgdir}"/usr/share/${pkgname}/
}

# vim: ts=2 sw=2 et:


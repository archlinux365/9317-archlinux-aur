# Maintainer: Max Mehl <aur at mehl dot mx>
# SPDX-FileCopyrightText: 2019 Max Mehl
# SPDX-License-Identifier: CC0-1.0

pkgname='reuse'
pkgver=0.6.0
pkgrel=1
pkgdesc='Helper tool for providing and confirming copyright and licensing information'
arch=('any')
url='https://git.fsfe.org/reuse/tool'
license=('GPL-3.0-or-later' 'Apache-2.0' 'CC-BY-SA-4.0' 'CC0-1.0')
depends=('python'
         'git'
         'python-debian'
         'python-requests'
         'python-jinja'
         'python-binaryornot'
         'python-boolean.py'
         'python-license-expression')
makedepends=('python-setuptools')
source=(
  "${pkgname}-${pkgver}.tar.gz::https://git.fsfe.org/reuse/tool/archive/v${pkgver}.tar.gz"
)
sha256sums=('81e194484e00de4c7a18eeffe1fc706ff014cf2480e38e8464777d396e458841')

package() {
  cd tool

  python setup.py -q install --root="${pkgdir}" --optimize=1
}

# vim: ts=2 sw=2 et:

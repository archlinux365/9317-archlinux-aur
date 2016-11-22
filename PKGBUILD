# Maintainer: Artem Vorotnikov <artem@vorotnikov.me>
# Contributor: Felix Yan <felixonmars@archlinux.org>
# Contributor: Jaroslav Lichtblau <dragonlord@aur.archlinux.org>
# Contributor: Michal Krenek <mikos@sg1.cz>

_username=boinc-next
_reponame=volunode
#_ref="#branch=develop"
_pkgbase=volunode
pkgname=${_pkgbase}-git
pkgdesc="Next generation client for Berkeley Open Infrastructure for Network Computing."
pkgver=r29416.c5b9184
pkgrel=1
arch=('i686' 'x86_64')
url="https://github.com/$_username/${_reponame/}"
license=('LGPL')
depends=('glibmm' 'curl' 'libjpeg-turbo' 'glu' 'freeglut')
makedepends=('libxslt' 'perl-xml-sax' 'git' 'curl' 'inetutils' 'libxmu' 'mesa' 'rsync')
install=$_pkgbase.install
options=('!staticlibs')
source=("git+https://github.com/${_username}/${_reponame}${_ref}"
         $_pkgbase.desktop
         $_pkgbase.service
         $_pkgbase.sysusers)
sha256sums=(
            'SKIP'
            'e41addacd2a1f508f7ac6803e53228fb580fb6b1fdf258322c4d0221d9ca90d1'
            '42631ec573efc02408c12b4fab8d29432e3f558e0cebe30b1beeef8364594f15'
            'c7a03d70cce6206d071d99c13315977db4c4deac2cab52a236f0825325720907'
            )

pkgver() {
  cd "$_reponame"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd ${srcdir}/${_reponame}

  autoreconf -i
  ./configure --prefix=/usr --disable-documentation --enable-headers
  make
}

package() {
  cd ${_reponame}

  make DESTDIR="${pkgdir}" install

  #install systemd unit
  install -Dm644 "${srcdir}/${_pkgbase}.service" "${pkgdir}/usr/lib/systemd/system/${_pkgbase}.service"

  #install sysusers conf
  install -Dm644 "${srcdir}/${_pkgbase}.sysusers" "${pkgdir}/usr/lib/sysusers.d/${_pkgbase}.conf"

  #remove initscripts stuff
  rm -rf "${pkgdir}/etc"
}

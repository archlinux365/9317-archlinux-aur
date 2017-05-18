# $Id$
# Maintainer: Franziskus Kiefer <arch@franziskuskiefer.de>
# Contributor:

_pkgname=nss
pkgname=nss-hg
pkgver=r13365.209329be2d0c
pkgrel=1
pkgdesc="Mozilla Network Security Services"
arch=(i686 x86_64)
url="https://developer.mozilla.org/en-US/docs/Mozilla/Projects/NSS"
license=('MPL' 'GPL')
_nsprver=4.13
depends=("nspr>=${_nsprver}" 'sqlite' 'zlib' 'sh' 'p11-kit')
makedepends=('perl' 'python2' 'ninja' 'git' 'python2' 'mercurial' 'python2-setuptools' 'python2-virtualenv')
options=('!strip' '!makeflags' 'staticlibs')
source=("hg+https://hg.mozilla.org/projects/nss")
sha256sums=('SKIP')
conflicts=('nss')
provides=('nss')

pkgver() {
  cd nss
  printf "r%s.%s" "$(hg identify -n)" "$(hg identify -i)"
}

prepare() {
  git clone https://chromium.googlesource.com/external/gyp
  python2 -m virtualenv python-env
  cd gyp
  ../python-env/bin/python setup.py install
  cd ../nss
  hg up default
}

build() {
  ln -s /usr/bin/python2 python
  cd nss
  PATH=$PWD/../python-env/bin/:$PWD/../:$PATH ./build.sh --opt --system-sqlite --system-nspr
}

package() {
  install -d "$pkgdir"/usr/{bin,include/nss,lib/pkgconfig}

  NSS_VMAJOR=$(grep '#define.*NSS_VMAJOR' nss/lib/nss/nss.h | awk '{print $3}')
  NSS_VMINOR=$(grep '#define.*NSS_VMINOR' nss/lib/nss/nss.h | awk '{print $3}')
  NSS_VPATCH=$(grep '#define.*NSS_VPATCH' nss/lib/nss/nss.h | awk '{print $3}')

  sed nss/pkg/pkg-config/nss.pc.in \
    -e "s,%libdir%,/usr/lib,g" \
    -e "s,%prefix%,/usr,g" \
    -e "s,%exec_prefix%,/usr/bin,g" \
    -e "s,%includedir%,/usr/include/nss,g" \
    -e "s,%NSPR_VERSION%,${_nsprver},g" \
    -e "s,%NSS_VERSION%,${pkgver},g" \
    > "$pkgdir/usr/lib/pkgconfig/nss.pc"
  ln -s nss.pc "$pkgdir/usr/lib/pkgconfig/mozilla-nss.pc"

  sed nss/pkg/pkg-config/nss-config.in \
    -e "s,@libdir@,/usr/lib,g" \
    -e "s,@prefix@,/usr/bin,g" \
    -e "s,@exec_prefix@,/usr/bin,g" \
    -e "s,@includedir@,/usr/include/nss,g" \
    -e "s,@MOD_MAJOR_VERSION@,${NSS_VMAJOR},g" \
    -e "s,@MOD_MINOR_VERSION@,${NSS_VMINOR},g" \
    -e "s,@MOD_PATCH_VERSION@,${NSS_VPATCH},g" \
    > "$pkgdir/usr/bin/nss-config"
  chmod 755 "$pkgdir/usr/bin/nss-config"

  cd dist/Release/bin
  install -t "$pkgdir/usr/bin" *util shlibsign signtool signver ssltap

  cd ../lib
  install -t "$pkgdir/usr/lib" *.so
  install -t "$pkgdir/usr/lib" -m644 *.chk

  cd ../../public/nss
  install -t "$pkgdir/usr/include/nss" -m644 *.h

  rm "$pkgdir/usr/lib/libnssckbi.so"
  ln -s libnssckbi-p11-kit.so "$pkgdir/usr/lib/libnssckbi.so"
}

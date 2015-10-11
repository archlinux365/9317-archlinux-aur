# Maintainer: maz_1 <ohmygod19993 at gmail dotcom>

pkgname=unarchiver-nodep
epoch=1
pkgver=1.9.1
pkgrel=1
pkgdesc="unar and lsar that don't depend on gnustep-base. Resolv conflict with darling-git."
arch=('x86_64' 'i686')
url="http://unarchiver.c3.cx/"
license=('LGPL2.1')
depends=('gnustep-base' 'openssl' 'bzip2' 'icu' 'gcc-libs' 'zlib')
makedepends=('gcc-objc')
provides=(unarchiver)
conflicts=(unarchiver)
source=("http://unarchiver.c3.cx/downloads/unar${pkgver}_src.zip"
        "native_obj_exceptions.patch")
        
source_i686=("gnustep-base.tar.xz::https://www.archlinux.org/packages/community/i686/gnustep-base/download/")
source_x86_64=("gnustep-base.tar.xz::https://www.archlinux.org/packages/community/x86_64/gnustep-base/download/")
        
sha1sums=('SKIP'
          'b8024026607dc2de758479b73d8b01ca6f692b59')
          
sha1sums_i686=('SKIP')
sha1sums_x86_64=('SKIP')

pkgver() {
    curl https://aur.archlinux.org/cgit/aur.git/plain/PKGBUILD?h=unarchiver \
        | grep -oP "(?<=pkgver=)\d+\.\d+\.\d+"
}

prepare(){
  cd "$srcdir/The Unarchiver"

  patch -p1 < ../native_obj_exceptions.patch

}

build() {
  cd "$srcdir/The Unarchiver/XADMaster"

  . /usr/share/GNUstep/Makefiles/GNUstep.sh
  make -f Makefile.linux -j4
}

package() {
  cd "$srcdir/The Unarchiver/XADMaster"
    install -d "$pkgdir/usr/lib/unarchiver"
    cp "$srcdir/usr/lib/"libgnustep* "$pkgdir/usr/lib/unarchiver"
  install -d "$pkgdir/usr/bin/"
  install -m755 unar lsar "$pkgdir/usr/lib/unarchiver"
  
  echo '#!/bin/sh' > "$pkgdir/usr/lib/unarchiver/run.sh"
  echo '[[ -z "$LD_LIBRARY_PATH" ]] && \' >> "$pkgdir/usr/lib/unarchiver/run.sh"
  echo 'export LD_LIBRARY_PATH=/usr/lib/unarchiver || \' >> "$pkgdir/usr/lib/unarchiver/run.sh"
  echo 'export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/lib/unarchiver' >> "$pkgdir/usr/lib/unarchiver/run.sh"
  echo 'exec /usr/lib/unarchiver/`basename "$0"` "$@"'  >> "$pkgdir/usr/lib/unarchiver/run.sh"
  chmod +x "$pkgdir/usr/lib/unarchiver/run.sh"
  ln -s /usr/lib/unarchiver/run.sh "$pkgdir/usr/bin/unar"
  ln -s /usr/lib/unarchiver/run.sh "$pkgdir/usr/bin/lsar"
  
  cd "$srcdir/The Unarchiver/Extra"
  install -d "$pkgdir/usr/share/man/man1"
  gzip -c lsar.1 > "$pkgdir/usr/share/man/man1"/lsar.1.gz
  gzip -c unar.1 > "$pkgdir/usr/share/man/man1"/unar.1.gz
  install -d "$pkgdir/usr/share/bash-completion/completions/"
  install -m644 unar.bash_completion "$pkgdir/usr/share/bash-completion/completions/unar"
  install -m644 lsar.bash_completion "$pkgdir/usr/share/bash-completion/completions/lsar"
}

# vim:set ts=2 sw=2 et:

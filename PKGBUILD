# Maintainer: Vyacheslav Konovalov <vyachkonovalov@gmail.com>

pkgname=robomongo
pkgver=0.9.0_rc9
_ref='0bb566869e2a7025fa8f2b0483567ba764650926'
_pkgname=$pkgname-${_ref}
pkgrel=2
pkgdesc='Shell-centric cross-platform open source MongoDB management tool'
arch=('i686' 'x86_64')
url="https://robomongo.org/"
license=('GPLv3')
depends=('qt5-base' 'pcre' 'qjson')
makedepends=('git' 'scons' 'cmake')
conflicts=('robomongo-bin')
source=('git+https://github.com/paralect/robomongo-shell.git#branch=roboshell-v3.2'
        "https://github.com/paralect/robomongo/archive/${_ref}.tar.gz"
        'robomongo.desktop')
sha256sums=('SKIP'
            'c05f60bc32f112ae3f6e7b9de856b9d3ce71359f7afc2eeebab05cd83f048928'
            'bdd63f5d4bd35dd865a0164f285d19555e4ecafb2d11d01f67bdb86bd730a13d')

build() {
  if [ $CARCH == 'i686' ]; then
    _shellopts='--wiredtiger=off'
    cd $srcdir/${_pkgname}/cmake
    sed -i -e 's/x86_64/i386/g' FindMongoDB.cmake mongodb/linux-release.objects
  fi

  _mongodir=$srcdir/robomongo-shell
  cd $srcdir
  scons ${_shellopts} --directory=${_mongodir} --disable-warnings-as-errors mongo

  cd $srcdir/${_pkgname}
  mkdir -p ./target && cd ./target/
  cmake .. -DCMAKE_PREFIX_PATH=${_mongodir} -DCMAKE_BUILD_TYPE=Release
  make
  make install
}

package() {
  _instdir=$srcdir/${_pkgname}/target/install

  install -Dm0755 "${_instdir}/bin/robomongo" "$pkgdir/usr/bin/robomongo"
  install -Dm0644 "$srcdir/robomongo.desktop" "$pkgdir/usr/share/applications/robomongo.desktop"
  install -Dm0644 "$srcdir/${_pkgname}/src/robomongo/gui/resources/icons/logo.png" "${pkgdir}/usr/share/pixmaps/robomongo.png"
  install -Dm0644 "${_instdir}/LICENSE" "${pkgdir}/usr/share/licenses/robomongo/LICENSE"
  install -Dm0644 "${_instdir}/COPYRIGHT" "${pkgdir}/usr/share/doc/robomongo/COPYRIGHT"
}

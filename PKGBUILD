# Maintainer: Gustavo Alvarez <sl1pkn07@gmail.com>

pkgname=libbluray-git
pkgver=1.0.2.7.g6021ff97
pkgrel=1
pkgdesc="Library to access Blu-Ray disks for video playback. (GIT version)"
arch=('i686' 'x86_64')
license=('LGPL2.1')
url='http://www.videolan.org/developers/libbluray.html'
depends=('libxml2'
         'fontconfig'
         )
makedepends=('git'
             'apache-ant'
             'java-environment<=8'
             'libaacs'
             )
optdepends=('libaacs: Enable AACS decryption'
            'java-environment: BD-J library'
            )
provides=('libbluray'
          'libbluray.so'
          )
conflicts=('libbluray')
source=('git+https://git.videolan.org/git/libbluray.git'
        'git+https://git.videolan.org/git/libudfread.git'
        )
sha256sums=('SKIP'
            'SKIP'
           )

pkgver() {
  cd libbluray
  echo "$(git describe --long --tags | tr - .)"
}

prepare() {
  export JDK_HOME="/usr/lib/jvm/default"

  cd libbluray
  git config submodule.contrib/libudfread.url "${srcdir}/libudfread"
  git submodule update --init
  ./bootstrap
}

build() {
  cd libbluray
  ./configure \
    --prefix=/usr \
    --disable-static

  make
}

package() {
  make -C libbluray DESTDIR="${pkgdir}" install
}

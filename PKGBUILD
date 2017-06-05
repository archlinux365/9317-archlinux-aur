pkgname=gnatcoll
pkgver=17.1.r64.g09ee8996
pkgrel=1

pkgdesc='gnat components collection'
url='http://libre.adacore.com/tools/gnat-component-collection/'
arch=('i686' 'x86_64')
license=('GPL')

depends=('gcc-ada' 'readline' 'libgpr')
makedepends=('git' 'gprbuild' 'postgresql' 'sqlite3')
optdepends=('postgresql' 'sqlite3')

provides=('gnatcoll')
conflicts=('gnatcoll')

source=('git+https://github.com/AdaCore/gnatcoll'
        'use_fpic_for_shared.patch'
        'use_fpic_for_gtk.patch'
        'use_fpic_for_python.patch'
        'expose-cargs-and-largs-makefile.patch')

sha1sums=('SKIP'
          'd926f5153773937dea4b03e4ba46b2fe61a6bbc5'
          '55cf395f2ea53d22459bcc926dd7ad65d81cd315'
          '7dec45682d4a1c44e9517ecb9c4e2f5afccd08c2'
          '04799236d75963c9abe2d41c9f2a6c3d3e61780d')


pkgver() {
    cd gnatcoll
    git describe --long --tags | sed 's/^gnatcoll-//; s/-/.r/; s/-/./'
}


prepare() {
    cd gnatcoll
    patch -Np1 -i "$srcdir"/use_fpic_for_shared.patch
    patch -Np1 -i "$srcdir"/use_fpic_for_gtk.patch
    patch -Np1 -i "$srcdir"/use_fpic_for_python.patch
    patch -Np1 -i "$srcdir"/expose-cargs-and-largs-makefile.patch

    ## Force use of pyhon2
    #
    rm -fr temp_bin
    mkdir  temp_bin
    ln -s /usr/bin/python2        temp_bin/python
    ln -s /usr/bin/python2-config temp_bin/python-config
}


build() {
    cd gnatcoll

    export PATH=$srcdir/$pkgname/temp_bin:$PATH    

    export OS=unix
    ./configure --prefix=/usr \
        --libexecdir=/lib \
        --enable-shared \
        --enable-gpl
    make PROCESSORS="$(nproc)" GPRBUILD_OPTIONS=-R
}


package() {
    cd gnatcoll
    make prefix="$pkgdir"/usr install
}

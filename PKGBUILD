# Maintainer: swearchnick <swearchnick[at]gmail[dot]com>
_pkgname=linux_media
_gitname=media_build
pkgname="tbs-$_pkgname-git"
pkgver=r1103.e109755_4.17.11_arch1
_extramodules=extramodules-4.17-arch
pkgrel=1
pkgdesc="TBS linux open source drivers"
arch=('x86_64')
url="https://github.com/tbsdtv/linux_media"
license=('GPL2')
depends=('tbs-firmware')
makedepends=('git' 'linux-headers' 'patchutils' 'perl-proc-processtable')
provides=("$_pkgname")
conflicts=('tbs-dvb-drivers')

prepare() {

    git clone https://github.com/tbsdtv/$_gitname.git
    git clone --depth=1 https://github.com/tbsdtv/$_pkgname.git -b latest "$srcdir/media"

    sed -i s/obj-\$\(CONFIG_DVB_DRX39XYJ\)/\#obj-\$\(CONFIG_DVB_DRX39XYJ\)/g "$srcdir/media/drivers/media/dvb-frontends/Makefile"
}

pkgver() {

    cd "$srcdir/$_gitname"
    _gitver=$(printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)")
    _kernel=$(uname -r | sed -r 's/-/_/g')
    echo "$_gitver"_"$_kernel"

}

build() {

    cd "$srcdir/$_gitname"

    make dir DIR=../media
    make distclean
    make

}

package() {

    cd "$srcdir/$_gitname"

    mkdir -p "$pkgdir"/usr/lib/modules/"${_extramodules}"/tbs

    find "$srcdir/$_gitname" -name '*.ko' -exec cp "{}" "$pkgdir"/usr/lib/modules/"${_extramodules}"/tbs \;
    msg "Compressing modules, this will take awhile..."
    find "$pkgdir" -name '*.ko' -print0 | xargs -0 -P"$(nproc)" -n10 gzip -9

    chmod 0644 "$pkgdir"/usr/lib/modules/"${_extramodules}"/tbs/*.ko.gz

}

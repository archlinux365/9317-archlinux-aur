# This PKGBUILD is part of the VDR4Arch project [https://github.com/vdr4arch]

# Maintainer: Christopher Reimer <mail+vdr4arch[at]c-reimer[dot]de>
pkgname=vdr-softhddevice
pkgver=1.2.3
epoch=1
_vdrapi=2.4.7
pkgrel=1
pkgdesc="software and GPU emulated HD output device plugin for VDR"
url="https://github.com/ua0lnj/vdr-plugin-softhddevice"
arch=('x86_64' 'i686')
license=('AGPL3')
depends=('ffmpeg' 'freeglut' 'glew' 'mesa' "vdr-api=${_vdrapi}" 'xcb-util-wm' 'xorg-server')
optdepends=('nvidia: Required for VDPAU decoding',
            'vdr-xorg: Recommended way to start X.org server together with VDR')
makedepends=('glm' 'glu' 'ffnvcodec-headers')
_plugname=${pkgname//vdr-/}
source=("$pkgname-$pkgver.tar.gz::https://github.com/ua0lnj/vdr-plugin-softhddevice/archive/v$pkgver.tar.gz"
        "50-$_plugname.conf")
backup=("etc/vdr/conf.avail/50-$_plugname.conf")
sha256sums=('fcba803ca7687a979acfeaee988e1d01f66b04f380f000e0c63f5524de924eee'
            '889d4c19770a926f8aa6a014ff8219800a7a74c464ef0b12dcef6bb8db93e719')

prepare() {
  cd "${srcdir}/vdr-plugin-${_plugname}-$pkgver"

  # Disable OSS. Arch Linux doesn't ship OSS
  sed -i '/OSS /d' Makefile

  # Enable this to increase AV_INFO logging
  #sed -i 's/3000/500/g' Makefile

  # Enable this to compile with debug logging
  #sed -i 's/# -DDEBUG/-DDEBUG/g' Makefile
}

build() {
  cd "${srcdir}/vdr-plugin-${_plugname}-$pkgver"
  make
}

package() {
  cd "${srcdir}/vdr-plugin-${_plugname}-$pkgver"
  make DESTDIR="${pkgdir}" install

  install -Dm644 "$srcdir/50-$_plugname.conf" "$pkgdir/etc/vdr/conf.avail/50-$_plugname.conf"
}

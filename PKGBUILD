# $Id: PKGBUILD 276171 2016-09-11 08:06:09Z heftig $
# Maintainer: Tobias Powalowski <tpowa@archlinux.org>
# Contributor: Sébastien "Seblu" Luttringer <seblu@seblu.net>

#pkgbase=qemu
#pkgname=(qemu qemu-headless qemu-arch-extra qemu-headless-arch-extra
#         qemu-block-{iscsi,rbd,gluster} qemu-guest-agent)
pkgname='qemu-minimal'
#pkgdesc="A generic and open source machine emulator and virtualizer"
pkgdesc="A generic and open source machine emulator and virtualizer. This is a stripped-down version of the official package and requires only the bare essentials for running on a headless server."
pkgver=2.7.0
pkgrel=2
arch=(i686 x86_64)
license=(GPL2 LGPL2.1)
url="http://wiki.qemu.org/"
_headlessdeps=(seabios gnutls libpng libaio numactl jemalloc xfsprogs libnfs
               lzo snappy curl vde2 libcap-ng spice usbredir)
_minimaldeps=(seabios libaio jemalloc
              lzo snappy curl libcap-ng)
#depends=(virglrenderer sdl2 vte3 brltty "${_headlessdeps[@]}")
#makedepends=(spice-protocol python2 ceph libiscsi glusterfs)
depends=("${_minimaldeps[@]}")
makedepends=(python2)
conflicts=('qemu' 'qemu-headless')
source=("$url/download/${pkgname:0:-8}-${pkgver}.tar.bz2"
        qemu.sysusers
        qemu-ga.service
        65-kvm.rules)
sha256sums=('326e739506ba690daf69fc17bd3913a6c313d9928d743bd8eddb82f403f81e53'
            'dd43e2ef062b071a0b9d0d5ea54737f41600ca8a84a8aefbebb1ff09f978acfb'
            '0b4f3283973bb3bc876735f051d8eaab68f0065502a3a5012141fad193538ea1'
            '60dcde5002c7c0b983952746e6fb2cf06d6c5b425d64f340f819356e561e7fc7')

case $CARCH in
  i?86) _corearch=i386 ;;
  x86_64) _corearch=x86_64 ;;
esac

prepare() {
#  mkdir build-{full,headless}
#  mkdir -p extra-arch-{full,headless}/usr/{bin,share/qemu}
  mkdir build-minimal

  cd ${pkgname:0:-8}-${pkgver}
  sed -i 's/vte-2\.90/vte-2.91/g' configure
}

build() {
#  _build full \
#    --audio-drv-list="pa alsa sdl"
#
#  _build headless \
#    --audio-drv-list= \
#    --disable-bluez \
#    --disable-sdl \
#    --disable-gtk \
#    --disable-vte \
#    --disable-opengl \
#    --disable-virglrenderer \
#    --disable-brlapi
  _build minimal \
    --audio-drv-list= \
    --disable-bluez \
    --disable-sdl \
    --disable-gtk \
    --disable-vte \
    --disable-opengl \
    --disable-virglrenderer \
    --disable-brlapi \
    --disable-spice
}

_build() (
  cd build-$1

  # qemu vs. make 4 == bad
  export ARFLAGS=rv

  # http://permalink.gmane.org/gmane.comp.emulators.qemu/238740
  export CFLAGS+=" -fPIC"

#  ../${pkgname}-${pkgver}/configure \
  ../${pkgname:0:-8}-${pkgver}/configure \
    --prefix=/usr \
    --sysconfdir=/etc \
    --localstatedir=/var \
    --libexecdir=/usr/lib/qemu \
    --python=/usr/bin/python2 \
    --smbd=/usr/bin/smbd \
    --with-gtkabi=3.0 \
    --with-sdlabi=2.0 \
    --enable-modules \
    --enable-jemalloc \
    "${@:2}"

  make
)

package_qemu() {
  optdepends=('qemu-arch-extra: extra architectures support')
  provides=(qemu-headless)
  conflicts=(qemu-headless)
  replaces=(qemu-kvm)

  _package full
}

package_qemu-headless() {
  pkgdesc="QEMU without GUI"
  depends=("${_headlessdeps[@]}")
  optdepends=('qemu-headless-arch-extra: extra architectures support')

  _package headless
}

package() {
  _package minimal
}

_package() {
#  optdepends+=('samba: SMB/CIFS server support'
#               'qemu-arch-extra: extra architectures support'
#               'qemu-block-iscsi: iSCSI block support'
#               'qemu-block-rbd: RBD block support'
#               'qemu-block-gluster: glusterfs block support')
  optdepends+=('samba: SMB/CIFS server support')
  install=qemu.install
  options=(!strip)

  make -C build-$1 DESTDIR="$pkgdir" install "${@:2}"

  # systemd stuff
  install -Dm644 65-kvm.rules "$pkgdir/usr/lib/udev/rules.d/65-kvm.rules"
  install -Dm644 qemu.sysusers "$pkgdir/usr/lib/sysusers.d/qemu.conf"

  # remove conflicting /var/run directory
  cd "$pkgdir"
  rm -r var

  cd usr/lib
  tidy_strip

  # bridge_helper needs suid
  # https://bugs.archlinux.org/task/32565
  chmod u+s qemu/qemu-bridge-helper

#  # remove split block modules
#  rm qemu/block-{iscsi,rbd,gluster}.so

  cd ../bin
  tidy_strip

  # remove extra arch
  for _bin in qemu-*; do
    [[ -f $_bin ]] || continue

    case ${_bin#qemu-} in
      # guest agent
      ga) rm "$_bin"; continue ;;

      # tools
      img|io|nbd) continue ;;

      # core emu
      system-${_corearch}) continue ;;
    esac

#    mv "$_bin" "$srcdir/extra-arch-$1/usr/bin"
    rm "$_bin"
  done

  cd ../share/qemu
  for _blob in *; do
    [[ -f $_blob ]] || continue

    case $_blob in
      # provided by seabios package
      bios.bin|acpi-dsdt.aml|bios-256k.bin|vgabios-cirrus.bin|vgabios-qxl.bin|\
      vgabios-stdvga.bin|vgabios-vmware.bin) rm "$_blob"; continue ;;

      # iPXE ROMs
      efi-*|pxe-*) continue ;;

      # core blobs
      kvmvapic.bin|linuxboot.bin|multiboot.bin|sgabios.bin|vgabios*) continue ;;

      # Trace events definitions
      trace-events) continue ;;

      # Logos
      *.bmp|*.svg) continue ;;
    esac

#    mv "$_blob" "$srcdir/extra-arch-$1/usr/share/qemu"
    rm "$_blob"
  done
}

package_qemu-arch-extra() {
  pkgdesc="QEMU for foreign architectures"
  depends=(qemu)
  provides=(qemu-headless-arch-extra)
  conflicts=(qemu-headless-arch-extra)
  options=(!strip)

  mv extra-arch-full/usr "$pkgdir"
}

package_qemu-headless-arch-extra() {
  pkgdesc="QEMU without GUI, for foreign architectures"
  depends=(qemu-headless)
  options=(!strip)

  mv extra-arch-headless/usr "$pkgdir"
}

package_qemu-block-iscsi() {
  pkgdesc="QEMU iSCSI block module"
  depends=(glib2 libiscsi jemalloc)

  install -D build-full/block-iscsi.so "$pkgdir/usr/lib/qemu/block-iscsi.so"
}

package_qemu-block-rbd() {
  pkgdesc="QEMU RBD block module"
  depends=(glib2 ceph)

  install -D build-full/block-rbd.so "$pkgdir/usr/lib/qemu/block-rbd.so"
}

package_qemu-block-gluster() {
  pkgdesc="QEMU GlusterFS block module"
  depends=(glib2 glusterfs)

  install -D build-full/block-gluster.so "$pkgdir/usr/lib/qemu/block-gluster.so"
}

package_qemu-guest-agent() {
  pkgdesc="QEMU Guest Agent"
  depends=(gcc-libs glib2)

  install -D build-full/qemu-ga "$pkgdir/usr/bin/qemu-ga"
  install -Dm644 qemu-ga.service "$pkgdir/usr/lib/systemd/system/qemu-ga.service"
}

# vim:set ts=2 sw=2 et:

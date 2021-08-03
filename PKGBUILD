# Maintainer: tikilou <tikilou@hotmail.fr>
# Contributor: XRaTiX <https://github.com/XRaTiX>
# Contributor: Frederic Bezies <fredbezies@gmail.com>
# Contributor: ajs124 < aur at ajs124 dot de>
# Contributor: Devin Cofer <ranguvar{AT]archlinux[DOT}us>
# Contributor: Tobias Powalowski <tpowa@archlinux.org>
# Contributor: Sébastien "Seblu" Luttringer <seblu@seblu.net>

pkgbase=qemu-git-60fps
_gitname=qemu
pkgname=(qemu-git-60fps qemu-headless-git-60fps qemu-arch-extra-git-60fps qemu-headless-arch-extra-git-60fps qemu-block-{iscsi-git,rbd-git,gluster-git}-60fps qemu-guest-agent-git-60fps)
pkgdesc="A generic and open source machine emulator and virtualizer with 60 FPS patch for PCI Passthrough with Intel GVT-g and AMD/Nvidia GPUs."
pkgver=6.0.50v6.0.0-1476-g67036ce245
pkgrel=1
epoch=13
arch=(i686 x86_64)
license=(GPL2 LGPL2.1)
url="http://wiki.qemu.org/"
_headlessdeps=(seabios libaio numactl libnfs
               snappy curl vde2 spice libcacard usbredir libslirp
               libssh liburing ndctl dtc fuse3)
depends=(dtc virglrenderer sdl2 vte3 libpulse brltty "${_headlessdeps[@]}")
makedepends=(spice-protocol python ceph libiscsi glusterfs python-sphinx xfsprogs git ninja)
source=(git://github.com/XRaTiX/qemu
        qemu-guest-agent.service
        65-kvm.rules)
sha256sums=('SKIP'
            '09a720ed48ef8cf0f67770b67874202600c5209973d10e6e2c72ecc9aea23ece'
            '60dcde5002c7c0b983952746e6fb2cf06d6c5b425d64f340f819356e561e7fc7')

case $CARCH in
  i?86) _corearch=i386 ;;
  x86_64) _corearch=x86_64 ;;
esac

pkgver() {
  cd "${srcdir}/${_gitname}"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g' | cut -c2-47 
}

prepare() {
  cd "${srcdir}/${_gitname}"
  mkdir build-{full,headless}
  mkdir -p extra-arch-{full,headless}/usr/{bin,share/qemu}
}

build() {
  _build full \
    --audio-drv-list="pa alsa sdl"

  _build headless \
    --audio-drv-list= \
    --disable-sdl \
    --disable-gtk \
    --disable-vte \
    --disable-brlapi \
    --disable-opengl \
    --disable-virglrenderer
}

_build() (
  cd ${srcdir}/${_gitname}/build-$1
  
  ../configure \
    --prefix=/usr \
    --sysconfdir=/etc \
    --localstatedir=/var \
    --libexecdir=/usr/lib/qemu \
    --smbd=/usr/bin/smbd \
    --enable-modules \
    --enable-sdl \
    --disable-werror \
    --enable-vhost-user \
    --enable-slirp=system \
    --enable-xfsctl \
    "${@:2}"

  ninja -j$(nproc)
)

package_qemu-git() {
  optdepends=('qemu-arch-extra-git: extra architectures support')
  conflicts=('qemu-headless' 'qemu')
  provides=('qemu-headless' 'qemu')
  replaces=(qemu-kvm)

  _package full
}

package_qemu-headless-git() {
  pkgdesc="QEMU without GUI. Git version."
  depends=("${_headlessdeps[@]}")
  optdepends=('qemu-headless-arch-extra-git: extra architectures support')
  conflicts=('qemu-headless')

  _package headless
}

_package() {
  optdepends+=('ovmf: Tianocore UEFI firmware for qemu'
               'samba: SMB/CIFS server support'
               'qemu-block-iscsi-git: iSCSI block support'
               'qemu-block-rbd-git: RBD block support'
               'qemu-block-gluster-git: glusterfs block support')
  install=qemu.install
  options=(!strip !emptydirs)

  DESTDIR="$pkgdir" ninja -C ${srcdir}/${_gitname}/build-$1 install "${@:2}"

  # systemd stuff
  install -Dm644 65-kvm.rules "$pkgdir/usr/lib/udev/rules.d/65-kvm.rules"
  
  # remove conflicting /var/run directory
  cd "$pkgdir"
  rm -r var

  cd usr/lib

  # bridge_helper needs suid
  # https://bugs.archlinux.org/task/32565
  chmod u+s qemu/qemu-bridge-helper

  # remove split block modules
  rm qemu/block-{iscsi,rbd,gluster}.so

  cd ../bin
  tidy_strip

  # remove extra arch
  for _bin in qemu-*; do
    [[ -f $_bin ]] || continue

    case ${_bin#qemu-} in
      # guest agent
      ga) rm "$_bin"; continue ;;

      # tools
      edid|img|io|keymap|nbd|pr-helper|storage-daemon) continue ;;

      # core emu
      system-${_corearch}) continue ;;
    esac

    mv "$_bin" "$srcdir/$_gitname/extra-arch-$1/usr/bin"
  done

  cd ../share/qemu
  for _blob in *; do
    [[ -f $_blob ]] || continue

   case $_blob in
      # provided by seabios package
      bios.bin|bios-256k.bin|vgabios-cirrus.bin|vgabios-qxl.bin|\
      vgabios-stdvga.bin|vgabios-vmware.bin|vgabios-virtio.bin|vgabios-bochs-display.bin|\
      vgabios-ramfb.bin) rm "$_blob"; continue ;;

      # provided by edk2-ovmf package
      edk2-*) rm "$_blob"; continue ;;
   
      # iPXE ROMs
      efi-*|pxe-*) continue ;;

      # core blobs
      bios-microvm.bin|kvmvapic.bin|linuxboot*|multiboot.bin|sgabios.bin|vgabios*) continue ;;

      # Trace events definitions
      trace-events*) continue ;;

     esac

    mv "$_blob" "$srcdir/$_gitname/extra-arch-$1/usr/share/qemu"
  done

   # provided by edk2-ovmf package
   rm -r firmware
 
   cd ..
   if [ "$1" = headless ]; then rm -r {applications,icons}; fi
}

package_qemu-arch-extra-git() {
  pkgdesc="QEMU for foreign architectures. Git version."
  depends=(qemu)
  provides=(qemu-arch-extra)
  conflicts=(qemu-arch-extra)
  options=(!strip)

  mv $srcdir/$_gitname/extra-arch-full/usr "$pkgdir"
}

package_qemu-headless-arch-extra-git() {
  pkgdesc="QEMU without GUI, for foreign architectures. Git version."
  depends=(qemu-headless-git)
  options=(!strip)
  conflicts=(qemu-headless-arch-extra)
  provides=(qemu-headless-arch-extra)

  mv $srcdir/$_gitname/extra-arch-headless/usr "$pkgdir"
}

package_qemu-block-iscsi-git() {
  pkgdesc="QEMU iSCSI block module. Git version."
  depends=(glib2 libiscsi)
  conflicts=(qemu-block-iscsi)
  provides=(qemu-block-iscsi)

  install -D $srcdir/$_gitname/build-full/block-iscsi.so "$pkgdir/usr/lib/qemu/block-iscsi.so"
}

package_qemu-block-rbd-git() {
  pkgdesc="QEMU RBD block module. Git version."
  depends=(glib2 ceph-libs)
  conflicts=(qemu-block-rbd)
  provides=(qemu-block-rbd)

  install -D $srcdir/$_gitname/build-full/block-rbd.so "$pkgdir/usr/lib/qemu/block-rbd.so"
}

package_qemu-block-gluster-git() {
  pkgdesc="QEMU GlusterFS block module. Git version."
  depends=(glib2 glusterfs)
  conflicts=(qemu-block-gluster)
  provides=(qemu-block-gluster)

  install -D $srcdir/$_gitname/build-full/block-gluster.so "$pkgdir/usr/lib/qemu/block-gluster.so"
}

package_qemu-guest-agent-git() {
  pkgdesc="QEMU Guest Agent. Git version."
  depends=(gcc-libs glib2 libudev.so liburing)
  conflicts=(qemu-guest-agent)
  provides=(qemu-guest-agent)
  install=qemu-guest-agent.install

  install -D $srcdir/$_gitname/build-full/qga/qemu-ga "$pkgdir/usr/bin/qga"
  install -Dm644 $srcdir/qemu-guest-agent.service "$pkgdir/usr/lib/systemd/system/qemu-guest-agent.service"
  install -Dm755 "$srcdir/$_gitname/scripts/qemu-guest-agent/fsfreeze-hook" "$pkgdir/etc/qemu/fsfreeze-hook"
}

# vim:set ts=2 sw=2 et:

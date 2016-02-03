# Maintainer: Grey Christoforo <first name [at] last name [dot] net>

buildarch=20

pkgbase=linux-rpi
_commit=0108373f573aa71e3f2bf48bdccafd09d478ecf5
_srcname=linux-${_commit}
_kernelname=${pkgbase#linux}
_desc="Raspberry Pi mainline kernel"
pkgver=4.1.17
pkgrel=2
bfqver=v7r8
arch=('armv6h' 'armv7h')
url="http://www.kernel.org/"
license=('GPL2')
makedepends=('xmlto' 'docbook-xsl' 'kmod' 'inetutils' 'bc' 'git')
options=('!strip')
source=("https://github.com/raspberrypi/linux/archive/${_commit}.tar.gz"
#        "git+https://github.com/sfjro/aufs4-standalone.git#branch=aufs${pkgver%.*}"
#        "ftp://teambelgium.net/bfq/patches/${pkgver%.*}.0-${bfqver}/0001-block-cgroups-kconfig-build-bits-for-BFQ-${bfqver}-${pkgver%.*}.patch"
#        "ftp://teambelgium.net/bfq/patches/${pkgver%.*}.0-${bfqver}/0002-block-introduce-the-BFQ-${bfqver}-I-O-sched-for-${pkgver%.*}.patch"
#        "ftp://teambelgium.net/bfq/patches/${pkgver%.*}.0-${bfqver}/0003-block-bfq-add-Early-Queue-Merge-EQM-to-BFQ-${bfqver}-for-${pkgver%.*}.0.patch"
        'config.txt'
        'cmdline.txt'
        'config.v6'
        'config.v7')
md5sums=('0767555c2df6efc19e6b905ae2deccf1'
#         'SKIP'
#         '74bf103542cbdee0363819309adb97a2'
#         'f09baae3c7add4ed9bedde22ae3efe19'
#         'bd8cc19a31d1cf8aeeaf9245057c4f9b'
         '9a3c82da627b317ec79c37fd6afba569'
         '60bc3624123c183305677097bcd56212'
         'db8c931027f6814822ad63424699524c'
         'fb6a30b7a10b998703161a459ffde256')

prepare() {
  cd "${srcdir}/${_srcname}"
#  msg2 "AUFS patches"
#  cp -ru "${srcdir}/aufs4-standalone/Documentation" .
#  cp -ru "${srcdir}/aufs4-standalone/fs" .
#  cp -ru "${srcdir}/aufs4-standalone/include/uapi/linux/aufs_type.h" ./include/linux
#  cp -ru "${srcdir}/aufs4-standalone/include/uapi/linux/aufs_type.h" ./include/uapi/linux

#  patch -Np1 -i ../aufs4-standalone/aufs4-kbuild.patch
#  patch -Np1 -i ../aufs4-standalone/aufs4-base.patch
#  patch -Np1 -i ../aufs4-standalone/aufs4-mmap.patch
#  patch -Np1 -i ../aufs4-standalone/aufs4-standalone.patch

#  msg2 "Add BFQ patches"
#  patch -Np1 -i "${srcdir}/0001-block-cgroups-kconfig-build-bits-for-BFQ-${bfqver}-${pkgver%.*}.patch"
#  patch -Np1 -i "${srcdir}/0002-block-introduce-the-BFQ-${bfqver}-I-O-sched-for-${pkgver%.*}.patch"
#  patch -Np1 -i "${srcdir}/0003-block-bfq-add-Early-Queue-Merge-EQM-to-BFQ-${bfqver}-for-${pkgver%.*}.0.patch"

  msg "Prepare to build"
  [[ $CARCH == "armv6h" ]] && cat "${srcdir}/config.v6" > ./.config
  [[ $CARCH == "armv7h" ]] && cat "${srcdir}/config.v7" > ./.config

  # add pkgrel to extraversion
  sed -ri "s|^(EXTRAVERSION =)(.*)|\1 \2-${pkgrel}|" Makefile

  # don't run depmod on 'make install'. We'll do this ourselves in packaging
  sed -i '2iexit 0' scripts/depmod.sh

  make prepare
}

build() {
  cd "${srcdir}/${_srcname}"

  # get kernel version
  #make prepare

  # load configuration
  # Configure the kernel. Replace the line below with one of your choice.
  #make menuconfig # CLI menu for configuration
  #make nconfig # new CLI menu for configuration
  #make xconfig # X-based configuration
  #make oldconfig # using old config from previous kernel version
  #make bcmrpi_defconfig # using RPi defconfig
  # ... or manually edit .config

  # Copy back our configuration (use with new kernel version)
  #cp ./.config ../${pkgver}.config

  ####################
  # stop here
  # this is useful to configure the kernel
  #msg "Stopping build"
  #return 1
  ####################

  #yes "" | make config

  msg "Building!"
  make ${MAKEFLAGS} zImage modules dtbs
}

_package() {
  pkgdesc="The Linux Kernel and modules - ${_desc}"
  depends=('coreutils' 'linux-firmware' 'module-init-tools>=3.16')
  optdepends=('crda: to set the correct wireless channels of your country')
  provides=('kernel26' "linux=${pkgver}" 'aufs_friendly')
  conflicts=('kernel26' 'linux' 'linux-raspberrypi')
  install=${pkgname}.install
  backup=('boot/config.txt' 'boot/cmdline.txt')
  replaces=('linux-raspberrypi-latest')

  cd "${srcdir}/${_srcname}"

  KARCH=arm

  # get kernel version
  _kernver="$(make kernelrelease)"

  mkdir -p "${pkgdir}"/{lib/modules,lib/firmware}
  make INSTALL_MOD_PATH="${pkgdir}" modules_install
  make INSTALL_DTBS_PATH="${pkgdir}/boot" dtbs_install

  [[ $CARCH == "armv6h" ]] && perl scripts/mkknlimg --dtok arch/$KARCH/boot/zImage "${pkgdir}/boot/kernel.img"
  [[ $CARCH == "armv7h" ]] && perl scripts/mkknlimg --dtok arch/$KARCH/boot/zImage "${pkgdir}/boot/kernel7.img"
  cp arch/$KARCH/boot/dts/overlays/README "${pkgdir}/boot/overlays"

  # set correct depmod command for install
  sed \
    -e  "s/KERNEL_NAME=.*/KERNEL_NAME=${_kernelname}/g" \
    -e  "s/KERNEL_VERSION=.*/KERNEL_VERSION=${_kernver}/g" \
    -i "${startdir}/${pkgname}.install"

  # remove build and source links
  rm -f "${pkgdir}"/lib/modules/${_kernver}/{source,build}
  # remove the firmware
  rm -rf "${pkgdir}/lib/firmware"
  # gzip -9 all modules to save 100MB of space
  find "${pkgdir}" -name '*.ko' |xargs -P 2 -n 1 gzip -9
  # make room for external modules
  ln -s "../extramodules-${pkgver}-${_kernelname:-ARCH}" "${pkgdir}/lib/modules/${_kernver}/extramodules"
  # add real version for building modules and running depmod from post_install/upgrade
  mkdir -p "${pkgdir}/lib/modules/extramodules-${pkgver}-${_kernelname:-ARCH}"
  echo "${_kernver}" > "${pkgdir}/lib/modules/extramodules-${pkgver}-${_kernelname:-ARCH}/version"

  # Now we call depmod...
  depmod -b "$pkgdir" -F System.map "$_kernver"

  # move module tree /lib -> /usr/lib
  mkdir -p "${pkgdir}/usr"
  mv "$pkgdir/lib" "$pkgdir/usr"

  # install boot files
  install -m644 ../config.txt ../cmdline.txt "${pkgdir}/boot"
}

_package-headers() {
  pkgdesc="Header files and scripts for building modules for linux kernel - ${_desc}"
  provides=("linux-headers=${pkgver}")
  conflicts=('linux-headers' 'linux-raspberrypi-headers')
  replaces=('linux-raspberrypi-latest-headers')

  install -dm755 "${pkgdir}/usr/lib/modules/${_kernver}"

  cd "${srcdir}/${_srcname}"
  install -D -m644 Makefile \
    "${pkgdir}/usr/lib/modules/${_kernver}/build/Makefile"
  install -D -m644 kernel/Makefile \
    "${pkgdir}/usr/lib/modules/${_kernver}/build/kernel/Makefile"
  install -D -m644 .config \
    "${pkgdir}/usr/lib/modules/${_kernver}/build/.config"

  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/include"

  for i in acpi asm-generic config crypto drm generated keys linux math-emu \
    media net pcmcia scsi sound trace uapi video xen; do
    cp -a include/${i} "${pkgdir}/usr/lib/modules/${_kernver}/build/include/"
  done

  [[ $CARCH == "armv6h" ]] && MACH="mach-bcm2708"
  [[ $CARCH == "armv7h" ]] && MACH="mach-bcm2709"

  # copy arch includes for external modules
  mkdir -p ${pkgdir}/usr/lib/modules/${_kernver}/build/arch/$KARCH
  cp -a arch/$KARCH/include ${pkgdir}/usr/lib/modules/${_kernver}/build/arch/$KARCH/
  mkdir -p ${pkgdir}/usr/lib/modules/${_kernver}/build/arch/$KARCH/$MACH
  cp -a arch/$KARCH/$MACH/include ${pkgdir}/usr/lib/modules/${_kernver}/build/arch/$KARCH/$MACH/

  # copy files necessary for later builds, like nvidia and vmware
  cp Module.symvers "${pkgdir}/usr/lib/modules/${_kernver}/build"
  cp -a scripts "${pkgdir}/usr/lib/modules/${_kernver}/build"

  # fix permissions on scripts dir
  chmod og-w -R "${pkgdir}/usr/lib/modules/${_kernver}/build/scripts"
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/.tmp_versions"

  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/arch/${KARCH}/kernel"

  cp arch/${KARCH}/Makefile "${pkgdir}/usr/lib/modules/${_kernver}/build/arch/${KARCH}/"

  cp arch/${KARCH}/kernel/asm-offsets.s "${pkgdir}/usr/lib/modules/${_kernver}/build/arch/${KARCH}/kernel/"

  # add docbook makefile
  install -D -m644 Documentation/DocBook/Makefile \
    "${pkgdir}/usr/lib/modules/${_kernver}/build/Documentation/DocBook/Makefile"

  # add dm headers
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/md"
  cp drivers/md/*.h "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/md"

  # add inotify.h
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/include/linux"
  cp include/linux/inotify.h "${pkgdir}/usr/lib/modules/${_kernver}/build/include/linux/"

  # add wireless headers
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/net/mac80211/"
  cp net/mac80211/*.h "${pkgdir}/usr/lib/modules/${_kernver}/build/net/mac80211/"

  # add dvb headers for external modules
  # in reference to:
  # http://bugs.archlinux.org/task/9912
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/dvb-core"
  cp drivers/media/dvb-core/*.h "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/dvb-core/"
  # and...
  # http://bugs.archlinux.org/task/11194
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/include/config/dvb/"
  cp include/config/dvb/*.h "${pkgdir}/usr/lib/modules/${_kernver}/build/include/config/dvb/"

  # add dvb headers for http://mcentral.de/hg/~mrec/em28xx-new
  # in reference to:
  # http://bugs.archlinux.org/task/13146
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/dvb-frontends/"
  cp drivers/media/dvb-frontends/lgdt330x.h "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/dvb-frontends/"
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/i2c/"
  cp drivers/media/i2c/msp3400-driver.h "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/i2c/"

  # add dvb headers
  # in reference to:
  # http://bugs.archlinux.org/task/20402
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/usb/dvb-usb"
  cp drivers/media/usb/dvb-usb/*.h "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/usb/dvb-usb/"
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/dvb-frontends"
  cp drivers/media/dvb-frontends/*.h "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/dvb-frontends/"
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/tuners"
  cp drivers/media/tuners/*.h "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/media/tuners/"

  # add xfs and shmem for aufs building
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/fs/xfs"
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/mm"

  # copy in Kconfig files
  for i in $(find . -name "Kconfig*"); do
    mkdir -p "${pkgdir}"/usr/lib/modules/${_kernver}/build/`echo ${i} | sed 's|/Kconfig.*||'`
    cp ${i} "${pkgdir}/usr/lib/modules/${_kernver}/build/${i}"
  done

  chown -R root.root "${pkgdir}/usr/lib/modules/${_kernver}/build"
  find "${pkgdir}/usr/lib/modules/${_kernver}/build" -type d -exec chmod 755 {} \;

  # strip scripts directory
  find "${pkgdir}/usr/lib/modules/${_kernver}/build/scripts" -type f -perm -u+w 2>/dev/null | while read binary ; do
    case "$(file -bi "${binary}")" in
      *application/x-sharedlib*) # Libraries (.so)
        /usr/bin/strip ${STRIP_SHARED} "${binary}";;
      *application/x-archive*) # Libraries (.a)
        /usr/bin/strip ${STRIP_STATIC} "${binary}";;
      *application/x-executable*) # Binaries
        /usr/bin/strip ${STRIP_BINARIES} "${binary}";;
    esac
  done

  # remove unneeded architectures
  rm -rf "${pkgdir}"/usr/lib/modules/${_kernver}/build/arch/{alpha,arc,arm26,arm64,avr32,blackfin,c6x,cris,frv,h8300,hexagon,ia64,m32r,m68k,m68knommu,metag,mips,microblaze,mn10300,openrisc,parisc,powerpc,ppc,s390,score,sh,sh64,sparc,sparc64,tile,unicore32,um,v850,x86,xtensa}
}

pkgname=("${pkgbase}" "${pkgbase}-headers")
for _p in ${pkgname[@]}; do
  eval "package_${_p}() {
    _package${_p#${pkgbase}}
  }"
done

# Maintainer: Steven Noonan <steven@uplinklabs.net>

pkgbase=linux-ec2
_srcname=linux-4.13
pkgver=4.13.1
pkgrel=1
arch=('i686' 'x86_64')
url="http://git.uplinklabs.net/steven/projects/archlinux/ec2/ec2-packages.git/tree/linux-ec2"
license=('GPL2')
makedepends=('xmlto' 'docbook-xsl' 'kmod' 'inetutils' 'bc' 'libelf')
options=('!strip')
source=("http://www.kernel.org/pub/linux/kernel/v4.x/${_srcname}.tar.xz"
        "http://www.kernel.org/pub/linux/kernel/v4.x/${_srcname}.tar.sign"
        "http://www.kernel.org/pub/linux/kernel/v4.x/patch-${pkgver}.xz"
        "http://www.kernel.org/pub/linux/kernel/v4.x/patch-${pkgver}.sign"
        # the main kernel config files
        'config.i686' 'config.x86_64'
        # pacman hook for initramfs regeneration
        '99-linux.hook'
        # standard config files for mkinitcpio ramdisk
        'linux.preset'
        '0001-xhci-demote-annoying-warning.patch'
        )
sha256sums=('2db3d6066c3ad93eb25b973a3d2951e022a7e975ee2fa7cbe5bddf84d9a49a2c'
            'SKIP'
            '6664b089bdb6513b006bfe65c6fee45d38ddfe17f6ccc87a720e831d4c215b4d'
            'SKIP'
            '344f1ae54298d5c43327442fd0358e5e1d56b71807782339a9142cc28daf697d'
            '9aa7613d5e406785edd943f943b444c9fff09ba536e840b95d7713b73d4cf914'
            '834bd254b56ab71d73f59b3221f056c72f559553c04718e350ab2a3e2991afe0'
            'fc21139a4b77d2739f4aaa4e3d35229c395c311de89709904de15f653b8991fd'
            'f4ee2c2aed01b984b7ede924cbabefaccedc854b338901568d03a45320ea8056')
validpgpkeys=(
              'ABAF11C65A2970B130ABE3C479BE3E4300411886' # Linus Torvalds
              '647F28654894E3BD457199BE38DBBDC86092693E' # Greg Kroah-Hartman
             )

_kernelname=${pkgbase#linux}

prepare() {
  cd "${srcdir}/${_srcname}"

  dots="${pkgver//[^.]}"
  dotcount="${#dots}"

  # add upstream patch
  if [ "$dotcount" -gt 1 ]; then
    patch -Np1 -i "${srcdir}/patch-${pkgver}"
  fi

  # add latest fixes from stable queue, if needed
  # http://git.kernel.org/?p=linux/kernel/git/stable/stable-queue.git
  patch -Np1 -i "${srcdir}/0001-xhci-demote-annoying-warning.patch"

  cp -L "${srcdir}/config.${CARCH}" .config

  if [ "${_kernelname}" != "" ]; then
    sed -i "s|CONFIG_LOCALVERSION=.*|CONFIG_LOCALVERSION=\"${_kernelname}\"|g" ./.config
    sed -i "s|CONFIG_LOCALVERSION_AUTO=.*|CONFIG_LOCALVERSION_AUTO=n|" ./.config
  fi

  # set extraversion to pkgrel
  sed -ri "s|^(EXTRAVERSION =).*|\1 -${pkgrel}|" Makefile

  # don't run depmod on 'make install'. We'll do this ourselves in packaging
  sed -i '2iexit 0' scripts/depmod.sh

  # get kernel version
  make prepare
}

build() {
  cd "${srcdir}/${_srcname}"

  make ${MAKEFLAGS} LOCALVERSION= bzImage modules
}

_buildid() {
  LANG=C readelf -n $1 | sed -n '/Build ID/ { s/.*: //p; q; }'
}

_package() {
  pkgdesc="The ${pkgbase} kernel and modules"
  [ "${pkgbase}" = "linux" ] && groups=('base')
  depends=('coreutils' 'linux-firmware' 'kmod' 'mkinitcpio>=0.7')
  optdepends=('crda: to set the correct wireless channels of your country')
  provides=("kernel26${_kernelname}=${pkgver}" "linux=${pkgver}")
  conflicts=("kernel26${_kernelname}")
  replaces=("kernel26${_kernelname}")
  backup=("etc/mkinitcpio.d/${pkgbase}.preset")
  options=('strip' 'debug')
  install=linux.install

  cd "${srcdir}/${_srcname}"

  KARCH=x86

  # get kernel version
  _kernver="$(make LOCALVERSION= kernelrelease)"
  _basekernel=${_kernver%%-*}
  _basekernel=${_basekernel%.*}

  mkdir -p "${pkgdir}"/{lib/modules,lib/firmware,boot}
  make LOCALVERSION= INSTALL_MOD_PATH="${pkgdir}" modules_install
  cp arch/$KARCH/boot/bzImage "${pkgdir}/boot/vmlinuz-${pkgbase}"

  # install fallback mkinitcpio.conf file and preset file for kernel
  install -D -m644 "${srcdir}/linux.preset" "${pkgdir}/etc/mkinitcpio.d/${pkgbase}.preset"

  # set correct depmod command for install
  sed -e "s|%PKGBASE%|${pkgbase}|g;s|%KERNVER%|${_kernver}|g" \
    "${startdir}/${install}" > "${startdir}/${install}.pkg"
  true && install=${install}.pkg

  # install mkinitcpio preset file for kernel
  sed "s|%PKGBASE%|${pkgbase}|g" "${srcdir}/linux.preset" |
    install -D -m644 /dev/stdin "${pkgdir}/etc/mkinitcpio.d/${pkgbase}.preset"

  # install pacman hook for initramfs regeneration
  sed "s|%PKGBASE%|${pkgbase}|g" "${srcdir}/99-linux.hook" |
    install -D -m644 /dev/stdin "${pkgdir}/usr/share/libalpm/hooks/99-${pkgbase}.hook"

  # remove build and source links
  rm -f "${pkgdir}"/lib/modules/${_kernver}/{source,build}

  # remove the firmware
  rm -rf "${pkgdir}/lib/firmware"

  # make room for external modules
  ln -s "../extramodules-${_basekernel}${_kernelname:--ARCH}" "${pkgdir}/lib/modules/${_kernver}/extramodules"

  # add real version for building modules and running depmod from post_install/upgrade
  mkdir -p "${pkgdir}/lib/modules/extramodules-${_basekernel}${_kernelname:--ARCH}"
  echo "${_kernver}" > "${pkgdir}/lib/modules/extramodules-${_basekernel}${_kernelname:--ARCH}/version"

  # Now we call depmod...
  depmod -b "${pkgdir}" -F System.map "${_kernver}"

  # move module tree /lib -> /usr/lib
  install -dm755 "$pkgdir/usr"
  mv "$pkgdir/lib" "$pkgdir/usr"

  # Install vmlinux in -debug
  debugpkg="${pkgdir}/../${pkgbase}-debug"
  VMLINUX_BID=$(_buildid vmlinux)

  echo $VMLINUX_BID > vmlinux.id
  install -D -m644 vmlinux.id \
    "${pkgdir}/usr/lib/modules/${_kernver}/build/vmlinux.id"

  install -dm755 "${debugpkg}/usr/lib/debug/.build-id/${VMLINUX_BID:0:2}"
  ln -s "../../usr/lib/modules/${_kernver}/build/vmlinux" \
    "${debugpkg}/usr/lib/debug/.build-id/${VMLINUX_BID:0:2}/${VMLINUX_BID:2}"

  install -D -m755 vmlinux \
    "${debugpkg}/usr/lib/debug/usr/lib/modules/${_kernver}/build/vmlinux"

  ln -s build/vmlinux "${debugpkg}/usr/lib/debug/usr/lib/modules/${_kernver}/vmlinux"

  # Some tools expect modules to be in /lib/modules, and thus the debug
  # information in /usr/lib/debug/lib/modules.
  install -dm755 "${debugpkg}/usr/lib/debug/lib/modules"
  ln -s ../../usr/lib/modules/${_kernver} "${debugpkg}/usr/lib/debug/lib/modules/${_kernver}"
}

_package-headers() {
  pkgdesc="Header files and scripts for building modules for ${pkgbase} kernel"
  provides=("kernel26${_kernelname}-headers=${pkgver}" "linux-headers=${pkgver}")
  conflicts=("kernel26${_kernelname}-headers")
  replaces=("kernel26${_kernelname}-headers")
  options=('!strip')

  install -dm755 "${pkgdir}/usr/lib/modules/${_kernver}"

  cd "${srcdir}/${_srcname}"
  install -D -m644 System.map \
    "${pkgdir}/usr/lib/modules/${_kernver}/build/System.map"
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

  # copy arch includes for external modules
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/arch/x86"
  cp -a arch/x86/include "${pkgdir}/usr/lib/modules/${_kernver}/build/arch/x86/"

  # copy files necessary for later builds, like nvidia and vmware
  cp Module.symvers "${pkgdir}/usr/lib/modules/${_kernver}/build"
  cp -a scripts "${pkgdir}/usr/lib/modules/${_kernver}/build"

  # fix permissions on scripts dir
  chmod og-w -R "${pkgdir}/usr/lib/modules/${_kernver}/build/scripts"
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/.tmp_versions"

  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/arch/${KARCH}/kernel"

  cp arch/${KARCH}/Makefile "${pkgdir}/usr/lib/modules/${_kernver}/build/arch/${KARCH}/"

  if [ "${CARCH}" = "i686" ]; then
    cp arch/${KARCH}/Makefile_32.cpu "${pkgdir}/usr/lib/modules/${_kernver}/build/arch/${KARCH}/"
  fi

  cp arch/${KARCH}/kernel/asm-offsets.s "${pkgdir}/usr/lib/modules/${_kernver}/build/arch/${KARCH}/kernel/"

  # add dm headers
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/md"
  cp drivers/md/*.h "${pkgdir}/usr/lib/modules/${_kernver}/build/drivers/md"

  # add inotify.h
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/include/linux"
  cp include/linux/inotify.h "${pkgdir}/usr/lib/modules/${_kernver}/build/include/linux/"

  # add wireless headers
  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build/net/mac80211/"
  cp net/mac80211/*.h "${pkgdir}/usr/lib/modules/${_kernver}/build/net/mac80211/"

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
  rm -rf "${pkgdir}"/usr/lib/modules/${_kernver}/build/arch/{alpha,arc,arm,arm26,arm64,avr32,blackfin,c6x,cris,frv,h8300,hexagon,ia64,m32r,m68k,m68knommu,metag,mips,microblaze,mn10300,openrisc,parisc,powerpc,ppc,s390,score,sh,sh64,sparc,sparc64,tile,unicore32,um,v850,xtensa}

  # remove a files already in linux-docs package
  rm -f "${pkgdir}/usr/lib/modules/${_kernver}/build/Documentation/kbuild/Kconfig.recursion-issue-01"
  rm -f "${pkgdir}/usr/lib/modules/${_kernver}/build/Documentation/kbuild/Kconfig.recursion-issue-02"
  rm -f "${pkgdir}/usr/lib/modules/${_kernver}/build/Documentation/kbuild/Kconfig.select-break"
}

_package-docs() {
  pkgdesc="Kernel hackers manual - HTML documentation that comes with the ${pkgbase} kernel"
  provides=("kernel26${_kernelname}-docs=${pkgver}" "linux-docs=${pkgver}")
  conflicts=("kernel26${_kernelname}-docs")
  replaces=("kernel26${_kernelname}-docs")

  cd "${srcdir}/${_srcname}"

  mkdir -p "${pkgdir}/usr/lib/modules/${_kernver}/build"
  cp -al Documentation "${pkgdir}/usr/lib/modules/${_kernver}/build"
  find "${pkgdir}" -type f -exec chmod 444 {} \;
  find "${pkgdir}" -type d -exec chmod 755 {} \;

  # remove a file already in linux package
  rm -f "${pkgdir}/usr/lib/modules/${_kernver}/build/Documentation/DocBook/Makefile"
}

# AUR hack
pkgname=linux-ec2
pkgdesc="Linux kernel for Amazon EC2"

true && pkgname=("${pkgbase}" "${pkgbase}-headers" "${pkgbase}-docs")
for _p in ${pkgname[@]}; do
  eval "package_${_p}() {
    $(declare -f "_package${_p#${pkgbase}}")
    _package${_p#${pkgbase}}
  }"
done

# vim:set ts=8 sts=2 sw=2 et:

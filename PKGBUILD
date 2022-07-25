# Arch64 kernel for BananaPi R64
# Maintainer: yjun <ericwouds@gmail.com>

# PKGBUILD: https://github.com/archlinuxarm/PKGBUILDs/tree/master/core/linux-aarch64

pkgbase=linux-bpir64-git
_srcname=linux
_gitroot="https://git.kernel.org/pub/scm/linux/kernel/git/stable/${_srcname}"
_gitbranch="linux-rolling-stable"
_kernelname=${pkgbase#linux}
_desc="AArch64 kernel for BPIR64"
pkgver=5.18.14.bpi.r64.1
pkgrel=1
arch=('aarch64')
url="http://www.kernel.org/"
license=('GPL2')
makedepends=('kmod' 'inetutils' 'bc' 'git' 'dtc')
options=('!strip')
source=('defconfig'
        'linux.preset'
        '60-linux.hook'
        '90-linux.hook'
        '95-linux.hook'
        'bpir64-writefip')
md5sums=(SKIP SKIP SKIP SKIP SKIP SKIP)

export LOCALVERSION="-${pkgrel}"

prepare() {
  if [[ -d "${srcdir}/${_srcname}/" ]]; then
    cd "${srcdir}/${_srcname}/"
    git fetch --depth 1
    echo "LOCAL  HEAD: $(git rev-parse HEAD)"
    echo "REMOTE HEAD: $(git rev-parse @{u})"
    if [ "$(git rev-parse HEAD)" != "$(git rev-parse @{u})" ]; then
      git pull --depth=1 --rebase=true --force origin "${_gitbranch}:${_gitbranch}"
      git checkout "${_gitbranch}"
    fi
    echo
  else
    cd "${srcdir}/"
    echo git clone --branch "${_gitbranch}" --depth=1 "${_gitroot}" "${srcdir}/${_srcname}/"
    git clone --branch "${_gitbranch}" --depth=1 "${_gitroot}" "${srcdir}/${_srcname}/"
    echo
  fi
  cd "${srcdir}/${_srcname}/"

  cp -vf ${startdir}/defconfig ./arch/arm64/configs/bpir64_defconfig
  make bpir64_defconfig
  rm -vf ./arch/arm64/configs/bpir64_defconfig

  # get kernel version
  make prepare
}

pkgver() {
  cd "$srcdir/$_srcname"
  printf "%s" "$(echo  $(make -s kernelrelease) | sed 's/\([^-]*-\)g/r\1/;s/-/./g')"
}

build() {
  cd ${_srcname}
  unset LDFLAGS
  make ${MAKEFLAGS} KCFLAGS=-w Image Image.gz modules
  # Generate device tree blobs with symbols to support applying device tree overlays in U-Boot
  make ${MAKEFLAGS} DTC_FLAGS="-@" dtbs
}

_package() {
  pkgdesc="The Linux Kernel and modules - ${_desc}"
  depends=('coreutils' 'linux-firmware' 'kmod' 'bpir64-atf-git')
  optdepends=('mkinitcpio>=0.7')
  provides=("linux=${pkgver}" "WIREGUARD-MODULE")
  replaces=('linux-armv8')
  conflicts=('linux')
  backup=("etc/mkinitcpio.d/${pkgbase}.preset")
  install=${pkgname}.install

  cd ${_srcname}

  KARCH=arm64

  # get kernel version
  _kernver="$(make kernelrelease)"
  _basekernel=${_kernver%%-*}
  _basekernel=${_basekernel%.*}

  mkdir -p "${pkgdir}"/{boot,boot/dtss,boot/dtbs,usr/lib/modules}
  make INSTALL_MOD_PATH="${pkgdir}/usr" DEPMOD=/doesnt/exist modules_install
  make dtbs
  cp arch/$KARCH/boot/Image{,.gz} "${pkgdir}/boot"
  cp arch/$KARCH/boot/dts/mediatek/.*.dtb.dts.tmp "${pkgdir}/boot/dtss"

  # make room for external modules
  local _extramodules="extramodules-${_basekernel}${_kernelname}"
  ln -s "../${_extramodules}" "${pkgdir}/usr/lib/modules/${_kernver}/extramodules"

  # add real version for building modules and running depmod from hook
  echo "${_kernver}" |
    install -Dm644 /dev/stdin "${pkgdir}/usr/lib/modules/${_extramodules}/version"

  # remove build and source links
  rm "${pkgdir}"/usr/lib/modules/${_kernver}/{source,build}

  # now we call depmod...
  depmod -b "${pkgdir}/usr" -F System.map "${_kernver}"

  # add vmlinux
  install -Dt "${pkgdir}/usr/lib/modules/${_kernver}/build" -m644 vmlinux

  # sed expression for following substitutions
  local _subst="
    s|%PKGBASE%|${pkgbase}|g
    s|%KERNVER%|${_kernver}|g
    s|%EXTRAMODULES%|${_extramodules}|g
  "

  # install mkinitcpio preset file
  sed "${_subst}" ../linux.preset |
    install -Dm644 /dev/stdin "${pkgdir}/etc/mkinitcpio.d/${pkgbase}.preset"

  # install pacman hooks
  sed "${_subst}" ../60-linux.hook |
    install -Dm644 /dev/stdin "${pkgdir}/usr/share/libalpm/hooks/60-${pkgbase}.hook"
  sed "${_subst}" ../90-linux.hook |
    install -Dm644 /dev/stdin "${pkgdir}/usr/share/libalpm/hooks/90-${pkgbase}.hook"
  sed "${_subst}" ../95-linux.hook |
    install -Dm644 /dev/stdin "${pkgdir}/usr/share/libalpm/hooks/95-${pkgbase}.hook"

  cd "${startdir}"
  install -m755 -vDt $pkgdir/usr/bin bpir64-writefip
}

_package-headers() {
  pkgdesc="Header files and scripts for building modules for linux kernel - ${_desc}"
  provides=("linux-headers=${pkgver}")
  conflicts=('linux-headers')

  cd ${_srcname}
  local _builddir="${pkgdir}/usr/lib/modules/${_kernver}/build"

  install -Dt "${_builddir}" -m644 Makefile .config Module.symvers
  install -Dt "${_builddir}/kernel" -m644 kernel/Makefile

  mkdir "${_builddir}/.tmp_versions"

  cp -t "${_builddir}" -a include scripts

  install -Dt "${_builddir}/arch/${KARCH}" -m644 arch/${KARCH}/Makefile
  install -Dt "${_builddir}/arch/${KARCH}/kernel" -m644 arch/${KARCH}/kernel/asm-offsets.s

  cp -t "${_builddir}/arch/${KARCH}" -a arch/${KARCH}/include
  mkdir -p "${_builddir}/arch/arm"
  cp -t "${_builddir}/arch/arm" -a arch/arm/include

  install -Dt "${_builddir}/drivers/md" -m644 drivers/md/*.h
  install -Dt "${_builddir}/net/mac80211" -m644 net/mac80211/*.h

  # http://bugs.archlinux.org/task/13146
  install -Dt "${_builddir}/drivers/media/i2c" -m644 drivers/media/i2c/msp3400-driver.h

  # http://bugs.archlinux.org/task/20402
  install -Dt "${_builddir}/drivers/media/usb/dvb-usb" -m644 drivers/media/usb/dvb-usb/*.h
  install -Dt "${_builddir}/drivers/media/dvb-frontends" -m644 drivers/media/dvb-frontends/*.h
  install -Dt "${_builddir}/drivers/media/tuners" -m644 drivers/media/tuners/*.h

  # https://bugs.archlinux.org/task/71392
  install -Dt "${_builddir}/drivers/iio/common/hid-sensors" -m644 drivers/iio/common/hid-sensors/*.h

  # add xfs and shmem for aufs building
  mkdir -p "${_builddir}"/{fs/xfs,mm}

  # copy in Kconfig files
  find . -name Kconfig\* -exec install -Dm644 {} "${_builddir}/{}" \;

  # remove unneeded architectures
  local _arch
  for _arch in "${_builddir}"/arch/*/; do
    [[ ${_arch} == */${KARCH}/ || ${_arch} == */arm/ ]] && continue
    rm -r "${_arch}"
  done

  # remove files already in linux-docs package
  rm -r "${_builddir}/Documentation"

  # remove now broken symlinks
  find -L "${_builddir}" -type l -printf 'Removing %P\n' -delete

  # Fix permissions
  chmod -R u=rwX,go=rX "${_builddir}"

  # strip scripts directory
  local _binary _strip
  while read -rd '' _binary; do
    case "$(file -bi "${_binary}")" in
      *application/x-sharedlib*)  _strip="${STRIP_SHARED}"   ;; # Libraries (.so)
      *application/x-archive*)    _strip="${STRIP_STATIC}"   ;; # Libraries (.a)
      *application/x-executable*) _strip="${STRIP_BINARIES}" ;; # Binaries
      *) continue ;;
    esac
    /usr/bin/strip ${_strip} "${_binary}"
  done < <(find "${_builddir}/scripts" -type f -perm -u+w -print0 2>/dev/null)
}

pkgname=("${pkgbase}" "${pkgbase}-headers")
for _p in ${pkgname[@]}; do
  eval "package_${_p}() {
    $(declare -f "_package${_p#$pkgbase}")
    _package${_p#${pkgbase}}
  }"
done
# vim: set sw=2 ts=2 et:

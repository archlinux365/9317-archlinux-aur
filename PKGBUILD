# Maintainer: Irvine <irvinemcminn_at_that gmail_place>

pkgbase=linux-hardened-apparmor
_srcname=linux-4.14
_pkgver=4.14.13
pkgver=${_pkgver}.a
pkgrel=1
url='https://github.com/copperhead/linux-hardened'
arch=('x86_64')
license=('GPL2')
makedepends=('xmlto' 'kmod' 'inetutils' 'bc' 'libelf')
options=('!strip')
source=(https://www.kernel.org/pub/linux/kernel/v4.x/${_srcname}.tar.xz
        https://www.kernel.org/pub/linux/kernel/v4.x/${_srcname}.tar.sign
        https://www.kernel.org/pub/linux/kernel/v4.x/patch-${_pkgver}.xz
        https://www.kernel.org/pub/linux/kernel/v4.x/patch-${_pkgver}.sign
        https://github.com/thestinger/linux-hardened/releases/download/${pkgver}/linux-hardened-${pkgver}.patch{,.sig}
        config.x86_64  # the main kernel config files
        60-linux.hook  # pacman hook for depmod
        90-linux.hook  # pacman hook for initramfs regeneration
        linux.preset   # standard config files for mkinitcpio ramdisk

        # https://bugs.archlinux.org/task/56575
        e1000e-Fix-e1000_check_for_copper_link_ich8lan-retur.patch
        # https://bugs.archlinux.org/task/56605
        xfrm-Fix-stack-out-of-bounds-read-on-socket-policy-lookup.patch
        # https://bugs.archlinux.org/task/56846
        cgroup-fix-css_task_iter-crash-on-CSS_TASK_ITER_PROC.patch
        # https://bugs.archlinux.org/task/56711
        drm-i915-edp-Only-use-the-alternate-fixed-mode-if-its-asked-for.patch

        CVE-2017-8824-dccp-use-after-free-in-DCCP-code.patch
        CVE-2017-17448-netfilter-nfnetlink_cthelper-Add-missing-permission-checks.patch
        CVE-2017-17450-netfilter-xt_osf-Add-missing-permission-checks.patch
        CVE-2017-17741-KVM-Fix-stack-out-of-bounds-read-in-write_mmio.patch
)
replaces=('linux-grsec')
sha256sums=('f81d59477e90a130857ce18dc02f4fbe5725854911db1e7ba770c7cd350f96a7'
            'SKIP'
            'ce897f467e80452f29d7a7a8809e8585ea12192a2c32e4d18578f64b043e802e'
            'SKIP'
            '6b12f95c7eecfc3629fe94079f5a82d509a31621f689503dd91225c730ed0371'
            'SKIP'
            'd0c7c7c5ebd1a77047bb85dd441f11dcc45bd2491f70b841e985a42b4b9975bf'
            'ae2e95db94ef7176207c690224169594d49445e04249d2499e9d2fbc117a0b21'
            '75f99f5239e03238f88d1a834c50043ec32b1dc568f2cc291b07d04718483919'
            'ad6344badc91ad0630caacde83f7f9b97276f80d26a20619a87952be65492c65'
            'c6e7db7dfd6a07e1fd0e20c3a5f0f315f9c2a366fe42214918b756f9a1c9bfa3'
            '294c928b8252112d621df1d13fbfeade13f28ddea034d44e89db41b66d2b7d45'
            '721c387db986d883a6df6b0da17941ce6d59811b0647ae6653b978c5ee144f19'
            'c08d12c699398ef88b764be1837b9ee11f2efd3188bd1bf4e8f85dfbeee58148'
            '6be803c62b7ce41f1b4de6c867715398812b1c1a3e68a0078512f2872e2a3fa9'
            'b833ad4354fcd2cc6ee60c971088f77aa5b06a58fce346c40268c0b05b1e8cb5'
            '72efa781c8ee1175a8865e6a12568aaf3bac4b76d4285819c6a75a3e5fe41435'
            'ee125179fdd295266aba52e1aebaef97cb41f4a05d9cd1c2b11b4ce83746e197')
validpgpkeys=(
              'ABAF11C65A2970B130ABE3C479BE3E4300411886' # Linus Torvalds
              '647F28654894E3BD457199BE38DBBDC86092693E' # Greg Kroah-Hartman
              '65EEFE022108E2B708CBFCF7F9E712E59AF5F22A' # Daniel Micay
             )
_kernelname=${pkgbase#linux}

prepare() {
  cd ${_srcname}

  # add upstream patch
  msg2 "Applying upstream patch"
  patch -Np1 < ../patch-${_pkgver}
  # XXX: GNU patch doesn't support git-style file mode
  chmod +x tools/objtool/sync-check.sh

  # apply all patches
  for _patch in "${source[@]}"; do
    _patch=${_patch%%::*}
    _patch=${_patch##*/}
    if [[ "${_patch}" =~ \.patch$ ]] &&
       [[ "${_patch}" != "linux-hardened-${pkgver}.patch" ]]; then
      msg2 "Applying patch ${_patch}"
      patch -Np1 < "../${_patch}"
    fi
  done

  # linux hardened patch
  msg2 "Applying hardened patch"
  patch -Np1 < ../linux-hardened-${pkgver}.patch

  # add latest fixes from stable queue, if needed
  # http://git.kernel.org/?p=linux/kernel/git/stable/stable-queue.git

  cp -Tf ../config.${CARCH} .config

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

  # load configuration
  # Configure the kernel. Replace the line below with one of your choice.
  #make menuconfig # CLI menu for configuration
  #make nconfig # new CLI menu for configuration
  #make xconfig # X-based configuration
  #make oldconfig # using old config from previous kernel version
  # ... or manually edit .config

  # rewrite configuration
  yes "" | make config >/dev/null
}

build() {
  cd ${_srcname}
  make LOCALVERSION= bzImage modules
}

_package() {
  pkgdesc="The ${pkgbase/linux/Linux} kernel and modules"
  [ "${pkgbase}" = "linux" ] && groups=('base')
  depends=('coreutils' 'linux-firmware' 'kmod' 'mkinitcpio>=0.7')
  optdepends=('crda: to set the correct wireless channels of your country')
  backup=("etc/mkinitcpio.d/${pkgbase}.preset")
  install=linux.install

  cd ${_srcname}

  # get kernel version
  _kernver="$(make LOCALVERSION= kernelrelease)"
  _basekernel=${_kernver%%-*}
  _basekernel=${_basekernel%.*}

  mkdir -p "${pkgdir}"/{boot,usr/lib/modules}
  make LOCALVERSION= INSTALL_MOD_PATH="${pkgdir}/usr" modules_install
  cp arch/x86/boot/bzImage "${pkgdir}/boot/vmlinuz-${pkgbase}"

  # make room for external modules
  local _extramodules="extramodules-${_basekernel}${_kernelname:--ARCH}"
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

  # hack to allow specifying an initially nonexisting install file
  sed "${_subst}" "${startdir}/${install}" > "${startdir}/${install}.pkg"
  true && install=${install}.pkg

  # install mkinitcpio preset file
  sed "${_subst}" ../linux.preset |
    install -Dm644 /dev/stdin "${pkgdir}/etc/mkinitcpio.d/${pkgbase}.preset"

  # install pacman hooks
  sed "${_subst}" ../60-linux.hook |
    install -Dm644 /dev/stdin "${pkgdir}/usr/share/libalpm/hooks/60-${pkgbase}.hook"
  sed "${_subst}" ../90-linux.hook |
    install -Dm644 /dev/stdin "${pkgdir}/usr/share/libalpm/hooks/90-${pkgbase}.hook"
}

_package-headers() {
  pkgdesc="Header files and scripts for building modules for ${pkgbase/linux/Linux} kernel"

  cd ${_srcname}
  local _builddir="${pkgdir}/usr/lib/modules/${_kernver}/build"

  install -Dt "${_builddir}" -m644 Makefile .config Module.symvers
  install -Dt "${_builddir}/kernel" -m644 kernel/Makefile

  mkdir "${_builddir}/.tmp_versions"

  cp -t "${_builddir}" -a include scripts

  install -Dt "${_builddir}/arch/x86" -m644 arch/x86/Makefile
  install -Dt "${_builddir}/arch/x86/kernel" -m644 arch/x86/kernel/asm-offsets.s

  cp -t "${_builddir}/arch/x86" -a arch/x86/include

  install -Dt "${_builddir}/drivers/md" -m644 drivers/md/*.h
  install -Dt "${_builddir}/net/mac80211" -m644 net/mac80211/*.h

  # http://bugs.archlinux.org/task/9912
  install -Dt "${_builddir}/drivers/media/dvb-core" -m644 drivers/media/dvb-core/*.h

  # http://bugs.archlinux.org/task/13146
  install -Dt "${_builddir}/drivers/media/i2c" -m644 drivers/media/i2c/msp3400-driver.h

  # http://bugs.archlinux.org/task/20402
  install -Dt "${_builddir}/drivers/media/usb/dvb-usb" -m644 drivers/media/usb/dvb-usb/*.h
  install -Dt "${_builddir}/drivers/media/dvb-frontends" -m644 drivers/media/dvb-frontends/*.h
  install -Dt "${_builddir}/drivers/media/tuners" -m644 drivers/media/tuners/*.h

  # add xfs and shmem for aufs building
  mkdir -p "${_builddir}"/{fs/xfs,mm}

  # copy in Kconfig files
  find . -name Kconfig\* -exec install -Dm644 {} "${_builddir}/{}" \;

  # add objtool for external module building and enabled VALIDATION_STACK option
  install -Dt "${_builddir}/tools/objtool" tools/objtool/objtool

  # remove unneeded architectures
  local _arch
  for _arch in "${_builddir}"/arch/*/; do
    [[ ${_arch} == */x86/ ]] && continue
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

_package-docs() {
  pkgdesc="Kernel hackers manual - HTML documentation that comes with the ${pkgbase/linux/Linux} kernel"

  cd ${_srcname}
  local _builddir="${pkgdir}/usr/lib/modules/${_kernver}/build"

  mkdir -p "${_builddir}"
  cp -t "${_builddir}" -a Documentation

  # Fix permissions
  chmod -R u=rwX,go=rX "${_builddir}"
}

pkgname=("${pkgbase}" "${pkgbase}-headers" "${pkgbase}-docs")
for _p in ${pkgname[@]}; do
  eval "package_${_p}() {
    $(declare -f "_package${_p#${pkgbase}}")
    _package${_p#${pkgbase}}
  }"
done

# vim:set ts=8 sts=2 sw=2 et:

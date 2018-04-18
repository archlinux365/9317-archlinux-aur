# $Id$
# Maintainer: Tobias Powalowski <tpowa@archlinux.org>
# Maintainer: Thomas Baechler <thomas@archlinux.org>
# Maintainer: Tony Lambiris <tony@critialstack.com>

#pkgbase=linux               # Build stock -ARCH kernel
pkgbase=linux-macbook       # Build kernel with a different name
_srcname=linux-4.16
pkgver=4.16.2
pkgrel=2
arch=('x86_64')
url="https://www.kernel.org/"
license=('GPL2')
makedepends=('xmlto' 'kmod' 'inetutils' 'bc' 'libelf')
options=('!strip')
source=(
  https://www.kernel.org/pub/linux/kernel/v4.x/${_srcname}.tar.{xz,sign}
  https://www.kernel.org/pub/linux/kernel/v4.x/patch-${pkgver}.{xz,sign}
  config         # the main kernel config file
  60-linux.hook  # pacman hook for depmod
  90-linux.hook  # pacman hook for initramfs regeneration
  linux.preset   # standard config files for mkinitcpio ramdisk
  macbook-wakeup.service # service file for suspend/resume events
  RFC-PCI-Workaround-to-enable-poweroff-on-Mac-Pro-11.patch
  RFC-v2-PCI-Workaround-to-enable-poweroff-on-Mac-Pro-11.patch
  0001-add-sysctl-to-disallow-unprivileged-CLONE_NEWUSER-by.patch
  0002-drm-i915-edp-Only-use-the-alternate-fixed-mode-if-it.patch
  0003-Partially-revert-swiotlb-remove-various-exports.patch
  0004-Fix-vboxguest-on-guests-with-more-than-4G-RAM.patch
  0005-Revert-drm-amd-display-disable-CRTCs-with-NULL-FB-on.patch
  0006-net-aquantia-Regression-on-reset-with-1.x-firmware.patch
  0007-media-v4l2-core-fix-size-of-devnode_nums-bitarray.patch
)
validpgpkeys=(
  'ABAF11C65A2970B130ABE3C479BE3E4300411886'  # Linus Torvalds
  '647F28654894E3BD457199BE38DBBDC86092693E'  # Greg Kroah-Hartman
)
sha256sums=('63f6dc8e3c9f3a0273d5d6f4dca38a2413ca3a5f689329d05b750e4c87bb21b9'
            'SKIP'
            'fa82ef50579ea9b71b26b2ae98460380e22a48be2524f90548947a586988e575'
            'SKIP'
            '51f794dee6098b19b5f8ec2277f52a313584f2ff8b3abf111f2fd92a6ea118dd'
            'ae2e95db94ef7176207c690224169594d49445e04249d2499e9d2fbc117a0b21'
            '75f99f5239e03238f88d1a834c50043ec32b1dc568f2cc291b07d04718483919'
            'ad6344badc91ad0630caacde83f7f9b97276f80d26a20619a87952be65492c65'
            'c5a714823c3418692bc5c212dd5d094a0e2ae6147d6726822911f1c26e3a1d1b'
            '7c99aaeaea7837f83a3ad215cf07277934ccf39720acee7f1c371dc86bdf89fc'
            '09189eb269a9fd16898cf90a477df23306236fb897791e8d04e5a75d5007bbff'
            '6ad732db3f773de52ab544be83f22b04157a880742ab262202b01c32ee2d4995'
            'bc300c44023cdef225f5d18fe6054cd2886c4062410d2720b2b2fd82465184f3'
            'dcd819e630cfa7292aa38078ab16758338836ee917e82ce42c8a9aca08f2ecdb'
            '9e93bc5bafeb978b1fb260d0cbfe15d8214ea0599dc6d771aae9ab652e223339'
            '9fe8141703fd2b9eb8ea8f81a19a115c93684a87ee0895d042b48ce98d42c12a'
            'e59bba13edb36ff5639ed3fd6c541e2c3d378db71dca6ea01f0aede6ab1b5700'
            '34c7316a4e909300e14b0510dbeedc1d0acf9e43cc7c48693462e0fd98883fb2')

_kernelname=${pkgbase#linux}
: ${_kernelname:=-ARCH}

prepare() {
  cd ${_srcname}

  # add upstream patch
  patch -p1 -i ../patch-${pkgver}

  # add latest fixes from stable queue, if needed
  # http://git.kernel.org/?p=linux/kernel/git/stable/stable-queue.git

  # start of macbook specific patches
  # https://patchwork.kernel.org/patch/9140867/

  msg "patch -Np1 -i ../RFC-PCI-Workaround-to-enable-poweroff-on-Mac-Pro-11.patch"
  patch -Np1 -i ../RFC-PCI-Workaround-to-enable-poweroff-on-Mac-Pro-11.patch

  # https://patchwork.kernel.org/patch/9288825/
  msg "patch -Np1 -i ../RFC-v2-PCI-Workaround-to-enable-poweroff-on-Mac-Pro-11.patch"
  patch -Np1 -i ../RFC-v2-PCI-Workaround-to-enable-poweroff-on-Mac-Pro-11.patch

  # disable USER_NS for non-root users by default
  patch -Np1 -i ../0001-add-sysctl-to-disallow-unprivileged-CLONE_NEWUSER-by.patch

  # https://bugs.archlinux.org/task/56711
  patch -Np1 -i ../0002-drm-i915-edp-Only-use-the-alternate-fixed-mode-if-it.patch

  # NVIDIA driver compat
  patch -Np1 -i ../0003-Partially-revert-swiotlb-remove-various-exports.patch

  # https://bugs.archlinux.org/task/58153
  patch -Np1 -i ../0004-Fix-vboxguest-on-guests-with-more-than-4G-RAM.patch

  # https://bugs.archlinux.org/task/58158
  patch -Np1 -i ../0005-Revert-drm-amd-display-disable-CRTCs-with-NULL-FB-on.patch

  # https://bugs.archlinux.org/task/58174
  patch -Np1 -i ../0006-net-aquantia-Regression-on-reset-with-1.x-firmware.patch

  # https://bugs.archlinux.org/task/58205
  patch -Np1 -i ../0007-media-v4l2-core-fix-size-of-devnode_nums-bitarray.patch

  cat ../config - >.config <<END
CONFIG_LOCALVERSION="${_kernelname}"
CONFIG_LOCALVERSION_AUTO=n
END

  # set extraversion to pkgrel and empty localversion
  sed -e "/^EXTRAVERSION =/s/=.*/= -${pkgrel}/" \
      -e "/^EXTRAVERSION =/aLOCALVERSION =" \
      -i Makefile

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

  make bzImage modules
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
  _kernver="$(make kernelrelease)"
  _basekernel=${_kernver%%-*}
  _basekernel=${_basekernel%.*}

  mkdir -p "${pkgdir}"/{boot,usr/lib/modules}
  make INSTALL_MOD_PATH="${pkgdir}/usr" modules_install
  cp arch/x86/boot/bzImage "${pkgdir}/boot/vmlinuz-${pkgbase}"

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

  # hack to allow specifying an initially nonexisting install file
  sed "${_subst}" "${startdir}/${install}" > "${startdir}/${install}.pkg"
  true && install=${install}.pkg

  # copy macbook-wakeup.service to systemd
  mkdir -p "${pkgdir}/usr/lib/systemd/system"
  cp "${srcdir}/macbook-wakeup.service" "${pkgdir}/usr/lib/systemd/system"

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

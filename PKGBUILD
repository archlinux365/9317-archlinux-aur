# Maintainer: Piotr Gorski <lucjan.lucjanov@gmail.com>
# Contributor: Tobias Powalowski <tpowa@archlinux.org>
# Contributor: Thomas Baechler <thomas@archlinux.org>

### BUILD OPTIONS
# Set these variables to ANYTHING that is not null to enable them

### Use tentative patches from https://groups.google.com/forum/#!forum/bfq-iosched
### Thx to Tom 'monotykamary' Nguyen
_use_tentative_patches=

### Use patches from https://marc.info/?l=linux-block&m=150797307912556&w=1
_use_blk_mq_patches=

### Use disable writeback throttling: https://marc.info/?l=linux-block&m=150486424501778&w=2
_use_lucamiccio_patch=

### Tweak kernel options prior to a build via nconfig
_makenconfig=

### Tweak kernel options prior to a build via menuconfig
_makemenuconfig=

### Tweak kernel options prior to a build via xconfig
_makexconfig=

### Tweak kernel options prior to a build via gconfig
_makegconfig=

### Running with a 1000 HZ tick rate 
_1k_HZ_ticks=y

# NUMA is optimized for multi-socket motherboards.
# A single multi-core CPU actually runs slower with NUMA enabled.
# See, https://bugs.archlinux.org/task/31187
_NUMAdisable=y

# Compile ONLY probed modules
# As of mainline 2.6.32, running with this option will only build the modules
# that you currently have probed in your system VASTLY reducing the number of
# modules built and the build time to do it.
#
# WARNING - ALL modules must be probed BEFORE you begin making the pkg!
#
# To keep track of which modules are needed for your specific system/hardware,
# give module_db script a try: https://aur.archlinux.org/packages/modprobed-db
# This PKGBUILD will call it directly to probe all the modules you have logged!
#
# More at this wiki page ---> https://wiki.archlinux.org/index.php/Modprobed_db
_localmodcfg=

# Use the current kernel's .config file
# Enabling this option will use the .config of the RUNNING kernel rather than
# the ARCH defaults. Useful when the package gets updated and you already went
# through the trouble of customizing your config options.  NOT recommended when
# a new kernel is released, but again, convenient for package bumps.
_use_current=

### Enable MQ scheduling 
_mq_enable=

### Do not edit below this line unless you know what you're doing

pkgbase=linux-rt-bfq
# pkgname=('linux-rt-bfq' 'linux-rt-bfq-headers' 'linux-rt-bfq-docs')
_srcname=linux-4.14
_pkgver=4.14.6
_rtver=7
_rtpatchver=rt${_rtver}
_srcpatch="${_pkgver##*\.*\.}"
pkgver=${_pkgver}.${_rtver}
pkgrel=4
arch=('x86_64')
url="https://github.com/Algodev-github/bfq-mq/"
license=('GPL2')
options=('!strip')
makedepends=('kmod' 'inetutils' 'bc' 'libelf')
_bfq_sq_mq_ver='20171211'
_bfq_sq_mq_patch="4.14-bfq-sq-mq-git-${_bfq_sq_mq_ver}.patch"
#_lucjanpath="https://raw.githubusercontent.com/sirlucjan/kernel-patches/master/4.14"
_lucjanpath="https://gitlab.com/sirlucjan/kernel-patches/raw/master/4.14"
_gcc_path="https://raw.githubusercontent.com/sirlucjan/kernel_gcc_patch/master"
_gcc_patch="enable_additional_cpu_optimizations_for_gcc_v4.9+_kernel_v4.13+.patch"

source=("https://www.kernel.org/pub/linux/kernel/v4.x/${_srcname}.tar.xz"
        "https://www.kernel.org/pub/linux/kernel/v4.x/${_srcname}.tar.sign"
        "https://www.kernel.org/pub/linux/kernel/v4.x/patch-${_pkgver}.xz"
        "https://www.kernel.org/pub/linux/kernel/v4.x/patch-${_pkgver}.sign"
        "http://www.kernel.org/pub/linux/kernel/projects/rt/4.14/patch-${_pkgver}-${_rtpatchver}.patch.xz"
        "http://www.kernel.org/pub/linux/kernel/projects/rt/4.14/patch-${_pkgver}-${_rtpatchver}.patch.sign"
        "${_lucjanpath}/${_bfq_sq_mq_patch}"
        "${_lucjanpath}/blk-mq-v10/0050-blk-mq-sched-dispatch-from-scheduler-only-after-progress-is-made-on->dispatch.patch"
        "${_lucjanpath}/blk-mq-v10/0051-blk-mq-sched-move-actual-dispatching-into-one-helper.patch"
        "${_lucjanpath}/blk-mq-v10/0052-blk-mq-sbitmap-introduce__sbitmap_for_each_set().patch"
        "${_lucjanpath}/blk-mq-v10/0053-blk-mq-block-kyber-check-if-there-is-request-in-ctx-in-kyber_has_work().patch"
        "${_lucjanpath}/blk-mq-v10/0054-blk-mq-introduce-get_budget-and-put_budget-in-blk_mq_ops.patch"
        "${_lucjanpath}/blk-mq-v10/0055-blk-mq-sched-improve-dispatching-from-sw-queue.patch"
        "${_lucjanpath}/blk-mq-v10/0056-blk-mq-SCSI-allow-to-pass-null-rq-to-scsi_prep_state_check().patch"
        "${_lucjanpath}/blk-mq-v10/0057-blk-mq-SCSI-implement-get-budget-and-put_budget-for-blk-mq.patch"
        "${_lucjanpath}/0100-Check-presence-on-tree-of-every-entity-after-every-a.patch"
        "${_lucjanpath}/0300-Disable-writeback-throttling.patch"
        "${_gcc_path}/${_gcc_patch}"
        'fix-race-in-PRT-wait-for-completion-simple-wait-code_Nvidia-RT-160319.patch'
         # the main kernel config files
        'config'
         # pacman hook for depmod
        '60-linux.hook'
         # pacman hook for initramfs regeneration
        '90-linux.hook'
         # pacman hook for remove initramfs
        '99-linux.hook'
         # standard config files for mkinitcpio ramdisk
        'linux.preset'
        '0001-add-sysctl-to-disallow-unprivileged-CLONE_NEWUSER-by.patch'
        '0001-e1000e-Fix-e1000_check_for_copper_link_ich8lan-retur.patch'
        '0002-dccp-CVE-2017-8824-use-after-free-in-DCCP-code.patch')
        
_kernelname=${pkgbase#linux} 

prepare() {
    cd ${_srcname}

    ### Add upstream patch
        msg "Add upstream patch"
        patch -p1 -i ../patch-${_pkgver}
    
    ### Add rt patch
        msg "Add rt patch"
        patch -Np1 -i ../patch-${_pkgver}-${_rtpatchver}.patch
    
    ### Disable USER_NS for non-root users by default
        msg "Disable USER_NS for non-root users by default"
        patch -Np1 -i ../0001-add-sysctl-to-disallow-unprivileged-CLONE_NEWUSER-by.patch
    
    ### Fix https://bugs.archlinux.org/task/56575
        msg "Fix #56575" 
        patch -Np1 -i ../0001-e1000e-Fix-e1000_check_for_copper_link_ich8lan-retur.patch

    ### Fix https://nvd.nist.gov/vuln/detail/CVE-2017-8824
        msg "Fix CVE-2017-8824"
        patch -Np1 -i ../0002-dccp-CVE-2017-8824-use-after-free-in-DCCP-code.patch
    
    
    ### A patch to fix a problem that ought to be fixed in the NVIDIA source code.
    # Stops X from hanging on certain NVIDIA cards
        msg "Fix-race-in-PRT-wait-for-completion-simple-wait-code_Nvidia-RT.patch"
        patch -p1 -i ../fix-race-in-PRT-wait-for-completion-simple-wait-code_Nvidia-RT-160319.patch
            
    ### Patch source with BFQ-SQ-MQ
        msg "Fix naming schema in BFQ-SQ-MQ patch"
        sed -i -e "s|SUBLEVEL = 0|SUBLEVEL = ${_srcpatch}|g" \
            -i -e "s|EXTRAVERSION = -bfq|EXTRAVERSION =|g" \
            -i -e "s|EXTRAVERSION =-mq|EXTRAVERSION =|g" \
            -i -e "s|NAME = Fearless Coyote|NAME = Petit Gorille|g" ../${_bfq_sq_mq_patch}
        msg "Patching source with BFQ-SQ-MQ patches"
        patch -Np1 -i ../${_bfq_sq_mq_patch}
        
    ### Patches related to BUG_ON(entity->tree && entity->tree != &st->active) in __bfq_requeue_entity();
        if [ -n "$_use_tentative_patches" ]; then
        msg "Apply tentative patches"
        for p in "${srcdir}"/0100*.patch*; do 
        msg " $p"
        patch -Np1 -i "$p"; done
        fi
        
    ### Use patches from https://marc.info/?l=linux-block&m=150797307912556&w=1
        if [ -n "$_use_blk_mq_patches" ]; then
        msg "Apply blk-mq patches"
        for p in "${srcdir}"/*-blk-mq*.patch*; do 
        msg " $p" 
        patch -Np1 -i "$p"; done
        fi     
    
    ### Patch from https://marc.info/?l=linux-block&m=150486424501778&w=2
        if [ -n "$_use_lucamiccio_patch" ]; then
        msg "Apply Luca Miccio patch"
        for p in "${srcdir}"/0300*.patch*; do 
        msg " $p" 
        patch -Np1 -i "$p"; done
        fi
    
    ### Patch source to enable more gcc CPU optimizatons via the make nconfig
        msg "Patching source with gcc patch to enable more cpus types"
	patch -Np1 -i ../${_gcc_patch}
	
    ### Clean tree and copy ARCH config over
	msg "Running make mrproper to clean source tree"
	make mrproper

	cp -Tf ../config .config
        
    ### Optionally use running kernel's config
	# code originally by nous; http://aur.archlinux.org/packages.php?ID=40191
	if [ -n "$_use_current" ]; then
		if [[ -s /proc/config.gz ]]; then
			msg "Extracting config from /proc/config.gz..."
			# modprobe configs
			zcat /proc/config.gz > ./.config
		else
			warning "You kernel was not compiled with IKCONFIG_PROC!"
			warning "You cannot read the current config!"
			warning "Aborting!"
			exit
		fi
	fi    
        
    ### Optionally set tickrate to 1000 
	if [ -n "$_1k_HZ_ticks" ]; then
		msg "Setting tick rate to 1k..."
		sed -i -e 's/^CONFIG_HZ_300=y/# CONFIG_HZ_300 is not set/' \
			-i -e 's/^# CONFIG_HZ_1000 is not set/CONFIG_HZ_1000=y/' \
			-i -e 's/^CONFIG_HZ=300/CONFIG_HZ=1000/' .config
	fi
	
    ### Enable MQ scheduling
        if [ -n "$_mq_enable" ]; then
            msg "Enable MQ scheduling..."
            sed -i -e s'/^# CONFIG_SCSI_MQ_DEFAULT is not set/CONFIG_SCSI_MQ_DEFAULT=y/' \
                -i -e s'/^# CONFIG_DM_MQ_DEFAULT is not set/CONFIG_DM_MQ_DEFAULT=y/' ./.config
        fi
   
	if [ "${_kernelname}" != "" ]; then
		sed -i "s|CONFIG_LOCALVERSION=.*|CONFIG_LOCALVERSION=\"${_kernelname}\"|g" ./.config
		sed -i "s|CONFIG_LOCALVERSION_AUTO=.*|CONFIG_LOCALVERSION_AUTO=n|" ./.config
	fi

    ### Optionally disable NUMA for 64-bit kernels only
        # (x86 kernels do not support NUMA)
        if [ -n "$_NUMAdisable" ]; then
            msg "Disabling NUMA from kernel config..."
            sed -i -e 's/CONFIG_NUMA=y/# CONFIG_NUMA is not set/' \
                -i -e '/CONFIG_AMD_NUMA=y/d' \
                -i -e '/CONFIG_X86_64_ACPI_NUMA=y/d' \
                -i -e '/CONFIG_NODES_SPAN_OTHER_NODES=y/d' \
                -i -e '/# CONFIG_NUMA_EMU is not set/d' \
                -i -e '/CONFIG_NODES_SHIFT=6/d' \
                -i -e '/CONFIG_NEED_MULTIPLE_NODES=y/d' \
                -i -e '/# CONFIG_MOVABLE_NODE is not set/d' \
                -i -e '/CONFIG_USE_PERCPU_NUMA_NODE_ID=y/d' \
                -i -e '/CONFIG_ACPI_NUMA=y/d' ./.config
        fi

	### Set extraversion to pkgrel
	sed -ri "s|^(EXTRAVERSION =).*|\1 -${pkgrel}|" Makefile

	### Don't run depmod on 'make install'. We'll do this ourselves in packaging
	sed -i '2iexit 0' scripts/depmod.sh

	### Get kernel version
	msg "Running make prepare for you to enable patched options of your choosing"
	make prepare

	### Optionally load needed modules for the make localmodconfig
	# See https://aur.archlinux.org/packages/modprobed-db
		if [ -n "$_localmodcfg" ]; then
		msg "If you have modprobe-db installed, running it in recall mode now"
		if [ -e /usr/bin/modprobed-db ]; then
			[[ -x /usr/bin/sudo ]] || {
                        echo "Cannot call modprobe with sudo. Install sudo and configure it to work with this user."
                        exit 1; }
			sudo /usr/bin/modprobed-db recall
		fi
		msg "Running Steven Rostedt's make localmodconfig now"
		make localmodconfig
	fi

	### Running make nconfig
	
	[[ -z "$_makenconfig" ]] ||  make nconfig
	
	### Running make menuconfig
	
	[[ -z "$_makemenuconfig" ]] || make menuconfig
	
	### Running make xconfig
	
	[[ -z "$_makexconfig" ]] || make xconfig
	
	### Running make gconfig
	
	[[ -z "$_makegconfig" ]] || make gconfig
	
	### Rewrite configuration
	yes "" | make config >/dev/null

	### Save configuration for later reuse
	cat .config > "${startdir}/config.last"
}

build() {
  cd ${_srcname}

  make ${MAKEFLAGS} LOCALVERSION= bzImage modules
}

_package() {
    pkgdesc='Linux Kernel and modules with the RT patch and the  BFQ scheduler.'
    depends=('coreutils' 'linux-firmware' 'mkinitcpio>=0.7')
    optdepends=('crda: to set the correct wireless channels of your country' 'modprobed-db: Keeps track of EVERY kernel module that has ever been probed - useful for those of us who make localmodconfig')
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
    sed "${_subst}" ../99-linux.hook |
        install -Dm644 /dev/stdin "${pkgdir}/usr/share/libalpm/hooks/99-${pkgbase}.hook"    
}

_package-headers() {
    pkgdesc='Header files and scripts to build modules for linux-rt-bfq.'
    depends=('linux-rt-bfq')

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

    # remove files already in linux-rt-bfq-docs package
    rm -r "${_builddir}/Documentation"

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
    pkgdesc="Kernel hackers manual - HTML documentation that comes with the linux-rt-bfq kernel"
    depends=('linux-rt-bfq')
  
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

sha512sums=('77e43a02d766c3d73b7e25c4aafb2e931d6b16e870510c22cef0cdb05c3acb7952b8908ebad12b10ef982c6efbe286364b1544586e715cf38390e483927904d8'
            'SKIP'
            'c37b437f740fbb480766149ca1c6ddb5ee763b88b034b9b4eaf3ce000f299545ee19a93638d1a4161ab0c76ec73e1a53b2264b94213d53d6ad7dcda6bee45b8c'
            'SKIP'
            '3073ad820c5fce77c982ebcc4835b875ac3d5421dee9a476c396d1efe33a87f034bf6d5aa08f7f6c63f45424bd8c74273a908c30ff77a788bec1259ff110a521'
            'SKIP'
            '2ae7dbddb05decc17731751bfd1c37308fa88d1acac6080561a3aec27fbe383d79ca91f611e81d8fadcde7507b1d4ed2ab1fbc5cad123a41806bbf2d43d13c52'
            '11dd363137d680d1bde1e332c3829246773e49d5fd0d2ef4ab77723ca0d2ecb3ad80a77a08dca8c4ce817ff0f966709673453e754f15e3e1527f943725d547ff'
            'ca6a40800668c0fcf478bd1bc555e5a496f5259739594bf83cc4963756b7a9a0a5b406e91f760d35f1bce1268c01d779fe2a7e749eccf9412e826152a5f013ef'
            '1434cc3957ef77fb83c9385a348f36ca43a73459b8995d3061143d1d15b307f944c39abc0eb109d20869c1749348d608c58cf5b92fd81ad65cad2d362e346549'
            '49c8619a96d7145e8fe77fad4394db7b24a73d94c1e01866e4a3bc5b044dbbb59c8aa2db62d72ef8460ec777d88959b545ad6373073fe3fd21016e5fc08c9f3c'
            '8d81793da14847ee521d230a3065b0c1dfd0138c28ea350754de21e2908132866e4851119f98182cf8725a92a803c31999f457a495c5079afe7d82470f5fcb63'
            '27b68107c4920baf85a5b1e1636d523399bcc1c7bce5e238ee321c666bb79f0124890577b3cba16a99d7da406015401324e8d04b91a1f73e4093473033ae237a'
            '82e624f91c6609bec6ebbc284c8413e638802d3306d6e3826524631fd3a4fdaaed9a85a366e9d3deab2d1b1638f2225a64942e754145ea30da896fc3155574eb'
            '75403516c0e64e13c66602ade9ac12fd553ec811628b4bba79686e183e12a798281566dfdbbe0ba1217ebe8ee1d294a7ca904c36d7b760bcb558ddca0cb7f260'
            '0f96fa9ad784709973b32eea82075ceb3e9dc2482df6441a4607612806f069254e63508b1b562279622394e4a1fbebef1b87af8401c0b1210d5d0de9954245c8'
            'a1ccc22354a420467fb912f822585ed4573e68f4694f02ab83d7c8e352da88be495acb3cb4c451c27ca0cf0befe5925b8734d37205bb3dfdaf86d2dedef0798f'
            '5ca7ae20245a54caa71fb570d971d6872d4e888f35c6123b93fbca16baf9a0e2500d6ec931f3906e4faecaaca9cad0d593694d9cab617efd0cb7b5fc09c0fa48'
            '86f717f596c613db3bc40624fd956ed379b8a2a20d1d99e076ae9061251fe9afba39cf536623eccd970258e124b8c2c05643e3d539f37bd910e02dc5dd498749'
            '638eaff7299f8322e2c383f390fd8f3fe3ce8acb80c4ab4730fae007e9b7ae57f164b06ec2a264607ac2f3f0f5c353c7afa7e3cf1ca08cba395f67b9d7d3aa4a'
            '7ad5be75ee422dda3b80edd2eb614d8a9181e2c8228cd68b3881e2fb95953bf2dea6cbe7900ce1013c9de89b2802574b7b24869fc5d7a95d3cc3112c4d27063a'
            '4a8b324aee4cccf3a512ad04ce1a272d14e5b05c8de90feb82075f55ea3845948d817e1b0c6f298f5816834ddd3e5ce0a0e2619866289f3c1ab8fd2f35f04f44'
            '6346b66f54652256571ef65da8e46db49a95ac5978ecd57a507c6b2a28aee70bb3ff87045ac493f54257c9965da1046a28b72cb5abb0087204d257f14b91fd74'
            '2dc6b0ba8f7dbf19d2446c5c5f1823587de89f4e28e9595937dd51a87755099656f2acec50e3e2546ea633ad1bfd1c722e0c2b91eef1d609103d8abdc0a7cbaf'
            '6fd42090bd39228ac625d0c2074ae55ac3e8368de63f550951c3ac6e6bfdbaf47ab67e018e21890b8ad75bb6706eff5dce05070ad6c281ecedf2a353d8871d96'
            '4b461e3f194fd11ec4321cfbe63dbc5f59c2ed0ee71cae5753b64761c6cc816e28fe89f9c472f92a6cf22557ab88243c16f7f2d2e754ba0b47f82608dc9ddc25'
            '93131d8ad8b118a1c1bcabce357ba7e61233c99188f2d0123977c436e2932555bde4e19de4ca63ac27c6e9b26d8373fb99b52db18b7518122433616d7060082d')
            
validpgpkeys=(
              'ABAF11C65A2970B130ABE3C479BE3E4300411886' # Linus Torvalds
              '647F28654894E3BD457199BE38DBBDC86092693E' # Greg Kroah-Hartman
              '64254695FFF0AA4466CC19E67B96E8162A8CF5D1' # Sebastian Andrzej Siewior
              '5ED9A48FC54C0A22D1D0804CEBC26CDB5A56DE73' # Steven Rostedt
              'E644E2F1D45FA0B2EAA02F33109F098506FF0B14' # Thomas Gleixner
              )

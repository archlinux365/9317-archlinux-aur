# Contributer: Levente Polyak <anthraxx[at]archlinux[dot]org>
# Contributer: Guillaume ALAUX <guillaume@archlinux.org>
# Contributer: Github user RikudouPatrickstar

# This PKGBUILD is directly modified from community/java11-openjdk
# Methods to build JBR with JCEF support is from https://github.com/RikudouPatrickstar/JetBrainsRuntime-for-Linux-x64/blob/master/.github/workflows/jbr-linux-x64.yml

# TODO add test, see about packaging jtreg and using it here
# TODO see about building with OpenJDK10
# TODO add javazi
# TODO when IcedTea provides it, package icedtea-web and add it as optdepends
# TODO package OpenJFX for OpenJDK10 and add it as optdepends

## EXPLORATIONS
# TODO extract a jmods package from jdk10-openjdk?
# TODO extract a jdk-headless package?

pkgbase=java17-jetbrains-imfix
_pkgbase=java17-jetbrains
pkgname=('jre17-jetbrains-imfix' 'jdk17-jetbrains-imfix')
_majorver=17
_ver=17.0.3
_hgver=17.0.3
_updatever=7
_jbver1=498
_jbver2=3
pkgrel=1
pkgver=${_ver}.b${_jbver1}.${_jbver2}
_hg_tag=jb${_hgver}-b${_jbver1}.${_jbver2}
_jcef_commit=316db138ea00b1a814f92e3d2f853320e8ce73b5
arch=('x86_64')
url='https://confluence.jetbrains.com/display/JBR/JetBrains+Runtime'
license=('custom')
makedepends=('java-environment=17' 'cpio' 'unzip' 'zip' 'libelf' 'libcups' 'libx11'
             'libxrender' 'libxtst' 'libxt' 'libxext' 'libxrandr' 'alsa-lib' 'pandoc'
             'graphviz' 'freetype2' 'libjpeg-turbo' 'giflib' 'libpng' 'lcms2'
             'libnet' 'bash' 'harfbuzz' 'gcc-libs' 'glibc' 'jcef-jetbrains' 'git')
options=(!lto)
source=(git+https://github.com/JetBrains/JetBrainsRuntime.git#tag=$_hg_tag
#        git+https://github.com/JetBrains/jcef.git#commit=$_jcef_commit
        idea.patch
        freedesktop-java.desktop
        freedesktop-jconsole.desktop
        freedesktop-jshell.desktop)
sha256sums=('SKIP'
#            'SKIP'
            '5f984d2e050fb6a9cbc1d48df62cd3ca2ff705a8aaa7286913c337c02da9beda'
            '3d5ab2d5eaa994377de0554de5e59596f1fc7ab773e02d84aee83a568042b5ec'
            '442d17b0de7ddd4c49a392f4ccc60f3378b9cf54908081b802d98b89597b3ab8'
            'bdc910ffa896f92cca1d28cf9930276cb9bafbd13bfab97286b25fd7f7a6e11e')

case "${CARCH}" in
  x86_64) _JARCH='x86_64';;
  i686)   _JARCH='x86';;
esac

_jvmdir=/usr/lib/jvm/java-${_majorver}-jetbrains
_jdkdir=JetBrainsRuntime
_imgdir=${_jdkdir}/build/linux-${_JARCH}-server-release/images

build() {

  # build jcef
  #cd $srcdir/jcef
  #sed -i "s/4.46/5.4/g" tools/buildtools/download_from_google_storage.py
  #mkdir jcef_build && cd jcef_build
  #cmake -DCMAKE_BUILD_TYPE=Release ..
  #make
  #cd ../jb/tools/linux
  #JDK_11=/usr/lib/jvm/$(ls /usr/lib/jvm | grep 11 | head -n 1) ./build.sh all

  # build jbr
  cd $srcdir/${_jdkdir}

  # Include jcef
  git apply -p0 < jb/project/tools/patches/add_jcef_module.patch
  # Fix im cursor follow
  patch -Np1 -i ${srcdir}/idea.patch

  NUM_PROC_OPT=''
  MAKEFLAG_J=$(echo ${MAKEFLAGS} | sed -En 's/.*-j([0-9]+).*/\1/p')
  if [ -n "${MAKEFLAG_J}" ]; then
    # http://hg.openjdk.java.net/jdk10/jdk10/file/85e6cb013b98/make/InitSupport.gmk#l105
    echo "Removing '-j${MAKEFLAG_J}' from MAKEFLAGS to prevent build fail. Passing it directly to ./configure."
    export MAKEFLAGS=${MAKEFLAGS/-j${MAKEFLAG_J}/}
    NUM_PROC_OPT="--with-num-cores=${MAKEFLAG_J}"
  fi

  # Avoid optimization of HotSpot being lowered from O3 to O2
  local _CFLAGS="${CFLAGS//-O2/-O3} ${CPPFLAGS} -fcommon"
  local _CXXFLAGS="${CXXFLAGS//-O2/-O3} ${CPPFLAGS} -fcommon"
  local _LDFLAGS=${LDFLAGS}
  if [[ ${CARCH} = i686 ]]; then
    echo "Removing '-fno-plt' from CFLAGS and CXXFLAGS to prevent build fail with this architecture"
    _CFLAGS=${CFLAGS/-fno-plt/}
    _CXXFLAGS=${CXXFLAGS/-fno-plt/}
  fi

  # TODO: Should be rechecked for the next releases
  # compiling with -fexceptions leads to:
  # /usr/bin/ld: /build/java-openjdk/src/jdk17u-jdk-17.0.3-2/build/linux-x86_64-server-release/hotspot/variant-server/libjvm/objs/zPhysicalMemory.o: in function `ZList<ZMemory>::~ZList()':
  # /build/java-openjdk/src/jdk17u-jdk-17.0.3-2/src/hotspot/share/gc/z/zList.hpp:54: undefined reference to `ZListNode<ZMemory>::~ZListNode()'
  # collect2: error: ld returned 1 exit status
  _CFLAGS=${CFLAGS/-fexceptions/}
  _CXXFLAGS=${CXXFLAGS/-fexceptions/}

  # CFLAGS, CXXFLAGS and LDFLAGS are ignored as shown by a warning
  # in the output of ./configure unless used like such:
  #  --with-extra-cflags="${CFLAGS}"
  #  --with-extra-cxxflags="${CXXFLAGS}"
  #  --with-extra-ldflags="${LDFLAGS}"
  # See also paragraph "Configure Control Variables from "jdk${_majorver}-${_hg_tag}/common/doc/building.md
  unset CFLAGS
  unset CXXFLAGS
  unset LDFLAGS

  bash configure \
    --with-version-build="${_updatever}" \
    --with-version-pre="" \
    --with-version-opt="b${_jbver1}.${_jbver2}" \
    --with-stdc++lib=dynamic \
    --with-extra-cflags="${_CFLAGS}" \
    --with-extra-cxxflags="${_CXXFLAGS}" \
    --with-extra-ldflags="${_LDFLAGS}" \
    --with-libjpeg=system \
    --with-giflib=system \
    --with-libpng=system \
    --with-lcms=system \
    --with-zlib=system \
    --with-harfbuzz=system \
    --with-jvm-features=zgc \
    --enable-unlimited-crypto \
    --enable-warnings-as-errors=no \
    ${NUM_PROC_OPT} \
    --with-import-modules=/usr/lib/jcef-jetbrains/modular-sdk
    #--disable-javac-server

  make images legacy-jre-image

  # https://bugs.openjdk.java.net/browse/JDK-8173610
  find "../${_imgdir}" -iname '*.so' -exec chmod +x {} \;
}

check() {
  cd ${_jdkdir}
  # TODO package jtreg
  # make -k check
}

package_jre17-jetbrains-imfix() {
  pkgdesc="JetBrains Java ${_majorver} full runtime environment"
  depends=('java-runtime-common>=3' 'ca-certificates-utils' 'nss' 'libjpeg-turbo' 'libjpeg.so'
           'lcms2' 'liblcms2.so' 'libnet' 'freetype2' 'libfreetype.so' 'harfbuzz' 'libharfbuzz.so'
           'glibc' 'gcc-libs' 'giflib' 'libgif.so' 'libpng' 'jcef-jetbrains')
  optdepends=('java-rhino: for some JavaScript support'
              'alsa-lib: for basic sound support'
              'gtk2: for the Gtk+ 2 look and feel - desktop usage'
              'gtk3: for the Gtk+ 3 look and feel - desktop usage')
  provides=("java-runtime=${_majorver}" "java-runtime-jetbrains=${_majorver}" "jre${_majorver}-jetbrains=${pkgver}-${pkgrel}")
  conflicts=("jre17-jetbrains")
  _pkgname="jre17-jetbrains"
  backup=(etc/${_pkgbase}/logging.propertopenjdkies
          etc/${_pkgbase}/management/jmxremote.access
          etc/${_pkgbase}/management/jmxremote.password.template
          etc/${_pkgbase}/management/management.properties
          etc/${_pkgbase}/net.properties
          etc/${_pkgbase}/security/java.policy
          etc/${_pkgbase}/security/java.security
          etc/${_pkgbase}/security/policy/README.txt
          etc/${_pkgbase}/security/policy/limited/default_US_export.policy
          etc/${_pkgbase}/security/policy/limited/default_local.policy
          etc/${_pkgbase}/security/policy/limited/exempt_local.policy
          etc/${_pkgbase}/security/policy/unlimited/default_US_export.policy
          etc/${_pkgbase}/security/policy/unlimited/default_local.policy
          etc/${_pkgbase}/sound.properties)
  install=install_jre-jetbrains.sh

  cd ${_imgdir}/jre

  install -dm 755 "${pkgdir}${_jvmdir}"

  cp -a bin lib \
    "${pkgdir}${_jvmdir}"

  # Include jcef libs
  find /usr/lib/jcef-jetbrains -maxdepth 1 -mindepth 1 -exec ln -sf {} "${pkgdir}${_jvmdir}/lib/" \;
  rm "${pkgdir}${_jvmdir}/lib/modular-sdk"
  #rsync -av $srcdir/jcef/jcef_build/native/Release/ ${pkgdir}${_jvmdir}/lib --exclude="modular-sdk"

  cp ../jdk/release "${pkgdir}${_jvmdir}"
  cp ../jdk/lib/modules "${pkgdir}${_jvmdir}/lib"

  # Conf
  install -dm 755 "${pkgdir}/etc"
  cp -r conf "${pkgdir}/etc/${_pkgbase}"
  ln -s /etc/${_pkgbase} "${pkgdir}/${_jvmdir}/conf"

  # Legal
  install -dm 755 "${pkgdir}/usr/share/licenses"
  cp -r legal "${pkgdir}/usr/share/licenses/${_pkgbase}"
  ln -s ${_pkgbase} "${pkgdir}/usr/share/licenses/${_pkgname}"
  ln -s /usr/share/licenses/${_pkgbase} "${pkgdir}/${_jvmdir}/legal"

  # Man pages
  for f in bin/*; do
    f=$(basename "${f}")
    _man=../jdk/man/man1/"${f}.1"
    test -f "${_man}" && install -Dm 644 "${_man}" "${pkgdir}/usr/share/man/man1/${f}-jetbrains${_majorver}.1"
  done
  ln -s /usr/share/man "${pkgdir}/${_jvmdir}/man"

  # Link JKS keystore from ca-certificates-utils
  rm -f "${pkgdir}${_jvmdir}/lib/security/cacerts"
  ln -sf /etc/ssl/certs/java/cacerts "${pkgdir}${_jvmdir}/lib/security/cacerts"
}

package_jdk17-jetbrains-imfix() {
  pkgdesc="JetBrains Java ${_majorver} development kit"
  depends=("jre${_majorver}-jetbrains=${pkgver}-${pkgrel}" 'java-environment-common=3' 'hicolor-icon-theme' 'libelf' 'glibc' 'gcc-libs')
  provides=("java-environment=${_majorver}" "java-environment-jetbrains=${_majorver}" "jdk${_majorver}-jetbrains=${pkgver}-${pkgrel}")
  conflicts=("jdk17-jetbrains")
  _pkgname="jdk17-jetbrains"
  install=install_jdk-jetbrains.sh

  cd ${_imgdir}/jdk

  install -dm 755 "${pkgdir}${_jvmdir}"

  cp -a bin demo include jmods lib \
    "${pkgdir}${_jvmdir}"

  rm "${pkgdir}${_jvmdir}/lib/src.zip"

  # Remove files held by JRE
  pushd ../jre
  for d in bin lib; do
    find ${d} ! -type d -exec rm "${pkgdir}${_jvmdir}/{}" \;
  done
  popd
  find "${pkgdir}${_jvmdir}/lib" -type d -empty -delete

  # Conf files all belong to JRE

  # Legal
  install -dm 755 "${pkgdir}/usr/share/licenses"
  cp -r legal "${pkgdir}/usr/share/licenses/${_pkgbase}"
  pushd ../jre/legal
  find . ! -type d -exec rm "${pkgdir}/usr/share/licenses/${_pkgbase}/{}" \;
  popd
  find "${pkgdir}/usr/share/licenses" -type d -empty -delete
  ln -s ${_pkgbase} "${pkgdir}/usr/share/licenses/${_pkgname}"

  # Man pages
  for f in bin/*; do
    f=$(basename "${f}")
    _man=man/man1/"${f}.1"
    test -f "../jre/bin/${f}" && continue
    test -f "${_man}" && install -Dm 644 "${_man}" "${pkgdir}/usr/share/man/man1/${f}-jetbrains${_majorver}.1"
  done

  # Icons
  for s in 16 24 32 48; do
    install -Dm 644 \
      "${srcdir}/${_jdkdir}/src/java.desktop/unix/classes/sun/awt/X11/java-icon${s}.png" \
      "${pkgdir}/usr/share/icons/hicolor/${s}x${s}/apps/${_pkgbase}.png"
  done

  # Desktop files
  for f in jconsole java jshell; do
    install -Dm 644 \
      "${srcdir}/freedesktop-${f}.desktop" \
      "${pkgdir}/usr/share/applications/${f}-${_pkgbase}.desktop"
  done
}

# vim: ts=2 sw=2 et:

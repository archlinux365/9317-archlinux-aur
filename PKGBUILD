# Maintainer: Charles Bos <charlesbos1 AT gmail>
# Contributor: Rob McCathie <archaur at rmcc dot com dot au
# Contributor: /dev/rs0 <rs0@secretco.de.com>
# Contributor: Iven Hsu <ivenvd AT gmail>
# Contributor: Nathan Hulse <nat.hulse@gmail.com>

pkgname=compiz
pkgver=0.9.13.0
pkgrel=7
pkgdesc="Composite manager for Aiglx and Xgl, with plugins and CCSM"
arch=('i686' 'x86_64')
url="https://launchpad.net/compiz"
license=('GPL' 'LGPL' 'MIT')
depends=('boost' 'xorg-server' 'libxcomposite' 'startup-notification' 'librsvg' 'dbus' 'mesa' 'libxslt' 'fuse' 'glibmm' 'libxrender' 'libwnck3' 'pygtk' 'desktop-file-utils' 'pyrex' 'protobuf' 'metacity' 'glu' 'libsm' 'dconf')
makedepends=('cmake' 'intltool')
optdepends=(
  'xorg-xprop: grab various window properties for use in window matching rules'
)
conflicts=('compiz-core' 'compiz-gtk' 'compiz-bcop' 'ccsm' 'compiz-fusion-plugins-main' 'compiz-fusion-plugins-extra' 'compiz-fusion-plugins-experimental' 'compizconfig-python' 'libcompizconfig' 'simple-ccsm')
provides=("compiz-core=${pkgver}" "compiz-bcop=${pkgver}" "ccsm=${pkgver}" "compiz-plugins-main=${pkgver}" "compiz-plugins-extra=${pkgver}" "compizconfig-python=${pkgver}" "libcompizconfig=${pkgver}")
source=("https://launchpad.net/${pkgname}/${pkgver:0:6}/${pkgver}/+download/${pkgname}-${pkgver}.tar.bz2"
        "focus-prevention-disable.patch"
        "gtk-extents.patch"
        "trailfocus-fix.patch"
        "3981_3980.diff")
sha256sums=('f08eb54d578be559e3e723f3fe4291a56f5c96b2fdfb9c9e74ebb6596a1ca702'
            'f4897590b0f677ba34767a29822f8f922a750daf66e8adf47be89f7c2550cf4b'
            '16ddb6311ce42d958505e21ca28faae5deeddce02cb558d55e648380274ba4d9'
            '01e94ac52cd39eb5462a8505c7df61c7b14b05159de64f8700dfadb524bdb2ce'
            '36781e0eebdb6f0b4b29bb69e9aa342688e48ea0a6fb14dff60e00a3cf74815d')

prepare() {
  cd "${pkgname}-${pkgver}"

  # Reverse Ubuntu specific configuration patches
  patch -Rp1 -i "${srcdir}/3981_3980.diff"

  # Fix decorator start command
  sed -i 's/exec \\"${COMPIZ_BIN_PATH}compiz-decorator\\"/exec \/usr\/bin\/compiz-decorator/g' plugins/decor/decor.xml.in

  # Set focus prevention level to off which means that new windows will always get focus
  patch -p1 -i "${srcdir}/focus-prevention-disable.patch"

  # Use Python 2
  find -type f \( -name 'CMakeLists.txt' -or -name '*.cmake' \) -exec sed -e 's/COMMAND python/COMMAND python2/g' -i {} \;
  find compizconfig/ccsm -type f -exec sed -e 's|^#!.*python|#!/usr/bin/env python2|g' -i {} \;

  # Fix incorrect extents for GTK+ tooltips, csd etc
  patch -p1 -i "${srcdir}/gtk-extents.patch"

  # Fix ambiguous function call in trailfocus plugin
  patch -p1 -i "${srcdir}/trailfocus-fix.patch"
}

build() {
  cd "${pkgname}-${pkgver}"

  export PYTHON="/usr/bin/python2"

  mkdir build; cd build

  cmake .. \
    -DCMAKE_BUILD_TYPE="Release" \
    -DCMAKE_INSTALL_PREFIX="/usr" \
    -DCMAKE_INSTALL_LIBDIR="/usr/lib" \
    -DCOMPIZ_DISABLE_SCHEMAS_INSTALL=On \
    -DCOMPIZ_BUILD_WITH_RPATH=Off \
    -DCOMPIZ_PACKAGING_ENABLED=On \
    -DBUILD_GTK=On \
    -DBUILD_METACITY=On \
    -DBUILD_KDE4=Off \
    -DCOMPIZ_BUILD_TESTING=Off \
    -DCOMPIZ_WERROR=Off \
    -DCOMPIZ_DEFAULT_PLUGINS="composite,opengl,decor,resize,place,move,compiztoolbox,staticswitcher,regex,animation,wall,ccp" \

    make
}

package() {
  cd "${pkgname}-${pkgver}/build"
  make DESTDIR="${pkgdir}" install

  # findcompiz_install needs COMPIZ_DESTDIR and install needs DESTDIR
  # make findcompiz_install
  CMAKE_DIR=$(cmake --system-information | grep '^CMAKE_ROOT' | awk -F\" '{print $2}')
  install -dm755 "${pkgdir}${CMAKE_DIR}/Modules/"
  install -m644 ../cmake/FindCompiz.cmake "${pkgdir}${CMAKE_DIR}/Modules/"

  # Add documentation
  install -dm755 "${pkgdir}/usr/share/doc/compiz/"
  install ../{AUTHORS,NEWS,README} "${pkgdir}/usr/share/doc/compiz/"

  # Add the gsettings schema files
  if ls generated/glib-2.0/schemas/ | grep -qm1 .gschema.xml; then
    install -dm755 "${pkgdir}/usr/share/glib-2.0/schemas/"
    install -m644 generated/glib-2.0/schemas/*.gschema.xml "${pkgdir}/usr/share/glib-2.0/schemas/"
  fi
}

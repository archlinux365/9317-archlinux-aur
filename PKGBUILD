# Maintainer: Charles Bos <charlesbos1 AT gmail>
# Contributor: Rob McCathie <archaur at rmcc dot com dot au
# Contributor: /dev/rs0 <rs0@secretco.de.com>
# Contributor: Iven Hsu <ivenvd AT gmail>
# Contributor: Nathan Hulse <nat.hulse@gmail.com>

pkgname=compiz
pkgver=0.9.12.2
_pkgseries=0.9.12
pkgrel=2
pkgdesc="Composite manager for Aiglx and Xgl, with plugins and CCSM (release version)"
arch=('i686' 'x86_64')
url="https://launchpad.net/compiz"
license=('GPL' 'LGPL' 'MIT')
depends=('boost' 'xorg-server' 'libxcomposite' 'startup-notification' 'librsvg' 'dbus' 'mesa' 'libxslt' 'fuse' 'glibmm' 'libxrender' 'libwnck3' 'pygtk' 'desktop-file-utils' 'pyrex' 'protobuf' 'metacity>=3.16.0' 'glu' 'libsm' 'dconf')
makedepends=('cmake' 'intltool')
optdepends=(
  'xorg-xprop: grab various window properties for use in window matching rules'
)
conflicts=('compiz-core')
replaces=('compiz-core-devel')
source=("https://launchpad.net/compiz/${_pkgseries}/${pkgver}/+download/compiz-${pkgver}.tar.bz2"
        "focus-prevention-disable.patch"
        "gtk-extents.patch")
sha256sums=('8917ac9e6dfdacc740780e1995e932ed865d293ae87821e7a280da5325daec80'
            'f4897590b0f677ba34767a29822f8f922a750daf66e8adf47be89f7c2550cf4b'
            '16ddb6311ce42d958505e21ca28faae5deeddce02cb558d55e648380274ba4d9')
install='compiz.install'

prepare() {
  cd "${pkgname}-${pkgver}"

  # Fix decorator start command
  sed -i 's/exec \\"${COMPIZ_BIN_PATH}compiz-decorator\\"/\/usr\/bin\/compiz-decorator/g' plugins/decor/decor.xml.in

  # Set focus prevention level to off which means that new windows will always get focus
  patch -Np1 -i "${srcdir}/focus-prevention-disable.patch"

  # Use Python 2
  find -type f \( -name 'CMakeLists.txt' -or -name '*.cmake' \) -exec sed -e 's/COMMAND python/COMMAND python2/g' -i {} \;
  find compizconfig/ccsm -type f -exec sed -e 's|^#!.*python|#!/usr/bin/env python2|g' -i {} \;

  # Fix Python build directory with CMake 3.2
  sed -i 's/${PY_BUILD_DIR}/lib/g' compizconfig/ccsm/CMakeLists.txt

  # Fix incorrect extents for GTK+ tooltips, csd etc
  patch -Np1 -i "${srcdir}/gtk-extents.patch"
}

build() {
  cd "${pkgname}-${pkgver}"

  export PYTHON="/usr/bin/python2"

  mkdir build; cd build

  cmake .. \
    -DCMAKE_BUILD_TYPE="Release" \
    -DCMAKE_INSTALL_PREFIX="/usr" \
    -DCMAKE_INSTALL_LIBDIR="/usr/lib" \
    -DPYTHON_INCLUDE_DIR=/usr/include/python2.7 \
    -DPYTHON_LIBRARY=/usr/lib/libpython2.7.so \
    -DQT_QMAKE_EXECUTABLE=qmake-qt4 \
    -DCOMPIZ_DISABLE_SCHEMAS_INSTALL=On \
    -DCOMPIZ_BUILD_WITH_RPATH=Off \
    -DCOMPIZ_PACKAGING_ENABLED=On \
    -DBUILD_GTK=On \
    -DBUILD_METACITY=On \
    -DBUILD_KDE4=Off \
    -DUSE_GCONF=Off \
    -DUSE_GSETTINGS=On \
    -DCOMPIZ_BUILD_TESTING=Off \
    -DCOMPIZ_WERROR=Off \
    -DCOMPIZ_DEFAULT_PLUGINS="composite,opengl,decor,resize,place,move,ccp"

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

  # Remove GConf schemas
  rm -rv "${pkgdir}/usr/share/gconf/" 
}

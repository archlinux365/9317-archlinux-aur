# Maintainer: Michele Mocciola <mickele>

pkgname=salome-med
pkgver=7.6.0
pkgrel=3
pkgdesc="Generic platform for Pre and Post-Processing for numerical simulation - MED Module"
url="http://www.salome-platform.org"
depends=('scotch>=6.0.3' 'metis4' 'salome-gui>=7.6.0' 'salome-gui<7.7.0')
if test "$CARCH" == x86_64; then
  depends+=('med-salome>=3.0.8')
else
  depends+=('med>=3.0.8')
fi
makedepends=('doxygen' 'boost' 'swig2' 'python2-sphinx')
arch=('i686' 'x86_64')
license=('LGPL')
source=(scotch-bz2.diff salome-med.profile)

_source=med
_installdir=/opt/salome
_paraviewrootdir=/usr
_paraviewver=4.2

prepare() {
  msg "Connecting to git server..."

  if [[ -d ${_source} ]] ; then
     rm -rf ${_source}
  fi

  git clone git://git.salome-platform.org/modules/${_source}.git
  cd ${_source}
  git checkout V${pkgver:0:1}_${pkgver:2:1}_${pkgver:4:1}

  msg "GIT checkout done or server timeout"

  # scotch-6 requires bz2
  patch -Np1 -i ../scotch-bz2.diff
  
  # python -> python2
  for _FILE in `grep -Rl "/usr/bin/env python" * `
  do
	sed -e "s|/usr/bin/env python|/usr/bin/env python2|" -i ${_FILE}
  done
}

build() {
  source /opt/salome/env.d/salome-kernel.sh
  source /opt/salome/env.d/salome-gui.sh

  rm -rf "${srcdir}/${_source}/build"
  mkdir "${srcdir}/${_source}/build"
  cd "${srcdir}/${_source}/build"

  #   -DSALOME_CMAKE_DEBUG=ON
  #   -DSCOTCH_INCLUDE_DIRS=/usr/include/scotch \
  #   -DSCOTCH_LIBRARIES=/usr/lib/libscotch.so \
  #   -DSCOTCH_ERR_LIBRARIES=/usr/lib/libscotcherr.so \
  #   -DBZ2_LIBRARIES=/usr/lib/libbz2.so \

  cmake .. \
     -DCMAKE_INSTALL_PREFIX=$_installdir \
     -DCMAKE_CXX_STANDARD=98 \
     -DPYTHON_EXECUTABLE=/usr/bin/python2 \
     -DSALOME_MED_PARTITIONER_METIS=On \
     -DMETIS_INCLUDE_DIRS=/usr/include/metis-4 \
     -DMETIS_LIBRARIES=/usr/lib/libmetis-4.so \
     -DSALOME_MED_PARTITIONER_PARMETIS=Off \
     -DSALOME_MED_PARTITIONER_SCOTCH=On \
     -DSPHINX_APIDOC_EXECUTABLE=/usr/bin/sphinx-apidoc2 \
     -DSPHINX_EXECUTABLE=/usr/bin/sphinx-build2 \
     -DVTK_DIR="${_paraviewrootdir}/lib/cmake/paraview-${_paraviewver}" \
     -DLIBXML2_ROOT_DIR=/usr \
     -DLibXml2_DIR=/usr/lib/cmake/libxml2 \
     -DLIBXML2_INCLUDE_DIR=/usr/include/libxml2 \
     -DSWIG_EXECUTABLE=/usr/bin/swig-2

  make
}

package() {
  cd "${srcdir}/${_source}/build"

  make DESTDIR="$pkgdir/" install
  
  for _FILE in `find -L ${pkgdir}${_installdir} -iname *.py`
  do
    sed -i -e "s|${srcdir}||" ${_FILE}
    sed -i -e "s|${pkgdir}||" ${_FILE}
  done
  
  install -D -m755 "${srcdir}/${pkgname}.profile" \
                   "${pkgdir}${_installdir}/env.d/${pkgname}.sh"

  rm -f "${pkgdir}${_installdir}/bin/salome/VERSION"
  rm -f "${pkgdir}${_installdir}/bin/salome/test/CTestTestfile.cmake"
  rm -f "${pkgdir}${_installdir}/adm_local/unix/config_files/check_GUI.m4"
}
md5sums=('b7887dda20d38ae64a33547b3d5a1d16'
         'a261aca89bcad856b3e341d0b58d1398')

# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS - A metapackage of Emacs utils for ROS."
url='https://wiki.ros.org/ros_emacs_utils'

pkgname='ros-melodic-ros-emacs-utils'
pkgver='0.4.16'
arch=('any')
pkgrel=1
license=('BSD')

ros_makedepends=(ros-melodic-catkin)
makedepends=('cmake' 'ros-build-tools'
  ${ros_makedepends[@]})

ros_depends=(ros-melodic-slime-wrapper
  ros-melodic-slime-ros
  ros-melodic-rosemacs
  ros-melodic-roslisp-repl)
depends=(${ros_depends[@]})

# Git version (e.g. for debugging)
# _tag=release/melodic/ros_emacs_utils/${pkgver}-${_pkgver_patch}
# _dir=${pkgname}
# source=("${_dir}"::"git+https://github.com/code-iai-release/ros_emacs_utils-release.git"#tag=${_tag})
# sha256sums=('SKIP')

# Tarball version (faster download)
_dir="ros_emacs_utils-${pkgver}/ros_emacs_utils"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/code-iai/ros_emacs_utils/archive/${pkgver}.tar.gz")
sha256sums=('565b5272abf679d8a564908a17c5977d0f8b7512e997262a2038cd602e3ff159')

build() {
  # Use ROS environment variables
  source /usr/share/ros-build-tools/clear-ros-env.sh
  [ -f /opt/ros/melodic/setup.bash ] && source /opt/ros/melodic/setup.bash

  # Create build directory
  [ -d ${srcdir}/build ] || mkdir ${srcdir}/build
  cd ${srcdir}/build

  # Fix Python2/Python3 conflicts
  /usr/share/ros-build-tools/fix-python-scripts.sh -v 3 ${srcdir}/${_dir}

  # Build project
  cmake ${srcdir}/${_dir} \
        -DCMAKE_BUILD_TYPE=Release \
        -DCATKIN_BUILD_BINARY_PACKAGE=ON \
        -DCMAKE_INSTALL_PREFIX=/opt/ros/melodic \
        -DPYTHON_EXECUTABLE=/usr/bin/python3 \
        -DPYTHON_INCLUDE_DIR=/usr/include/python2.7 \
        -DPYTHON_LIBRARY=/usr/lib/libpython2.7.so \
        -DPYTHON_BASENAME=-python2.7 \
        -DSETUPTOOLS_DEB_LAYOUT=OFF
  make
}

package() {
  cd "${srcdir}/build"
  make DESTDIR="${pkgdir}/" install
}

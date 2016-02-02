# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS - Timing utilities are very dependent on the system api provided for their use."
url='http://wiki.ros.org/ecl_time'

pkgname='ros-indigo-ecl-time'
pkgver='0.61.8'
_pkgver_patch=0
arch=('any')
pkgrel=1
license=('BSD')

ros_makedepends=(ros-indigo-ecl-errors
  ros-indigo-ecl-license
  ros-indigo-ecl-exceptions
  ros-indigo-ecl-build
  ros-indigo-ecl-time-lite
  ros-indigo-ecl-config
  ros-indigo-catkin)
makedepends=('cmake' 'git' 'ros-build-tools'
  ${ros_makedepends[@]})

ros_depends=(ros-indigo-ecl-errors
  ros-indigo-ecl-license
  ros-indigo-ecl-exceptions
  ros-indigo-ecl-build
  ros-indigo-ecl-time-lite
  ros-indigo-ecl-config)
depends=(${ros_depends[@]})

# Git version (e.g. for debugging)
# _tag=release/indigo/ecl_time/${pkgver}-${_pkgver_patch}
# _dir=ecl_time
# source=("${_dir}"::"git+https://github.com/yujinrobot-release/ecl_core-release.git"#tag=${_tag})
# sha256sums=('SKIP')

# Tarball version (faster download)
_dir="ecl_core-release-release-indigo-ecl_time-${pkgver}-${_pkgver_patch}"
source=("https://github.com/yujinrobot-release/ecl_core-release/archive/release/indigo/ecl_time/${pkgver}-${_pkgver_patch}.tar.gz")
sha256sums=('11d14ef1c0998f64ba9e0ee8bb9af04af2ce079c3398dda8452e9af0467741ce')

build() {
  # Use ROS environment variables
  source /usr/share/ros-build-tools/clear-ros-env.sh
  [ -f /opt/ros/indigo/setup.bash ] && source /opt/ros/indigo/setup.bash

  # Create build directory
  [ -d ${srcdir}/build ] || mkdir ${srcdir}/build
  cd ${srcdir}/build

  # Fix Python2/Python3 conflicts
  /usr/share/ros-build-tools/fix-python-scripts.sh -v 2 ${srcdir}/${_dir}

  # Build project
  cmake ${srcdir}/${_dir} \
        -DCMAKE_BUILD_TYPE=Release \
        -DCATKIN_BUILD_BINARY_PACKAGE=ON \
        -DCMAKE_INSTALL_PREFIX=/opt/ros/indigo \
        -DPYTHON_EXECUTABLE=/usr/bin/python2 \
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

# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS - turtlesim is a tool made for teaching ROS and ROS packages."
url='http://www.ros.org/wiki/turtlesim'

pkgname='ros-lunar-turtlesim'
pkgver='0.8.0'
_pkgver_patch=0
arch=('any')
pkgrel=1
license=('BSD')

ros_makedepends=(ros-lunar-std-srvs
  ros-lunar-catkin
  ros-lunar-roscpp
  ros-lunar-roscpp-serialization
  ros-lunar-rostime
  ros-lunar-roslib
  ros-lunar-rosconsole
  ros-lunar-geometry-msgs
  ros-lunar-std-msgs
  ros-lunar-message-generation)
makedepends=('cmake' 'ros-build-tools'
  ${ros_makedepends[@]}
  qt5-base)

ros_depends=(ros-lunar-std-srvs
  ros-lunar-roscpp
  ros-lunar-roscpp-serialization
  ros-lunar-rostime
  ros-lunar-roslib
  ros-lunar-rosconsole
  ros-lunar-geometry-msgs
  ros-lunar-std-msgs
  ros-lunar-message-runtime)
depends=(${ros_depends[@]}
  qt5-base)

# Git version (e.g. for debugging)
# _tag=release/lunar/turtlesim/${pkgver}-${_pkgver_patch}
# _dir=${pkgname}
# source=("${_dir}"::"git+https://github.com/ros-gbp/ros_tutorials-release.git"#tag=${_tag})
# sha256sums=('SKIP')

# Tarball version (faster download)
_dir="ros_tutorials-release-release-lunar-turtlesim-${pkgver}-${_pkgver_patch}"
source=("${pkgname}-${pkgver}-${_pkgver_patch}.tar.gz"::"https://github.com/ros-gbp/ros_tutorials-release/archive/release/lunar/turtlesim/${pkgver}-${_pkgver_patch}.tar.gz")
sha256sums=('ae0502f33573619603b38534231d4155fb089a6f76b412f61b3f72e0ecf4320e')

build() {
  # Use ROS environment variables
  source /usr/share/ros-build-tools/clear-ros-env.sh
  [ -f /opt/ros/lunar/setup.bash ] && source /opt/ros/lunar/setup.bash

  # Create build directory
  [ -d ${srcdir}/build ] || mkdir ${srcdir}/build
  cd ${srcdir}/build

  # Fix Python2/Python3 conflicts
  /usr/share/ros-build-tools/fix-python-scripts.sh -v 2 ${srcdir}/${_dir}

  # Build project
  cmake ${srcdir}/${_dir} \
        -DCMAKE_BUILD_TYPE=Release \
        -DCATKIN_BUILD_BINARY_PACKAGE=ON \
        -DCMAKE_INSTALL_PREFIX=/opt/ros/lunar \
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

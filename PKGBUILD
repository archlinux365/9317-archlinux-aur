# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS - This package contains generic definitions of geometric shapes and bodies."
url='http://ros.org/wiki/geometric_shapes'

pkgname='ros-indigo-geometric-shapes'
pkgver='0.4.0'
_pkgver_patch=0
arch=('any')
pkgrel=1
license=('BSD')

ros_makedepends=(ros-indigo-shape-tools
  ros-indigo-random-numbers
  ros-indigo-resource-retriever
  ros-indigo-eigen-stl-containers
  ros-indigo-catkin
  ros-indigo-shape-msgs
  ros-indigo-cmake-modules
  ros-indigo-octomap
  ros-indigo-console-bridge)
makedepends=('cmake' 'git' 'ros-build-tools'
  ${ros_makedepends[@]}
  qhull
  boost
  eigen3
  assimp
  pkg-config)

ros_depends=(ros-indigo-shape-tools
  ros-indigo-random-numbers
  ros-indigo-resource-retriever
  ros-indigo-eigen-stl-containers
  ros-indigo-shape-msgs
  ros-indigo-octomap
  ros-indigo-console-bridge)
depends=(${ros_depends[@]}
  assimp
  boost
  eigen3
  qhull)

_tag=release/indigo/geometric_shapes/${pkgver}-${_pkgver_patch}
_dir=geometric_shapes
source=("${_dir}"::"git+https://github.com/ros-gbp/geometric_shapes-release.git"#tag=${_tag})
md5sums=('SKIP')

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
        -DSETUPTOOLS_DEB_LAYOUT=OFF
  make
}

package() {
  cd "${srcdir}/build"
  make DESTDIR="${pkgdir}/" install
}

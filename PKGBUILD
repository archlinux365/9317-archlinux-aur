# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS - Interface for enforcing joint limits."
url='https://github.com/ros-controls/ros_control/wiki'

pkgname='ros-kinetic-joint-limits-interface'
pkgver='0.12.0'
_pkgver_patch=0
arch=('any')
pkgrel=1
license=('BSD')

ros_makedepends=(ros-kinetic-roscpp
  ros-kinetic-catkin
  ros-kinetic-urdf
  ros-kinetic-hardware-interface)
makedepends=('cmake' 'ros-build-tools'
  ${ros_makedepends[@]}
  urdfdom)

ros_depends=(ros-kinetic-roscpp
  ros-kinetic-urdf
  ros-kinetic-hardware-interface)
depends=(${ros_depends[@]}
  urdfdom)

# Git version (e.g. for debugging)
# _tag=release/kinetic/joint_limits_interface/${pkgver}-${_pkgver_patch}
# _dir=${pkgname}
# source=("${_dir}"::"git+https://github.com/ros-gbp/ros_control-release.git"#tag=${_tag})
# sha256sums=('SKIP')

# Tarball version (faster download)
_dir="ros_control-release-release-kinetic-joint_limits_interface-${pkgver}-${_pkgver_patch}"
source=("${pkgname}-${pkgver}-${_pkgver_patch}.tar.gz"::"https://github.com/ros-gbp/ros_control-release/archive/release/kinetic/joint_limits_interface/${pkgver}-${_pkgver_patch}.tar.gz")
sha256sums=('ed17ab628dc1db5e9e5c00bc8e812aa3cce3f0d0991fe866f7023c6f5ad15340')

build() {
  # Use ROS environment variables
  source /usr/share/ros-build-tools/clear-ros-env.sh
  [ -f /opt/ros/kinetic/setup.bash ] && source /opt/ros/kinetic/setup.bash

  # Create build directory
  [ -d ${srcdir}/build ] || mkdir ${srcdir}/build
  cd ${srcdir}/build

  # Fix Python2/Python3 conflicts
  /usr/share/ros-build-tools/fix-python-scripts.sh -v 2 ${srcdir}/${_dir}

  # Build project
  cmake ${srcdir}/${_dir} \
        -DCMAKE_BUILD_TYPE=Release \
        -DCATKIN_BUILD_BINARY_PACKAGE=ON \
        -DCMAKE_INSTALL_PREFIX=/opt/ros/kinetic \
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

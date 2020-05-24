# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS - ROS interface to the 3Dconnexion SpaceNavigator 6DOF joystick."
url='https://www.wiki.ros.org/spacenav_node'

pkgname='ros-noetic-spacenav-node'
pkgver='1.13.0'
arch=('i686' 'x86_64' 'aarch64' 'armv7h' 'armv6h')
pkgrel=2
license=('BSD')

ros_makedepends=(ros-noetic-catkin
  ros-noetic-roscpp
  ros-noetic-geometry-msgs
  ros-noetic-sensor-msgs)
makedepends=('cmake' 'ros-build-tools'
  ${ros_makedepends[@]}
  libspnav
  libx11)

ros_depends=(ros-noetic-roscpp
  ros-noetic-geometry-msgs
  ros-noetic-sensor-msgs)
depends=(${ros_depends[@]}
  spacenavd
  libspnav
  libx11)

# Git version (e.g. for debugging)
# _tag=release/noetic/spacenav_node/${pkgver}-${_pkgver_patch}
# _dir=${pkgname}
# source=("${_dir}"::"git+https://github.com/ros-gbp/joystick_drivers-release.git"#tag=${_tag})
# sha256sums=('SKIP')

# Tarball version (faster download)
_dir="joystick_drivers-${pkgver}/spacenav_node"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ros-drivers/joystick_drivers/archive/${pkgver}.tar.gz")
sha256sums=('bfe0633623f4dc917524198aaea10b1c4603881e736dafb7b652f1af60922ad7')

build() {
  # Use ROS environment variables
  source /usr/share/ros-build-tools/clear-ros-env.sh
  [ -f /opt/ros/noetic/setup.bash ] && source /opt/ros/noetic/setup.bash

  # Create build directory
  [ -d ${srcdir}/build ] || mkdir ${srcdir}/build
  cd ${srcdir}/build

  # Build project
  cmake ${srcdir}/${_dir} \
        -DCATKIN_BUILD_BINARY_PACKAGE=ON \
        -DCMAKE_INSTALL_PREFIX=/opt/ros/noetic \
        -DPYTHON_EXECUTABLE=/usr/bin/python \
        -DSETUPTOOLS_DEB_LAYOUT=OFF
  make
}

package() {
  cd "${srcdir}/build"
  make DESTDIR="${pkgdir}/" install
}

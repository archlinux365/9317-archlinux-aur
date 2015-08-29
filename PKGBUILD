# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS - The move_base package provides an implementation of an action (see the actionlib package) that, given a goal in the world, will attempt to reach it with a mobile base."
url='http://wiki.ros.org/move_base'

pkgname='ros-indigo-move-base'
pkgver='1.12.4'
_pkgver_patch=0
arch=('any')
pkgrel=1
license=('BSD')

ros_makedepends=(ros-indigo-nav-core
  ros-indigo-tf
  ros-indigo-catkin
  ros-indigo-roscpp
  ros-indigo-geometry-msgs
  ros-indigo-std-msgs
  ros-indigo-rotate-recovery
  ros-indigo-base-local-planner
  ros-indigo-clear-costmap-recovery
  ros-indigo-rospy
  ros-indigo-navfn
  ros-indigo-costmap-2d
  ros-indigo-message-generation
  ros-indigo-std-srvs
  ros-indigo-actionlib
  ros-indigo-visualization-msgs
  ros-indigo-move-base-msgs
  ros-indigo-cmake-modules
  ros-indigo-dynamic-reconfigure
  ros-indigo-nav-msgs
  ros-indigo-pluginlib)
makedepends=('cmake' 'git' 'ros-build-tools'
  ${ros_makedepends[@]})

ros_depends=(ros-indigo-nav-core
  ros-indigo-navfn
  ros-indigo-roscpp
  ros-indigo-geometry-msgs
  ros-indigo-message-runtime
  ros-indigo-base-local-planner
  ros-indigo-clear-costmap-recovery
  ros-indigo-rospy
  ros-indigo-std-msgs
  ros-indigo-costmap-2d
  ros-indigo-nav-msgs
  ros-indigo-std-srvs
  ros-indigo-actionlib
  ros-indigo-visualization-msgs
  ros-indigo-move-base-msgs
  ros-indigo-tf
  ros-indigo-dynamic-reconfigure
  ros-indigo-rotate-recovery
  ros-indigo-pluginlib)
depends=(${ros_depends[@]})

_tag=release/indigo/move_base/${pkgver}-${_pkgver_patch}
_dir=move_base
source=("${_dir}"::"git+https://github.com/ros-gbp/navigation-release.git"#tag=${_tag})
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
        -DPYTHON_BASENAME=-python2.7 \
        -DSETUPTOOLS_DEB_LAYOUT=OFF
  make
}

package() {
  cd "${srcdir}/build"
  make DESTDIR="${pkgdir}/" install
}

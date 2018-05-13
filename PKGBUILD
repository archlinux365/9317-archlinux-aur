# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS - rqt_runtime_monitor provides a GUI plugin viewing DiagnosticsArray messages."
url='http://wiki.ros.org/rqt_runtime_monitor'

pkgname='ros-melodic-rqt-runtime-monitor'
pkgver='0.5.7'
_pkgver_patch=0
arch=('any')
pkgrel=1
license=('BSD')

ros_makedepends=(ros-melodic-catkin)
makedepends=('cmake' 'ros-build-tools'
  ${ros_makedepends[@]})

ros_depends=(ros-melodic-qt-gui
  ros-melodic-diagnostic-msgs
  ros-melodic-rqt-gui-py
  ros-melodic-rqt-gui
  ros-melodic-python-qt-binding
  ros-melodic-rospy)
depends=(${ros_depends[@]}
  python2-rospkg)

# Git version (e.g. for debugging)
# _tag=release/melodic/rqt_runtime_monitor/${pkgver}-${_pkgver_patch}
# _dir=${pkgname}
# source=("${_dir}"::"git+https://github.com/ros-gbp/rqt_runtime_monitor-release.git"#tag=${_tag})
# sha256sums=('SKIP')

# Tarball version (faster download)
_dir="rqt_runtime_monitor-release-release-melodic-rqt_runtime_monitor-${pkgver}-${_pkgver_patch}"
source=("${pkgname}-${pkgver}-${_pkgver_patch}.tar.gz"::"https://github.com/ros-gbp/rqt_runtime_monitor-release/archive/release/melodic/rqt_runtime_monitor/${pkgver}-${_pkgver_patch}.tar.gz")
sha256sums=('f58958b5649d59fca3022a1771e6a457382744c616835cc65980213ab742fd5c')

build() {
  # Use ROS environment variables
  source /usr/share/ros-build-tools/clear-ros-env.sh
  [ -f /opt/ros/melodic/setup.bash ] && source /opt/ros/melodic/setup.bash

  # Create build directory
  [ -d ${srcdir}/build ] || mkdir ${srcdir}/build
  cd ${srcdir}/build

  # Fix Python2/Python3 conflicts
  /usr/share/ros-build-tools/fix-python-scripts.sh -v 2 ${srcdir}/${_dir}

  # Build project
  cmake ${srcdir}/${_dir} \
        -DCMAKE_BUILD_TYPE=Release \
        -DCATKIN_BUILD_BINARY_PACKAGE=ON \
        -DCMAKE_INSTALL_PREFIX=/opt/ros/melodic \
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

# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS : converts costmaps"

pkgname='ros-kinetic-costmap-converter'
pkgver='0.0.7'
_pkgver_patch=0
arch=('any')
pkgrel=1
license=('BSD')

ros_makedepends=(ros-kinetic-catkin)
makedepends=('cmake' 'ros-build-tools'  'pkg-config' ${ros_makedepends[@]})

ros_depends=(ros-kinetic-roscpp 
ros-kinetic-costmap-2d
ros-kinetic-cv-bridge 
ros-kinetic-dynamic-reconfigure
ros-kinetic-pluginlib 
ros-kinetic-geometry-msgs 
ros-kinetic-nav-msgs
ros-kinetic-message-generation
ros-kinetic-message-runtime
ros-kinetic-roscpp
ros-kinetic-std-msgs)
depends=(${ros_depends[@]}
  python2-rospkg)

# Git version (e.g. for debugging)
_dir=${pkgname}
_tag=${pkgver}
source=("${_dir}"::"git+https://github.com/rst-tu-dortmund/costmap_converter.git#tag=${__tag}")
sha256sums=('SKIP')
options=('!makeflags')  

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
  cmake ${srcdir}/${pkgname} \
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

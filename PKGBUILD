# Maintainer: Oskar Roesler <oskar@oskar-roesler.de>
pkgdesc="ROS - Core libraries used by MoveIt!."
url='https://moveit.ros.org'

pkgname='ros-melodic-moveit-core'
pkgver='1.0.6'
arch=('i686' 'x86_64' 'aarch64' 'armv7h' 'armv6h')
pkgrel=1
license=('BSD')

ros_makedepends=(
  ros-melodic-moveit-resources
  ros-melodic-angles
)

makedepends=(
  'cmake' 'ros-build-tools'
  ${ros_makedepends[@]}
  pkg-config
)

ros_depends=(
  ros-melodic-eigen-stl-containers
  ros-melodic-geometric-shapes
  ros-melodic-geometry-msgs
  ros-melodic-kdl-parser
  ros-melodic-urdf
  ros-melodic-moveit-msgs
  ros-melodic-octomap
  ros-melodic-octomap-msgs
  ros-melodic-random-numbers
  ros-melodic-roslib
  ros-melodic-rostime
  ros-melodic-rosconsole
  ros-melodic-sensor-msgs
  ros-melodic-shape-msgs
  ros-melodic-srdfdom
  ros-melodic-std-msgs
  ros-melodic-tf2-eigen
  ros-melodic-tf2-geometry-msgs
  ros-melodic-trajectory-msgs
  ros-melodic-visualization-msgs
  ros-melodic-xmlrpcpp
)

depends=(
  ${ros_depends[@]}
  eigen
  urdfdom-headers
  assimp
  console-bridge
  boost
  urdfdom
  fcl
)

_dir="moveit-${pkgver}/moveit_core"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ros-planning/moveit/archive/${pkgver}.tar.gz")
sha256sums=('a633830d2ed7e23089f9642d99298cb6eb96148c695c0b4890f2792eac4904b4')

prepare() {
  cd ${srcdir}
  find . \( -iname *.cpp -o -iname *.h \) \
	  -exec sed -r -i "s/[^_]logError/CONSOLE_BRIDGE_logError/" {} \; \
	  -exec sed -r -i "s/[^_]logWarn/CONSOLE_BRIDGE_logWarn/" {} \; \
	  -exec sed -r -i "s/[^_]logDebug/CONSOLE_BRIDGE_logDebug/" {} \; \
	  -exec sed -r -i "s/[^_]logInform/CONSOLE_BRIDGE_logInform/" {} \;
}

build() {
  # Use ROS environment variables
  source /usr/share/ros-build-tools/clear-ros-env.sh
  [ -f /opt/ros/melodic/setup.bash ] && source /opt/ros/melodic/setup.bash

  # Create build directory
  [ -d ${srcdir}/build ] || mkdir ${srcdir}/build
  cd ${srcdir}/build

  # Fix Python2/Python3 conflicts
  /usr/share/ros-build-tools/fix-python-scripts.sh -v 3 ${srcdir}/${_dir}

  export PKG_CONFIG_PATH=$PKG_CONFIG_PATH:/opt/ros/melodic/lib64/pkgconfig

  # Build project
  cmake ${srcdir}/${_dir} \
        -DCMAKE_BUILD_TYPE=Release \
        -DCATKIN_BUILD_BINARY_PACKAGE=ON \
        -DCMAKE_INSTALL_PREFIX=/opt/ros/melodic \
        -DPYTHON_EXECUTABLE=/usr/bin/python3 \
        -DSETUPTOOLS_DEB_LAYOUT=OFF
  make
}

package() {
  cd "${srcdir}/build"
  make DESTDIR="${pkgdir}/" install
}

# Script generated with import_catkin_packages.py.
# For more information: https://github.com/bchretien/arch-ros-stacks.
pkgdesc="ROS - This package defines messages commonly used in mapping packages."
url='https://wiki.ros.org/map_msgs'

pkgname='ros-noetic-map-msgs'
pkgver='1.13.0'
_pkgver_patch=0
arch=('any')
pkgrel=2
license=('BSD')

ros_makedepends=(
	ros-noetic-catkin
	ros-noetic-message-generation
	ros-noetic-std-msgs
	ros-noetic-nav-msgs
	ros-noetic-sensor-msgs
)

makedepends=(
	'cmake'
	'ros-build-tools'
	${ros_makedepends[@]}
)

ros_depends=(
	ros-noetic-message-runtime
	ros-noetic-sensor-msgs
	ros-noetic-std-msgs
	ros-noetic-nav-msgs
)

depends=(
	${ros_depends[@]}
)

_dir="navigation_msgs-${pkgver}/map_msgs"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ros-planning/navigation_msgs/archive/${pkgver}.tar.gz")
sha256sums=('09bba8fb7a60135183830dec4381cd3187244794aab9759ac50bbc6007e04a61')

build() {
	# Use ROS environment variables.
	source /usr/share/ros-build-tools/clear-ros-env.sh
	[ -f /opt/ros/noetic/setup.bash ] && source /opt/ros/noetic/setup.bash

	# Create the build directory.
	[ -d ${srcdir}/build ] || mkdir ${srcdir}/build
	cd ${srcdir}/build

	# Build the project.
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

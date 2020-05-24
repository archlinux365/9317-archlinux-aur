# Script generated with import_catkin_packages.py.
# For more information: https://github.com/bchretien/arch-ros-stacks.
pkgdesc="ROS - The smach_ros package contains extensions for the SMACH library to integrate it tightly with ROS."
url='https://wiki.ros.org/smach_ros'

pkgname='ros-noetic-smach-ros'
pkgver='2.0.1'
_pkgver_patch=0
arch=('any')
pkgrel=2
license=('BSD')

ros_makedepends=(
	ros-noetic-catkin
	ros-noetic-rostest
)

makedepends=(
	'cmake'
	'ros-build-tools'
	${ros_makedepends[@]}
)

ros_depends=(
	ros-noetic-std-srvs
	ros-noetic-smach-msgs
	ros-noetic-std-msgs
	ros-noetic-rostopic
	ros-noetic-actionlib
	ros-noetic-actionlib-msgs
	ros-noetic-smach
	ros-noetic-rospy
)

depends=(
	${ros_depends[@]}
)

_dir="executive_smach-${pkgver}/smach_ros"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ros/executive_smach/archive/${pkgver}.tar.gz")
sha256sums=('2f7f58064c960fc56de15fdedfd883f62122bd44874787f13c8b4d8a77c45380')

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

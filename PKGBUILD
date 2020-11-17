pkgdesc="ROS - The core rosbridge package, repsonsible for interpreting JSON and
performing the appropriate ROS action, like subscribe, publish, call service,
and interact with params."
url='https://wiki.ros.org/rosbridge_library'

pkgname='ros-melodic-rosbridge-library'
pkgver='0.11.10'
arch=('i686' 'x86_64' 'aarch64' 'armv7h' 'armv6h')
pkgrel=1
license=('BSD')

ros_makedepends=(
	ros-melodic-catkin
    ros-melodic-std-msgs
    ros-melodic-geometry-msgs
    ros-melodic-message-generation
)

makedepends=(
	'cmake'
	'ros-build-tools'
	${ros_makedepends[@]}
    python-pillow
    python-pymongo
)

ros_depends=(
    ros-melodic-rospy
    ros-melodic-roscpp
    ros-melodic-rosgraph
    ros-melodic-rosservice
    ros-melodic-rostopic
    ros-melodic-std-msgs
    ros-melodic-geometry-msgs
    ros-melodic-message-runtime
)

depends=(
	${ros_depends[@]}
    python-pillow
    python-pymongo
)

_dir="rosbridge_suite-${pkgver}/rosbridge_library"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/RobotWebTools/rosbridge_suite/archive/${pkgver}.tar.gz")
sha256sums=('1f30c8df21cb1dc2d0a35141b6c1666a281ff3c41574b2d459c7f38812599264')

build() {
	# Use ROS environment variables.
	source /usr/share/ros-build-tools/clear-ros-env.sh
	[ -f /opt/ros/melodic/setup.bash ] && source /opt/ros/melodic/setup.bash

	# Create the build directory.
	[ -d ${srcdir}/build ] || mkdir ${srcdir}/build
	cd ${srcdir}/build

	# Fix Python2/Python3 conflicts.
	/usr/share/ros-build-tools/fix-python-scripts.sh -v 3 ${srcdir}/${_dir}

	# Build the project.
	cmake ${srcdir}/${_dir} \
		-DCMAKE_BUILD_TYPE=Release \
		-DCATKIN_BUILD_BINARY_PACKAGE=ON \
                -DCATKIN_ENABLE_TESTING=0 \
		-DCMAKE_INSTALL_PREFIX=/opt/ros/melodic \
		-DPYTHON_EXECUTABLE=/usr/bin/python3 \
		-DSETUPTOOLS_DEB_LAYOUT=OFF
	make
}

package() {
	cd "${srcdir}/build"
	make DESTDIR="${pkgdir}/" install
}

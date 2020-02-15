# Script generated with import_catkin_packages.py.
# For more information: https://github.com/bchretien/arch-ros-stacks.
pkgdesc="ROS - Launch files and world files to start the models in gazebo"
url='https://wiki.ros.org/summit_xl_gazebo'

pkgname='ros-melodic-summit-xl-gazebo'
pkgver='1.1.3'
arch=('i686' 'x86_64' 'aarch64' 'armv7h' 'armv6h')
pkgrel=2
license=('BSD')

ros_makedepends=(
    ros-melodic-catkin
    ros-melodic-roscpp
    ros-melodic-std-srvs
    ros-melodic-std-msgs
    ros-melodic-tf
    ros-melodic-gazebo-ros
    ros-melodic-summit-xl-control
    ros-melodic-summit-xl-description
    ros-melodic-xacro
    ros-melodic-hector-gazebo-plugins
    ros-melodic-joint-state-controller
    ros-melodic-velocity-controllers
)

makedepends=(
	cmake
	ros-build-tools
	${ros_makedepends[@]}
)

ros_depends=(
    ros-melodic-roscpp
    ros-melodic-std-srvs
    ros-melodic-std-msgs
    ros-melodic-tf
    ros-melodic-gazebo-ros
    ros-melodic-summit-xl-control
    ros-melodic-summit-xl-description
    ros-melodic-xacro
    ros-melodic-hector-gazebo-plugins
    ros-melodic-gazebo-plugins
    ros-melodic-joint-state-controller
    ros-melodic-velocity-controllers
)

depends=(
	${ros_depends[@]}
)

_dir="summit_xl_sim-kinetic-${pkgver}/summit_xl_gazebo"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/RobotnikAutomation/summit_xl_sim/archive/kinetic-${pkgver}.tar.gz")
sha256sums=('f2d878437f94ec45343d3aa8fb691a0e00edf70e20c3f923f9aac7d65d9aa9e3')

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
		-DCMAKE_INSTALL_PREFIX=/opt/ros/melodic \
		-DPYTHON_EXECUTABLE=/usr/bin/python3 \
		-DSETUPTOOLS_DEB_LAYOUT=OFF
	make
}

package() {
	cd "${srcdir}/build"
	make DESTDIR="${pkgdir}/" install
}

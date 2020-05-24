# Script generated with import_catkin_packages.py.
# For more information: https://github.com/bchretien/arch-ros-stacks.
pkgdesc="ROS - A bond allows two processes, A and B, to know when the other has terminated, either cleanly or by crashing."
url='https://www.wiki.ros.org/bond'

pkgname='ros-noetic-bond'
pkgver='1.8.5'
arch=('any')
pkgrel=1
license=('BSD')

ros_makedepends=(
	ros-noetic-message-generation
	ros-noetic-std-msgs
	ros-noetic-catkin
)

makedepends=(
	'cmake'
	'ros-build-tools'
	${ros_makedepends[@]}
)

ros_depends=(
	ros-noetic-message-runtime
	ros-noetic-std-msgs
)

depends=(
	${ros_depends[@]}
)

_dir="bond_core-${pkgver}/bond"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ros/bond_core/archive/${pkgver}.tar.gz")
sha256sums=('19e683f3c1ce7ec442e0e46708cdf7bbbb48c2a14ca4cbca858609fc1be931c5')

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

# Script generated with import_catkin_packages.py.
# For more information: https://github.com/bchretien/arch-ros-stacks.
pkgdesc="ROS - Metapackage referencing tutorials related to rviz and visualization."
url='https://wiki.ros.org/visualization_tutorials'

pkgname='ros-noetic-visualization-tutorials'
pkgver='0.11.0'
_pkgver_patch=0
arch=('any')
pkgrel=1
license=('BSD')

ros_makedepends=(
	ros-noetic-catkin
)

makedepends=(
	'cmake'
	'ros-build-tools'
	${ros_makedepends[@]}
)

ros_depends=(
	ros-noetic-visualization-marker-tutorials
	ros-noetic-librviz-tutorial
	ros-noetic-rviz-plugin-tutorials
	ros-noetic-interactive-marker-tutorials
	ros-noetic-rviz-python-tutorial
)

depends=(
	${ros_depends[@]}
)

_dir="visualization_tutorials-${pkgver}/visualization_tutorials"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ros-visualization/visualization_tutorials/archive/${pkgver}.tar.gz")
sha256sums=('e592005f3af058ed3fe6f2aeec2d64a6b861dc387b2f7c4d7e3cf1e165373de0')

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

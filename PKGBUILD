# Script generated with create_pkgbuild.py
# For more information: https://github.com/ros-melodic-arch/ros-build-tools-py3
pkgdesc="ROS - The mbf_abstract_nav package contains the abstract navigation server implementation of Move Base Flex (MBF)."
url='http://wiki.ros.org/move_base_flex'

pkgname='ros-melodic-mbf-abstract-nav'
pkgver='0.2.5'
_pkgrev=1
arch=('any')
pkgrel=1
license=('3-Clause BSD')

ros_makedepends=(ros-melodic-std-srvs
  ros-melodic-roscpp
  ros-melodic-mbf-msgs
  ros-melodic-xmlrpcpp
  ros-melodic-std-msgs
  ros-melodic-geometry-msgs
  ros-melodic-nav-msgs
  ros-melodic-mbf-utility
  ros-melodic-mbf-abstract-core
  ros-melodic-tf
  ros-melodic-actionlib
  ros-melodic-catkin
  ros-melodic-dynamic-reconfigure
  ros-melodic-actionlib-msgs)
makedepends=('cmake' 'ros-build-tools'
  ${ros_makedepends[@]}
)

ros_depends=(ros-melodic-std-srvs
  ros-melodic-roscpp
  ros-melodic-mbf-msgs
  ros-melodic-xmlrpcpp
  ros-melodic-std-msgs
  ros-melodic-geometry-msgs
  ros-melodic-nav-msgs
  ros-melodic-mbf-utility
  ros-melodic-mbf-abstract-core
  ros-melodic-tf
  ros-melodic-actionlib
  ros-melodic-dynamic-reconfigure
  ros-melodic-actionlib-msgs)
depends=(${ros_depends[@]}
    )

# Tarball version (faster download)
_dir="move_base_flex-release-release-melodic-mbf_abstract_nav"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/uos-gbp/move_base_flex-release/archive/release/melodic/mbf_abstract_core/${pkgver}.tar.gz")

source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/uos-gbp/move_base_flex-release/archive/release/melodic/mbf_abstract_nav/{pkgver}-{_pkgrev}.tar.gz")
sha256sums=('d6a26dae9990c6d0d6af97c72716d87f5206d11107ae9ce4dab77b57efee3841')


build() {
        # Use ROS environment variables
        source /usr/share/ros-build-tools/clear-ros-env.sh
        [ -f /opt/ros/melodic/setup.bash ] && source /opt/ros/melodic/setup.bash

        # Create build directory
        [ -d ${srcdir}/build ] || mkdir ${srcdir}/build
        cd ${srcdir}/build

        # Fix Python2/Python3 conflicts
        /usr/share/ros-build-tools/fix-python-scripts.sh -v 3 ${srcdir}/${_dir}

        # Build project
        cmake ${srcdir}/${_dir} \
                -DCMAKE_BUILD_TYPE=Release \
                -DCATKIN_BUILD_BINARY_PACKAGE=ON \
                -DCMAKE_INSTALL_PREFIX=/opt/ros/melodic \
                -DPYTHON_EXECUTABLE=/usr/bin/python3 \
                -DPYTHON_INCLUDE_DIR=/usr/include/python3.8m \
                -DPYTHON_LIBRARY=/usr/lib/libpython3.8m.so \
                -DPYTHON_BASENAME=.cpython-38m \
                -DSETUPTOOLS_DEB_LAYOUT=OFF
        make
    }

package() {
    cd "${srcdir}/build"
    make DESTDIR="${pkgdir}/" install
}
    

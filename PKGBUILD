# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS - Examples of minimal service servers using rclpy."
url='http://www.ros.org/'

pkgname='ros-ardent-examples-rclpy-minimal-service'
pkgver='0.4.0'
_pkgver_patch=0
arch=('any')
pkgrel=1
license=('Apache License 2.0')

ros_makedepends=()
makedepends=('cmake' 'ros-build-tools'
  ${ros_makedepends[@]})

ros_depends=(ros-ardent-example-interfaces
  ros-ardent-std-msgs
  ros-ardent-rclpy)
depends=(${ros_depends[@]})

# Git version (e.g. for debugging)
# _tag=release/ardent/examples_rclpy_minimal_service/${pkgver}-${_pkgver_patch}
# _dir=${pkgname}
# source=("${_dir}"::"git+https://github.com/ros2-gbp/examples-release.git"#tag=${_tag})
# sha256sums=('SKIP')

# Tarball version (faster download)
_dir="examples-release-release-ardent-examples_rclpy_minimal_service-${pkgver}-${_pkgver_patch}"
source=("${pkgname}-${pkgver}-${_pkgver_patch}.tar.gz"::"https://github.com/ros2-gbp/examples-release/archive/release/ardent/examples_rclpy_minimal_service/${pkgver}-${_pkgver_patch}.tar.gz")
sha256sums=('99a30266c92683e147f8346f4cd22ba1f9d8371173af6192190d600658baee43')

package() {
  cd "${srcdir}/${_dir}"
  python setup.py install --root="$pkgdir" --prefix="/opt/ros/ardent" --optimize=1
}

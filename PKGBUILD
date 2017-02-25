# Maintainer: Grey Christoforo <first name at last name dot net>
pkgname=heekscnc-git
pkgver=1143.8c70474
pkgrel=5
pkgdesc="CAM add-on for HeeksCAD"
arch=('x86_64')
url="http://heeks.net"
license=('custom:BSD3')
depends=('heekscad-git')
makedepends=('cmake')
source=('git://github.com/Heeks/heekscnc.git')
provides=('heekscnc')
conflicts=('heekscnc')
md5sums=('SKIP')

pkgver() {
  cd "${srcdir}/heekscnc"
  #echo $(git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g')
  echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

prepare() {
  cd "${srcdir}/heekscnc"
  sed -i 's,Execute(wxString(_T("python \\"")) + path + wxString(_T("backplot\.py\\" \\"")) + m_program->m_machine\.reader + wxString(_T("\\" \\"")) + m_filename + wxString(_T("\\"")) );,Execute(wxString(_T("python2 \\"")) + path + wxString(_T("backplot\.py\\" \\"")) + m_program->m_machine\.reader + wxString(_T("\\" \\"")) + m_filename + wxString(_T("\\"")) );,g' src/PythonStuff.cpp
  sed -i 's,wxString post_path = wxString(_T("python ")) + path.GetFullPath();,wxString post_path = wxString(_T("python2 ")) + path.GetFullPath();,g' src/PythonStuff.cpp
}

build() {
  msg "Starting build..."
  cd "${srcdir}/heekscnc"
  mkdir -p build
  cd build
  export OCE_DIR="/opt/oce/lib/oce-0.18"
  cmake -DPYTHON_EXECUTABLE="/usr/bin/python2" -DPYTHON_LIBRARY="/usr/lib/libpython2.7.so" -DPYTHON_INCLUDE_DIR="/usr/include/python2.7" -DCMAKE_INSTALL_PREFIX=/usr ..
}

package() {
  cd "$srcdir/heekscnc/build"
  make DESTDIR="$pkgdir/" install

  mkdir -p "${pkgdir}/usr/share/licenses"
  cp "${srcdir}/heekscnc/COPYING" "${pkgdir}/usr/share/licenses/$pkgname"
}

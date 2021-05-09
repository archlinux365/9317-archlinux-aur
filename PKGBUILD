pkgname=openmodelica
pkgver=1.17.0
pkgrel=1
pkgdesc="Open-source Modelica-based modeling and simulation environment"
url="https://www.openmodelica.org"
_giturl="https://github.com/OpenModelica/OpenModelica.git"
license=('OSMC-PL')
arch=('x86_64')
depends=('java-environment' 'lapack' 'openscenegraph' 'omniorb' 'libcurl-gnutls'
         'lpsolve' 'boost-libs' 'qt5-webkit' 'qt5-xmlpatterns' 'qt5-svg' 'qt5-tools'
         'expat')
makedepends=('gcc-fortran' 'cmake' 'git')
source=("${pkgname}::git+${_giturl}#tag=v${pkgver}")
sha256sums=('SKIP')

prepare() {
        cd "${pkgname}"
        git remote set-url origin ${_giturl}
        git submodule update --force --init --recursive
        # OMCompiler: Dont try to install translations
        git cherry-pick 2a39a402d9604a1ce353b0a12574fed5d320be0e
        # Fix build with cmake >= 3.20
        git cherry-pick 4f3a50974f0f916efd716809699f18d47f1dbe34
}

build() {
        cd "${pkgname}"
        autoreconf -fi
        ./configure --prefix=/usr
        make
}

package() {
        cd "${pkgname}"
        make install DESTDIR=${pkgdir}
}
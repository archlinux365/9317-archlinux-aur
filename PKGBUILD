
# Maintainer: Gabriel Brown <gabriel.h.brown@gmail.com>

_gituser="chapel-lang"
_gitname="chapel"

pkgname=${_gitname}-git
pkgver=1.27.0.7648.gbcc4ac3109
pkgrel=1
pkgdesc="Programming language designed for productive parallel computing at scale"
url="https://chapel-lang.org/"
arch=('x86_64' 'arm')
license=('Apache')
depends=('python' 'perl' 'llvm' 'clang')
makedepends=('git' 'cmake')
source=("git+https://github.com/${_gituser}/${_gitname}.git")
sha256sums=('SKIP') # source is not static

pkgver() {
  cd "${srcdir}/${_gitname}"
  # get correct numerical version from internal file
  ver_file="compiler/main/version_num.h"
  major_ver=$(grep MAJOR_VERSION  ${ver_file} | cut -d ' ' -f 3) 
  minor_ver=$(grep MINOR_VERSION  ${ver_file} | cut -d ' ' -f 3) 
  update_ver=$(grep UPDATE_VERSION ${ver_file} | cut -d ' ' -f 3) 
  ver_num="${major_ver}.${minor_ver}.${update_ver}"
  # keep second (correct) half of git describe result
  gitdescribe=$(git describe --long --tags --always)
  tail=$(echo ${gitdescribe} | cut -d '-' -f 2,3) # no version number
  # combine two pieces
  ver_hyphen="${ver_num}-${tail}"
  ver=$(echo ${ver_hyphen} | sed 's/\-/\./g')
  echo ${ver}
  # use below when git describe begins with correct version number
  #git describe --long --tags --always | sed 's/\-/\./g' 
}

build() {
        cd "${srcdir}/${_gitname}"
        ./configure --prefix=/usr
        make
}

check() {
        cd "${srcdir}/${_gitname}"
        export PATH="${srcdir}/${_gitname}/bin/linux64-x86_64:${PATH}"
        make check
}

package() {
        cd "${_gitname}"
        make DESTDIR="${pkgdir}" install
}

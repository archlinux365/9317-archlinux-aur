# Maintainer: Jonathan Liu <net147@gmail.com>
# Contributor: Sven-Hendrik Haase <sh@lutzhaase.com>
# Contributor: Imanol Celaya <ornitorrincos@archlinux-es.org>
# Contributor: Lukas Jirkovsky <l.jirkovsky@gmail.com>
# Contributor: Dan Vratil <progdan@progdansoft.com>
# Contributor: thotypous <matiasΘarchlinux-br·org>
# Contributor: delor <bartekpiech gmail com>

pkgname=qtcreator36
pkgver=3.6.1
_pkgver=v3.6.1
pkgrel=1
pkgdesc='Lightweight, cross-platform integrated development environment'
arch=('i686' 'x86_64')
url='http://qt-project.org'
license=('LGPL')
depends=('qt5-tools' 'qt5-declarative' 'qt5-script' 'qt5-quickcontrols' 'qt5-webkit')
makedepends=('git' 'mesa' 'clang')
options=('docs')
optdepends=('qt5-doc: integrated Qt documentation'
            'qt5-examples: welcome page examples'
            'gdb: debugger'
            'cmake: cmake project support'
            'openssh-askpass: ssh support'
            'git: git support'
            'mercurial: mercurial support'
            'bzr: bazaar support'
            'clang: Clang code model'
            'valgrind: analyze support')
provides=('qtcreator')
conflicts=('qtcreator')
install=qtcreator.install
source=("git://code.qt.io/qt-creator/qt-creator.git#tag=${_pkgver}"
        "git://code.qt.io/qt-labs/qbs.git"
        'qt-creator_llvmincdir.patch'
        'qtcreator.desktop')
md5sums=('SKIP'
         'SKIP'
         'ab50147c509e8043c69625afa7cca7fe'
         '800c94165c547b64012a207d9830250a')

prepare() {
  cd qt-creator
  git submodule init
  git config submodule.qbs.url $srcdir/qbs
  git submodule update

  # Debugger: Allow LLDB-MI to be used as debugger
  # https://bugreports.qt.io/browse/QTCREATORBUG-15131
  # https://code.qt.io/cgit/qt-creator/qt-creator.git/commit/?id=97e9f113879c
  # https://code.qt.io/cgit/qt-creator/qt-creator.git/commit/?id=e57b0db0f959
  git cherry-pick -n 97e9f113879c e57b0db0f959

  # Fix build with GCC 6 (patch from Fedora)
  # https://lists.fedoraproject.org/archives/list/devel@lists.fedoraproject.org/thread/Q5SWCUUMWQ4EMS7CU2CBOZHV3WZYOOTT/
  patch -Np1 -i ../qt-creator_llvmincdir.patch
}

build() {
  [[ -d build ]] && rm -r build
  mkdir build && cd build

  LLVM_INSTALL_DIR=/usr qmake CONFIG+=journald -r ../qt-creator/qtcreator.pro
  make
  make docs -j1
}

package() {
  cd build

  make INSTALL_ROOT="${pkgdir}/usr/" install
  make INSTALL_ROOT="${pkgdir}/usr/" install_docs

  # Workaround for FS#40583
  mv "${pkgdir}"/usr/bin/qtcreator "${pkgdir}"/usr/bin/qtcreator-bin
  echo "#!/bin/sh" > "${pkgdir}"/usr/bin/qtcreator
  echo "QT_LOGGING_TO_CONSOLE=1 qtcreator-bin \$@" >> "${pkgdir}"/usr/bin/qtcreator
  chmod +x "${pkgdir}"/usr/bin/qtcreator

  install -Dm644 ${srcdir}/qtcreator.desktop ${pkgdir}/usr/share/applications/qtcreator.desktop
  install -Dm644 ${srcdir}/qt-creator/LGPL_EXCEPTION.TXT ${pkgdir}/usr/share/licenses/qtcreator/LGPL_EXCEPTION.TXT
}

# Maintainer: Oscar Morante <spacepluk@gmail.com>

_prefix=/opt/Unity

pkgname=unity-editor-webgl
pkgver=2019.2.3f1
pkgrel=1
pkgdesc="Allows building your Unity projects for the WebGL platform"
arch=('x86_64')
url='https://unity3d.com/'
license=('custom')
depends=('unity-editor'
         'ffmpeg'
         'gzip'
         'ncurses5-compat-libs')
source=("2019.2.3f1.2.3f1.tar.xz::https://beta.unity3d.com/download/8e55c27a4621/LinuxEditorTargetInstaller/UnitySetup-WebGL-Support-for-Editor-2019.2.3f1.tar.xz")
md5sums=("f27222aa9f549bd5c0068a82094e9a94")
options=(!strip)
PKGEXT='.pkg.tar' # Prevent compressing of the final package

package() {
  _dest="${pkgdir}${_prefix}"
  install -d "${_dest}"
  mv Editor "${_dest}"
}


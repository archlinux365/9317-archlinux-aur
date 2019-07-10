# Maintainer: Oscar Morante <spacepluk@gmail.com>

_prefix=/opt/UnityLts

pkgname=unity-editor-lts-webgl
pkgver=2017.4.30f1
pkgrel=1
pkgdesc="Allows building your Unity projects for the WebGL platform"
arch=('x86_64')
url='https://unity3d.com/'
license=('custom')
depends=('unity-editor-lts'
         'ffmpeg'
         'gzip')
source=("2017.4.30f1.4.30f1.tar.xz::https://download.unity3d.com/download_unity/c6fa43736cae/LinuxEditorTargetInstaller/UnitySetup-WebGL-Support-for-Editor-2017.4.30f1.tar.xz")
md5sums=("26ecdaf439ebdc4be95211bc2b7e574b")
options=(!strip)
PKGEXT='.pkg.tar' # Prevent compressing of the final package

package() {
  _dest="${pkgdir}${_prefix}"
  install -d "${_dest}"
  mv Editor "${_dest}"
}


# Maintainer: Oscar Morante <spacepluk@gmail.com>

_version=2018.2.6
_build=f1
_randomstring=c591d9a97a0b
_prefix=/opt/Unity

pkgname=unity-editor-windows
pkgver=${_version}${_build}
pkgrel=1
pkgdesc="Allows building your Unity projects for the Windows platform"
arch=('x86_64')
url='https://unity3d.com/'
license=('custom')
depends=('unity-editor')
makedepends=('cpio')
source=("https://download.unity3d.com/download_unity/${_randomstring}/MacEditorTargetInstaller/UnitySetup-Windows-Mono-Support-for-Editor-${_version}${_build}.pkg")
sha1sums=('dce330cb2bf5309b925a092b0cabd4e59e0b0d9b')
options=(!strip)
PKGEXT='.pkg.tar' # Prevent compressing of the final package

package() {
  _dest="${pkgdir}/${_prefix}/Editor/Data/PlaybackEngines/WindowsStandaloneSupport"
  install -d "${_dest}"
  cd "${_dest}"
  cat "${srcdir}/TargetSupport.pkg.tmp/Payload" | gzip -dc | cpio -i
}


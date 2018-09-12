# Maintainer: Oscar Morante <spacepluk at gmail dot com>

_version=2018.3.0
_build=b1
_randomstring=3f0ac31c6d6f
_prefix=/opt/UnityBeta

pkgname=unity-editor-beta-mac
pkgver=${_version}${_build}+${_buildtag}
pkgrel=1
pkgdesc="Allows building your Unity projects for the Mac platform"
arch=('x86_64')
url='https://unity3d.com/'
license=('custom')
depends=('unity-editor-beta')
makedepends=('cpio')
source=("https://beta.unity3d.com/download/${_randomstring}/MacEditorTargetInstaller/UnitySetup-Mac-Mono-Support-for-Editor-${_version}${_build}.pkg")
sha1sums=('ac2434c37018093d9e36d4308861492d790bb060')
options=(!strip)
PKGEXT='.pkg.tar' # Prevent compressing of the final package

package() {
  _dest="${pkgdir}/${_prefix}/Editor/Data/PlaybackEngines/MacStandaloneSupport"
  install -d "${_dest}"
  cd "${_dest}"
  cat "${srcdir}/TargetSupport.pkg.tmp/Payload" | gzip -dc | cpio -i
}


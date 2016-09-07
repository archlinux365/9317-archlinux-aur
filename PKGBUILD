# Maintainer: Dylan Ferris <dylan@psilly.com>

# You must register at unrealengine.com and link your github account to access this private repo.
# @see https://wiki.archlinux.org/index.php/Unreal_Engine_4

# The source is over 3 GiB, with an extra 3 GiB of dependencies downloaded in build(), and may take several hours to compile.

pkgname='unreal-engine'
pkgver=4.13.0
pkgrel=3
pkgdesc='A 3D game engine by Epic Games which can be used non-commercially for free.'
arch=('x86_64')
url='https://www.unrealengine.com/'
makedepends=('clang' 'mono' 'dos2unix' 'cmake')
depends=('icu' 'xdg-user-dirs' 'sdl2' 'qt4' 'python')
license=('custom:UnrealEngine')
source=(
  "git+ssh://git@github.com/EpicGames/UnrealEngine.git#tag=$pkgver-release"
  'UE4Editor.desktop'
  '0001-ignore-return-value-error.patch'
  '0002-remove-clang35-dependency.patch'
)
md5sums=(
  'SKIP'
  'c7fc35a7eb9e23c0a9b7c593f7f9878d'
  '08e0e6b8e6c9b186191a8419cc7bd435'
  '604094f337176251bcfdacd3a21aa081'
)

# seems these are no longer necessaryand package is 3 Gib smaller with default options
#options=(!strip staticlibs)

build() {
  patch "$srcdir/UnrealEngine/Engine/Source/Programs/UnrealBuildTool/Linux/LinuxToolChain.cs" 0001-ignore-return-value-error.patch
  patch "$srcdir/UnrealEngine/Engine/Build/BatchFiles/Linux/Setup.sh" 0002-remove-clang35-dependency.patch

  cd $srcdir/UnrealEngine
  
  # help to clean up old builds when there is a new version
  # git clean -xdf

  # revert a 4.13 commit which causes the editor to crash when opening a widget blueprint
  # @see https://issues.unrealengine.com/issue/UE-35185
  git revert 8fba9bbdc3cc4105d7c3de24adc94f7304c7d90b --no-edit

  ./Setup.sh
  ./GenerateProjectFiles.sh

  # this should work instead of "git clean", but something leftover causes crashes
  #make ARGS=-clean

  make

  # delete windows-only files
  find \( -iname "Windows" -o "Win64" -o -iname "vs2013" -o -iname "vs2015" \) -type d -exec rm -r "{}" \;
  find -iregex '.*\.\(exe\|dll\|bat\|vcx?proj\(\.filters\|\.user\)?\|sln\)$' -delete

  # delete mac-only files (1+ GiB)
  find Engine/Source/ThirdParty \( -iname "IOS" -o -iname "TVOS" -o -iname "osx64" \) -type d -exec rm -r "{}" \;
}

package() {
  install -Dm644 UE4Editor.desktop "$pkgdir/usr/share/applications/UE4Editor.desktop"

  cd $srcdir/UnrealEngine

  # license
  install -Dm644 LICENSE.pdf "$pkgdir/usr/share/licenses/UnrealEngine/LICENSE.pdf"

  # engine
  install -d "$pkgdir/opt/$pkgname/Engine"
  # these folders needs to be writable, otherwise there is a segmentation fault when starting the editor
  cp -r Engine/Binaries "$pkgdir/opt/$pkgname/Engine/Binaries"
  cp -r Engine/Build "$pkgdir/opt/$pkgname/Engine/Build"
  cp -r Engine/Config "$pkgdir/opt/$pkgname/Engine/Config"
  cp -r Engine/Content "$pkgdir/opt/$pkgname/Engine/Content"
  install -d "$pkgdir/opt/$pkgname/Engine/DerivedDataCache" # editor needs this
  cp -r Engine/Documentation "$pkgdir/opt/$pkgname/Engine/Documentation"
  cp -r Engine/Extras "$pkgdir/opt/$pkgname/Engine/Extras"
  install -d "$pkgdir/opt/$pkgname/Engine/Intermediate" # editor needs this, but not the files from the build
  cp -r Engine/Intermediate "$pkgdir/opt/$pkgname/Engine/Intermediate"
  cp -r Engine/Plugins "$pkgdir/opt/$pkgname/Engine/Plugins"
  cp -r Engine/Programs "$pkgdir/opt/$pkgname/Engine/Programs"
  cp -r Engine/Saved "$pkgdir/opt/$pkgname/Engine/Saved"
  cp -r Engine/Shaders "$pkgdir/opt/$pkgname/Engine/Shaders"
  cp -r Engine/Source "$pkgdir/opt/$pkgname/Engine/Source" # the source cannot be redistributed, but seems to be needed to compile c++ projects
  chmod -R a+rwX "$pkgdir/opt/$pkgname/Engine"

  # content
  cp -r FeaturePacks "$pkgdir/opt/$pkgname/FeaturePacks"
  cp -r Samples "$pkgdir/opt/$pkgname/Samples"
  cp -r Templates "$pkgdir/opt/$pkgname/Templates"

  # build scripts, used by some plugins (CLion)
  install -Dm755 GenerateProjectFiles.sh "$pkgdir/opt/$pkgname/GenerateProjectFiles.sh"
  install -Dm755 Setup.sh "$pkgdir/opt/$pkgname/Setup.sh"
  install -Dm644 .ue4dependencies "$pkgdir/opt/$pkgname/.ue4dependencies"

  # icon for .desktop file
  install -Dm644 Engine/Source/Programs/UnrealVS/Resources/Preview.png "$pkgdir/usr/share/pixmaps/UE4Editor.png"
}

# vim:set ts=2 sw=2 et:

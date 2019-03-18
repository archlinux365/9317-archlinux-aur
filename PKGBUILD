# Maintainer: steeltitanium <steeltitanium1 at gmail dot com>
# Contributor: steeltitanium <steeltitanium1 at gmail dot com>

pkgname=srb2kart
pkgver=1.0.4
_dataver=1.0.4
_patchver=1.0.4
pkgrel=1
pkgdesc='A kart racing mod based on the 3D Sonic the Hedgehog fangame Sonic Robo Blast 2, based on a modified version of Doom Legacy.'
arch=('i686' 'x86_64')
license=('GPL2')
url='https://mb.srb2.org/showthread.php?t=43708'
depends=('sdl2' 'sdl2_mixer' 'libpng' 'libgme' "srb2kart-data=$_dataver")
makedepends=('mesa' 'glu')
makedepends_i686=('nasm')
source=("git+https://github.com/STJr/Kart-Public.git#tag=v$pkgver"
        
"https://github.com/STJr/Kart-Public/releases/download/v$pkgver/srb2kart-v${_patchver//./}-patch.zip"
        "srb2kart.desktop"
        "srb2kart-opengl.desktop")
sha256sums=('SKIP'
            
'903b1a2b43269fd8b505e62bf3c4a3b8edf68b62cbb587fe5a472bec93c7f7da'
            
'fe154805cea950fc792faa266ef7d303cbccab893f802c2a85a2afdd0af51bc6'
            
'8082c8bad5bdf102d111d4e4d2eb8c73e9f30c1e54935091cd83f4928b3fc3dd')

build() {
  cd "$srcdir"/Kart-Public/src

  # clear out CPPFLAGS ( -D_FORTIFY_SOURCE doesn't like kart )
  CPPFLAGS=""

  [ "$CARCH" == "x86_64" ] && IS64BIT="64" || IS64BIT=""
  # Don't compress with UPX
  make NOUPX=1 LINUX$IS64BIT=1
}

package() {
  [ "$CARCH" == "x86_64" ] && IS64BIT="64" || IS64BIT=""
  install -Dm755 "$srcdir"/Kart-Public/bin/Linux$IS64BIT/Release/lsdl2srb2kart \
    "$pkgdir"/usr/bin/srb2kart

  # data patch 1.0.3 → 1.0.4,
  install -Dm644 patch.kart "$pkgdir"/usr/share/games/SRB2Kart/patch.kart

  # icon + .desktop
  install -Dm644 "$srcdir"/Kart-Public/src/sdl/SDL_icon.xpm \
    "$pkgdir"/usr/share/pixmaps/srb2kart.xpm
  install -Dm644 srb2kart.desktop "$pkgdir"/usr/share/applications/srb2kart.desktop
  install -m644 srb2kart-opengl.desktop "$pkgdir"/usr/share/applications
}
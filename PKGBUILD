# $Id$
# Maintainer: Giancarlo Razzolini <grazzolini@gmail.com>
# Contributor: Sven-Hendrik Haase <sh@lutzhaase.com>
# Contributor: Jan "heftig" Steffens <jan.steffens@gmail.com>
# Contributor: Eduardo Romero <eduardo@archlinux.org>
# Contributor: Giovanni Scafora <giovanni@archlinux.org>

_basename=wine
pkgname=wine-ivb
pkgver=1.9.11
pkgrel=3

_pkgbasever=${pkgver/rc/-rc}

source=(https://dl.winehq.org/wine/source/1.9/$_basename-$_pkgbasever.tar.bz2{,.sign}
        30-win32-aliases.conf
        patch-$pkgver-ivb.patch
        patch_temp_constants.patch)
sha512sums=('3c2037558b0e3dc833b68e18bee91642f22d19b201c604cd95c09a33ebe72ee1252139e2eb138efea666cf24bb727232b12d4c456459068ab228bfe951c793b2'
            'SKIP'
            '6e54ece7ec7022b3c9d94ad64bdf1017338da16c618966e8baf398e6f18f80f7b0576edf1d1da47ed77b96d577e4cbb2bb0156b0b11c183a0accf22654b0a2bb'
            'dfc3491d015ca5fbd074290869fad296f168383aba57a2b26392b05570e37d84a939cae141107fed02a06589472da9505366cb97a894c9582c9492bec4b35a93'
            '83583553d8db60e671679adcddedb87a2f8a740d36e5cdffef4a0cf2b995e48be216e53a7d1ee3bbeafd5bf9d0938b4c32b42265620c8e7c5bba967da893be11')
validpgpkeys=(5AC1A08B03BD7A313E0A955AF5E6E9EEB9461DD7
              DA23579A74D4AD9AF9D3F945CEFAC8EAAF17519D)

pkgdesc="A compatibility layer for running Windows programs: indexed vertex blending - https://bugs.winehq.org/show_bug.cgi?id=39057"
url="http://www.winehq.com"
arch=(i686 x86_64)
options=(staticlibs)
license=(LGPL)
install=wine.install

_depends=(
  fontconfig      lib32-fontconfig
  lcms2           lib32-lcms2
  libxml2         lib32-libxml2
  libxcursor      lib32-libxcursor
  libxrandr       lib32-libxrandr
  libxdamage      lib32-libxdamage
  libxi           lib32-libxi
  gettext         lib32-gettext
  freetype2       lib32-freetype2
  glu             lib32-glu
  libsm           lib32-libsm
  gcc-libs        lib32-gcc-libs
  libpcap         lib32-libpcap
  desktop-file-utils
)

makedepends=(autoconf ncurses bison perl fontforge flex
  'gcc>=4.5.0-2'  'gcc-multilib>=4.5.0-2'
  giflib                lib32-giflib
  libpng                lib32-libpng
  gnutls                lib32-gnutls
  libxinerama           lib32-libxinerama
  libxcomposite         lib32-libxcomposite
  libxmu                lib32-libxmu
  libxxf86vm            lib32-libxxf86vm
  libldap               lib32-libldap
  mpg123                lib32-mpg123
  openal                lib32-openal
  v4l-utils             lib32-v4l-utils
  libpulse              lib32-libpulse
  alsa-lib              lib32-alsa-lib
  libxcomposite         lib32-libxcomposite
  mesa                  lib32-mesa
  mesa-libgl            lib32-mesa-libgl
  libcl                 lib32-libcl
  libxslt               lib32-libxslt
  gst-plugins-base-libs lib32-gst-plugins-base-libs
  samba
  opencl-headers
)
  
optdepends=(
  giflib                lib32-giflib
  libpng                lib32-libpng
  libldap               lib32-libldap
  gnutls                lib32-gnutls
  mpg123                lib32-mpg123
  openal                lib32-openal
  v4l-utils             lib32-v4l-utils
  libpulse              lib32-libpulse
  alsa-plugins          lib32-alsa-plugins
  alsa-lib              lib32-alsa-lib
  libjpeg-turbo         lib32-libjpeg-turbo
  libxcomposite         lib32-libxcomposite
  libxinerama           lib32-libxinerama
  ncurses               lib32-ncurses
  libcl                 lib32-libcl
  libxslt               lib32-libxslt
  gst-plugins-base-libs lib32-gst-plugins-base-libs
  cups
  samba           dosbox
)

if [[ $CARCH == i686 ]]; then
  # Strip lib32 etc. on i686
  _depends=(${_depends[@]/*32-*/})
  makedepends=(${makedepends[@]/*32-*/} ${_depends[@]})
  makedepends=(${makedepends[@]/*-multilib*/})
  optdepends=(${optdepends[@]/*32-*/})
  provides=("wine=$pkgver")
  replaces=('wine')
else
  makedepends=(${makedepends[@]} ${_depends[@]})
  provides=("bin32-wine=$pkgver" "wine=$pkgver" "wine-wow64=$pkgver")
  conflicts=("bin32-wine" 'wine' 'wine-wow64')
  replaces=('bin32-wine' 'wine')
fi

prepare() {
  # Allow ccache to work
  mv $_basename-$_pkgbasever $pkgname

  sed 's|OpenCL/opencl.h|CL/opencl.h|g' -i $pkgname/configure*

  # Get rid of old build dirs
  rm -rf $pkgname-{32,64}-build
  mkdir $pkgname-32-build

  # Apply the ivb patches
  cd $pkgname
  patch -Np1 -i "$srcdir/patch-$pkgver-ivb.patch"
  patch -Np1 -i "$srcdir/patch_temp_constants.patch"
}

build() {
  cd "$srcdir"

  if [[ $CARCH == x86_64 ]]; then
    msg2 "Building Wine-64..."

    mkdir $pkgname-64-build
    cd "$srcdir/$pkgname-64-build"
    ../$pkgname/configure \
      --prefix=/usr \
      --libdir=/usr/lib \
      --with-x \
      --with-gstreamer \
      --enable-win64
    # Gstreamer was disabled for FS#33655

    make

    _wine32opts=(
      --libdir=/usr/lib32
      --with-wine64="$srcdir/$pkgname-64-build"
    )

    export PKG_CONFIG_PATH="/usr/lib32/pkgconfig"
  fi

  msg2 "Building Wine-32..."
  cd "$srcdir/$pkgname-32-build"
  ../$pkgname/configure \
    --prefix=/usr \
    --with-x \
    --with-gstreamer \
    "${_wine32opts[@]}"

  make
}

package() {
  depends=(${_depends[@]})

  msg2 "Packaging Wine-32..."
  cd "$srcdir/$pkgname-32-build"

  if [[ $CARCH == i686 ]]; then
    make prefix="$pkgdir/usr" install
  else
    make prefix="$pkgdir/usr" \
      libdir="$pkgdir/usr/lib32" \
      dlldir="$pkgdir/usr/lib32/wine" install

    msg2 "Packaging Wine-64..."
    cd "$srcdir/$pkgname-64-build"
    make prefix="$pkgdir/usr" \
      libdir="$pkgdir/usr/lib" \
      dlldir="$pkgdir/usr/lib/wine" install
  fi

  # Font aliasing settings for Win32 applications
  install -d "$pkgdir"/etc/fonts/conf.{avail,d}
  install -m644 "$srcdir/30-win32-aliases.conf" "$pkgdir/etc/fonts/conf.avail"
  ln -s ../conf.avail/30-win32-aliases.conf "$pkgdir/etc/fonts/conf.d/30-win32-aliases.conf"
}

# vim:set ts=8 sts=2 sw=2 et:

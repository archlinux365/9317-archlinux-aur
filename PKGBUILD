# Maintainer:  Νικόλαος Κυριάκος Φυτίλης <n-fit@live.com>

pkgname=banshee
pkgver=2.9.1.r327.gd6f7b6294
pkgrel=1
pkgdesc="Music management and playback for GNOME (fork by arfbtwn)"
arch=('i686' 'x86_64')
url="https://github.com/arfbtwn/banshee"
license=('MIT')
depends=(libxxf86vm gst-plugins-base-libs mono-addins dbus-sharp-glib libsoup \
taglib-sharp-git gconf-sharp libmtp hicolor-icon-theme \
media-player-info gst-plugins-bad mono-upnp gst-plugins-good gvfs libgpod)
makedepends=('intltool' 'gnome-doc-utils' 'gnome-common')
optdepends=('gst-plugins-ugly: Extra media codecs'
            'gst-libav: Extra media codecs'
            'brasero: CD burning')
source=(git+https://github.com/arfbtwn/banshee.git)
md5sums=(SKIP)

pkgver() {
  cd "$pkgname"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd $pkgname
  git checkout feature/mediapanel
#  autoreconf -fvi
  NOCONFIGURE=1 ./autogen.sh
  export MONO_SHARED_DIR="$srcdir/.wabi"
  mkdir -p "$MONO_SHARED_DIR"
  hackyhack='-r:/usr/lib/libgpod/libgpod-sharp.dll
  -r:/usr/lib/pkgconfig/../../lib/mono/gtk-sharp-3.0/pango-sharp.dll
  -r:/usr/lib/pkgconfig/../../lib/mono/gtk-sharp-3.0/atk-sharp.dll
  -r:/usr/lib/pkgconfig/../../lib/mono/gtk-sharp-3.0/gdk-sharp.dll
  -r:/usr/lib/pkgconfig/../../lib/mono/gtk-sharp-3.0/gtk-sharp.dll
  -r:/usr/lib/pkgconfig/../../lib/mono/gtk-sharp-3.0/glib-sharp.dll' \
  LIBGPODSHARP_LIBS=$(echo $hackyhack) MCS=/usr/bin/mcs ./configure \
               --prefix=/usr --sysconfdir=/etc --localstatedir=/var \
              --disable-gst_sharp \
              --enable-gst-native \
              --disable-docs \
              --disable-static \
              --disable-scrollkeeper \
              --disable-schemas-install \
              --disable-user-help \
              --disable-youtube \
              --disable-gio-hardware \
              --with-vendor-build-id=ArchLinux
}

build() {
  export MONO_SHARED_DIR="$srcdir/.wabi"
  mkdir -p "$MONO_SHARED_DIR"
  export LIBGPODSHARP='-r:/usr/lib/pkgconfig/../../lib/mono/gtk-sharp-3.0/pango-sharp.dll -r:/usr/lib/pkgconfig/../../lib/mono/gtk-sharp-3.0/atk-sharp.dll -r:/usr/lib/pkgconfig/../../lib/mono/gtk-sharp-3.0/gdk-sharp.dll -r:/usr/lib/pkgconfig/../../lib/mono/gtk-sharp-3.0/gtk-sharp.dll -r:/usr/lib/pkgconfig/../../lib/mono/gtk-sharp-3.0/glib-sharp.dll'

  cd "$srcdir/$pkgname"
  sed 's/CollectionExtensions/Hyena.Collections.CollectionExtensions/g' -i src/Core/Banshee.Services/Banshee.Preferences/Collection.cs

  make
}

package() {
  export MONO_SHARED_DIR="$srcdir/.wabi"
  mkdir -p "$MONO_SHARED_DIR"

  cd "$srcdir/$pkgname"
  make DESTDIR="$pkgdir" install

  install -D -m644 COPYING "$pkgdir/usr/share/licenses/$pkgname/COPYING"
}

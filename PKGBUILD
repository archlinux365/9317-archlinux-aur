# Maintainer: Huang-Huang Bao <eh5@sokka.cn>
# Contributor: Jan Alexander Steffens (heftig) <heftig@archlinux.org>
# Contributor: Jan de Groot <jgc@archlinux.org>

_pkgbase=pipewire
pkgbase=pipewire-common-git
pkgname=(pipewire-common-git pipewire-common-docs-git pipewire-common-jack-git
         pipewire-common-pulse-git pipewire-common-alsa-git
         gst-plugin-pipewire-common-git)
pkgver=0.3.21.r89.g0855b1bb
pkgrel=2
pkgdesc="Server and user space API to deal with multimedia pipelines"
url="https://pipewire.org"
license=(MIT)
arch=(x86_64)
makedepends=(git meson doxygen graphviz xmltoman valgrind jack2
             alsa-lib gst-plugins-base sbc rtkit dbus sdl2
             ncurses libsndfile bluez-libs libldac libopenaptx
             libfdk-aac)
source=("git+https://gitlab.freedesktop.org/pipewire/pipewire.git")
sha256sums=('SKIP')

pkgver() {
  cd $_pkgbase
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd $_pkgbase
}

build() {
  # make AUR helper happy
  rm -rf build
  arch-meson $_pkgbase build \
    -D docs=true \
    -D udevrulesdir=/usr/lib/udev/rules.d
  meson compile -C build
}

check() {
  meson test -C build --print-errorlogs
}

_pick() {
  local p="$1" f d; shift
  for f; do
    d="$srcdir/$p/${f#$pkgdir/}"
    mkdir -p "$(dirname "$d")"
    mv "$f" "$d"
    rmdir -p --ignore-fail-on-non-empty "$(dirname "$f")"
  done
}

_ver=${pkgver:0:3}

package_pipewire-common-git() {
  depends=(sbc rtkit bluez-libs
           libdbus-1.so libncursesw.so libsndfile.so libudev.so libasound.so
           libsystemd.so libldacBT_enc.so libopenaptx.so libfdk-aac.so)
  optdepends=('pipewire-common-docs-git: Documentation'
              'pipewire-common-alsa-git: ALSA support'
              'pipewire-common-jack-git: JACK support'
              'pipewire-common-pulse-git: PulseAudio support'
              'gst-plugin-pipewire-common-git: GStreamer support')
  provides=(pipewire alsa-card-profiles libpipewire-$_ver.so)
  conflicts=(pipewire alsa-card-profiles
             pipewire-common-bluez5-git pipewire-common-bluez5-hsphfpd-git
             pipewire-common-ffmpeg-git)
  replaces=(pipewire-common-bluez5-git pipewire-common-bluez5-hsphfpd-git
            pipewire-common-ffmpeg-git)
  backup=(etc/pipewire/{client-rt,client,jack,pipewire-pulse,pipewire}.conf
          etc/pipewire/media-session.d/media-session.conf
          etc/pipewire/media-session.d/{alsa,bluez,v4l2}-monitor.conf)
  install=pipewire.install

  DESTDIR="$pkgdir" meson install -C build

  install -Dm644 "$_pkgbase/LICENSE" "$pkgdir/usr/share/licenses/$_pkgbase/LICENSE"
  install -Dm644 "$_pkgbase/COPYING" "$pkgdir/usr/share/licenses/$_pkgbase/COPYING"

  cd "$pkgdir"

  _pick docs usr/share/doc

  _pick jack etc/pipewire/media-session.d/with-jack
  _pick jack usr/bin/pw-jack usr/lib/pipewire-$_ver/jack
  _pick jack usr/lib/spa-0.2/jack
  _pick jack usr/share/man/man1/pw-jack.1

  _pick pulse etc/pipewire/media-session.d/with-pulseaudio

  _pick gst usr/lib/gstreamer-1.0
}

package_pipewire-common-docs-git() {
  provides=(pipewire-docs)
  conflicts=(pipewire-docs)
  pkgdesc+=" (documentation)"
  mv docs/* "$pkgdir"
}

package_pipewire-common-jack-git() {
  pkgdesc+=" (JACK support)"
  depends=(pipewire-common-git libpipewire-$_ver.so libjack.so)
  provides=(pipewire-jack)
  conflicts=(pipewire-jack)
  mv jack/* "$pkgdir"
}

package_pipewire-common-pulse-git() {
  pkgdesc+=" (PulseAudio replacement)"
  depends=(pipewire-common-git libpulse)
  provides=(pipewire-pulse pulseaudio pulseaudio-bluetooth)
  conflicts=(pipewire-pulse pulseaudio pulseaudio-bluetooth)
  install=pipewire-pulse.install
  mv pulse/* "$pkgdir"
}

package_pipewire-common-alsa-git() {
  pkgdesc="ALSA Configuration for PipeWire"
  depends=(pipewire-common-git libpipewire-$_ver.so)
  provides=(pipewire-alsa pulseaudio-alsa)
  conflicts=(pipewire-alsa)

  mkdir -p "$pkgdir"/etc/{alsa/conf.d,pipewire/media-session.d}
  ln -st "$pkgdir/etc/alsa/conf.d" \
    /usr/share/alsa/alsa.conf.d/{50-pipewire,99-pipewire-default}.conf
  touch "$pkgdir/etc/pipewire/media-session.d/with-alsa"
}

package_gst-plugin-pipewire-common-git() {
  pkgdesc="Multimedia graph framework - pipewire plugin"
  depends=(pipewire-common-git libpipewire-$_ver.so gst-plugins-base-libs)
  provides=(gst-plugin-pipewire)
  conflicts=(gst-plugin-pipewire)
  mv gst/* "$pkgdir"
}

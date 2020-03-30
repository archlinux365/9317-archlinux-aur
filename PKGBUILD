pkgbase=pipewire-git
pkgname=('pipewire-git'
         'pipewire-docs-git'
         'pipewire-jack-git'
         'pipewire-pulse-git'
         )
pkgver=0.3.2.11.ge00c0ffd
pkgrel=1
pkgdesc='Server and user space API to deal with multimedia pipelines. (GIT version)'
arch=('x86_64')
url='https://pipewire.org'
license=('LGPL')
depends=('rtkit'
         'sbc'
         'bluez-libs'
         'vulkan-icd-loader'
         'ffmpeg'
         'libpulse.so'
         'libdbus-1.so'
         'libsndfile.so'
         )
makedepends=('graphviz'
             'doxygen'
             'xmltoman'
             'git'
             'meson'
             'valgrind'
             'vulkan-headers'
             'jack2'
             'sbc'
             )
conflicts=('pipewire'
           'pipewire-pulse'
           'pipewire-jack'
           'pipewire-docs'
          )
source=('git+https://gitlab.freedesktop.org/pipewire/pipewire.git')
sha256sums=('SKIP')
backup=('etc/pipewire/pipewire.conf')

pkgver() {
  cd pipewire
  echo "$(git describe --long --tags | tr - .)"
}

prepare() {
  mkdir -p build

  cd pipewire

  # Reduce docs size
  printf '%s\n' >> doc/Doxyfile.in \
    HAVE_DOT=yes DOT_IMAGE_FORMAT=svg INTERACTIVE_SVG=yes
}

build() {
  cd "${srcdir}/build"

  CFLAGS+=" -Wformat"

  arch-meson ../pipewire \
    -D docs=true \
    -D gstreamer=false \
    -D ffmpeg=true \

  ninja
}

check() {
  meson test -C build --print-errorlogs
}

_pick() {
  local p="${1}" f d; shift
  for f; do
    d="${srcdir}/${p}/${f#$pkgdir/}"
    mkdir -p "$(dirname "${d}")"
    mv "${f}" "${d}"
    rmdir -p --ignore-fail-on-non-empty "$(dirname "${f}")"
  done
}

package_pipewire-git() {
  depends=('ffmpeg'
           'sbc'
           'rtkit'
           'vulkan-icd-loader'
           'bluez-libs'
           'libdbus-1.so'
           'libsndfile.so'
           )
  optdepends=('pipewire-docs: Documentation'
              'pipewire-jack: JACK support'
              'pipewire-pulse: PulseAudio support'
              )
  provides=("libpipewire-${pkgver:0:3}.so")
  backup=('etc/pipewire/pipewire.conf')
  install=pipewire.install

  DESTDIR="${pkgdir}" meson install -C build

  cd "${pkgdir}"

  _pick docs usr/share/doc

  _pick pulse usr/lib/libpulse*

  _pick jack usr/lib/spa-0.2/jack
  _pick jack usr/lib/libjack*
}

package_pipewire-docs-git() {
  pkgdesc='Server and user space API to deal with multimedia pipelines. (documentation)(GIT Version)'
  provides=('pipewire-dics')
  conflicts=('pipewire-docs')

  mv docs/* "${pkgdir}"
}

package_pipewire-jack-git() {
  pkgdesc='Server and user space API to deal with multimedia pipelines. (JACK support)(GIT Version)'
  depends=("libpipewire-${pkgver:0:3}.so"
           'libjack.so'
           )
  provides=('libjack-pw.so'
            'pipewire-jack'
            )
  conflicts=('pipewire-jack')

  mv jack/* "${pkgdir}"
}

package_pipewire-pulse-git() {
  pkgdesc='Server and user space API to deal with multimedia pipelines. (Pulse support)(GIT version)'
  depends=("libpipewire-${pkgver:0:3}.so"
           'libpulse.so'
           'libglib-2.0.so'
           )
  provides=('pipewire-pulse'
            'libpulse-pw.so'
            'libpulse-simple-pw.so'
            'libpulse-mainloop-glib-pw.so'
            )
 conflicts=('pipewire-pulse')

  mv pulse/* "${pkgdir}"
}

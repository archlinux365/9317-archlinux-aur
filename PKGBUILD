# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>
# Contributor: orumin <dev@orum.in>

_basename=gst-plugins-bad
pkgname=lib32-gst-plugins-bad
pkgver=1.18.1
pkgrel=1
pkgdesc="Multimedia graph framework - bad plugins (32-bit)"
url="https://gstreamer.freedesktop.org/"
arch=(x86_64)
license=(LGPL)
depends=(lib32-aom lib32-bzip2 lib32-chromaprint lib32-curl lib32-faac lib32-faad2
        lib32-fluidsynth lib32-gst-plugins-base-libs lib32-gst-plugins-good
        lib32-lcms2 lib32-libass lib32-libavtp lib32-libbs2b lib32-libdc1394 lib32-libdrm
        lib32-libdca lib32-libde265 lib32-libdvdnav lib32-libdvdread lib32-libfdk-aac
        lib32-libgme lib32-libgudev lib32-libkate lib32-liblrdf lib32-libmms lib32-libmodplug
        lib32-libmpcdec lib32-libnice lib32-libofa lib32-librsvg lib32-libsndfile
        lib32-libsrtp lib32-libusb lib32-libva lib32-libvdpau lib32-libwebp lib32-libx11
        lib32-libxcb lib32-libxkbcommon-x11 lib32-libxml2 lib32-lilv lib32-mjpegtools lib32-neon
        lib32-nettle lib32-openal lib32-openexr lib32-openjpeg2 lib32-openssl lib32-opus lib32-orc
        lib32-pango lib32-rtmpdump lib32-sbc lib32-soundtouch lib32-spandsp lib32-srt
        lib32-vulkan-icd-loader lib32-wayland lib32-webrtc-audio-processing lib32-wildmidi
        lib32-x265 lib32-zbar lib32-zvbi gst-plugins-bad)
makedepends=(git lib32-bluez-libs lib32-glu lib32-gtk3 lib32-ladspa lib32-libexif lib32-lv2 lib32-vulkan-validation-layers
             meson python lib32-shaderc vulkan-headers wayland-protocols)
checkdepends=(xorg-server-xvfb)
options=(!emptydirs)
_commit=e5c3c106a2da607953fea36e3a253b382c939684  # tags/1.18.1^0
source=("git+https://gitlab.freedesktop.org/gstreamer/gst-plugins-bad.git#commit=$_commit")
sha256sums=('SKIP')

pkgver() {
    cd $_basename

    git describe --tags | sed 's/-/+/g'
}

build() {
    export CC='gcc -m32'
    export CXX='g++ -m32'
    export PKG_CONFIG='/usr/bin/i686-pc-linux-gnu-pkg-config'

    arch-meson $_basename build \
        --libdir=lib32 \
        --libexecdir=lib32 \
        -D introspection=disabled \
        -D doc=disabled \
        -D directfb=disabled \
        -D flite=disabled \
        -D gsm=disabled \
        -D iqa=disabled \
        -D magicleap=disabled \
        -D msdk=disabled \
        -D nvdec=disabled \
        -D nvenc=disabled \
        -D opencv=disabled \
        -D openh264=disabled \
        -D openmpt=disabled \
        -D openni2=disabled \
        -D opensles=disabled \
        -D tinyalsa=disabled \
        -D voaacenc=disabled \
        -D voamrwbenc=disabled \
        -D wasapi2=disabled \
        -D wasapi=disabled \
        -D wpe=disabled \
        -D gobject-cast-checks=disabled \
        -D microdns=disabled \
        -D svthevcenc=disabled \
        -D zxing=disabled \
        -D package-name="GStreamer Bad Plugins (Arch Linux)" \
        -D package-origin="https://www.archlinux.org/"

    meson compile -C build
}

check() (
    mkdir -p -m 700 "${XDG_RUNTIME_DIR:=$PWD/runtime-dir}"
    export XDG_RUNTIME_DIR

    # elements_dtls test hangs sometimes
    xvfb-run -s '-screen 0 1920x1080x24 -nolisten local +iglx -noreset' \
        meson test -C build --print-errorlogs || :
)

package() {
    DESTDIR="$pkgdir" meson install -C build

    rm -rf "${pkgdir}"/usr/{bin,include,share}
}

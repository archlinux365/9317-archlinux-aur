# Maintainer: tytan652 <tytan652 at tytanium dot xyz>

pkgname=obs-studio-tytan652
pkgver=27.0.0
pkgrel=4
pkgdesc="Free and open source software for video recording and live streaming. With Browser dock and sources, VST 2 filter, FTL protocol, working VLC sources and my bind interface and GNOME entry PRs."
arch=("i686" "x86_64" "aarch64")
url="https://github.com/obsproject/obs-studio"
license=("GPL2")
depends=("ffmpeg" "mbedtls" "jack" "gtk-update-icon-cache" "x264" "rnnoise"

         # "libxinerama" "qt5-svg" provided by "vlc-luajit"
         # "libxkbcommon-x11" provided by "qt5-base"
         # "jansson" "curl" provided by "ftl-sdk"

         # Both needed to load linux-capture, so those two are no longer optional
         "libxcomposite" "pipewire"

         # Needed by obs-browser
         "libxss" "libxrandr" "nss" "at-spi2-atk"
         
         # AUR Packages
         "vlc-luajit" "ftl-sdk")
# The official VLC package will make OBS crash when a VLC source is used.
# The issue is that VLC and OBS are compiled with different lua version.
# So I also created vlc-luajit, a VLC package compiled with the same lua as OBS.
# But to make people unable to install VLC official package with obs-studio-tytan652.
# I decided to make vlc-luajit a dependency of OBS rather than an optional one.
makedepends=("cmake" "git" "libfdk-aac" "swig" "luajit" "python"
             # AUR Packages
             "cef-minimal-obs=87.1.14")
optdepends=(
            "libfdk-aac: FDK AAC codec support"
            "xdg-desktop-portal-impl: PipeWire capture support"
            "libva-intel-driver: Hardware encoding"
            "libva-mesa-driver: Hardware encoding"
            "swig: Scripting"
            "luajit: Lua scripting"
            "python: Python scripting"
            "v4l2loopback-dkms: Virtual camera output"
)
provides=("obs-studio=$pkgver")
conflicts=("obs-studio" "obs-linuxbrowser")
source=(
        "obs-studio::git+https://github.com/obsproject/obs-studio.git#tag=$pkgver-rc6"
        "python_fix.patch" # https://patch-diff.githubusercontent.com/raw/obsproject/obs-studio/pull/3335.patch
        "bind_iface.patch" # Based on https://patch-diff.githubusercontent.com/raw/obsproject/obs-studio/pull/4219.patch
        "en-US.ini::https://raw.githubusercontent.com/tytan652/obs-studio/bind_iface/UI/data/locale/en-US.ini"
        # Because the patch created by github can't manage different line endings
        "add_gnome_entry.patch" # Based on https://patch-diff.githubusercontent.com/raw/obsproject/obs-studio/pull/4496.patch
        "com.obsproject.Studio.desktop::https://raw.githubusercontent.com/tytan652/obs-studio/wl_dotdesktop/UI/xdg-data/com.obsproject.Studio.desktop"
        # Because missing translation on the release one for now
        "com.obsproject.Studio.Gnome.desktop::https://raw.githubusercontent.com/tytan652/obs-studio/wl_dotdesktop/UI/xdg-data/com.obsproject.Studio.Gnome.desktop"
        # Because adding file with a patch is not a good idea
        "obs-browser::git+https://github.com/obsproject/obs-browser.git"
        "obs-vst::git+https://github.com/obsproject/obs-vst.git#commit=cca219fa3613dbc65de676ab7ba29e76865fa6f8"
)
sha256sums=(
        "SKIP"
        "430d7d0a7e1006c1f6309ad7d4912033dadd542b641f9d41259a5bad568379c9"
        "a43f2ad974104888ef36eef49b3e60dc26f7cfc0f48300726c861978ae5ae3ea"
        "1d308c7d37e9a1202aae6cd51761a409ad93c33742b8ba2e60cf6cda473658ee"
        "200868bb9550bff6355b2c9853e568a12f3aab331a9049473e246fe2dbc08900"
        "eeb55870cc0f42c45ca714d49d6c865c36a67c34dc9a29504ace15736a110deb"
        "70557ca1ea2d1ec841cefe60b7d70ab6aed0e3b518dae9b9720f32a69125474d"
        "SKIP"
        "SKIP"
)

prepare() {
  cd "$srcdir/obs-studio"
  git config submodule.plugins/obs-vst.url $srcdir/obs-vst
  git config submodule.plugins/obs-browser.url $srcdir/obs-browser
  git submodule update

  # libobs/util: Fix loading Python binary modules on *nix (https://github.com/obsproject/obs-studio/pull/3335)
  patch -Np1 < "$srcdir/python_fix.patch"
  # Add network interface binding for RTMP on Linux (https://github.com/obsproject/obs-studio/pull/4219)
  patch -Np1 < "$srcdir/bind_iface.patch"
  cp "$srcdir/en-US.ini" "$srcdir/obs-studio"/UI/data/locale/en-US.ini
  # xdg-data: Add a custom desktop entry for Gnome Shell (https://github.com/obsproject/obs-studio/pull/4496)
  patch -Np1 < "$srcdir/add_gnome_entry.patch"
  cp "$srcdir/com.obsproject.Studio.desktop" "$srcdir/obs-studio"/UI/xdg-data/com.obsproject.Studio.desktop
  cp "$srcdir/com.obsproject.Studio.Gnome.desktop" "$srcdir/obs-studio"/UI/xdg-data/com.obsproject.Studio.Gnome.desktop
}

build() {
  cd obs-studio
  mkdir -p build; cd build

  cmake \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=lib \
    -DBUILD_BROWSER=ON \
    -DCEF_ROOT_DIR=/opt/cef-obs \
    -DOBS_VERSION_OVERRIDE="$pkgver-tytan652-$pkgrel" ..

  make
}

package() {
  cd obs-studio/build

  make install DESTDIR="$pkgdir"
}

# vim: ts=2:sw=2:expandtab

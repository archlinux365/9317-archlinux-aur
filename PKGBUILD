# $Id: PKGBUILD 241722 2015-07-03 00:28:23Z foutrelis $
# Maintainer : Ionut Biru <ibiru@archlinux.org>
# Contributor: Jakub Schmidtke <sjakub@gmail.com>

pkgname=firefox-ubuntu
pkgver=40.0.2
pkgrel=1
pkgdesc="Standalone web browser from mozilla.org with global menu integration"
arch=('i686' 'x86_64')
license=('MPL' 'GPL' 'LGPL')
url="https://www.mozilla.org/firefox/"
depends=('gtk2' 'mozilla-common' 'libxt' 'startup-notification' 'mime-types'
         'dbus-glib' 'alsa-lib' 'desktop-file-utils' 'hicolor-icon-theme'
         'libvpx' 'icu' 'libevent' 'nss' 'hunspell' 'sqlite')
makedepends=('unzip' 'zip' 'diffutils' 'python2' 'yasm' 'mesa' 'imake'
             'xorg-server-xvfb' 'libpulse' 'gst-plugins-base-libs'
             'inetutils')
optdepends=('networkmanager: Location detection via available WiFi networks'
            'gst-plugins-good: h.264 video'
            'gst-libav: h.264 video'
            'upower: Battery API')
replaces=("firefox")
provides=("firefox=${pkgver}")
conflicts=('firefox')
install=firefox.install
options=('!emptydirs' '!makeflags')
source=(https://ftp.mozilla.org/pub/mozilla.org/firefox/releases/$pkgver/source/firefox-$pkgver.source.tar.bz2
        mozconfig
        firefox.desktop
        firefox-install-dir.patch
        vendor.js
        firefox-fixed-loading-icon.png
        unity-menubar.patch)
sha256sums=('057dd75d6fb4fd264cd175788518d458cb7792fd905a6fa450968526305121fd'
            '4704798b46be00712a87443be8ed6184dfb5d337e8cc74dbe029c0a25a47add6'
            'c202e5e18da1eeddd2e1d81cb3436813f11e44585ca7357c4c5f1bddd4bec826'
            'd86e41d87363656ee62e12543e2f5181aadcff448e406ef3218e91865ae775cd'
            '4b50e9aec03432e21b44d18c4c97b2630bace606b033f7d556c9d3e3eb0f4fa4'
            '68e3a5b47c6d175cc95b98b069a15205f027cab83af9e075818d38610feb6213'
            '7c1028460b0ebc15b9dc54af6d7ec8d33b72b9bf095e4117558de5a525a29fc2')
#validpgpkeys=('2B90598A745E992F315E22C58AB132963A06537A')
# Google API keys (see http://www.chromium.org/developers/how-tos/api-keys)
# Note: These are for Arch Linux use ONLY. For your own distribution, please
# get your own set of keys. Feel free to contact foutrelis@archlinux.org for
# more information.
_google_api_key=AIzaSyDwr302FpOSkGRpLlUpPThNTDPbXcIn_FM
_google_default_client_id=413772536636.apps.googleusercontent.com
_google_default_client_secret=0ZChLK6AxeA3Isu96MkwqDR4

# Mozilla API keys (see https://location.services.mozilla.com/api)
# Note: These are for Arch Linux use ONLY. For your own distribution, please
# get your own set of keys. Feel free to contact heftig@archlinux.org for
# more information.
_mozilla_api_key=16674381-f021-49de-8622-3021c5942aff


prepare() {
  cd mozilla-release

  cp ../mozconfig .mozconfig
  patch -Np1 -i ../firefox-install-dir.patch

  patch -Np1 -i ../unity-menubar.patch

  echo -n "$_google_api_key" >google-api-key
  echo "ac_add_options --with-google-api-keyfile=\"$PWD/google-api-key\"" >>.mozconfig

  echo -n "$_google_default_client_id $_google_default_client_secret" >google-oauth-api-key
  echo "ac_add_options --with-google-oauth-api-keyfile=\"$PWD/google-oauth-api-key\"" >>.mozconfig

  echo -n "$_mozilla_api_key" >mozilla-api-key
  echo "ac_add_options --with-mozilla-api-keyfile=\"$PWD/mozilla-api-key\"" >>.mozconfig

  mkdir "$srcdir/path"

  # WebRTC build tries to execute "python" and expects Python 2
  ln -s /usr/bin/python2 "$srcdir/path/python"

  # configure script misdetects the preprocessor without an optimization level
  # https://bugs.archlinux.org/task/34644
  sed -i '/ac_cpp=/s/$CPPFLAGS/& -O2/' configure

  # Fix tab loading icon (doesn't work with libpng 1.6)
  # https://bugzilla.mozilla.org/show_bug.cgi?id=841734
  cp "$srcdir/firefox-fixed-loading-icon.png" \
    browser/themes/linux/tabbrowser/loading.png
}

build() {
  cd mozilla-release

  export PATH="$srcdir/path:$PATH"
  export PYTHON="/usr/bin/python2"

  # Do PGO
  xvfb-run -a -s "-extension GLX -screen 0 1280x1024x24" \
    make -f client.mk build MOZ_PGO=1
}

package() {
  cd mozilla-release
  make -f client.mk DESTDIR="$pkgdir" INSTALL_SDK= install

  install -Dm644 ../vendor.js "$pkgdir/usr/lib/firefox/browser/defaults/preferences/vendor.js"

  for i in 16 22 24 32 48 256; do
      install -Dm644 browser/branding/official/default$i.png \
        "$pkgdir/usr/share/icons/hicolor/${i}x${i}/apps/firefox.png"
  done
  install -Dm644 browser/branding/official/content/icon64.png \
    "$pkgdir/usr/share/icons/hicolor/64x64/apps/firefox.png"
  install -Dm644 browser/branding/official/mozicon128.png \
    "$pkgdir/usr/share/icons/hicolor/128x128/apps/firefox.png"
  install -Dm644 browser/branding/official/content/about-logo.png \
    "$pkgdir/usr/share/icons/hicolor/192x192/apps/firefox.png"
  install -Dm644 browser/branding/official/content/about-logo@2x.png \
    "$pkgdir/usr/share/icons/hicolor/384x384/apps/firefox.png"

  install -Dm644 ../firefox.desktop \
    "$pkgdir/usr/share/applications/firefox.desktop"

  # Use system-provided dictionaries
  rm -rf "$pkgdir"/usr/lib/firefox/{dictionaries,hyphenation}
  ln -s /usr/share/hunspell "$pkgdir/usr/lib/firefox/dictionaries"
  ln -s /usr/share/hyphen "$pkgdir/usr/lib/firefox/hyphenation"

  #workaround for now
  #https://bugzilla.mozilla.org/show_bug.cgi?id=658850
  ln -sf firefox "$pkgdir/usr/lib/firefox/firefox-bin"
}

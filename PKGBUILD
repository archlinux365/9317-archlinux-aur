# Contributor: Weng Xuetian <wengxt@gmail.com>
# Maintainer: Thaodan <theodorstormgrade@gmail.com>

# enable this if you run out of memory during linking
#_lowmem=true

# try to build with PGO
_pgo=true

pkgname=firefox-kde-opensuse
pkgver=41.0
pkgrel=2
pkgdesc="Standalone web browser from mozilla.org with OpenSUSE patch, integrate better with KDE"
arch=('i686' 'x86_64')
license=('MPL' 'GPL' 'LGPL')
url="https://build.opensuse.org/package/show/mozilla:Factory/MozillaFirefox"
depends=('gtk2' 'mozilla-common' 'libxt' 'startup-notification' 'mime-types'
         'dbus-glib' 'alsa-lib' 'desktop-file-utils' 'hicolor-icon-theme'
	 'libvpx' 'icu'  'libevent' 'nss>=3.18.1' 'nspr>=4.10.6' 'hunspell' 
	 'sqlite' 'libnotify' 'kmozillahelper')
makedepends=('unzip' 'zip' 'diffutils' 'python2' 'yasm' 'mesa' 'imake'
             'xorg-server-xvfb' 'libpulse' 'gst-plugins-base-libs' 'inetutils')
optdepends=('networkmanager: Location detection via available WiFi networks'
	    'gst-plugins-good: h.264 video'
	    'gst-libav: h.264 video')
provides=("firefox=${pkgver}")
conflicts=('firefox')
install=firefox.install
_patchrev=7aa7715fdc8f
options=('!emptydirs'  'strip' )
_patchurl=http://www.rosenauer.org/hg/mozilla/raw-file/$_patchrev
source=(https://ftp.mozilla.org/pub/mozilla.org/firefox/releases/$pkgver/source/firefox-$pkgver.source.tar.xz
        mozconfig firefox.desktop firefox-install-dir.patch vendor.js kde.js firefox-fixed-loading-icon.png
	rhbz-966424.patch
	# Firefox patchset
	$_patchurl/firefox-branded-icons.patch
	$_patchurl/firefox-kde.patch
	$_patchurl/firefox-no-default-ualocale.patch
	# Gecko/toolkit patchset
	$_patchurl/mozilla-kde.patch
	$_patchurl/mozilla-language.patch
	$_patchurl/mozilla-nongnome-proxies.patch
	$_patchurl/toolkit-download-folder.patch
	unity-menubar.patch
	add_missing_pgo_rule.patch
        pgo_fix_missing_kdejs.patch 
)

_google_api_key=AIzaSyDwr302FpOSkGRpLlUpPThNTDPbXcIn_FM

prepare() {
  cd mozilla-release

  cp "$srcdir/mozconfig" .mozconfig

  patch -Np1 -i "$srcdir/firefox-install-dir.patch"
  echo -n "$_google_api_key" > google-api-key

  # https://bugs.archlinux.org/task/41689
  patch -Np1 -i "$srcdir/rhbz-966424.patch"

  msg "Patching for KDE"
  patch -Np1 -i "$srcdir/toolkit-download-folder.patch"
  patch -Np1 -i "$srcdir/mozilla-nongnome-proxies.patch"
  patch -Np1 -i "$srcdir/mozilla-kde.patch"
  patch -Np1 -i "$srcdir/mozilla-language.patch"

  patch -Np1 -i "$srcdir/firefox-kde.patch"
  patch -Np1 -i "$srcdir/firefox-no-default-ualocale.patch"
  patch -Np1 -i "$srcdir/firefox-branded-icons.patch"
  # add globalmenu support
  patch -Np1 -i "$srcdir/unity-menubar.patch"

  # add missing rule for pgo builds
  patch -Np1 -i "$srcdir"/add_missing_pgo_rule.patch

  # add missing file Makefile for pgo builds
  patch -Np1 -i "$srcdir"/pgo_fix_missing_kdejs.patch
  
  # configure script misdetects the preprocessor without an optimization level
  # https://bugs.archlinux.org/task/34644
  sed -i '/ac_cpp=/s/$CPPFLAGS/& -O2/' configure

  # WebRTC build tries to execute "python" and expects Python 2
  mkdir -p "$srcdir/path"
  ln -sf /usr/bin/python2 "$srcdir/path/python"

  # Fix tab loading icon (flickers with libpng 1.6)
  # https://bugzilla.mozilla.org/show_bug.cgi?id=841734
  # TODO: Remove this; Firefox 34 might use CSS animations for the loading icon
  # https://bugzilla.mozilla.org/show_bug.cgi?id=759252
  cp "$srcdir/firefox-fixed-loading-icon.png" \
    browser/themes/linux/tabbrowser/loading.png
}

build() {

  cd mozilla-release

  export PATH="$srcdir/path:$PATH"
  export LDFLAGS="$LDFLAGS -Wl,-rpath,/usr/lib/firefox"
  export PYTHON="/usr/bin/python2"
  export CPPFLAGS="$CPPFLAGS -mno-avx"

  if [[ -n $_lowmem || $CARCH == i686 ]]; then
    LDFLAGS+=" -Wl,--no-keep-memory"
  fi

  if [[ -n $_pgo ]]; then
    # Do PGO
    xvfb-run -a -s "-extension GLX -screen 0 1280x1024x24" \
      make -f client.mk build MOZ_PGO=1
  else
    make -f client.mk build
  fi
}

package() {
  cd mozilla-release

  [[ "$CARCH" == "i686" ]] && cp "$srcdir/kde.js" obj-i686-pc-linux-gnu/dist/bin/defaults/pref
  [[ "$CARCH" == "x86_64" ]] && cp "$srcdir/kde.js" obj-x86_64-unknown-linux-gnu/dist/bin/defaults/pref

  make -f client.mk DESTDIR="$pkgdir" INSTALL_SDK= install

  install -Dm644 "$srcdir/vendor.js" "$pkgdir/usr/lib/firefox/browser/defaults/preferences/vendor.js"
  install -Dm644 "$srcdir/kde.js" "$pkgdir/usr/lib/firefox/browser/defaults/preferences/kde.js"

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

  install -Dm644 "$srcdir/firefox.desktop" "$pkgdir/usr/share/applications/firefox.desktop"

  # Use system-provided dictionaries
  rm -rf "$pkgdir"/usr/lib/firefox/{dictionaries,hyphenation}
  ln -s /usr/share/hunspell "$pkgdir/usr/lib/firefox/dictionaries"
  ln -s /usr/share/hyphen "$pkgdir/usr/lib/firefox/hyphenation"

  #workaround for now
  #https://bugzilla.mozilla.org/show_bug.cgi?id=658850
  ln -sf firefox "$pkgdir/usr/lib/firefox/firefox-bin"
}

sha256sums=('18abb95e93770ab1cc0794349125aacf073eb04fd8b8a93c7a58312c94bf16fd'
            'ca462f70ab6201e01811283c58767baf87b3eae6a1a6fd638af8462f27e756be'
            'c202e5e18da1eeddd2e1d81cb3436813f11e44585ca7357c4c5f1bddd4bec826'
            'd86e41d87363656ee62e12543e2f5181aadcff448e406ef3218e91865ae775cd'
            '4b50e9aec03432e21b44d18c4c97b2630bace606b033f7d556c9d3e3eb0f4fa4'
            'b8cc5f35ec35fc96ac5c5a2477b36722e373dbb57eba87eb5ad1276e4df7236d'
            '68e3a5b47c6d175cc95b98b069a15205f027cab83af9e075818d38610feb6213'
            '746cb474c5a2c26fc474256e430e035e604b71b27df1003d4af85018fa263f4a'
            '72abd31e89a41cddbd8165b0b9555465184c52c426e0998c9cb7786af94b5532'
            'fd063e2db91b034a9a985238299b4d99751deb4910480e13e3bde5edb4633d1f'
            '02e92f84dd31ed079be3e67509cf23d0d351e06bb690fcc091c904d906d2d690'
            'dc5b64b912e81976e7e431171f3e5d142f15924a83985b1fe93d399d1e1e4756'
            'ce1b7a5bb217c31590bce30653aea5139b6401a01eda7bded7fd2f83a23d397b'
            'e8289ea4c1f8191e1e23661312ceee2128b8e790501b9a589d0d7bfc4384553f'
            'a87332e4baff50fad86b5a5b7d59076a09725f89113b8fd86dbe28efda103882'
            '7c1028460b0ebc15b9dc54af6d7ec8d33b72b9bf095e4117558de5a525a29fc2'
            'f9067f62a25a7a77276e15f91cc9e7ba6576315345cfc6347b1b2e884becdb0c'
            '2c9c97bff07cc71b3f6d35f3edfaddaf8180a1f533ee4682adf18a8f86d29264')

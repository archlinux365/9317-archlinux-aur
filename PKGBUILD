# Maintainer: dr460nf1r3 <dr460nf1r3 at garudalinux dot org>
# Contributor: torvic9 AT mailbox DOT org
# Contributor: lsf

pkgname=firedragon
_pkgname=FireDragon
pkgver=100.0.2
pkgrel=2
pkgdesc="Librewolf fork build using custom branding, settings & KDE patches by OpenSUSE"
arch=(x86_64 x86_64_v3 aarch64)
backup=('usr/lib/firedragon/firedragon.cfg'
        'usr/lib/firedragon/distribution/policies.json')
license=(MPL GPL LGPL)
url=https://gitlab.com/dr460nf1r3/settings/
depends=(gtk3 libxt mime-types dbus-glib nss ttf-font libpulse ffmpeg kfiredragonhelper)
makedepends=(unzip zip diffutils yasm mesa imake inetutils xorg-server-xvfb
             autoconf2.13 rust clang llvm jack nodejs cbindgen nasm
             python-setuptools python-zstandard git binutils lld dump_syms
             wasi-compiler-rt wasi-libc wasi-libc++ wasi-libc++abi pciutils) # pciutils: only to avoid some PGO warning
optdepends=('firejail-git: Sandboxing the browser using the included profiles'
            'profile-sync-daemon: Load the browser profile into RAM'
            'whoogle: Searching the web using a locally running Whoogle instance'
            'searx: Searching the web using a locally running searX instance'
            'networkmanager: Location detection via available WiFi networks'
            'libnotify: Notification integration'
            'pulseaudio: Audio support'
            'speech-dispatcher: Text-to-Speech'
            'hunspell-en_US: Spell checking, American English'
            'libappindicator-gtk3: Global menu support for GTK apps'
            'appmenu-gtk-module-git: Appmenu for GTK only'
            'plasma5-applets-window-appmenu: Appmenu for Plasma only')
backup=('usr/lib/librewolf/librewolf.cfg'
        'usr/lib/librewolf/distribution/policies.json')
options=(!emptydirs !makeflags !strip !lto !debug)
install=$pkgname.install
source=(https://archive.mozilla.org/pub/firefox/releases/"$pkgver"/source/firefox-"$pkgver".source.tar.xz{,.asc}
        "$pkgname.desktop"
        "git+https://gitlab.com/dr460nf1r3/common.git"
        "git+https://gitlab.com/dr460nf1r3/settings.git"
        "librewolf-source::git+https://gitlab.com/librewolf-community/browser/source.git"
        "librewolf-settings::git+https://gitlab.com/librewolf-community/settings.git")
# source_aarch64=()
sha256sums=('dc109861204f6938fd8f147af89a694eb516f3d4bb64ce3f0116452d654a8417'
            'SKIP'
            '158152bdb9ef6a83bad62ae03a3d9bc8ae693b34926e53cc8c4de07df20ab22d'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP')
# sha256sums_aarch64=()
validpgpkeys=('14F26682D0916CDD81E37B6D61B7B526D98F0353') # Mozilla Software Releases <release@mozilla.com>

# change this to false if you do not want to run a PGO build for aarch64 as well
_build_profiled_aarch64=true

prepare() {
  mkdir -p mozbuild
  cd firefox-"$pkgver"

  local _patches_dir
  _patches_dir="${srcdir}/common/patches"

  local _librewolf_patches_dir
  _librewolf_patches_dir="${srcdir}/librewolf-source/patches"

  # Prepare patches, then return to the source directory
  pushd "${_patches_dir}" && sh "${srcdir}/common/rebrand.sh"
  popd

  cat >../mozconfig <<END
ac_add_options --enable-application=browser
mk_add_options MOZ_OBJDIR=${PWD@Q}/obj

# This supposedly speeds up compilation (We test through dogfooding anyway)
ac_add_options --disable-tests
ac_add_options --disable-debug

# TODO: use source/assets/moczonfig in the future
# NOTE: let us use it for one last build, otherwise, there might be some conflicts
mk_add_options MOZ_CRASHREPORTER=0
mk_add_options MOZ_DATA_REPORTING=0
mk_add_options MOZ_SERVICES_HEALTHREPORT=0
mk_add_options MOZ_TELEMETRY_REPORTING=0

ac_add_options --prefix=/usr
ac_add_options --enable-release
ac_add_options --enable-hardening
ac_add_options --enable-rust-simd
ac_add_options --enable-linker=lld
ac_add_options --disable-bootstrap

export CC='clang'
export CXX='clang++'

# Branding
ac_add_options --enable-update-channel=release
ac_add_options --with-app-name=${pkgname}

# ac_add_options --with-app-basename=${_pkgname}

ac_add_options --with-branding=browser/branding/${pkgname}
# ac_add_options --with-distribution-id=org.garudalinux
ac_add_options --with-unsigned-addon-scopes=app,system
ac_add_options --allow-addon-sideload
export MOZ_REQUIRE_SIGNING=
# export MOZ_APP_REMOTINGNAME=${pkgname//-/}

# System libraries
ac_add_options --with-system-nspr
ac_add_options --with-system-nss

# Features
ac_add_options --enable-alsa
ac_add_options --enable-jack
ac_add_options --disable-crashreporter
ac_add_options --disable-updater

# options for ci / weaker build systems
# mk_add_options MOZ_MAKE_FLAGS="-j4"
# ac_add_options --enable-linker=gold

# wasi
ac_add_options --with-wasi-sysroot=/usr/share/wasi-sysroot
END

if [[ $CARCH == 'aarch64' ]]; then
  cat >>../mozconfig <<END
# taken from manjaro build:
ac_add_options --enable-optimize="-g0 -O2"
END

  export MOZ_DEBUG_FLAGS=" "
  export CFLAGS+=" -g0"
  export CXXFLAGS+=" -g0"
  export RUSTFLAGS="-Cdebuginfo=0"

  # we should have more than enough RAM on the CI spot instances.
  # ...or maybe not?
  export LDFLAGS+=" -Wl,--no-keep-memory"
  # patch -Np1 -i "${_librewolf_patches_dir}"/arm.patch # not required anymore?
  # patch -Np1 -i ../${pkgver}-${pkgrel}_build-arm-libopus.patch

else

  cat >>../mozconfig <<END
# probably not needed, enabled by default?
ac_add_options --enable-optimize

# Arch upstream has it in their PKGBUILD, ALARM does not for aarch64:
ac_add_options --disable-elf-hack

# might help with failing x86_64 builds?
export LDFLAGS+=" -Wl,--no-keep-memory"
END
fi

  # upstream patches from gentoo

  # pgo improvements
  patch -Np1 -i "${_patches_dir}"/gentoo/0018-bmo-1516081-Disable-watchdog-during-PGO-builds.patch

  # LibreWolf

  # Remove some pre-installed addons that might be questionable
  patch -Np1 -i "${_librewolf_patches_dir}"/remove_addons.patch

  # Debian patch to enable global menubar
  # disabled for the default build, as it seems to cause issues in some configurations
  # 2022-01-21: re-enabled because it seems to not mess things up anymore nowadays?
  patch -Np1 -i "${_librewolf_patches_dir}"/unity-menubar.patch

  # KDE menu
  # patch -Np1 -i "${_librewolf_patches_dir}"/mozilla-kde.patch
  # custom patch that does not conflict with the unity patch
  patch -Np1 -i "${_librewolf_patches_dir}"/mozilla-kde_after_unity.patch

  # Disabling Pocket
  patch -Np1 -i "${_librewolf_patches_dir}"/sed-patches/disable-pocket.patch

  # Remove Internal Plugin Certificates
  # patch -Np1 -i "${_librewolf_patches_dir}"/sed-patches/remove-internal-plugin-certs.patch
  # => breaks profiled builds since 90.0, it seems

  # allow SearchEngines option in non-ESR builds
  patch -Np1 -i "${_librewolf_patches_dir}"/sed-patches/allow-searchengines-non-esr.patch

  # remove search extensions (experimental)
  # patch -Np1 -i "${_librewolf_patches_dir}"/search-config.patch
  cp "${srcdir}/librewolf-source/assets/search-config.json" services/settings/dumps/main/search-config.json

  # stop some undesired requests (https://gitlab.com/librewolf-community/browser/common/-/issues/10)
  patch -Np1 -i "${_librewolf_patches_dir}"/sed-patches/stop-undesired-requests.patch

  # Assorted patches
  patch -Np1 -i "${_librewolf_patches_dir}"/urlbarprovider-interventions.patch

  # change some hardcoded directory strings that could lead to unnecessarily
  # created directories
  patch -Np1 -i "${_librewolf_patches_dir}"/mozilla_dirs.patch

  # somewhat experimental patch to fix bus/dbus/remoting names to io.gitlab.librewolf
  # should not break things, buuuuuuuuuut we'll see.
  patch -Np1 -i "${_librewolf_patches_dir}"/dbus_name.patch

  # allow uBlockOrigin to run in private mode by default, without user intervention.
  patch -Np1 -i "${_librewolf_patches_dir}"/allow-ubo-private-mode.patch

  # add custom uBO assets (on first launch only)
  patch -Np1 -i "${_librewolf_patches_dir}"/custom-ubo-assets-bootstrap-location.patch

  # ui patches

  # remove references to firefox from the settings UI, change text in some of the links,
  # explain that we force en-US and suggest enabling history near the session restore checkbox.
  patch -Np1 -i "${_librewolf_patches_dir}"/ui-patches/pref-naming.patch

  #
  patch -Np1 -i "${_librewolf_patches_dir}"/ui-patches/remap-links.patch

  #
  patch -Np1 -i "${_librewolf_patches_dir}"/ui-patches/hide-default-browser.patch

  # Add LibreWolf logo to Debugging Page
  patch -Np1 -i "${_librewolf_patches_dir}"/ui-patches/lw-logo-devtools.patch

  #
  patch -Np1 -i "${_librewolf_patches_dir}"/ui-patches/privacy-preferences.patch

  # remove firefox references in the urlbar, when suggesting opened tabs.
  patch -Np1 -i "${_librewolf_patches_dir}"/ui-patches/remove-branding-urlbar.patch

  # remove cfr UI elements, as they are disabled and locked already.
  patch -Np1 -i "${_librewolf_patches_dir}"/ui-patches/remove-cfrprefs.patch

  # do not display your browser is being managed by your organization in the settings.
  patch -Np1 -i "${_librewolf_patches_dir}"/ui-patches/remove-organization-policy-banner.patch

  # hide "snippets" section from the home page settings, as it was already locked.
  patch -Np1 -i "${_librewolf_patches_dir}"/ui-patches/remove-snippets-from-home.patch

  # add warning that sanitizing exceptions are bypassed by the options in History > Clear History when LibreWolf closes > Settings
  patch -Np1 -i "${_librewolf_patches_dir}"/ui-patches/sanitizing-description.patch

  # add patch to hide website appearance settings
  patch -Np1 -i "${_librewolf_patches_dir}"/ui-patches/website-appearance-ui-rfp.patch

  #
  patch -Np1 -i "${_librewolf_patches_dir}"/ui-patches/handlers.patch

  # fix telemetry removal, see https://gitlab.com/librewolf-community/browser/linux/-/merge_requests/17, for example
  patch -Np1 -i "${_librewolf_patches_dir}"/disable-data-reporting-at-compile-time.patch

  # allows hiding the password manager (from the lw pref pane) / via a pref
  patch -Np1 -i "${_librewolf_patches_dir}"/hide-passwordmgr.patch

  # Pref pane - custom FireDragon svg
  patch -Np1 -i "${_patches_dir}"/custom/librewolf-pref-pane.patch
  patch -Np1 -i "${_patches_dir}"/custom/add_firedragon_svg.patch

  rm -f "${srcdir}"/common/source_files/mozconfig
  cp -r "${srcdir}"/common/source_files/* ./
}


build() {
  cd firefox-"$pkgver"

  export MOZ_NOSPAM=1
  export MOZBUILD_STATE_PATH="$srcdir/mozbuild"
  # export MOZ_ENABLE_FULL_SYMBOLS=1
  export MACH_BUILD_PYTHON_NATIVE_PACKAGE_SOURCE=pip
  export PIP_NETWORK_INSTALL_RESTRICTED_VIRTUALENVS=mach # let us hope this is a working _new_ workaround for the pip env issues?

  # LTO needs more open files
  ulimit -n 4096

  # Do 3-tier PGO
  echo "Building instrumented browser..."

  if [[ $CARCH == 'aarch64' ]]; then

    cat >.mozconfig ../mozconfig - <<END
ac_add_options --enable-profile-generate
END

    else

    cat >.mozconfig ../mozconfig - <<END
ac_add_options --enable-profile-generate=cross
END

  fi

  ./mach build

  echo "Profiling instrumented browser..."

  ./mach package

  LLVM_PROFDATA=llvm-profdata \
    JARLOG_FILE="$PWD/jarlog" \
    xvfb-run -s "-screen 0 1920x1080x24 -nolisten local" \
    ./mach python build/pgo/profileserver.py

  stat -c "Profile data found (%s bytes)" merged.profdata
  test -s merged.profdata

  stat -c "Jar log found (%s bytes)" jarlog
  test -s jarlog

  echo "Removing instrumented browser..."
  ./mach clobber

  echo "Building optimized browser..."

  if [[ $CARCH == 'aarch64' ]]; then

    cat >.mozconfig ../mozconfig - <<END
ac_add_options --enable-lto
ac_add_options --enable-profile-use
ac_add_options --with-pgo-profile-path=${PWD@Q}/merged.profdata
ac_add_options --with-pgo-jarlog=${PWD@Q}/jarlog
END

  else

    cat >.mozconfig ../mozconfig - <<END
ac_add_options --enable-lto=cross
ac_add_options --enable-profile-use=cross
ac_add_options --with-pgo-profile-path=${PWD@Q}/merged.profdata
ac_add_options --with-pgo-jarlog=${PWD@Q}/jarlog
END

  fi

  # cat >>.mozconfig <<END
# ac_add_options --enable-linker=lld
# ac_add_options --disable-bootstrap
# END

  ./mach build

  echo "Building symbol archive..."
  ./mach buildsymbols
}

package() {
  cd firefox-"$pkgver"
  DESTDIR="$pkgdir" ./mach install

  rm "$pkgdir"/usr/lib/${pkgname}/pingsender

  install -Dvm644 "$srcdir/settings/$pkgname.psd" "$pkgdir/usr/share/psd/browsers/$pkgname"

  local vendorjs
  vendorjs="$pkgdir/usr/lib/$pkgname/browser/defaults/preferences/vendor.js"

  install -Dvm644 /dev/stdin "$vendorjs" <<END
// Use system-provided dictionaries
pref("spellchecker.dictionary_path", "/usr/share/hunspell");

// Don't disable extensions in the application directory
// done in firedragon.cfg
// pref("extensions.autoDisableScopes", 11);
END

  # cd ${srcdir}/settings
  # git checkout ${_settings_commit}
  cd ${srcdir}/firefox-"$pkgver"
  cp -r ${srcdir}/settings/* ${pkgdir}/usr/lib/${pkgname}/

  local distini="$pkgdir/usr/lib/$pkgname/distribution/distribution.ini"
  install -Dvm644 /dev/stdin "$distini" <<END

[Global]
id=garudalinux
version=1.0
about=$_pkgname for Garuda Linux

[Preferences]
app.distributor=garudalinux
app.distributor.channel=$pkgname
app.partner.garudalinux=garudalinux
END

  for i in 16 32 48 64 128; do
    install -Dvm644 browser/branding/${pkgname}/default$i.png \
      "$pkgdir/usr/share/icons/hicolor/${i}x${i}/apps/$pkgname.png"
  done
  install -Dvm644 browser/branding/${pkgname}/content/about-logo.png \
    "$pkgdir/usr/share/icons/hicolor/192x192/apps/$pkgname.png"

  # Arch upstream provides a separate svg for this. we don't have that, so let's re-use 16.png
  install -Dvm644 browser/branding/${pkgname}/default16.png \
    "$pkgdir/usr/share/icons/hicolor/symbolic/apps/$pkgname-symbolic.png"

  install -Dvm644 ../$pkgname.desktop \
    "$pkgdir/usr/share/applications/$pkgname.desktop"

  # Install a wrapper to avoid confusion about binary path
  install -Dvm755 /dev/stdin "$pkgdir/usr/bin/$pkgname" <<END
#!/bin/sh
exec /usr/lib/$pkgname/$pkgname "\$@"
END

  # Replace duplicate binary with wrapper
  # https://bugzilla.mozilla.org/show_bug.cgi?id=658850
  ln -srfv "$pkgdir/usr/bin/$pkgname" "$pkgdir/usr/lib/$pkgname/$pkgname-bin"

  # Use system certificates
  local nssckbi="$pkgdir/usr/lib/$pkgname/libnssckbi.so"
  if [[ -e $nssckbi ]]; then
    ln -srfv "$pkgdir/usr/lib/libnssckbi.so" "$nssckbi"
  fi

  # Delete unneeded things from settings repo
  rm "$pkgdir/usr/lib/firedragon/.gitignore"
  rm "$pkgdir/usr/lib/firedragon/LICENSE.txt"
  rm "$pkgdir/usr/lib/firedragon/about.png"
  rm "$pkgdir/usr/lib/firedragon/firedragon.psd"
  rm "$pkgdir/usr/lib/firedragon/home.png"
  rm "$pkgdir/usr/lib/firedragon/package.json"
  rm "$pkgdir/usr/lib/firedragon/tabliss.json"
  rm "$pkgdir/usr/lib/firedragon/yarn.lock"
}

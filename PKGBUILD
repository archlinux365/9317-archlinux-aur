# Maintainer: Pellegrino Prevete (tallero) <pellegrinoprevete@gmail.com>
# Maintainer: Jan Alexander Steffens (heftig) <heftig@archlinux.org>

# shellcheck disable=SC2034
pkgname=js102
pkgver=102.3.0
pkgrel=1
pkgdesc="JavaScript interpreter and libraries - Version 91"
arch=(x86_64)
url="https://spidermonkey.dev/"
license=(MPL)
depends=(gcc-libs readline zlib sh)
makedepends=(zip autoconf2.13 python-setuptools python-psutil rustup llvm clang lld)
checkdepends=(mercurial git)
options=(!lto debug)
_relver=${pkgver}esr
source=("https://archive.mozilla.org/pub/firefox/releases/${_relver}/source/firefox-${_relver}.source.tar.xz"{,.asc})
sha256sums=('308e23b6dcf964e342cf95fd0c8a386127371b620a489ae26e537d728341b55a'
            'SKIP')
validpgpkeys=('14F26682D0916CDD81E37B6D61B7B526D98F0353') # Mozilla Software Releases <release@mozilla.com>

# Make sure the duplication between bin and lib is found
COMPRESSZST+=(--long)

prepare() {
  # packed_simd no longer builds with 1.63.0
  rustup toolchain update --profile minimal 1.62.1
  rustup default 1.62.1

  mkdir mozbuild
  cd "firefox-${pkgver}" || exit

  cat >../mozconfig <<END
ac_add_options --enable-application=js
mk_add_options MOZ_OBJDIR=${PWD@Q}/obj

ac_add_options --prefix=/usr
ac_add_options --enable-release
ac_add_options --enable-hardening
ac_add_options --enable-optimize
ac_add_options --enable-rust-simd
ac_add_options --enable-linker=lld
ac_add_options --disable-bootstrap
ac_add_options --disable-debug
ac_add_options --disable-debug-symbols
ac_add_options --disable-jemalloc
ac_add_options --disable-strip

# System libraries
ac_add_options --with-system-zlib
ac_add_options --without-system-icu

# Features
ac_add_options --enable-readline
ac_add_options --enable-shared-js
ac_add_options --enable-tests
ac_add_options --with-intl-api
END
}

build() {
  cd "firefox-${pkgver}" || exit

  export MOZ_NOSPAM=1
  # shellcheck disable=SC2154
  export MOZBUILD_STATE_PATH="${srcdir}/mozbuild"
  export MACH_USE_SYSTEM_PYTHON=1

  # Do 3-tier PGO
  echo "Building instrumented JS..."
  cat >.mozconfig ../mozconfig - <<END
ac_add_options --enable-profile-generate=cross
END
  ./mach build

  echo "Profiling instrumented JS..."
  (
    local js="$PWD/obj/dist/bin/js"
    export LLVM_PROFILE_FILE="$PWD/js-%p-%m.profraw"

    cd js/src/octane || exit
    "$js" run.js

    cd ../../../third_party/webkit/PerformanceTests/ARES-6 || exit
    "$js" cli.js

    cd ../SunSpider/sunspider-0.9.1 || exit
    "$js" sunspider-standalone-driver.js
  )

  llvm-profdata merge -o merged.profdata -- *.profraw

  stat -c "Profile data found (%s bytes)" merged.profdata
  test -s merged.profdata

  echo "Removing instrumented JS..."
  ./mach clobber

  echo "Building optimized JS..."
  cat >.mozconfig ../mozconfig - <<END
ac_add_options --enable-lto=cross
ac_add_options --enable-profile-use=cross
ac_add_options --with-pgo-profile-path=${PWD@Q}/merged.profdata
END
  ./mach build
}

check() {
  local jstests_extra_args=(
    --format=none
    --exclude-random
    --wpt=disabled
  ) jittest_extra_args=(
    --format=none
    --timeout 300
  ) jittest_test_args=(
    basic
  )

  cd "firefox-${pkgver}/obj" || exit
  make -C js/src check-jstests check-jit-test \
    JSTESTS_EXTRA_ARGS="${jstests_extra_args[*]}" \
    JITTEST_EXTRA_ARGS="${jittest_extra_args[*]}" \
    JITTEST_TEST_ARGS="${jittest_test_args[*]}"
}

# shellcheck disable=SC2154
package() {
  cd "firefox-${pkgver}/obj" || exit
  make DESTDIR="${pkgdir}" install
  rm "$pkgdir"/usr/lib/*.ajs
  find "$pkgdir"/usr/{lib/pkgconfig,include} -type f -exec chmod -c a-x {} +
}

# vim:set sw=2 et:

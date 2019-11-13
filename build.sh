#!/bin/sh
set -e

export TMPDIR="$PWD/tmp"
mkdir -p "$TMPDIR"

if [ "$1" = debug ]; then
  out=out/Debug
  flags="$EXTRA_FLAGS
    is_debug=true
    is_component_build=true"
else
  out=out/Release
  flags="$EXTRA_FLAGS
    is_official_build=true
    use_jumbo_build=true
    exclude_unwind_tables=true
    enable_resource_whitelist_generation=false
    symbol_level=0"
fi

if which ccache >/dev/null 2>&1; then
  export CCACHE_SLOPPINESS=time_macros
  export CCACHE_BASEDIR="$PWD"
  export CCACHE_CPP2=yes
  flags="$flags"'
   cc_wrapper="ccache"'
elif [ -f "$HOME"/.cargo/bin/sccache* ]; then
  export PATH="$PATH:$HOME/.cargo/bin"
  flags="$flags"'
   cc_wrapper="sccache"'
fi

flags="$flags"'
  is_clang=true
  linux_use_bundled_binutils=false

  fatal_linker_warnings=false
  treat_warnings_as_errors=false
  use_sysroot=false

  fieldtrial_testing_like_official_build=true

  use_cups=false
  use_dbus=false
  use_gio=false
  use_platform_icu_alternatives=true
  use_gtk=false

  disable_file_support=true
  enable_websockets=false
  disable_ftp_support=true
  use_kerberos=false
  enable_mdns=false
  enable_reporting=false
  include_transport_security_state_preload_list=false
'

if [ "$(uname)" = Linux ]; then
  flags="$flags"'
    use_ozone=true
    ozone_auto_platforms=false
    ozone_platform="headless"
    ozone_platform_headless=true'
fi

# use system clang
# disable clang plugins
# build without afdo.prof
flags="$flags"'
  clang_base_path=""
  clang_use_chrome_plugins=false
  clang_use_default_sample_profile=false'

rm -rf "./$out"
mkdir -p out

python2=$(which python2 2>/dev/null || which python 2>/dev/null)
export DEPOT_TOOLS_WIN_TOOLCHAIN=0

gn gen "$out" --args="$flags" --script-executable=$python2

cp -v /usr/lib/gcc/$(gcc -dumpmachine)/$(gcc -dumpversion)/crtbeginS.o "$out"
cp -v /usr/lib/gcc/$(gcc -dumpmachine)/$(gcc -dumpversion)/crtendS.o "$out"

ninja -C "$out" naive

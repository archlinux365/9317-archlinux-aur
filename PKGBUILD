# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Contributor: Matthew McGinn <mamcgi at gmail dot com>
# Contributor: alicewww <almw at protonmail dot com>
# Contributor: David Birks <david at tellus dot space>
# Contributor: Jeff Henson <jeff at henson dot io>
# Contributor: Linus Färnstrand <linus at mullvad dot net>
# Contributor: Emīls Piņķis <emil at mullvad dot net>
# Contributor: Andrej Mihajlov <and at mullvad dot net>
pkgname=mullvad-vpn
pkgver=2022.5
pkgrel=2
pkgdesc="The Mullvad VPN client app for desktop"
arch=('x86_64' 'aarch64')
url="https://www.mullvad.net"
license=('GPL3')
depends=('iputils' 'libnotify' 'libappindicator-gtk3' 'nss')
makedepends=('cargo' 'git' 'go' 'nodejs>=16' 'npm>=8.3' 'libxcrypt-compat')
options=('!lto')
install="$pkgname.install"
_tag=5bcd2533633d76b1deaf5875b24a2c83bec6fc49 # tags/2022.5^0
_commit=f6dca66645c82501a330416ad39c7e63bcdae57d
source=("git+https://github.com/mullvad/mullvadvpn-app.git#commit=${_tag}?signed"
        "git+https://github.com/mullvad/mullvadvpn-app-binaries.git#commit=${_commit}?signed"
        'no-rpm.diff'        
        "$pkgname.sh")
sha256sums=('SKIP'
            'SKIP'
            'ea35edffea2cbbb05586abce19581fdd9f133801ed47e6af30fa64a29c5cf116'
            'a59c29f07b4eab9af56f0e8be42bae0d83726f5185e88de0c5a48f4098c3c0a4')
validpgpkeys=('EA0A77BF9E115615FC3BD8BC7653B940E494FE87' # Linus Färnstrand (code signing key) <linus@mullvad.net>
              '8339C7D2942EB854E3F27CE5AEE9DECFD582E984' # David Lönnhager (code signing) <david.l@mullvad.net>
              '4B986EF5222BA1B810230C602F391DE6B00D619C') # Oskar Nyberg (code signing) <oskar@mullvad.net>

pkgver() {
  cd "$srcdir/mullvadvpn-app"
  git describe --tags | sed 's/-/./g'
}

prepare() {
  cd "$srcdir/mullvadvpn-app"
  git submodule init
  git config submodule.dist-assets/binaries.url "$srcdir/mullvadvpn-app-binaries"
  git -c protocol.file.allow=always submodule update

  # Disable building of rpm
  patch --strip=1 gui/tasks/distribution.js < ../no-rpm.diff

  export RUSTUP_TOOLCHAIN=stable
  echo "Removing old Rust build artifacts"
  cargo clean

  cargo fetch --locked --target "$CARCH-unknown-linux-gnu"

  pushd wireguard/libwg
  export GOPATH="$srcdir/gopath"
  mkdir -p "../../build/lib/$CARCH-unknown-linux-gnu"
  go mod download -x
  popd

  pushd gui
  echo "Installing JavaScript dependencies..."
  export npm_config_cache="$srcdir/npm_cache"
  npm ci
  popd
}

build() {
  cd "$srcdir/mullvadvpn-app"
  local RUSTC_VERSION=$(rustc --version)
  local PRODUCT_VERSION=$(cd gui/; node -p "require('./package.json').version" | sed -Ee 's/\.0//g')

  echo "Building Mullvad VPN ${PRODUCT_VERSION}..."

  echo "Building wireguard-go..."
  pushd wireguard/libwg
  export GOPATH="$srcdir/gopath"
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"
  go build -v -o "../../build/lib/$CARCH-unknown-linux-gnu"/libwg.a -buildmode c-archive
  popd

  # Clean module cache for makepkg -C
  go clean -modcache

  echo "Building Rust code in release mode using ${RUSTC_VERSION}..."
  export RUSTUP_TOOLCHAIN=stable
  export CARGO_TARGET_DIR=target
  cargo build --frozen --release

  echo "Preparing for packaging Mullvad VPN ${PRODUCT_VERSION}..."
  mkdir -p dist-assets/shell-completions
  for sh in bash zsh fish; do
    echo "Generating shell completion script for ${sh}..."
    cargo run --bin mullvad --frozen --release -- shell-completions ${sh} \
      dist-assets/shell-completions/
  done

  echo "Updating relays.json..."
  cargo run --bin relay_list --frozen --release > dist-assets/relays.json

  binaries=(
    mullvad-daemon
    mullvad
    mullvad-problem-report
    libtalpid_openvpn_plugin.so
    mullvad-setup
    mullvad-exclude
  )
  for binary in ${binaries[*]}; do
    cp target/release/${binary} dist-assets/${binary}
  done

  # Build Electron GUI
  pushd gui
  echo "Packing Mullvad VPN ${PRODUCT_VERSION} artifact(s)..."
  export npm_config_cache="$srcdir/npm_cache"
  npm run pack:linux
  popd
}

#check() {
#  cd "$srcdir/mullvadvpn-app"
#  export RUSTUP_TOOLCHAIN=stable
#  cargo test --frozen
#
#  cd gui
#  npm test
#}

package() {
  cd "$srcdir/mullvadvpn-app"

  # Install main files
  install -d "$pkgdir/opt/Mullvad VPN"
  cp -r dist/linux-unpacked/* "$pkgdir/opt/Mullvad VPN/"

  if [ "$CARCH" == "aarch64" ]; then
    cp -r dist/linux-arm64-unpacked/* "$pkgdir/opt/Mullvad VPN/"
  else
    cp -r dist/linux-unpacked/* "$pkgdir/opt/Mullvad VPN/"
  fi

  chmod 4755 "$pkgdir/opt/Mullvad VPN/chrome-sandbox"

  # Install services
  install -Dm644 dist-assets/linux/mullvad{-daemon,-early-boot-blocking}.service -t \
    "$pkgdir/usr/lib/systemd/system/"

  # Install binaries
  install -Dm755 dist-assets/{mullvad,mullvad{-daemon,-exclude}} -t "$pkgdir/usr/bin/"

  # Link to the problem report binary
  ln -s "/opt/Mullvad VPN/resources/mullvad-problem-report" "$pkgdir/usr/bin/"

  # Link to the GUI binary
  install -m755 "$srcdir/$pkgname.sh" "$pkgdir/usr/bin/$pkgname"

  # Install completions
  install -Dm644 dist-assets/shell-completions/mullvad.bash \
    "$pkgdir/usr/share/bash-completion/completions/mullvad"
  install -Dm644 dist-assets/shell-completions/_mullvad -t \
    "$pkgdir/usr/share/zsh/site-functions/"
  install -Dm644 dist-assets/shell-completions/mullvad.fish -t \
    "$pkgdir/usr/share/fish/vendor_completions.d/"

  # Install desktop file & icons from deb
  cd dist
  ar x *.deb
  bsdtar -xf data.tar.xz
  install -Dm644 "usr/share/applications/$pkgname.desktop" -t \
    "$pkgdir/usr/share/applications/"

  for icon_size in 16 32 48 64 128 256 512 1024; do
    icons_dir=usr/share/icons/hicolor/${icon_size}x${icon_size}/apps
    install -Dm644 ${icons_dir}/$pkgname.png -t "$pkgdir/${icons_dir}/"
  done
}

# Maintainer: lsf
# Contributor: Daniel Haß <aur@hass.onl>
pkgname=standardnotes-desktop
_pkgname=desktop
pkgver=3.9.4
pkgrel=1
pkgdesc="A standard notes app with an un-standard focus on longevity, portability, and privacy."
arch=('x86_64' 'aarch64')
url="https://standardnotes.org/"
license=('GPL3')
conflicts=('sn-bin')
depends=('electron13')
makedepends=('npm' 'node-gyp' 'git' 'jq' 'python2' 'yarn' 'nvm')
_nodeversion=14.18.1
source=("git://github.com/standardnotes/desktop.git"
        "git://github.com/standardnotes/web.git#commit=716e1cf46518f8f3a6c4445e72d746722c16edec"
        'webpack.patch'
        'standardnotes-desktop.desktop'
        'standardnotes-desktop.js')
sha256sums=('SKIP'
            'SKIP'
            'a0b2b5e95750b5c58fd65bbe7e9797b8560d1fa61b5d0164e160cdd74ecc883d'
            '8045c3baa6a3f5e0a20387913599eafb2d8c6e843745f38f34daea1ab44e73e7'
            '5afd4ed47fe7e41574d6c5817271b5a15da744fa6f727dd7afd5f13e1298d551')

prepare() {
  cd $_pkgname
  export npm_config_cache="${srcdir}/npm_cache"
  _ensure_local_nvm
  nvm install ${_nodeversion}

  git checkout v$pkgver
  git submodule init
  git config submodule.web.url $srcdir/web
  git submodule update

  cp .env.sample .env

  # Set system Electron version for ABI compatibility
  sed -r 's#("electron": ").*"#\1'$(cat /usr/lib/electron13/version)'"#' -i package.json

  # workaround for TS compilation failing due to a "might be null" error.
  # this might be an ugly thing to just ignore, but, well, uh... (electron >=11/12 needs this)
  patch -Np1 -i ${srcdir}/webpack.patch

  if [[ $CARCH == 'aarch64' ]]; then
    export npm_config_target_arch=arm64
    export npm_config_arch=arm64
    export npm_config_host_arch=arm64
    # export SKIP_SASS_BINARY_DOWNLOAD_FOR_CI=1
    # export SASS_FORCE_BUILD=1
  fi
  yarn --cwd ./web install
  if [[ $CARCH == 'aarch64' ]]; then
    pushd web
    npm rebuild
    popd
  fi
  yarn --cwd ./web run bundle:desktop
  if [[ $CARCH == 'aarch64' ]]; then
    sed -r 's#("keytar": ").*"#\17.7.0"#' -i app/package.json
    sed -r 's#("electron-builder": ").*"#\122.11.1"#' -i package.json
  fi
  yarn --cwd ./app install
  yarn install
  yarn run webpack --config webpack.prod.js
}

build() {
  cd $srcdir/$_pkgname/
  export npm_config_cache="${srcdir}/npm_cache"
  _ensure_local_nvm
  nvm use ${_nodeversion}

  if [[ $CARCH == 'aarch64' ]]; then
    export npm_config_target_arch=arm64
    export npm_config_arch=arm64
    export npm_config_host_arch=arm64
  fi

  _electron_dist=/usr/lib/electron13
  _electron_ver=$(cat ${_electron_dist}/version)
  case "$CARCH" in
          aarch64)
                  _electronbuilderarch='arm64'
          ;;
          *)
                  _electronbuilderarch='x64'
          ;;
  esac

  yarn run electron-builder --linux --${_electronbuilderrarch} --config.electronDist=${_electron_dist} --config.electronVersion=${_electron_ver} --config.linux.target=dir --publish=never
}


package() {
  function remove_srcdir_ref {
    local tmppackage="$(mktemp)"
    jq '.|=with_entries(select(.key|test("_.+")|not))' "$1" > "$tmppackage"
    mv "$tmppackage" "$1"
    chmod 644 "$1"
  }

  mkdir -p $pkgdir/opt/$pkgname
  cp -r $srcdir/$_pkgname/app $pkgdir/opt/$pkgname/

  # Remove $srcdir references - https://wiki.archlinux.org/index.php/Node.js_package_guidelines
  for i in $(find "$pkgdir" -name package.json); do
    remove_srcdir_ref $i
  done

  install -D -m644 $pkgname.desktop "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  install -D -m644 $srcdir/$_pkgname/build/icon/Icon-512x512.png "${pkgdir}/usr/share/icons/standard-notes.png"
  install -D -m655 $pkgname.js "${pkgdir}/usr/bin/${pkgname}"
}

# https://wiki.archlinux.org/title/Node.js_package_guidelines#Using_nvm
_ensure_local_nvm() {
    # let's be sure we are starting clean
    which nvm >/dev/null 2>&1 && nvm deactivate && nvm unload
    export NVM_DIR="${srcdir}/.nvm"

    # The init script returns 3 if version specified
    # in ./.nvrc is not (yet) installed in $NVM_DIR
    # but nvm itself still gets loaded ok
    source /usr/share/nvm/init-nvm.sh || [[ $? != 1 ]]
}

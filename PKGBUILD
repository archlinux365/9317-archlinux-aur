# Maintainer: leonekmi <usingarchbtw@leonekmi.fr>
pkgname=karaokemugen
pkgver=5.1.23
pkgrel=2
pkgdesc="Karaoke playlist manager/player app used in parties or events."
arch=('x86_64')
url="https://mugen.karaokes.moe/"
license=('MIT')
groups=()
depends=('mpv' 'ffmpeg' 'postgresql' 'electron13')
makedepends=('git' 'npm' 'typescript' 'yarn' 'nodejs>=12' 'python2' 'patch')
optdepends=('sudo: for using karaokemugen-install script')
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=${pkgname}.install
source=('karaokemugen::git+https://lab.shelter.moe/karaokemugen/karaokemugen-app.git#tag=v5.1.23'
        'karaokemugen-lib::git+https://lab.shelter.moe/karaokemugen/lib.git'
        'karaokemugen-avatars::git+https://lab.shelter.moe/karaokemugen/medias/guest-avatars.git'
        'install.sh'
        'run.sh'
        'icon256.png'
        'karaokemugen.desktop')
noextract=()
md5sums=('SKIP'
         'SKIP'
         'SKIP'
         '8373c231fb432d6efef66e3ecf94ff0f'
         '19475472f2046c57de4b627ac90982df'
         '5e9a33a42fef7572b7e0fa504c586f32'
         '10561eed906a5efeed427f90501b4f49')

prepare() {
    cd "$srcdir/${pkgname}"
    git submodule init
    git config submodule.src/lib.url $srcdir/${pkgname}-lib
    git config submodule.assets/guestAvatars.url $srcdir/${pkgname}-avatars
    git submodule update
}

build() {
    cd "$srcdir/${pkgname}"

    # Prepare dependencies
    export HOME="$srcdir/$pkgname-home"
    export XDG_CACHE_HOME="$srcdir/$pkgname-cache"
    export npm_config_devdir="$srcdir/$pkgname-npm-dev"
    export npm_config_cache="$srcdir/$pkgname-npm-cache"
    mkdir -p $HOME $XDG_CACHE_HOME $npm_config_devdir $npm_config_cache
    yarn install --ignore-scripts --frozen-lockfile
    yarn add --dev electron-builder
    yarn installkmfrontend
    # Build and package with electron-builder
    export NODE_ENV='production'
    electronVer=$(electron11 --version | tail -c +2)
    yarn build
    yarn buildkmfrontend
    yarn electron-builder --linux --x64 -c.electronDist=/usr/lib/electron11 -c.electronVersion=$electronVer --dir
}

package() {
    cd "$srcdir/${pkgname}"

    # Application itself
    install -dm755 "$pkgdir/usr/lib/${pkgname}"
    cp -dr --no-preserve=ownership packages/linux-unpacked/resources/* "$pkgdir/usr/lib/${pkgname}/"
    chmod -R 755 "$pkgdir/usr/lib/${pkgname}/"

    # License
    install -dm755 "$pkgdir/usr/share/licenses/${pkgname}"
    install -m644 LICENSE.md "$pkgdir/usr/share/licenses/${pkgname}/LICENSE"

    # Runtimes
    install -dm755 "$pkgdir/usr/bin/"
    install -m755 "$srcdir/run.sh" "$pkgdir/usr/bin/karaokemugen"
    install -m755 "$srcdir/install.sh" "$pkgdir/usr/bin/karaokemugen-install"

    # .desktop entry
    install -dm755 "$pkgdir/usr/share/pixmaps/"
    install -dm755 "$pkgdir/usr/share/applications/"
    install -m644 "$srcdir/icon256.png" "$pkgdir/usr/share/pixmaps/${pkgname}.png"
    install -m644 "$srcdir/${pkgname}.desktop" "$pkgdir/usr/share/applications/${pkgname}.desktop"
}

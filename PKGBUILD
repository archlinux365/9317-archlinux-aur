# Contributor: Jaroslav Lichtblau <dragonlord@aur.archlinux.org>
# Contributor: Christoph Zeiler <archNOSPAM_at_moonblade.dot.org>
# Contributor: Ryon Sherman <ryon.sherman@gmail.com>
# Contributor: Dardo Marasca <gefarion@gmail.com>
# Contributor: Kevin Kyzer <kev@k3v.in>
# Contributor: Xabre <xabre @archlinux.info>
pkgname=mudlet
pkgver=3.10.0
pkgrel=1
pkgdesc="A modern MUD client with a graphical user inteface and built in Lua scripting"
arch=('i686' 'x86_64')
url="http://www.mudlet.org"
license=('GPL')
depends=('yajl' 'qt5-base' 'qt5-multimedia' 'hunspell' 'libzip' 'glu' 'lua51' \
         'lua51-filesystem' 'luazip5.1' 'lua51-sql-sqlite' 'lrexlib-pcre5.1'  \
         'qt5-gamepad' 'lua51-utf8' 'lua51-lcf' 'ttf-font' 'pugixml')
makedepends=('boost' 'qt5-tools')
conflicts=('mudlet-dev' 'mudlet-git' 'mudlet-deb')
source=("http://www.mudlet.org/download/Mudlet-${pkgver}.tar.xz")
sha256sums=('b9361b43e522cae684985e319bc8f84c48051675acba895bd814baac46604a67')

prepare() {
    cd "$srcdir/src"
    sed -i 's,QString path = "../src/mudlet-lua/lua/LuaGlobal.lua";,QString path = "/usr/share/mudlet/lua/LuaGlobal.lua";,' TLuaInterpreter.cpp
    sed -i 's;"mudlet.app/Contents/Resources/mudlet-lua/lua/";"mudlet.app/Contents/Resources/mudlet-lua/lua/", "/usr/share/mudlet/lua/";' mudlet-lua/lua/LuaGlobal.lua
}

build() {
    cd "$srcdir/src"
    export WITH_FONTS=NO 
##  export WITH_UPDATER=NO  ## Updater is enabled again until disabling it stops creating isues with compiltion
    qmake-qt5 PREFIX=/usr
    make
}

package() {
    cd $srcdir/src
    mkdir -p ${pkgdir}/usr/bin
    mkdir -p ${pkgdir}/usr/share/mudlet/lua/geyser
    mkdir -p ${pkgdir}/usr/share/applications
    mkdir -p ${pkgdir}/usr/share/pixmaps

    install -m 755 mudlet ${pkgdir}/usr/bin/mudlet
    install -m 644 mudlet-lua/lua/*.lua ${pkgdir}/usr/share/mudlet/lua
    install -m 644 mudlet-lua/lua/geyser/* ${pkgdir}/usr/share/mudlet/lua/geyser
    install -m 644 ../mudlet.desktop ${pkgdir}/usr/share/applications
    install -m 644 ../mudlet.png ${pkgdir}/usr/share/pixmaps
}

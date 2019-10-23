# Maintainer: Chris Billington <chrisjbillington@gmail.com>
# Contributor: Philip Goto <philip.goto@gmail.com>
# Contributor: drakkan <nicola.murino at gmail dot com>

pkgbase=yaru-git
pkgname=(yaru-sound-theme-git
         yaru-gtk-theme-git
         yaru-gnome-shell-theme-git
         yaru-icon-theme-git
         yaru-session-git)
pkgver=19.10.4.r23.gab1bd973
pkgrel=1
pkgdesc="Yaru default ubuntu theme"
arch=(any)
url="https://github.com/ubuntu/yaru"
license=('GPL3')
makedepends=(meson sassc git)
options=('!strip' '!buildflags' 'staticlibs')
source=("git+https://github.com/ubuntu/yaru" "install-shell.sh")
sha256sums=('SKIP' '8b6aa29d87c5685fa5f968fae5c614bb45383016839968828ccaa02ceea3fdb1')

pkgver() {
    cd yaru
    git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
    # Workaround issue https://github.com/ubuntu/yaru/issues/1583 for now:
    cp install-shell.sh "${srcdir}/yaru/gnome-shell/src/"
}

build() {
    arch-meson yaru build
    ninja -C build
}

package_yaru-sound-theme-git() {
    pkgdesc="Yaru default ubuntu sound theme"
    provides=(yaru-sound-theme)
    conflicts=(yaru-sound-theme)

    DESTDIR="$pkgdir" ninja -C build install
    rm -r "$pkgdir/usr/share/glib-2.0"
    rm -r "$pkgdir/usr/share/xsessions"
    rm -r "$pkgdir/usr/share/wayland-sessions"
    rm -r "$pkgdir/usr/share/icons"
    rm -r "$pkgdir/usr/share/themes"
    rm -r "$pkgdir/usr/share/gnome-shell"
}

package_yaru-gtk-theme-git() {
    pkgdesc="Yaru default ubuntu gtk theme"  
    depends=(gtk3 gdk-pixbuf2 gtk-engine-murrine gnome-themes-extra)
    provides=(yaru-gtk-theme)
    conflicts=(yaru-gtk-theme)
    
    DESTDIR="$pkgdir" ninja -C build install
    rm -r "$pkgdir/usr/share/glib-2.0"
    rm -r "$pkgdir/usr/share/xsessions"
    rm -r "$pkgdir/usr/share/wayland-sessions"
    rm -r "$pkgdir/usr/share/icons"
    rm -r "$pkgdir/usr/share/sounds"
    rm -r "$pkgdir/usr/share/gnome-shell"
    rm -r "$pkgdir/usr/share/themes/Yaru/gnome-shell"
    rm -r "$pkgdir/usr/share/themes/Yaru-dark/gnome-shell"
}

package_yaru-gnome-shell-theme-git() {
    pkgdesc="Yaru default ubuntu gnome shell theme"  
    depends=(gnome-shell yaru-session)
    provides=(yaru-gnome-shell-theme)
    conflicts=(yaru-gnome-shell-theme)
    
    DESTDIR="$pkgdir" ninja -C build install
    rm -r "$pkgdir/usr/share/glib-2.0"
    rm -r "$pkgdir/usr/share/xsessions"
    rm -r "$pkgdir/usr/share/wayland-sessions"
    rm -r "$pkgdir/usr/share/icons"
    rm -r "$pkgdir/usr/share/sounds"
    rm -r "$pkgdir/usr/share/themes/Yaru-light"
    rm -r "$pkgdir/usr/share/themes/Yaru"{,-dark}/{gtk-{2.0,3.0,3.20},index.theme}
}

package_yaru-icon-theme-git() {
    pkgdesc="Yaru default ubuntu icon theme"  
    depends=(hicolor-icon-theme gtk-update-icon-cache librsvg)
    provides=(yaru-icon-theme)
    conflicts=(yaru-icon-theme)

    DESTDIR="$pkgdir" ninja -C build install
    rm -r "$pkgdir/usr/share/glib-2.0"
    rm -r "$pkgdir/usr/share/xsessions"
    rm -r "$pkgdir/usr/share/wayland-sessions"
    rm -r "$pkgdir/usr/share/sounds"
    rm -r "$pkgdir/usr/share/themes"
    rm -r "$pkgdir/usr/share/gnome-shell"
}

package_yaru-session-git() {
    pkgdesc="Yaru session"
    depends=(gnome-shell)
    provides=(yaru-session)
    conflicts=(yaru-session)

    DESTDIR="$pkgdir" ninja -C build install
    rm -r "$pkgdir/usr/share/sounds"
    rm -r "$pkgdir/usr/share/themes"
    rm -r "$pkgdir/usr/share/gnome-shell"
    rm -r "$pkgdir/usr/share/icons"
}
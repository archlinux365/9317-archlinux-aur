# Maintainer: Piotr Miller <nwg.piotr@gmail.com>
pkgname=('nwg-shell')
pkgver=0.3.7
pkgrel=1
pkgdesc="nwg-shell meta-package, installer and updater"
arch=('x86_64')
url="https://github.com/nwg-piotr/nwg-shell"
license=('MIT')
depends=('foot' 'gnome-themes-extra' 'grim' 'imagemagick' 'jq'
         'libappindicator-gtk3' 'light' 'ttf-dejavu'
         'network-manager-applet' 'pacman-contrib' 
         'papirus-icon-theme' 'playerctl' 'polkit-gnome' 
         'python-geopy' 'python-yaml' 'slurp' 'swappy' 'sway' 'swayidle'
         'swaylock' 'swaybg' 'wl-clipboard' 'xorg-xwayland' 'wlsunset' 
         'azote' 'gopsuinfo' 'nwg-bar-bin' 'nwg-dock-bin' 'nwg-drawer-bin' 
         'nwg-menu-bin' 'nwg-look-bin' 'nwg-panel' 'nwg-shell-config' 
         'nwg-shell-wallpapers' 'nwg-displays' 'python-dasbus' 'swaync' 'gtklock'
         'gtklock-userinfo-module' 'gtklock-powerbar-module' 'gtklock-playerctl-module')
optdepends=('chromium: suggested web browser' 
            'mousepad: suggested text editor' 
            'thunar: suggested file manager'
            'nano: in case you hate vi')
makedepends=('python-setuptools' 'python-wheel')
source=("$pkgname-$pkgver.tar.gz::https://github.com/nwg-piotr/nwg-shell/releases/download/v"$pkgver"/nwg-shell-v"$pkgver".tar.gz")

md5sums=('4d0bea801729468e60f86dc157d1f7b5')

package() {
  cd "${pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1
  install -D -t "$pkgdir"/usr/local/bin scripts/*
  install -D -t "$pkgdir"/usr/share/backgrounds nwg-shell.jpg
}

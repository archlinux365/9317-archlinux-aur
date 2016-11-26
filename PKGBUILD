# Maintainer: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Phillip Schichtel <phillip.public@schich.tel>

pkgname=adapta-gtk-theme-git
pkgver=3.89.1.57.r1.3903051
pkgrel=1
pkgdesc='An adaptive Gtk+ theme based on Material Design Guidelines'
arch=('any')
url='https://github.com/tista500/Adapta'
license=('GPL2')
depends=('gtk-engine-murrine' 'gtk3')
makedepends=('git' 'inkscape' 'libxml2' 'parallel' 'sassc')
optdepends=('gnome-shell: The GNOME Shell'
            'gnome-flashback: The GNOME flashback shell'
            'budgie-desktop: The Budgie desktop'
            'cinnamon: The Cinnamon desktop'
            'xfdesktop: The Xfce desktop')
provides=('adapta-gtk-theme')
conflicts=('adapta-gtk-theme')
source=('adapta-gtk-theme::git+https://github.com/tista500/Adapta.git')
sha256sums=('SKIP')

pkgver() {
  cd adapta-gtk-theme

  git describe --tags | sed 's/-/.r/; s/-g/./'
}

build() {
  cd adapta-gtk-theme

  #bundle install --path .
  #export PATH="$(find $PWD/ruby -maxdepth 2 -type d -name bin):$PATH"

  ./autogen.sh \
    --prefix='/usr' \
    --enable-parallel \
    --enable-chrome \
    --enable-plank \
    --disable-unity
  make
}

package() {
  cd adapta-gtk-theme

  make DESTDIR="${pkgdir}" install
}

# vim: ts=2 sw=2 et:

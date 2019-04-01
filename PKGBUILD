# Maintainer: Hoàng Văn Khải <hvksmr1996@gmail.com>

pkgname=plata-theme-gnome
pkgver=0.7.2
pkgrel=0
pkgdesc='Plata theme for GTK apps and GNOME Shell only'
conflicts=(plata-theme)
replaces=(plata-theme)
arch=('any')
url='https://gitlab.com/tista500/plata-theme'
license=('CCPL' 'GPL2')
makedepends=('git' 'gnome-shell' 'inkscape' 'libxml2' 'parallel' 'sassc')
optdepends=('gtk-engine-murrine: for gtk2 themes'
            'ttf-roboto: Recommended font')
source=("git+https://gitlab.com/tista500/plata-theme.git#tag=${pkgver}")
sha256sums=('SKIP')

build() {
  cd plata-theme

  git checkout ${pkgver}

  ./autogen.sh \
    --prefix='/usr' \
    --enable-parallel \
    --enable-telegram \
    --disable-plank \
    --disable-cinnamon \
    --disable-flashback \
    --disable-xfce \
    --disable-openbox-3 \
    --disable-mate

  make
}

package() {
  cd plata-theme

  make DESTDIR="${pkgdir}" install

  install -dm 755 "${pkgdir}"/usr/share/plank/themes
  ln -s /usr/share/themes/Plata/plank "${pkgdir}"/usr/share/plank/themes/Plata

  install -Dm 644 LICENSE_CC_BY_SA4 -t "${pkgdir}"/usr/share/licenses/$pkgname/
}

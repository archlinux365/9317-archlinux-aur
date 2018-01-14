# Maintainer: Shengyu Zhang <la@archlinuxcn.org>
# Contributor: Dario Ostuni <dario.ostuni@gmail.com>
# Based on gtk4-git

pkgname=gtk4
pkgver=3.93.0
pkgrel=1
pkgdesc="GObject-based multi-platform GUI toolkit"
arch=('i686' 'x86_64')
url="https://www.gtk.org/"
license=('LGPL')
depends=('hicolor-icon-theme'
         'at-spi2-atk'
         'atk>=2.15.1'
         'dconf'
         'glib2>=2.53.7'
         'libepoxy>=1.4'
         'libxcomposite'
         'libxcursor'
         'libxinerama'
         'libxkbcommon'
         'libxrandr'
         'mesa'
         'pango'
         'wayland>=1.9.91'
         'wayland-protocols>=1.9'
         'graphene>=1.5.1'
         'json-glib'
         'colord'
         'libcups'
         'rest'
         'vulkan-icd-loader'
         'gdk-pixbuf2')
makedepends=('gobject-introspection'
             'gtk-doc'
             'meson'
             'ninja'
             'vulkan-headers')
optdepends=('gnome-icon-theme: Default icon theme'
            'gnome-themes-standard: Default widget theme'
            'gdk-pixbuf2: An image loading library')
source=("https://git.gnome.org/browse/gtk+/snapshot/gtk+-${pkgver}.tar.xz"
        'gtk4.install'
        'gtk4-query-immodules.hook'
        'gtk4-update-icon-cache.hook'
        'gtk4-update-icon-cache.script'
        'settings.ini')
sha512sums=('759cd1daaeb4269e1873ec4c65849731cf867fcbd38ed2f79fa1fb55b6d5f26f5461adbace5af7e25f5174ae56e1c10a207270415b0a9e187783658ad5423cbd'
            '5dcb698a15e7d5f4611c9357782d475052944cc71e73351238ffb5dfbe18d1bd1b62289da7f8066cde256c4339de5efa982088f47781876f5d8317f92b87f79f'
            '1dbcce0a3e17ee05b579613adba25feff692f6626155e91fa6859e5f176753201b5ceffa8c9c7c897cf945aeeb32fbd28affa24050dfc0d65237733964bf28de'
            '9d3bb80afb3a00dc50402d32476719daaeab017e1a066425bb602316b534d0a9899d48734a84f70af1066ed104df0491264383a34969dfad2ea9828fb41b9b6b'
            '805cf12606c738d0442d8af415223d3faada93c933b563b7c4c1d5e0c16d2d21435406add1fcc69300fb2fe534f2d0ddbf50b2c0463fc7462109d0f7802ccef1'
            '1642d77622d61234e316e8fcbc803a6a5556c606e37e56aa5981ef2f2df85bfa959c31b5d1bff248b340760e1178281cb0d7abdf540c5f7d4b62cb383a67c685')
install="gtk4.install"

build() {
  cd gtk+-${pkgver}

  meson --prefix=/usr \
    --sysconfdir=/etc \
    --localstatedir=/var \
    --libdir=/usr/lib \
    -Denable-broadway-backend=true \
    -Denable-vulkan=yes \
    _build .

  cd _build

  ninja
}

package() {
  cd gtk+-${pkgver}/_build

  DESTDIR="$pkgdir" ninja install

  install -Dm 644 "../../settings.ini" "$pkgdir"/usr/share/gtk-4.0/settings.ini
  install -Dm 644 "../../gtk4-query-immodules.hook" "$pkgdir"/usr/share/libalpm/hooks/gtk4-query-immodules.hook
  install -D "gtk/gtk4-update-icon-cache" "$pkgdir"/usr/bin/gtk4-update-icon-cache
  install -Dm 644 "../../gtk4-update-icon-cache.hook" "$pkgdir"/usr/share/libalpm/hooks/gtk4-update-icon-cache.hook
  install -Dm 755 "../../gtk4-update-icon-cache.script" "$pkgdir"/usr/share/libalpm/scripts/gtk4-update-icon-cache

  # Remove conflicts with gtk3
  rm -f "$pkgdir/usr/share/gettext/its/gtkbuilder.its"
  rm -f "$pkgdir/usr/share/gettext/its/gtkbuilder.loc"
  rm -f "$pkgdir/usr/share/glib-2.0/schemas/org.gtk.Demo.gschema.xml"
  rm -f "$pkgdir/usr/share/glib-2.0/schemas/org.gtk.Settings.ColorChooser.gschema.xml"
  rm -f "$pkgdir/usr/share/glib-2.0/schemas/org.gtk.Settings.Debug.gschema.xml"
  rm -f "$pkgdir/usr/share/glib-2.0/schemas/org.gtk.Settings.FileChooser.gschema.xml"
  rm -f "$pkgdir/usr/share/glib-2.0/schemas/org.gtk.Settings.EmojiChooser.gschema.xml"
  rm -f "$pkgdir/usr/share/glib-2.0/schemas/org.gtk.exampleapp.gschema.xml"
}

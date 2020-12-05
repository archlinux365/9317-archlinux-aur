# Maintainer: Que Quotion <quequotion@bugmenot.com> 
# Contributor: <shlomochoina@gmail.com> 

pkgname=pantheon-dock-instctl-git
pkgver=r1970.e9fa02b
pkgrel=3
pkgdesc='The Pantheon Dock (with instance controls)'
arch=('i686' 'x86_64')
url='https://www.reddit.com/r/elementaryos/comments/irt66g/instance_controls_close_switch_to_or_minimize/'
license=('GPL3')
groups=('pantheon-qq')
depends=('bamf' 'gnome-menus' lib{gee,granite.so} 'python')
makedepends=('git' gnome-{common,menus} lib{dbusmenu-gtk3,granite.so} 'meson' 'vala')
conflicts=('plank')
provides=('plank')
source=('pantheon-dock::git+https://github.com/elementary/dock'
        'instance-controls.patch'
        'ellipsize-long-window-names.patch')

sha256sums=('SKIP'
            '8aef381cd636d8c958e5d29ce1b053fa3ef8f961768654c34fd80939b96b3fc3'
            'd6a94877f50f57d67de47358c996f0ee27f0e69d1eb013317f2759dbb4cdeeb9')

pkgver() {
  cd pantheon-dock

   printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd pantheon-dock

  # https://github.com/elementary/dock/pull/73
  patch -Np1 < ../instance-controls.patch

  # https://github.com/elementary/dock/pull/19
  patch -Np1 < ../ellipsize-long-window-names.patch
}

build() {
  arch-meson pantheon-dock build -Dapport=false -Denable-dbusmenu=yes -Denable-barriers=yes
  ninja -C build
}
package() {
  DESTDIR="${pkgdir}" ninja -C build install
}

# vim: ts=2 sw=2 et:


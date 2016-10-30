# Maintainer : Immae <ismael.bouya@normalesup.org>

pkgname=mediagoblin-git
pkgver=20161030
pkgrel=1
pkgdesc='A free software media publishing platform'
arch=('i686' 'x86_64')
url='http://mediagoblin.org'
license=('AGPL')
provides=('mediagoblin')
conflicts=('mediagoblin')
depends=('python2' 'python2-lxml' 'sqlite' 'python2-pillow' 'python2-virtualenv' 'npm' 'nodejs')
optdepends=(
  'postgresql: to use the postgresql database backend'
  'python2-psycopg2: to use the postgresql database backend'
  'python2-gobject: to handle videos'
  'gst-libav: to handle videos'
  'gst-python2: to handle videos'
  'gst-plugins-good: to handle videos'
  'gst-plugins-bad: to handle videos'
  'gst-plugins-ugly: to handle videos'
  )
backup=('etc/paste_local.ini' 'etc/mediagoblin_local.ini')
install=mediagoblin.install
makedepends=('git' 'automake')
source=(
  'mediagoblin::git://git.savannah.gnu.org/mediagoblin.git'
  'mediagoblin-paster.service'
  'mediagoblin-celeryd.service'
  'paste_local.ini'
  'mediagoblin_local.ini'
  'mediagoblin-tmpfiles.conf'
)
sha256sums=('SKIP'
            'f666807655f0dcafb041be9b684c2a1ff285e24cf06c5d2e8ab0974e8b2936b2'
            'aecbb1f1b60d5c2b524ea68e49feda0264cb49bc66d82c4511b800ac81642f01'
            'ac914d60886d9bf53d3f40b8b00a60d46ada1cac9130210e045a4776d898e884'
            '9adf338f5dbfb94ee7ae29433091b6991a1fa39a6135a8295f9f1cc1fde0edc1'
            '1bf9172ba79bdac4694c5d4c8c2134bbcfdfadf29f0b4cfc88fa0a329201b202')

pkgver() {
  cd "$srcdir/mediagoblin"
  git describe --long | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  git submodule init
  git submodule update
}

build() {
  cd "$srcdir/mediagoblin"

  ./bootstrap.sh
  ./configure
  make || make
  ./bin/easy_install flup
}

package() {
  cd "$srcdir/$_gitrepo"
  rm -rf .git .gitignore

  install -dm755 "$pkgdir"/usr/share/webapps/mediagoblin/
  cp -a . "$pkgdir"/usr/share/webapps/mediagoblin

  cd "$pkgdir"/usr/share/webapps/mediagoblin
  find . -name '*.pyc' -delete
  find . -type f -exec sed -i "s|$srcdir/$_gitrepo|/usr/share/webapps/mediagoblin|g" {} \;

  install -dm755 "$pkgdir"/var/lib/mediagoblin
  install -dm755 "$pkgdir"/etc/webapps/mediagoblin

  install -Dm644 "$srcdir"/paste_local.ini "$pkgdir"/etc/webapps/mediagoblin/paste_local.ini
  ln -s /etc/webapps/mediagoblin/paste_local.ini "$pkgdir"/usr/share/webapps/mediagoblin/paste_local.ini
  install -Dm644 "$srcdir"/mediagoblin_local.ini "$pkgdir"/etc/webapps/mediagoblin/mediagoblin_local.ini
  ln -s /etc/webapps/mediagoblin/mediagoblin_local.ini "$pkgdir"/usr/share/webapps/mediagoblin/mediagoblin_local.ini

  ln -s /var/lib/mediagoblin/ "$pkgdir"/usr/share/webapps/mediagoblin/user_dev

  install -Dm644 "$srcdir"/mediagoblin-paster.service "$pkgdir"/usr/lib/systemd/system/mediagoblin-paster.service
  install -Dm644 "$srcdir"/mediagoblin-celeryd.service "$pkgdir"/usr/lib/systemd/system/mediagoblin-celeryd.service
  install -Dm644 "$srcdir"/mediagoblin-tmpfiles.conf "$pkgdir"/usr/lib/tmpfiles.d/mediagoblin.conf
}

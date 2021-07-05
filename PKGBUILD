# Maintainer: Evgeniy Alekseev

pkgname='ahriman'
pkgver=1.1.0
pkgrel=1
pkgdesc="ArcHlinux ReposItory MANager"
arch=('any')
url="https://github.com/arcan1s/ahriman"
license=('GPL3')
depends=('devtools' 'git' 'pyalpm' 'python-aur' 'python-srcinfo')
makedepends=('python-pip')
optdepends=('aws-cli: sync to s3'
            'breezy: -bzr packages support'
            'darcs: -darcs packages support'
            'gnupg: package and repository sign'
            'mercurial: -hg packages support'
            'python-aiohttp: web server'
            'python-aiohttp-jinja2: web server'
            'python-jinja: html report generation'
            'rsync: sync by using rsync'
            'subversion: -svn packages support')
source=("https://github.com/arcan1s/ahriman/releases/download/$pkgver/$pkgname-$pkgver-src.tar.xz"
        'ahriman.sysusers'
        'ahriman.tmpfiles')
sha512sums=('e364db068111d6c423ceed8bbc04a5d73d24bde803c0b9b2d384bee8d0d04bcfffd0dbb957b6a4576c64e2f470812665d442ee1325f835279055e43d6eef88b7'
            '13718afec2c6786a18f0b223ef8e58dccf0688bca4cdbe203f14071f5031ed20120eb0ce38b52c76cfd6e8b6581a9c9eaa2743eb11abbaca637451a84c33f075'
            '55b20f6da3d66e7bbf2add5d95a3b60632df121717d25a993e56e737d14f51fe063eb6f1b38bd81cc32e05db01c0c1d80aaa720c45cde87f238d8b46cdb8cbc4')
backup=('etc/ahriman.ini'
        'etc/ahriman.ini.d/logging.ini')

build() {
  cd "$pkgname"

  python setup.py build
}

package() {
  cd "$pkgname"

  python setup.py install --root="$pkgdir"

  install -Dm644 "$srcdir/$pkgname.sysusers" "$pkgdir/usr/lib/sysusers.d/$pkgname.conf"
  install -Dm644 "$srcdir/$pkgname.tmpfiles" "$pkgdir/usr/lib/tmpfiles.d/$pkgname.conf"
}

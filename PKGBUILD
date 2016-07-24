# Maintainer: Pedro Silva <psilva@pedrosilva.pt>
# Contributor: Martin -nexus- Mlynář <nexus+arch@smoula.net>

pkgname=btrfs-sxbackup
pkgver=0.6.9
pkgrel=2
pkgdesc="Incremental btrfs snapshot backups with push/pull support via SSH"
arch=('i686' 'x86_64')
url="https://github.com/masc3d/btrfs-sxbackup"
license=('GPL')

depends=('bash'
         'python'
	     'btrfs-progs'
	     'python-setuptools')
optdepends=('openssh: for remote push/pull'
            'lzop: compression support'
            'pv: progress indication'
            's-nail: email notifications')
provides=('btrfs-sxbackup')
conflicts=('python-btrfs-sxbackup')

source=(https://github.com/masc3d/btrfs-sxbackup/archive/${pkgver}.tar.gz
        ${pkgname}@.service
        ${pkgname}@.timer)
md5sums=('c581ec61e2dbccf4c9a1b63c677a573f'
         'c95336614c6ea4844fd6272868260f96'
         '3eba800dc92659189b6f4c58e456f9aa')

package() {
  install -m0644 -D ${pkgname}@.service ${pkgdir}/usr/lib/systemd/system/${pkgname}@.service
  install -m0644 -D ${pkgname}@.timer ${pkgdir}/usr/lib/systemd/system/${pkgname}@.timer

  cd $srcdir/${pkgname}-$pkgver
  python setup.py install --prefix=/usr --root=$pkgdir
  install -m0644 -D etc/btrfs-sxbackup.conf $pkgdir/etc/btrfs-sxbackup.conf
}

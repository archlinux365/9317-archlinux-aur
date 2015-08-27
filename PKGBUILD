# Maintainer: tritonas00 <tritonas00@gmail.com>
pkgname=system-tar-and-restore
pkgver=4.9.4
pkgrel=1
pkgdesc='Backup and Restore your system using tar or Transfer it with rsync'
arch=('any')
license=('GPL')
depends=('rsync' 'wget')
optdepends=('dialog: Ncurses interface support' 'grub: Grub support' 'dosfstools: UEFI support' 'efibootmgr: UEFI support'
            'syslinux: Syslinux support' 'gptfdisk: GPT with Syslinux support' 'pigz: multicore compression' 'pbzip2: multicore compression'
            'pxz: multicore compression' 'gtkdialog: GUI wrapper')
url="https://github.com/tritonas00/system-tar-and-restore"
source=("https://github.com/tritonas00/system-tar-and-restore/archive/$pkgver.tar.gz"
        "readme.install")

md5sums=('0b0f6b5a9451380d6e2511e571f5fcdb'
         'c2df236e728583b3974f58034e888dc8')

install=readme.install

package() {
  cd "$srcdir/$pkgname-$pkgver"
  gzip system-tar-and-restore.1
  install -Dm755 backup.sh "$pkgdir/usr/bin/backup.sh"
  install -Dm755 restore.sh "$pkgdir/usr/bin/restore.sh"
  install -Dm755 star-gui.sh "$pkgdir/usr/bin/star-gui.sh"
  install -Dm755 system-tar-and-restore.1.gz "$pkgdir/usr/share/man/man1/system-tar-and-restore.1.gz"
  install -Dm755 backup.conf "$pkgdir/usr/share/system-tar-and-restore/backup.conf"
}
# Maintainer: Todd E Johnson <todd@toddejohnson.net>

pkgname=restic-systemd-automatic-backup
pkgver=r39.e3f01b7
pkgrel=1
pkgdesc="Backup solution using restic/Backblaze B2 storage."
arch=('any') 
url="https://github.com/erikw/restic-systemd-automatic-backup"
license=('GPL')
depends=('systemd' 'restic')
makedepends=('git')
source=("${pkgname}::git+https://github.com/erikw/restic-systemd-automatic-backup.git")
source=("${pkgname}::git+https://github.com/toddejohnson/restic-systemd-automatic-backup.git#branch=move-exclude-etc")
sha256sums=('SKIP')
backup=('etc/restic/b2_env.sh' 'etc/restic/b2_pw.txt' 'etc/restic/backup_exclude')

pkgver() {
  cd "$pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
  cd "$pkgname"
  make PREFIX="$pkgdir" DEST_SCRIPTS="$pkgdir/usr/sbin" DEST_SYSTEMD="$pkgdir/usr/lib/systemd/system" install 
}

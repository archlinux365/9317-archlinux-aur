_basename=netmount
pkgname=${_basename}-runit
pkgver=0.1
pkgrel=2
pkgdesc="Service to mount/umount network filesystems from fstab"
arch=('any')
url="http://www.voidlinux.org/"
license=('GPL-2.0-or-later')
conflicts=('systemd-sysvcompat')
source=("${_basename}.run" "${_basename}.conf" "${_basename}.finish")
sha256sums=('52c544cb75460a7d591dee201116123c47b5214754d8a35e43fceaee5adc18ed'
  '99f7945745dc9d13779759b30e6c6275c76d741258f4f389577ddb162694d8a4'
  '19a08b48e95a53e077731f8e5a458758582e72e9ba46e93792e65c15637bf94c')

package() {
  for x in run conf finish; do
    install -Dm755 "$srcdir/${_basename}.${x}" "$pkgdir/etc/runit/sv/${_basename}/${x}"
  done
}

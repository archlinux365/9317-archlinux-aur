# Maintainer: Jakob Gahde <j5lx@fmail.co.uk>

pkgname=xcursor-sweet
pkgver=20200612
pkgrel=1
pkgdesc="Cursor theme with some gradients to fit the Sweet themes"
arch=('any')
url="https://store.kde.org/p/1393084/"
license=('GPL3')
source=("https://dllb2.pling.com/api/files/download/j/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE1OTE5OTM4NTUiLCJvIjoiMSIsInMiOiI0ZTEzNjAzMThmOTczMzA0NDVkYjllNWFmMWRkMWQxNTkxMzUzOTljYjE4ZDVhN2IyMjIwNzIwZjAxMDAxNWE1M2MxYjY4Y2NlODA0YzQ3NDA5ZjBmYjUyMjQxMTM5OTU4ZGM5Nzc2ZWE3MWU5NTAyNzhmYjEwZTI4YmU2ODQxMSIsInQiOjE1OTI0MjQzMTAsInN0ZnAiOm51bGwsInN0aXAiOiIxNzcuMjIxLjU4LjYyIn0.1j27VeBTV5wXaoIISfU6YdgkqAiNS8h_Ya7JsBt4VE8/Sweet-cursors.tar.xz")
md5sums=('773ae8cb0fc173312f03affafbd8aa4e')

package() {
  cd "${srcdir}"

  install -dm755 "${pkgdir}/usr/share/icons"
  cp -r Sweet-cursors "${pkgdir}/usr/share/icons/"
}

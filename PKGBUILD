# Maintainer: Donald Webster <fryfrog@gmail.com>
# Helpful url: https://prowlarr.servarr.com/v1/update/develop?version=0.0.0.0&os=linux&runtime=netcore&arch=x64

pkgname="prowlarr"
pkgver=0.1.0.410
pkgrel=1
pkgdesc="Movie download automation for usenet and torrents."
arch=('x86_64' 'aarch64' 'armv7h')
url="https://github.com/Prowlarr/Prowlarr"
license=('GPL3')
options=('!strip' 'staticlibs')
depends=('sqlite')

source_x86_64=("prowlarr.develop.${pkgver}.linux-core-x64.tar.gz::https://prowlarr.servarr.com/v1/update/nightly/updatefile?version=${pkgver}&os=linux&runtime=netcore&arch=x64") 
source_aarch64=("prowlarr.develop.${pkgver}.linux-core-arm64.tar.gz::https://prowlarr.servarr.com/v1/update/nightly/updatefile?version=${pkgver}&os=linux&runtime=netcore&arch=arm64") 
source_armv7h=("prowlarr.develop.${pkgver}.linux-core-arm.tar.gz::https://prowlarr.servarr.com/v1/update/nightly/updatefile?version=${pkgver}&os=linux&runtime=netcore&arch=arm")

source=(
  'prowlarr.service'
  'prowlarr.tmpfiles'
  'prowlarr.sysusers'
  'package_info'
)

sha512sums=('bc0df2df010d8e272ff7a1fabc24e2012b87bc260bac79ffd7b3716e38fa9b2fe84c5f8f57b22e1812f702c3809d63086a0586db58ce66bfeeb2a9ad5cffd3ca'
            '9159ceda0955f2ebc495dd470c9d6234d8534a120ab81fa58fefae94a8ecfdc8fe883fb1287bc10429e7b4f35ac59d36232d716c161a242a4bfcdff768f1b9a2'
            '6ebd6f268e5aa7446e3c77540f5c95b3237959892e8800f5f380a0f979c71ec0d6f7664c1a58f7d10a255bc21a19bad0fef8609b02b4d5e15f340e66364017d2'
            '0e305d68b950372ed169f3b89a3b97d3423f968460a11b9620e779444d04227091daaad5a9fcad1c24aa868fc5b39129ba247f4a09d9191292bfd20230f88da2')
sha512sums_x86_64=('1f5c8c4d6a46ebe71c2cdbbb31e1e2de10652945157aeb8a11fed464e4add24d8a3e3d87dcb5472329f5cd2ea9fa477dbd98c0f2dcf9a00a238350a505a51d5c')
sha512sums_aarch64=('7a8e6cf21cdd79314d0d88681968503d5546a0cf681fd4519b09202c0ca3b74b40d0386c4bf1bb40450eb97eb4a612196a75db384a225517f138839e50825ef8')
sha512sums_armv7h=('bb5a2c64c753042595f42a24260c97f3293319bf4373cbf6febff8f4429faa4c77159b2fc7e173226302ea0ab9ace93f737692aea9584317a4f918f610e79c43')


package() {
  rm -rf "${srcdir}/Prowlarr/prowlarr.Update"
  install -d -m 755 "${pkgdir}/usr/lib/prowlarr/bin"
  cp -dpr --no-preserve=ownership "${srcdir}/Prowlarr/"* "${pkgdir}/usr/lib/prowlarr/bin"
  chmod -R a=,a+rX,u+w "${pkgdir}/usr/lib/prowlarr/bin"
  chmod +x "${pkgdir}/usr/lib/prowlarr/bin/Prowlarr"

  # Disable built in updater.
  install -D -m 644 "${srcdir}/package_info" "${pkgdir}/usr/lib/prowlarr"
  echo "PackageVersion=${pkgver}-${pkgrel}" >> "${pkgdir}/usr/lib/prowlarr/package_info"

  install -D -m 644 "${srcdir}/prowlarr.service" "${pkgdir}/usr/lib/systemd/system/prowlarr.service"
  install -D -m 644 "${srcdir}/prowlarr.sysusers" "${pkgdir}/usr/lib/sysusers.d/prowlarr.conf"
  install -D -m 644 "${srcdir}/prowlarr.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/prowlarr.conf"
}

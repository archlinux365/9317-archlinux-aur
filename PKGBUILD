# Maintainer: Donald Webster <fryfrog@gmail.com>
# Helpful url: https://services.lidarr.audio/v1/update/nightly?version=0.0.0.0&os=linux&runtime=netcore&arch=x64

pkgname="lidarr-nightly"
pkgver=0.7.1.1808
pkgrel=1
pkgdesc="Music download automation for usenet and torrents."
arch=('x86_64' 'aarch64' 'armv7h')
url="https://github.com/lidarr/Lidarr"
license=("GPL3")
depends=('sqlite' 'chromaprint')
options=('!strip' 'staticlibs')
optdepends=('sabnzbd: usenet downloader'
            'nzbget: usenet downloader'
            'transmission-cli: torrent downloader (CLI and daemon)'
            'transmission-gtk: torrent downloader (GTK+)'
            'transmission-qt: torrent downloader (Qt)'
            'deluge: torrent downloader'
            'rtorrent: torrent downloader'
            'qbittorrent: torrent downloader'
            'qbittorrent-nox: torrent downloader (no X)'
            'jackett: torrent indexer proxy'
            'libgdiplus: provides a gdi+ compatible api')

provides=('lidarr')
conflicts=('lidarr' 'lidarr-develop')

source_x86_64=("lidarr-${pkgver}-linux-core-x64.tar.gz::https://services.lidarr.audio/v1/update/nightly/updatefile?version=${pkgver}&os=linux&runtime=netcore&arch=x64")
source_aarch64=("lidarr-${pkgver}-linux-core-arm64.tar.gz::https://services.lidarr.audio/v1/update/nightly/updatefile?version=${pkgver}&os=linux&runtime=netcore&arch=arm64")
source_armv7h=("lidarr-${pkgver}-linux-core-arm.tar.gz::https://services.lidarr.audio/v1/update/nightly/updatefile?version=${pkgver}&os=linux&runtime=netcore&arch=arm")

source=('lidarr.service'
        'lidarr.tmpfiles'
        'lidarr.sysusers'
        'package_info')

sha512sums=('e5858db23813a486c20c18bb66bf0fa1ca23361dd34d7b8ce12bbbbbc25daa744e0a41005c2ca7f2339e687dc8041ee64cbecfafa81b84d12445baa7d0c35f85'
            '3800547b7c3d2b6e0a590ebd2db5ed48a6c31249098a4c36876faca36dd81e84ac45f3679d16bfe101be594dc6d5d0cfc91bfc66ed8cba35ec05f22027ab2441'
            'ffd466960527256d8de1d9887d90d4da87486eff062950c46cbc4fd4af1ef89e7d5c070ef1e649b23a95fbab15651e289fd5bdc6d34649e4a6ecdf2f6da06622'
            '70cf5c953e26339fd70250fb6bd471628aca9a8d3c4fc943099aa477ed272a1ee597e03feaee2dfb08eece9417924a2d86f383e1fcee0dc5c58da9b35d31f72c')
sha512sums_x86_64=('020d3af17a5336effab0058ed04bbe253d25c6241b47ac10662748c9db4cfa69ca6e161a0f7715370cac4d543d92b77cd82d1e04b3b7cd43a54d3e9f044ef9b1')
sha512sums_aarch64=('a32a594a55fef9a3a87469def18d12b96f8f0282ff8d2bdee1a85bebf0bfb2d0506e03e8276e5cdcae3aa0e10dddcc3514cdb91d73556d731cc0ec5c1239c49d')
sha512sums_armv7h=('713de0f2f927821217a97720fb972ca11d704bef63ca391a6b08ed3d2dec6d8a453d49d0ad3f164cf60757ddbe64df76bab3522dbeea94b19d160010ec4e5e32')



package() {
  # Update environment isn't needed.
  rm -rf "${srcdir}/Lidarr/Lidarr.Update"

  # The fpcalc binary comes from chromaprint.
  rm -rf "${srcdir}/Lidarr/fpcalc"

  install -d -m 755 "${pkgdir}/usr/lib/lidarr/bin"
  cp -dpr --no-preserve=ownership "${srcdir}/Lidarr/"* "${pkgdir}/usr/lib/lidarr/bin"
  chmod -R a=,a+rX,u+w "${pkgdir}/usr/lib/lidarr/bin"
  chmod +x "${pkgdir}/usr/lib/lidarr/bin/Lidarr"

  # Disable built in updater.
  install -D -m 644 "${srcdir}/package_info" "${pkgdir}/usr/lib/lidarr"
  echo "PackageVersion=${pkgver}-${pkgrel}" >> "${pkgdir}/usr/lib/lidarr/package_info"

  install -D -m 644 "${srcdir}/lidarr.service" "${pkgdir}/usr/lib/systemd/system/lidarr.service"
  install -D -m 644 "${srcdir}/lidarr.sysusers" "${pkgdir}/usr/lib/sysusers.d/lidarr.conf"
  install -D -m 644 "${srcdir}/lidarr.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/lidarr.conf"
}

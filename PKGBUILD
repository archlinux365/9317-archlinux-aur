# Maintainer: gilbus <aur (AT) tinkershell.eu>

pkgbase=rssbridge
pkgname=rss-bridge
pkgver=2022_01_20
pkgrel=1
pkgdesc="The RSS feed for websites missing it"
arch=("any")
url="https://github.com/RSS-Bridge/rss-bridge/wiki"
license=("Unlicense")
depends=(php)
backup=(
  "etc/webapps/$pkgname/config.ini.php"
  "etc/webapps/$pkgname/whitelist.txt"
  )
source=(
  "https://github.com/RSS-Bridge/$pkgname/archive/${pkgver//_/-}.tar.gz"
  "$pkgname.sysusers"
  "$pkgname.tmpfiles"
)
sha256sums=('7da0bca2b0c55e64eaab5bf1806315659f29f0cafa5d4a12a360a22edaa54358'
            '42eb933a4632ada3247341d24f967c76cf363ff50e6ed13b39963983454f8020'
            '32bc1d3a61862fe87dd8b72b814feebe72e2d2b975e489e00d612fc607ae9d7a')

package() {

  cd "$pkgname-${pkgver//_/-}"
  _instdir=$pkgdir/usr/share/webapps/$pkgname/

  # install project
  mkdir -p "$_instdir"
  cp -ra * "$_instdir/"

  # copy default config to /etc
  install -D config.default.ini.php $pkgdir/etc/webapps/$pkgname/config.ini.php
  install -D whitelist.default.txt $pkgdir/etc/webapps/$pkgname/whitelist.txt

  # and symlink it into correct location
  ln -s /etc/webapps/$pkgname/config.ini.php "$_instdir"
  ln -s /etc/webapps/$pkgname/whitelist.txt "$_instdir"

  # setup user and directory creation
  install -Dm644 "$srcdir/$pkgname.sysusers" \
    "$pkgdir/usr/lib/sysusers.d/$pkgname.conf"
  install -Dm644 "$srcdir/$pkgname.tmpfiles" \
    "$pkgdir/usr/lib/tmpfiles.d/$pkgname.conf"

  rm -r "$_instdir"/cache
  ln -s /var/cache/$pkgname "$_instdir"/cache

  find "$pkgdir"/usr/share/webapps/${pkgname} -type f -exec chmod 0644 {} \;
  find "$pkgdir"/usr/share/webapps/${pkgname} -type d -exec chmod 0755 {} \;
}

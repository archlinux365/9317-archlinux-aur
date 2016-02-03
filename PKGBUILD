# Maintainer: James An <james@jamesan.ca>

_pkgname=solr
pkgname="$_pkgname-undertow"
pkgver=1.5.0
pkgrel=1
pkgdesc='Solr / SolrCloud running in high performance server'
arch=('i686' 'x86_64' 'any')
url="https://github.com/bremeld/$pkgname"
license=('Apache')
depends=('java-environment>=7')
optdepends=('solr5-war: Solr 5.x WAR file'
            'solr4-war: Solr 4.x WAR file'
            'solr3-war: Solr 3.x WAR file')
install="$pkgname.install"
source=("$url/releases/download/v$pkgver/$pkgname-$pkgver.tgz"
        'default.conf'
        "$pkgname.service")
md5sums=('19e2f582370c82353a04932a3458af76'
         '3f8f716ddf4daa9073f32fc3666d1004'
         '4f48f542c296933ee35cd739e2189448')

prepare() {
  cd "$pkgname-$pkgver"
  sed --in-place "s#\$APP_HOME/lib#/usr/share/java/$pkgname#g" "bin/$pkgname"
}

package() {
  cd "$pkgname-$pkgver"

  install -Dm755 bin/$pkgname "$pkgdir/usr/bin/$pkgname"
  for lib in $(basename --multiple lib/*); do
    install -Dm644 lib/$lib "$pkgdir/usr/share/java/$pkgname/$lib"
  done
  for conf in $(basename --multiple example/$_pkgname-home/*); do
    install -Dm644 "example/$_pkgname-home/$conf" "$pkgdir/etc/$_pkgname/$conf"
  done
  for doc in $(basename --multiple example/*.conf); do
    install -Dm644 "example/$doc" "$pkgdir/usr/share/doc/$pkgname/$doc"
  done

  install -Dm644 ../default.conf "$pkgdir/etc/$_pkgname/default.conf"
  install -Dm644 "../$pkgname.service" "$pkgdir/usr/lib/systemd/system/$pkgname.service"
  install -dm755 "$pkgdir/var/log/$pkgname"

  chown -R 521:521 "$pkgdir/etc/$_pkgname" "$pkgdir/var/log/$pkgname"
}

# Maintainer: fordprefect <fordprefect@dukun.de>
# Contributor: Amish

pkgname=geoip-citydata
pkgver=20150805
pkgrel=1
pkgdesc="City database for geoip IP location lookups"
depends=('geoip')
url='http://www.maxmind.com/'
arch=('any')
license=('CCPL')
source=('https://geolite.maxmind.com/download/geoip/database/GeoLiteCity.dat.xz'
        'https://geolite.maxmind.com/download/geoip/database/GeoLiteCityv6-beta/GeoLiteCityv6.dat.gz')
# skipping md5sums, because of random unscheduled upstream changes, if you want to check, use commented line below
md5sums=('SKIP' 'SKIP')
#md5sums=('c4c70b767ab2082dac4e25676f9dbcca' '8348aed15a9c8334b74adf76f3e1aeb5')
    
package() {
    mkdir -p ${pkgdir}/usr/share/GeoIP/
    install -m 444 GeoLiteCity.dat ${pkgdir}/usr/share/GeoIP/
    install -m 444 GeoLiteCityv6.dat ${pkgdir}/usr/share/GeoIP/
    cd "${pkgdir}/usr/share/GeoIP"
    ln -s GeoLiteCity.dat GeoIPCity.dat
    ln -s GeoLiteCityv6.dat GeoIPCityv6.dat
}

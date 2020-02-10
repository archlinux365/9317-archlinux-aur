# Maintainer: peippo <christoph.fink@gmail.com>

pkgname="nominatim-data-postcodes-us"
pkgdesc="Optional postcode (US) data to use with nominatim"
url="https://nominatim.org"

pkgver=20190722
pkgrel=2

arch=("any")
license=("unknown")

depends=(
    "nominatim"
)

source=(
    "https://www.nominatim.org/data/us_postcode_data.sql.gz"
)
sha256sums=(
    "874954f306047dd00d0cb622cdda8f35224eb3f67dce0ae30709e7d46c813119"
)
noextract=(
    "gb_postcode_data.sql.gz"
)

package() {
    install -Dm644 -t "${pkgdir}/var/lib/nominatim/src/data/" \
        "${srcdir}/us_postcode_data.sql.gz"
}

# Maintainer: Rayr https://rayr.ml/LinkInBio/

pkgname=weather-cli
pkgver=1.2.0
pkgrel=1
pkgdesc="An app made to get weather information through the terminal written in Go"
arch=('x86_64')
url="https://github.com/Rayrsn/Weather-Cli"
license=('GPL')
makedepends=('cargo')
source=("https://github.com/Rayrsn/Weather-Cli/archive/refs/tags/$pkgver.zip")
md5sums=('7c670163a2c57538eb915aa19947c630')
build() {
    cd "Weather-Cli-$pkgver"
    go build
}

package() {
	cd "Weather-Cli-$pkgver"
	install -Dm755 "weather-Cli" "$pkgdir/usr/bin/weather-Cli"
    install -Dm 644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

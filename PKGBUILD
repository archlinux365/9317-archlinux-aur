# Maintainer: Manuel Hüsers <aur@huesers.de>
# Contributor: Brad Erhart <tocusso underscore malty at aleeas dot com>

pkgname='gvisor-bin'
_pkgbin='runsc'
_pkgshim='containerd-shim-runsc-v1'
pkgver=20220905.0
pkgrel=1
pkgdesc='OCI container sandbox runtime focused on security, efficiency, and ease of use'
arch=('x86_64' 'aarch64')
url='https://gvisor.dev'
license=('Apache')
optdepends=('docker: for Docker runtime support')
provides=(
	"${pkgname%-bin}"
)
conflicts=(
	"${pkgname%-bin}"
)
source_x86_64=(
	"https://storage.googleapis.com/${pkgname%-bin}/releases/release/${pkgver%.[0-9]}/x86_64/$_pkgbin"
	"https://storage.googleapis.com/${pkgname%-bin}/releases/release/${pkgver%.[0-9]}/x86_64/$_pkgshim"
)
source_aarch64=(
	"https://storage.googleapis.com/${pkgname%-bin}/releases/release/${pkgver%.[0-9]}/aarch64/$_pkgbin"
	"https://storage.googleapis.com/${pkgname%-bin}/releases/release/${pkgver%.[0-9]}/aarch64/$_pkgshim"
)
sha512sums_x86_64=(
	'01e4f78b2634f70d8cfd88e2a1642562a1dc52c8757c884953aee2e92c1e337ecca4ef7ff570a94d0214bc663a8220f4e9433c3d7bc6dab79f88b3336a62123d'
	'7a3f847909c03078b549682fec9904efc9ec1606357f911c6b87f18953e9ccd8e914a09ff9837f4ecf7574d70a4aca4d5ad30d27c923866374b25578adc7cec7'
)
sha512sums_aarch64=(
	'ea2da7b729097f2694580195b7894daed8d1dbc3520f08513b6712871c02b565a7c25a09c909e8992c9f27d26637aeff588febf46e64d94eb76af1ae5887026a'
	'23930334619ac425bc4ca0e4bd460ddc9ed3a4c885083f30ae8e6c33501bf08ce81e8c6a82a6670b2a666a749710cb54925e02c88acee8114d40df7bbb422afc'
)

package() {
	install -Dm 755 "$_pkgbin" "$pkgdir/usr/bin/$_pkgbin"
	install -Dm 755 "$_pkgshim" "$pkgdir/usr/bin/$_pkgshim"
}

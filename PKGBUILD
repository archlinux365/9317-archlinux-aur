# Maintainer: Darren Wu <$(base64 --decode <<<'ZGFycmVuMTk5NzA4MTBAZ21haWwuY29tCg==')>
# Maintainer: Ian Emnace <igemnace@gmail.com>
# Contributor: rosatolen <rosatolen@gmail.com>
# Contributor: Alex Peltzer ("alexpe87") <alexpe.aur@mailbox.org>
pkgname=circleci-cli
pkgver=0.1.5546
pkgrel=1
pkgdesc="Use CircleCI from the command line"
arch=(x86_64)
url="https://github.com/CircleCI-Public/circleci-cli"
license=(MIT)
depends=(docker)
source=(
	"https://github.com/CircleCI-Public/circleci-cli/releases/download/v$pkgver/${pkgname}_${pkgver}_linux_amd64.tar.gz"
	"https://raw.githubusercontent.com/CircleCI-Public/circleci-cli/v$pkgver/LICENSE"
)
sha256sums=('d82ebd29d6c914a280450aa1e434f35db0465c0a02b98d7c0fba2040287cbc1b'
            '89f336660e1dea7ea005892dc44696fb15544cbffedfbddcd4f6671a735763a9')

package() {
	install -m 755 -D -t "$pkgdir/usr/bin" "${pkgname}_${pkgver}_linux_amd64/circleci"
	install -m 644 -D -t "$pkgdir/usr/share/licenses/$pkgname" LICENSE
}

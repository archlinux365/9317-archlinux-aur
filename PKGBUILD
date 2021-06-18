# Maintainer: Baltazár Radics <baltazar.radics@gmail.com>
pkgname=omnisharp-roslyn-bin
pkgver=1.37.11
pkgrel=1
pkgdesc='OmniSharp server (STDIO) based on Roslyn workspaces'
arch=(x86_64)
url='https://github.com/OmniSharp/omnisharp-roslyn'
license=(MIT)
depends=(mono mono-msbuild mono-msbuild-sdkresolver)
provides=(${pkgname%-bin})
conflicts=(${pkgname%-bin})
source=(
	"omnisharp-mono-$pkgver.tar.gz::https://github.com/OmniSharp/omnisharp-roslyn/releases/download/v$pkgver/omnisharp-mono.tar.gz"
	'omnisharp.sh'
)
sha256sums=('6060d44229abb27076eeed33d5909c1c69422e52b352c1ce24e0eb1f71d19b48'
            '784a5643fde85bbec73f329b0bff1589451f7d976df3087e6667ad60a1768da9')

package() {
	install -Dm755 *.dll *.exe         -t"$pkgdir"/usr/lib/omnisharp
	install -Dm644 OmniSharp.deps.json -t"$pkgdir"/usr/lib/omnisharp
	install -Dm755 omnisharp.sh          "$pkgdir"/usr/bin/omnisharp
	install -Dm644 license.md            "$pkgdir"/usr/share/licenses/$pkgname/license.md
}

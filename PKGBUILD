# Maintainer: Baltazár Radics <baltazar.radics@gmail.com>
pkgname=omnisharp-roslyn-bin
pkgver=1.39.2
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
sha256sums=('73bd38b648f628a069a4a7b0d90a722e3857bad52e872d851768acba3a1c6a4d'
            '784a5643fde85bbec73f329b0bff1589451f7d976df3087e6667ad60a1768da9')

package() {
	install -Dm755 *.dll *.exe         -t"$pkgdir"/usr/lib/omnisharp
	install -Dm644 OmniSharp.deps.json -t"$pkgdir"/usr/lib/omnisharp
	install -Dm755 omnisharp.sh          "$pkgdir"/usr/bin/omnisharp
	install -Dm644 license.md            "$pkgdir"/usr/share/licenses/$pkgname/license.md
}

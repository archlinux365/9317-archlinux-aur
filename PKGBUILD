# Maintainer: Emanuel Fernandes <efernandes@tektorque.com>
# Maintainer: Rodrigo Fuentealba <dev-rfc83@protonmail.com>
# Maintainer: Varakh <varakh@varakh.de>

pkgname=rapidminer-studio
pkgver=9.10.0
pkgrel=1
pkgdesc="Real data science, fast and simple. Reinvents enterprise AI so that anyone has the power to positively shape the future. Empowers data scientists and business analysts to effortlessly design predictive analytics from mashup to modeling to deployment."
arch=('any')
url="https://rapidminer.com/products/studio/"
license=('AGPL3')
depends=('java-runtime=8')
makedepends=('unzip' 'gendesk')
source=(https://releases.rapidminer.com/latest/rapidminer-studio/rapidminer-studio.zip \
        rapidminer-studio.sh)
sha256sums=('9284ed972dbc94b79aa1ca171a9450dd8c5268ef320f91e797a39d3244ce4373'
            'd3d76353c1ae15eec44c2fc638bbde98a192b70447bd467763f6d41cf24b6e5a')

prepare() {
    gendesk -f -n \
                --name "RapidMiner Studio" \
                --pkgname "$pkgname" \
                --pkgdesc "$pkgdesc" \
                --categories="Science;Education;Development"
}

package() {
    cd "$srcdir"
    mkdir -p "$pkgdir/opt/$pkgname"
    unzip -p "$srcdir/$pkgname/lib/rapidminer-studio-core-$pkgver.jar" \
             com/rapidminer/resources/rapidminer_frame_icon_128.png > "$pkgname.png"
    install -Dm644 "$pkgname.png" "$pkgdir/usr/share/pixmaps/$pkgname.png"
    cp -R "$srcdir/$pkgname/" "$pkgdir/opt/"

    mkdir -p "$pkgdir/usr/bin/"
    mkdir -p "$pkgdir/usr/share/applications/"
    mkdir -p "$pkgdir/usr/share/licenses/$pkgname"

    install -Dm655 "$srcdir/$pkgname.sh" "$pkgdir/usr/bin/$pkgname"
    install -Dm644 "$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
}

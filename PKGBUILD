# Maintainer: HurricanePootis <hurricanepootis@protonmail.com>
pkgname=creators-tf-launcher-bin
pkgver=0.2.1
pkgrel=1
pkgdesc="The community launcher from the Creators.TF project for Team Fortress 2"
arch=(x86_64)
url="https://creators.tf/launcher"
license=('MIT')
depends=('libnotify' 'libxss' 'nspr' 'nss' 'gtk3')
source=("https://github.com/ampersoftware/Creators.TF-Community-Launcher/releases/download/v$pkgver/creators-tf-launcher_"$pkgver"_amd64.deb")
md5sums=('dd0b6cd88804c0e977ef63ccd5ca0107')

prepare() {
    tar xpf data.tar.xz
}


package() {
	mkdir -p "$pkgdir/opt"
	mkdir -p "$pkgdir/opt/Creators.TF Launcher"	
	cp -a "$srcdir/opt/Creators.TF Launcher/." "$pkgdir/opt/Creators.TF Launcher"
	
	install -Dm644 "${srcdir}/usr/share/applications/creators-tf-launcher.desktop" \
        "${pkgdir}/usr/share/applications/creators-tf-launcher.desktop"
	
	install -Dm644 "${srcdir}/usr/share/icons/hicolor/0x0/apps/creators-tf-launcher.png" \
        "${pkgdir}/usr/share/icons/hicolor/symbolic/apps/creators-tf-launcher.png"

	
		
}


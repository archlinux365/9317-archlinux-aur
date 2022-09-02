# Maintainer: Isaac Ruben <isaac at rubenfamily dot com>
pkgname='pathplanner-bin'
pkgver="v2022.1.1"
pkgrel=3
pkgdesc="A simple yet powerful motion profile generator for FRC robots"
arch=("x86_64")
url="https://github.com/mjansen4857/pathplanner"
license=('MIT')
provides=("pathplanner")
source=("$pkgname-$pkgver.zip::https://github.com/mjansen4857/pathplanner/releases/download/$pkgver/PathPlanner-linux.zip")
sha256sums=('1d660916c8be468bd3e652450bb73bfdb03359a6c32289114f1643f5fb4a7f64')

prepare() {
	{
		echo "[Desktop Entry]"
		echo "Version=1.5"
		echo "Type=Application"
		echo "Name=PathPlanner"
		echo "Exec=/usr/bin/pathplanner"
		echo "Categories=Development"
		echo "Keywords=FRC;Motion Profile;Path Planning"
		echo "Icon=/opt/$pkgname/data/flutter_assets/images/icon.png"
	} >> PathPlanner.desktop
}

package() {
	cd "$srcdir"
	# make the needed directories
	mkdir -p "$pkgdir/opt/$pkgname"
	mkdir -p "$pkgdir/usr/bin"
	mkdir -p "$pkgdir/usr/share/applications"

	# copy over program files to opt
	cp -r "$srcdir/data" "$pkgdir/opt/$pkgname"
	cp -r "$srcdir/lib" "$pkgdir/opt/$pkgname"
	cp "$srcdir/pathplanner" "$pkgdir/opt/$pkgname"

	# create symlink to executable
	ln -s "/opt/$pkgname/pathplanner" "$pkgdir/usr/bin/pathplanner"

	# copy over desktop file
	cp "$srcdir/PathPlanner.desktop" "$pkgdir/usr/share/applications/PathPlanner.desktop"
}

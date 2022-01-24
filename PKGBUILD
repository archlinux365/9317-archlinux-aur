# Maintainer:  TechVio <68242352+techvio1@users.noreply.github.com>
# Contributor: chn <g897331845@gmail.com>
# Contributor: Hunter Wittenborn <git@hunterwittenborn.me>
# Contributor: Alfin Bakhtiar Ilhami <alfin at nuclea dot id>
# Contributor: Jan-Tarek Butt <tarek at ring0 dot de>

pkgname=bootstrap-studio
pkgver=5.9.1
pkgrel=1
pkgdesc="Bootstrap Studio is a powerful tool which web developers and designers use to create layouts and fully functional websites using the Bootstrap framework."
arch=("x86_64")
license=("custom")
url="https://bootstrapstudio.io/"

source=("https://bootstrapstudio.io/releases/desktop/${pkgver}/Bootstrap%20Studio.AppImage"
				"bstudio.desktop")
sha256sums=('cd2a3aab2bcd2e459bf1f2a9ed77451c7062604f22055caf2da83221d7fe3a16'
            'e1c1b0d4b24658fc0ead611cb002dcde431e30256cb8fd0dffb3cfc76f24db84')
prepare() {
    # Extract AppImage
    echo "Extracting AppImage..."
	mv "Bootstrap%20Studio.AppImage" "Bootstrap Studio.AppImage"
	chmod +x "Bootstrap Studio.AppImage"
	./"Bootstrap Studio.AppImage" --appimage-extract &> /dev/null
}

package() {
	# Copy package files
        echo "Copying package files..."
	mkdir -p "${pkgdir}/opt/bootstrap-studio"
	cp -Lr "${srcdir}/squashfs-root" "${pkgdir}/opt/bootstrap-studio"
	# Set perms
        chmod a+rx "${pkgdir}/opt/bootstrap-studio/" -R

	# Add package to /usr/bin/
	mkdir -p "${pkgdir}/usr/bin"
        printf '#!/bin/bash\n\n/opt/bootstrap-studio/squashfs-root/AppRun' | tee "${pkgdir}/usr/bin/bootstrap-studio" &> /dev/null
        chmod +x "${pkgdir}/usr/bin/bootstrap-studio"

	# Copy .desktop file
	mkdir -p "${pkgdir}/usr/share/applications"
	cp -Lr "${srcdir}/bstudio.desktop" "${pkgdir}/usr/share/applications/"

	# Copy icons
	mkdir -p "${pkgdir}/usr/share/icons/hicolor/"{128x128,192x192,256x256,512x512}"/apps/"
	for i in 128x128 192x192 256x256 512x512; do
		cp -Lr "${srcdir}/squashfs-root/usr/share/icons/hicolor/0x0/apps/bstudio.png" "${pkgdir}/usr/share/icons/hicolor/${i}/apps/"
	done
}

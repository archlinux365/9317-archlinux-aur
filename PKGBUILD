# Maintainer: X0rg

pkgname=tumbler-extra-thumbnailers
pkgver=4
pkgrel=1
pkgdesc="Customized thumbnailers for Tumbler"
arch=('any')
url="https://docs.xfce.org/xfce/thunar/tumbler"
license=('unknown')
depends=('imagemagick')
optdepends=('djvulibre: thumbnails for DjVu files'
	'mcomix: thumbnails for comic book archives')
source=('dds.thumbnailer'
	'djvu.thumbnailer'
	'folder-thumbnailer.sh'
	'folder.thumbnailer'
	'text-thumbnailer.sh'
	'text.thumbnailer'
	'comicthumb.thumbnailer'
	'webp.thumbnailer')
sha512sums=('c4f484f78b28d51e167d1e861c63c81aea623539fcaae7433d13b3fc8c0ccf5f9dbe5a760fcf3310490f1df3c31c1c1368e63d35604658dabe403216f9bf3e13'
            '0a9143b7d40e310c78ae8a2b651e0548d7ae32dbf8326e336be337851b0fdec40c5ac2509b3fce2e02d806cfb790bb0796edcb624aa0d6934d6e2d799c7b5d09'
            '3f3ebb4675f41fec82239b5c782d86162a99f92b37c6274ece459b4d2e53f0133606ebfbbac7dbed8e12d9c91590eb667116f6d71449f12e231517d75fe41141'
            'e62c5407390861affdcaf5029f2d7c28d1e623d6361d37a28af0e36cd2dec5c3226d747c608b8b88c5e4deb00197d0d35656963ade5e3a160b0cc29bfcf31bac'
            '07e7abf95879bbb8d15644ad4db07f1b1818e0b01d358b1fb4657991e4873bfe64a3613934a6135af618d793f13178b659297fa182cc3d3aa0ff99ebca90fd99'
            'd98b04b51c31678afe4b9dd13d112fd417cfa84382e91ca3ac9113fcdb33b418649b93dbbc69277f901c18ff199f843cd062aa6127a31052e2c679539f99c8e8'
            'a4af8c151aee03586df91aa02d5cf0ae60426ccf7e00988a2fee1c8410c2d54536e5016b1e3fa86b66e3a0a554eec6e58a318b171cf9f8e8fd4b1ec9055484dd'
            '01faadd6ff09eb60e723d0e84b5d6da5824c5702cb5285a4685ef299a95bcea13f5ae050def87890c87bad8b59152b3fc3e5c6ee9971ee90daf1102be83c21b2')

package() {
	for thumbnailer in *.thumbnailer; do
		install -Dvm644 "$thumbnailer" "$pkgdir/usr/share/thumbnailers/$thumbnailer"
	done

	for script in *.sh; do
		install -Dvm755 "$script" "$pkgdir/usr/bin/$(basename "$script" .sh)"
	done
}

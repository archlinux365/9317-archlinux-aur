# Maintainer: Yangtse Su <yangtsesu@gmail.com>

pkgname=alibaba-puhuiti
pkgver=2.0
pkgrel=1
pkgdesc="Alibaba PuHuiTi fonts"
arch=(any)
license=(custom)
url=https://ics.alibaba.com/font/alibaba-sans
makedepends=(unzip)
provides=(alibaba-sans)
conflicts=(alibaba-sans)
source=("$pkgname-$pkgver.zip::https://ics-static.oss-cn-hangzhou.aliyuncs.com/static/ucan/alibaba_font${pkgver}.zip"
         75-alibaba.conf)
sha512sums=('b4b9514375dd1a7717c675e87caaa87a8a9ebc549ba1275822cb0a7e3a8d0f62d3a793777467fffe1c98738a11f317c4cad2678703a74301dda0dd31892d3f47'
            'f05f3014ae38f4fb59d3bb06f52e05b8e122e5ba124bd166474231877346a7aeb107860a4b8304493197d43101b03a1bff6c1d79c7dc495377bb63a94cbb0be6')

prepare () {
	local winzipfile='阿里巴巴普惠体2(1).0字体包/PuHuiTi2.0 for Win 压缩.zip'
	local maczipfile='阿里巴巴普惠体2(1).0字体包/PuHuiTi2.0 for Mac 压缩.zip'
	unzip -q -C -o -j "$winzipfile" '*.ttf' -d ttf
	unzip -q -C -o -j "$maczipfile" '*.pdf' -d pdf
	mv 'pdf/阿里巴巴普惠体2.0版法律声明.pdf' pdf/license.pdf
}

package () {
	install -dm755 "${pkgdir}/usr/share/licenses/${pkgname}"
	install -Dm644 pdf/license.pdf "${pkgdir}/usr/share/licenses/${pkgname}"

	install -dm755 "${pkgdir}/usr/share/fonts/alibaba/${pkgname}"
	install -Dm644 ttf/*.ttf "${pkgdir}/usr/share/fonts/alibaba/${pkgname}"

	install -dm755 "${pkgdir}/usr/share/fontconfig/conf.avail"
	install -Dm644 75-alibaba.conf "${pkgdir}/usr/share/fontconfig/conf.avail"

	install -dm755 "${pkgdir}/usr/share/fontconfig/conf.default"
	ln -nsf ../conf.avail/75-alibaba.conf \
		"${pkgdir}/usr/share/fontconfig/conf.default/75-alibaba.conf"
}

# Maintainer: Adrian Perez de Castro <aperez@igalia.com>
pkgbase=ttf-inria-font
pkgdesc='Type family designed for communication of Inria'
pkgname=(ttf-inria-sans ttf-inria-serif)
pkgver=1.200+1
# Commit identifier which corresponds to the version tag
_commit=8caa79ae10c11bac0fc08654cc379d276b8ee235
pkgrel=1
url=https://github.com/BlackFoundryCom/InriaFonts
arch=(any)
license=(custom:OFL)
source=(
	"${url}/raw/${_commit}/OFL.txt"
	"${url}/raw/${_commit}/fonts/InriaSans/TTF/InriaSans-Bold.ttf"
	"${url}/raw/${_commit}/fonts/InriaSans/TTF/InriaSans-BoldItalic.ttf"
	"${url}/raw/${_commit}/fonts/InriaSans/TTF/InriaSans-Italic.ttf"
	"${url}/raw/${_commit}/fonts/InriaSans/TTF/InriaSans-Light.ttf"
	"${url}/raw/${_commit}/fonts/InriaSans/TTF/InriaSans-LightItalic.ttf"
	"${url}/raw/${_commit}/fonts/InriaSans/TTF/InriaSans-Regular.ttf"
	"${url}/raw/${_commit}/fonts/InriaSerif/TTF/InriaSerif-Bold.ttf"
	"${url}/raw/${_commit}/fonts/InriaSerif/TTF/InriaSerif-BoldItalic.ttf"
	"${url}/raw/${_commit}/fonts/InriaSerif/TTF/InriaSerif-Italic.ttf"
	"${url}/raw/${_commit}/fonts/InriaSerif/TTF/InriaSerif-Light.ttf"
	"${url}/raw/${_commit}/fonts/InriaSerif/TTF/InriaSerif-LightItalic.ttf"
	"${url}/raw/${_commit}/fonts/InriaSerif/TTF/InriaSerif-Regular.ttf"
)
sha512sums=('92efc85b7c818f69fb002018f22ed7a41f378fd2facc7767a4b80b6e486c5bc8db330746ef1b56c46cc1b8f60fedd9e07bebfc6f76416b5aec6bd1046ba3a7e9'
            '9f887d218164c968707d12b415d15563c00e643eecec0c879e3be14967b3032692d6a1218f861d32957ffc4b67bf910f57020fe3d1619318f6a34ee3139752f2'
            '17a2d83e18ea16da7e28a8bf49fffd4ab538e128b9e0405bb61cd9ed79561bd70ea1e032c9748cba3e09d12b1170a3b2417a9d1b167d4d86dab431a46192b0e0'
            '921efedcd99fbc7b1f6ec04c5e744b8f9dd76690f6bb8bcda6d230da97dbf818cdde3a17c17b40ad20f80678136e1713ef39d17a40897a8d073b509d69b2df2a'
            '960908282cbb2fa5a7a12690773acd89d52d5c776b1b3671b82e168ccf86185d2f6015f671426bc55986786a5de4a9e13699fc465e13f24f4443f023594bf3ad'
            'e9dd73af14e81c83a560b2ef05b5d5a8f04f53c39c1811e51d85069cda7ed1be5874c8dce83592ec5198a7e8d6dc526d3c18695f9a2e3a9d75d65577fea8de31'
            'd22440b07ae0c73563aa4adb54f113936df8fceb1ca60a6d696e7ab0b0637b42a507c0d904350481ce8fc527461acf3ff8655dde427fca2ce8d003960c3fb6bc'
            'c866bca9130d62db45dc39ec0cc341f7e7167fd1dfed6e7eaf9845c7f17e6c13d70a779fa3d24604094e5f89a987166a0f58e0a90031c17700ed017e59a8bc0f'
            'a3fe17f140b3254f16067d0347e3c4f1f0dd459b2438e7f7734eac892ce4a3712f64bf9252723bcb7879afb2edfdb7ded0b7372f2bcae73f1caacb72fe5e562f'
            'f9a5921b66558081cfa03dbc32ad55eb782297f810b9a5cea828493c883257388f3b385ed3d58bb4857b4f4299e54db3539c8cbb5651ea302a62ef992586e551'
            '66f7e5be98d6716b179d6f62c2c257ee69bb01cf98cd677dbc5e5176ad75717bb0aa9053ad8c864766737970523f107ed584edec5066bd97792d5a28edcee71b'
            '1750a858d267904694dc6baac7b4e3be07d01289cb467ea6e0de3cd8959335cf7f5c7ec3933f2d270e16cf650fe6580af7d770c02dd6f400d078e7b152cc03b0'
            '0a51ac408b9047779d72c553019be4ffbac9f1503a30df4ec617b8126dc2a7be9b7cd9c09e963f2ffb4375854f7c150e3b419b30f0c443b3a5df3323f307c00f')

build () {
	:
}

_package_common () {
	install -Dm644 -t "${pkgdir}/usr/share/fonts/${pkgname}" "${srcdir}"/$1-*.ttf
	install -Dm644 -t "${pkgdir}/usr/share/licenses/${pkgname}" "${srcdir}/OFL.txt"
}

package_ttf-inria-sans () {
	_package_common InriaSans
}

package_ttf-inria-serif () {
	_package_common InriaSerif
}

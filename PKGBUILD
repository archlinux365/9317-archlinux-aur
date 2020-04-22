# Maintainer: pancho horrillo <pancho at pancho dot name>

_name=kapow
_pkgname="${_name}bang"
pkgname="${_pkgname}-bin"
pkgver=0.5.1
pkgrel=2
pkgdesc='If you can script it, you can HTTP it.'
arch=('x86_64' 'i686' 'aarch64' 'arm6h')
url='https://github.com/BBVA/kapow'
license=('Apache')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
_source="$url/releases/download/v$pkgver/${_name}_${pkgver}_linux"
source=("$url/releases/download/v$pkgver/${_name}-${pkgver}-SHA512SUMS.GPG")
source_x86_64=("${_name}_x86_64::${_source}_amd64")
source_i686=("${_name}_i686::${_source}_386")
source_aarch64=("${_name}_aarch64::${_source}_arm64")
source_arm6h=("${_name}_arm6h::${_source}_armv6")
sha512sums=('d195715efd5aa79bfaed53bef7ce247dd8360512b24c9d03e0241bafed50dbb5aa9869dd4cd62a8da3dd2fc7414dabf642ae1dbeba7bb26d8e3375c8ccb36bc0')
sha512sums_x86_64=('3a6209d0eda992c63a73b02b79689608cc686de0de43b8d22f16164cc8f8bedc98f95d04bb5274213098e91bdcd6129192f272e5f70bd62064a7f03eee7335a9')
sha512sums_i686=('1028c21fbfc30cefc30d69415b841ba2f3575e15b6895c09f8c9b7424635fc1d06bcfc6ee2c0c896bd08a111b25afafe615dd6208934b97d7ddf91e9a585be00')
sha512sums_aarch64=('61dced97b7885cd9a4aea35fd1ba033192f80090da80b2739b60b4b0694e46769e7de8d589e1b3be38bd61c2c3df3869f7ef11f39de254af451ac70979ddcc34')
sha512sums_arm6h=('8be291c1ae0e75a604a09b51d0bc8682a377d8c0da18192576be57dee9f3e9e25882df56bafbb5dc7078b5c8877f8cbb81430ae0b1233a3ef179562510353516')

validpgpkeys=(
	'1892F073BD1E37829A8839270D7E842B63AADC23'	# Kapow! Release Bot (v0.5.1) <release-bot@kapow>
)

check() {
	gpg --verify "${_name}-${pkgver}-SHA512SUMS.GPG"
	# TODO: verify that the downloaded file's checksum matches the
	# kapow-0.3.0-SHA512SUMS.GPG file
}

package() {
	install -Dm755 "${_name}_$CARCH"	"$pkgdir/usr/bin/${_name}"
}

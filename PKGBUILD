# Maintainer: Tom Whitwell <tom@whi.tw>
pkgname=aws-vault-git
pkgver=5.3.0
pkgrel=1
pkgdesc="A vault for securely storing and accessing AWS credentials in development environments"
arch=('i686' 'x86_64')
url="https://github.com/99designs/aws-vault"
license=('MIT')
makedepends=('git' 'go')
optdepends=('zenity: graphical prompt')
provides=("aws-vault=${pkgver}")
conflicts=('aws-vault')
source=("${pkgname}"::"git+https://github.com/99designs/aws-vault")
sha512sums=('SKIP')

pkgver() {
	pushd "${srcdir}/${pkgname}" >/dev/null
	{
		git describe --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g' | sed 's/^v\(.*\)/\1/'
	}
	popd >/dev/null
}

build() {
	msg2 'building aws-vault'
	pushd "${srcdir}/${pkgname}" >/dev/null
	{
		CGO_ENABLED=0 go build \
			-trimpath \
			-ldflags "-extldflags $LDFLAGS" \
			-ldflags="-X main.Version=v$pkgver" \
			-o $pkgname .
	}
	popd >/dev/null
}

check() {
	msg2 'aws-vault binary'
	pushd ${srcdir}/${pkgname} >/dev/null
	{
		./aws-vault-git --version
	}
	popd >/dev/null
}

package() {
	msg2 'aws-vault binary'
	pushd "${srcdir}/${pkgname}" >/dev/null
	{
		install -Dm755 "aws-vault-git" "${pkgdir}/usr/bin/aws-vault"
		install -Dm644 "LICENSE" "${pkgdir}/usr/share/licenses/aws-vault-git/LICENSE"
	}
	popd >/dev/null

	msg2 'completion files'
	pushd "${srcdir}/${pkgname}" >/dev/null
	{
		install -Dm644 "completions/bash/aws-vault" "${pkgdir}/usr/share/zsh/site-functions/aws-vault"
		install -Dm644 "completions/zsh/_aws-vault" "${pkgdir}/usr/share/bash-completion/completions/_aws-vault"
	}
	popd >/dev/null
}

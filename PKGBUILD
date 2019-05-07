# Maintainer: David Birks <david@tellus.space>

pkgname=jx
pkgver=2.0.95
pkgrel=1
pkgdesc="Command line tool for working with Jenkins X: automated CI/CD for Kubernetes"
arch=("x86_64")
url="https://github.com/jenkins-x/jx"
license=('Apache')
depends=('go>=1.11.4')
source=("https://github.com/jenkins-x/jx/archive/v${pkgver}.tar.gz")
sha256sums=('36dcde28e085465532ac9700593dc2058f64e041c3efadb4b852c7064f82d4c6')

prepare() {
    # Clean up any extracted files from previous installation
    rm -rf "github.com/jenkins-x/jx"
}

build() {
    export GOPATH="${srcdir}"
    mkdir -p "github.com/jenkins-x"
    mv "jx-${pkgver}" "github.com/jenkins-x/jx"
    cd "github.com/jenkins-x/jx"
    VERSION=${pkgver} make build
}

package() {
    install -Dm 755 "${srcdir}/github.com/jenkins-x/jx/build/jx" "${pkgdir}/usr/bin/jx"

    # Populate bash and zsh completions
    install -dm 755 "${pkgdir}/usr/share/bash-completion/completions"
    install -dm 755 "${pkgdir}/usr/share/zsh/site-functions"
    "${pkgdir}/usr/bin/jx" completion bash > "${pkgdir}/usr/share/bash-completion/completions/jx"
    "${pkgdir}/usr/bin/jx" completion zsh >  "${pkgdir}/usr/share/zsh/site-functions/_jx"
}


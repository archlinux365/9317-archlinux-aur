# Maintainer: Ricardo (XenGi) Band <email@ricardo.band>
# Contributor:
pkgname=sensu
_pkgname=sensu-go
pkgver=2.0.0beta4.1
_pkgver=2.0.0-beta.4-1
pkgrel=1
pkgdesc="A monitoring framework that aims to be simple, malleable and scalable."
arch=('x86_64' 'i686' 'armv6h' 'armv7h' 'aarch64')
url='https://sensu.io'
license=('MIT')
makedepends=('go' 'nodejs' 'yarn' 'git')
source=("git+https://github.com/${pkgname}/${_pkgname}#tag=${_pkgver}"
        "sensu.sysusers"
        "sensu.tmpfiles")
md5sums=('SKIP'
         '9181bba06fbc17b8596e3345abd0d97c'
         'dddfcec286ee7b0f6241673c4136a12c')
_gourl=github.com/sensu/sensu-go

warn_build_references() {
    : # I like __FILE__ and don't consider build references to be a problem
}

prepare(){
  export GOPATH="${srcdir}/gopath"

  mkdir -p "$GOPATH/src/${_gourl}"
  rm -rf "$GOPATH/src/${_gourl}"
  mv "${_pkgname}" "$GOPATH/src/${_gourl}"
}

build() {
  export GOPATH="${srcdir}/gopath"

  cd ${GOPATH}/src/${_gourl}
  ./build.sh build_cli
  ./build.sh build_agent
  ./build.sh build_backend
}

package() {
  install -Dm755 "gopath/src/${_gourl}/bin/sensuctl" "$pkgdir/usr/bin/sensuctl"
  install -Dm755 "gopath/src/${_gourl}/bin/sensu-agent" "$pkgdir/usr/bin/sensu-agent"
  install -Dm755 "gopath/src/${_gourl}/bin/sensu-backend" "$pkgdir/usr/bin/sensu-backend"

  install -Dm644 "gopath/src/${_gourl}/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

  install -Dm644 "gopath/src/${_gourl}/packaging/files/backend.yml.example" "$pkgdir/etc/sensu/backend.yml.example"
  install -Dm644 "gopath/src/${_gourl}/packaging/files/agent.yml.example" "$pkgdir/etc/sensu/agent.yml.example"

  install -Dm644 "gopath/src/${_gourl}/packaging/services/sensu-backend/systemd/etc/systemd/system/sensu-backend.service" "$pkgdir/usr/lib/systemd/system/sensu-backend.service"
  install -Dm644 "gopath/src/${_gourl}/packaging/services/sensu-agent/systemd/etc/systemd/system/sensu-agent.service" "$pkgdir/usr/lib/systemd/system/sensu-agent.service"

  install -Dm644 "sensu.sysusers" "$pkgdir/usr/lib/sysusers.d/$pkgname.conf"
  install -Dm644 "sensu.tmpfiles" "$pkgdir/usr/lib/tmpfiles.d/$pkgname.conf"
}

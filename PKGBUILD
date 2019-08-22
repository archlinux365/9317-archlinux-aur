# Maintainer: Moses Narrow <moe_narrow@use.startmail.com>
# Maintainer: Rudi [KittyCash] <rudi@skycoinmail.com>
projectname=skycoin
pkgname=skywire-mainnet
pkgname1=skywire
pkgdesc="Skywire: Building a New Internet. Skycoin.net"
pkgver='autogenerated'
pkggopath="github.com/$projectname/$pkgname1"
pkgrel=1
arch=('any')
url="https://${pkggopath}"
license=()
makedepends=(dep git go gcc)
provides=('skywire')
conflicts=('skywire')
source=("git+${url}.git#branch=${BRANCH:-mainnet}")
sha256sums=('SKIP')

export GOOS=linux
export GOPATH="$srcdir"
export GOROOT="$builddir"
export GOBIN="$GOROOT"/bin
export GOROOT_FINAL=/usr/lib/go

export CGO_ENABLED=1

case "$CARCH" in
x86)      export GOARCH="386" GO386="387" ;;
x86_64)   export GOARCH="amd64" ;;
arm*)     export GOARCH="arm" ;;
armel)    export GOARCH="arm" GOARM="5" ;;
armhf)    export GOARCH="arm" GOARM="6" ;;
armv7)    export GOARCH="arm" GOARM="7" ;;
armv8)    export GOARCH="arm64" ;;
aarch64)  export GOARCH="arm64" ;;
mips)     export GOARCH="mips" ;;
mips64)   export GOARCH="mips64" ;;
mips64el) export GOARCH="mips64le" ;;
mipsel)   export GOARCH="mipsle" ;;
*)        return 1 ;;
	esac

pkgver() {
	cd "$srcdir/$pkgname1"
	local date=$(git log -1 --format="%cd" --date=short | sed s/-//g)
	local count=$(git rev-list --count HEAD)
	local commit=$(git rev-parse --short HEAD)
	echo "$date.${count}_$commit"
}

prepare() {
  # https://wiki.archlinux.org/index.php/Go_package_guidelines
  mkdir -p $srcdir/go/src/${pkggopath//$pkgname1/} "$srcdir"/go/bin
  ln -rTsf $srcdir/$pkgname1 $srcdir/go/src/$pkggopath
  cd $srcdir/go/src/$pkggopath/
  git checkout mainnet
  git submodule --quiet update --init --recursive

  export GOPATH="$srcdir"/go
  export GOBIN=${GOPATH}/bin
  export PATH=${GOPATH}/bin:${PATH}
  msg2 'installing go dependencies'
  dep init
  dep ensure
}

build() {
  export GOPATH=$srcdir/go
  export GOBIN=${GOPATH}/bin
  export PATH=${GOPATH}/bin:${PATH}
  cd $srcdir/go/src/$pkggopath
  make build
  make install
  #user must generate default json config by running this script after install
	msg 2 'creating setup script; please run skywire-seup after installation'
  echo -e '#!/bin/bash \n # this script sets up skywire after installation \n mkdir -p ~/skywire \n sudo chmod 777 ~/skywire \n sudo chmod 777 ~/apps \n cd ~/ \n ln -s /usr/lib/skycoin/skywire/apps ~/ \n skywire-cli node gen-config -r \n skywire-manager-node gen-config -r \n skywire-manager-node \n #skywire-node skywire-config.json' > $srcdir/go/bin/$pkgname1-setup
  chmod +x $srcdir/go/bin/$pkgname1-setup
}

package() {
    options=(!strip staticlibs)
  #create directory trees
  mkdir -p $pkgdir/usr/bin
  mkdir -p $pkgdir/usr/lib/$projectname/go/bin
  mkdir -p $pkgdir/usr/lib/$projectname/$pkgname1/
  #restate go envs
  export GOPATH=$pkgdir/usr/lib/$projectname/go
  export GOBIN=$pkgdir/usr/lib/$projectname/go/bin
	#putting the sources in /usr/lib/skycoin/skywire
	cp -r $srcdir/$pkgname1/ $pkgdir/usr/lib/$projectname/
  msg2 'installing binaries'
  skybins="$srcdir"/go/bin
  #ln -rTsf $skybins/manager-node $skybins/$pkgname1-manager-node
  skywirebins=$( ls $skybins )
  for i in $skywirebins; do
    install -Dm755 $srcdir/go/bin/$i $pkgdir/usr/lib/$projectname/go/bin/$i
    ln -rTsf $pkgdir/usr/lib/$projectname/go/bin/$i $pkgdir/usr/bin/$i
    chmod 755 $pkgdir/usr/bin/$i
  done
  msg2 'please run skywire-setup after installing this package'
}

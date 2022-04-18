# Maintainer: Vyacheslav Konovalov <vk@protonmail.com>
# Contributor: Echizen Ryoma <echizenryoma.zhang@gmail.com>

pkgname=opensnitch
pkgver=1.5.1
pkgrel=1
pkgdesc='GNU/Linux port of the Little Snitch application firewall'
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
url='https://github.com/evilsocket/opensnitch'
license=('GPL3')
depends=(
    'libnetfilter_queue'
    'libpcap'
    'python-grpcio'
    'python-protobuf'
    'python-slugify'
    'python-pyqt5'
    'abseil-cpp'
    'python-pyinotify'
    'python-notify2'
)
makedepends=(
    'go'
    'python-grpcio-tools'
    'python-setuptools'
    'qt5-tools'
)
optdepends=(
    'logrotate: for logfile rotation support'
    'hicolor-icon-theme: for gui'
    "python-pyasn: display IP's network name"
)
backup=(
    'etc/opensnitchd/default-config.json'
    'etc/opensnitchd/system-fw.json'
)
source=(
    "$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz"
)
sha512sums=(
    '06ed68acf34acb519e1942badf38c9686e60b904d479e73ff4839c0ae0cde780c1a4b4c3419396d276e7836de52805a677c19f41ced7bb9ddaf90115e696816f'
)

prepare() {
    cd "$srcdir/opensnitch-$pkgver"
    echo "patching daemon/opensnitchd.service"
    sed -i 's|local/bin|bin|g' daemon/opensnitchd.service

    python_dist_path=$(python3 -c 'import sysconfig; print(sysconfig.get_paths()["purelib"])')
    echo "patching ui/bin/opensnitch-ui"
    sed -i "s|/usr/lib/python3/dist-packages/|${python_dist_path}/|g" ui/bin/opensnitch-ui
    echo "patching ui/opensnitch/utils.py"
    sed -i "s|/usr/lib/python3/dist-packages/data/ipasn_20140513_v12.dat.gz|${python_dist_path}/pyasn/data/ipasn_20140513_v12.dat.gz|g" ui/opensnitch/utils.py
    sed -i "s|/usr/lib/python3/dist-packages/data/asnames.json|${python_dist_path}/pyasn/data/asnames.json|g" ui/opensnitch/utils.py
}

build() {
    cd "$srcdir/opensnitch-$pkgver"

    export GOPATH="$srcdir/gopath"
    export CGO_CPPFLAGS="${CPPFLAGS}"
    export CGO_CFLAGS="${CFLAGS}"
    export CGO_CXXFLAGS="${CXXFLAGS}"
    export CGO_LDFLAGS="${LDFLAGS}"
    export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=mod"

    export PATH="${GOPATH}/bin:${PATH}"

    go install github.com/golang/protobuf/protoc-gen-go@latest
    go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest

    echo "$(whereis protoc-gen-go)"
    echo "$(whereis protoc-gen-go-grpc)"

    pushd proto
    make
    popd

    pushd daemon
    make
    popd

    pushd ui
    make translations
    pyrcc5 -o opensnitch/resources_rc.py opensnitch/res/resources.qrc
    sed -i 's/^import ui_pb2/from . import ui_pb2/' opensnitch/ui_pb2*
    python setup.py build
    rm -rf build/lib/tests
    popd

    go clean -modcache
}

package() {
    cd "$srcdir/opensnitch-$pkgver"
    install -Dm755 daemon/opensnitchd -t "$pkgdir/usr/bin"
    install -Dm644 daemon/opensnitchd.service -t "$pkgdir/usr/lib/systemd/system"
    install -dm755 "$pkgdir/etc/opensnitchd/rules"
    install -Dm644 daemon/default-config.json -t "$pkgdir/etc/opensnitchd"
    install -Dm644 daemon/system-fw.json -t "$pkgdir/etc/opensnitchd"
    install -Dm644 debian/opensnitch.logrotate "$pkgdir/etc/logrotate.d/opensnitch"

    pushd ui
    python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
    popd
}

#Maintainer: jnanar <info@agayon.be>

pkgname='sat-libervia-hg'
_realname=libervia
_pyjamasname=pyjamas
venv_pyjama='venv'
pkgver=0.6.1.r1134.28789926852a
_version=0.6.1
pkgrel=1
url="http://salut-a-toi.org/"
arch=('any')
depends=('python2' 'python2-txjsonrpc-git' 'python2-jinja' 'python2-shortuuid-git' 'sat-media-hg' 'sat-xmpp-hg' 'sat-templates-hg' 'python2-zope-interface' 'python2-pyopenssl' 'python2-autobahn' 'dbus')
makedepends=('python2-setuptools' 'python2-virtualenv' 'mercurial')
license=('AGPL3')
install=$pkgname.install
source=('https://ftp.goffi.org/pyjamas/pyjamas.tar.bz2'
        "hg+https://repos.goffi.org/libervia"
        )

md5sums=('a0d6344951153f79302eb2b6fd08376e'
         'SKIP'
         )

options=('!strip')

pkgver() {
    cd "$_realname"
    printf "$_version.r%s.%s" "$(hg identify -n)" "$(hg identify -i)"
}

pyjamas_build(){
    cd $_pyjamasname
    python2.7 bootstrap.py
}

build() {
    pyjamas_build
    cd "$srcdir/$_realname"
    PYJSBUILD_PATH="$srcdir/pyjamas/bin/"
    PATH=$PATH:$PYJSBUILD_PATH LIBERVIA_INSTALL=arch NO_PREINSTALL_OPT=nopreinstall SAT_INSTALL=nopreinstall python2 setup.py install --root="$srcdir/fakeinstall/" --prefix=/usr --optimize=1
	# Compile pyjs
    mkdir -p html
	mkdir -p build/tmp_dir
	cd browser
    $PYJSBUILD_PATH/pyjsbuild libervia_main.py  -d -I /usr/lib/python2.7/site-packages/ --no-compile-inplace -o ../html
    $PYJSBUILD_PATH/pyjsbuild libervia_test.py -d -I /usr/lib/python2.7/site-packages/ --no-compile-inplace -o ../html
    cp -r $srcdir/$_realname/{$_realname,browser,twisted} $srcdir/fakeinstall/usr/lib/python2.7/site-packages/libervia
}

package(){
    pkgdesc="Salut à Toi, multi-frontends multi-purposes XMPP client (Web interface)"
    provides=('sat-libervia')
    conflicts=('sat-libervia')
    cd "$pkgdir"
    install -dm755 usr/bin
    install -dm755 usr/lib/python2.7/site-packages
    install -dm755 usr/share/doc
    install -dm755 usr/share/libervia
    install -dm755 usr/lib/python2.7/site-packages/twisted/plugins
    cd "$srcdir/fakeinstall"
    cp "$srcdir/$_realname/bin/libervia" "$pkgdir/usr/bin/libervia"
    mv -v usr/share/doc/libervia "$pkgdir/usr/share/doc/"
    mv -v usr/share/libervia "$pkgdir/usr/share/libervia/"
    mv -v usr/lib/python2.7/site-packages/libervia "$pkgdir/usr/lib/python2.7/site-packages/"
    mv -v usr/lib/python2.7/site-packages/twisted/plugins/* "$pkgdir/usr/lib/python2.7/site-packages/twisted/plugins/"
    mv -v "$srcdir/$_realname/html" "$pkgdir/usr/share/libervia/"
    mv -v "$srcdir/$_realname/themes" "$pkgdir/usr/share/libervia"
 }

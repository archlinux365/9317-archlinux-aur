# Maintainer: Will Adams <info at clementlumber dot com>
# Previous Maintainer: T. Jameson Little <t.jameson.little at gmail dot com>
# Previous Maintainer: Stephen Michael <ihateseptictanks at gmail dot com>
# Previous Maintainer: Simon Tunnat <simon+aur@tunn.at>
# Contributor: Bartlomiej Piotrowski <nospam@bpiotrowski.pl>

# during times when two firefox-esr versions overlap, if environment variable 
# $FIREFOX_ESR_BIN_PREFER_OLDER is set, the older version will be built.
# e.g., on 2016.05.01 versions 38.8.0 and 45.1.0 were both simulaneously 
# available/supported by mozilla.  

pkgname=firefox-esr-bin
_pkgname=${pkgname/-bin/}
pkgver=45.1.1
pkgrel=1
pkgdesc='Standalone web browser from mozilla.org - Extended Support Release'
url='http://www.mozilla.org/en-US/firefox/organizations/'
arch=('i686' 'x86_64')
depends=('gtk2' 'dbus-glib' 'desktop-file-utils' 'libxt' 'mime-types' 'nss' 'shared-mime-info' 'gconf')
optdepends=('libgnome: fixes file association/default browser issues on GNOME desktops.'
			'gstreamer0.10: HTML5 video'
			'gstreamer0.10-good-plugins: h.264 video'
			)
provides=('firefox=45')
license=('MPL' 'GPL' 'LGPL')
install=$_pkgname.install
sha512sums=('ac2f7b300b63864121b3dd0a513aef1e82a15a127e338365ecd18c634f77d27d3a5a95747692482a35ba6d2dcbf3bea2afd8f1719b8015803eec9b7922a8e529'
            '2c2c70cb48202d47e7d3b376b8181e7398b23bb83f5da7724f6290709fe1ff3dca9d9c5666310982569beeeba39ec2d55a4372819f9914c79c6583de7eec06ba'
            '8942b11a7cb3761de1185491397185743adf49daa27a2806d14a328a2be8e2cb566c71dc6449016549cb3bd0d328cfe15944490be749a4add213194f6153c3d0')
[[ "$CARCH" == "i686" ]] && sha512sums[0]='49fc686b6906f83c5a38874935d8efa4742184802918f2f2a8ef92e1aeeb3fe01929a4713f8cb384c233b162c9da59b96a3418ea62e1200b294ae0b3869c8e5a'
if [[ -n "$FIREFOX_ESR_BIN_PREFER_OLDER" ]]; then
    pkgver=38.8.0
    provides=('firefox=38')
    sha512sums[0]='644dec9233a30b8929e8eb38aecab6f78be234c08c62fa038f7c8f5b8bdfed50ba053a402f92747e730147107d6e3408a21641de93792d35dc87967017065c90'
    [[ "$CARCH" == "i686" ]] && sha512sums[0]='25bd1f1be5c62b3b5acfae25bfefdb87ea20594730f1dec43ddec4af3d56b1b5b586c78f28595cda9c15904eb8d0b4806c312337d48d872361769a4fc81e3df3'
fi
source=(http://ftp.mozilla.org/pub/mozilla.org/firefox/releases/${pkgver}esr/linux-$CARCH/en-US/firefox-${pkgver}esr.tar.bz2
        $_pkgname.desktop 
        $_pkgname-safe.desktop)

package() {
    cd $srcdir
    
    install -d $pkgdir/{usr/{bin,share/{applications,pixmaps}},opt}
    cp -r firefox/ $pkgdir/opt/$_pkgname

    ln -s /opt/$_pkgname/firefox $pkgdir/usr/bin/$_pkgname
    install -m644 $srcdir/{$_pkgname.desktop,$_pkgname-safe.desktop} $pkgdir/usr/share/applications/
    install -m644 $srcdir/firefox/browser/icons/mozicon128.png $pkgdir/usr/share/pixmaps/$_pkgname.png
}

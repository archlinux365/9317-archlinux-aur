model="9142cdn"
pkgname="brother-mfc-$model"
pkgver="1.1.3"
pkgrel=1
_cupswrapper_ver=1.1.4
_revision=0
pkgdesc="LPR and CUPS driver for the Brother MFC-9140CDN"
url="http://welcome.solutions.brother.com/bsc/public_s/id/linux/en/index.html"
arch=('i686' 'x86_64')
license=('unknown')
install="brother-mfc-${model}.install"
if [ "$CARCH" == 'i686' ]; then
   depends=('deb2targz' 'perl')
elif [ "$CARCH" == 'x86_64' ]; then
   depends=('deb2targz' 'perl' 'lib32-libcups')
fi
source=("http://download.brother.com/welcome/dlf101616/mfc${model}lpr-${pkgver}-${_revision}.i386.deb"
         "http://download.brother.com/welcome/dlf101617/mfc${model}cupswrapper-${_cupswrapper_ver}-${_revision}.i386.deb")
sha256sums=('1ca1143c074c33ecfe0cdc26eb5c5e6cd9b0bbe94c116fc9c03d54de7a3029df'
            '4472d0aef4148eace6d8df873b03eb1a91922791e451e90d7addde4e37c876e2')

package() {
    deb2targz *.deb >/dev/null || return 1
    rm -f *.deb || return 1
    cd $srcdir || return 1
    [ -d "mfc${model}" ] || (mkdir mfc${model} || return 1)
    for i in *.tar.gz;do tar xfz $i -C mfc${model};done || return 1
    cd mfc${model} || return 1
    cd opt/brother/Printers/mfc${model} || return 1
    perl -i -pe 's#/etc/init.d#/etc/rc.d#g' ./cupswrapper/cupswrappermfc${model} || return 1
    perl -i -pe 's#printcap\.local#printcap#g' $srcdir/mfc${model}/opt/brother/Printers/mfc${model}/inf/setupPrintcapij || return 1
    cp -rf $srcdir/mfc${model}/usr/ $pkgdir/ || return 1
    cp -rf $srcdir/mfc${model}/opt/ $pkgdir/ || return 1
}

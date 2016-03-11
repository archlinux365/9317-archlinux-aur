# Maintainer:  Alexander Minges <alexander.minges@gmail.de>
# Contributor: Michael Schubert <mschu.dev at gmail>
# Contributor: yescalona <yescalona@ug_uchile_cl>
# Contributor: Juan Miguel Cejuela <jmcejuela@gmail.com>
# Contributor: Fabio Zanini <iosonofabio@gmail.com>

pkgname=modeller
pkgver=9.16
pkgrel=1
pkgdesc="3D Structure Homology Modeller"
arch=('i686' 'x86_64')
url="http://salilab.org/modeller/"
license=('custom')
depends=('glib2')
optdepends=('python: python support'
            'python2: python2 support')
backup=("etc/$pkgname/config.py")
source=("http://www.salilab.org/modeller/$pkgver/$pkgname-$pkgver.tar.gz")
md5sums=('62d31d27d437cf48458a997f977caab4')
sha512sums=('5d3dba6134a9583d269ae0df93b05e536a753e00568c1a5562cf1e28bff07eb31185404f4a8b355832096aeb7ea320307e7ec620fc09e56c026c8143c3e4104a')

package() {
    _MODINSTALL="/usr/lib/modeller"

    cd "$pkgname-$pkgver"

    case "$CARCH" in
      i686)
        _EXECUTABLE_TYPE="i386-intel8" ;;
      x86_64)
        _EXECUTABLE_TYPE="x86_64-intel8" ;;
      *)
        error "MODELLER is only available for i386 and x86_64!" ;;
    esac

    # Installing Modeller files
    install -dm755 "$pkgdir/$_MODINSTALL/"{bin,lib} "$pkgdir/usr/include"
    cp -a README INSTALLATION modlib src "$pkgdir/$_MODINSTALL"
    mv "$pkgdir/$_MODINSTALL/src/include" "$pkgdir/usr/include/$pkgname"
    ln -s "/usr/include/$pkgname" "$pkgdir/$_MODINSTALL/src/include"

    cp -a bin/*.top bin/lib "bin/mod${pkgver}_${_EXECUTABLE_TYPE}" "$pkgdir/$_MODINSTALL/bin"
    cp -a "lib/$_EXECUTABLE_TYPE" "$pkgdir/$_MODINSTALL/lib"

    install -dm755 "$pkgdir/usr/share/doc/$pkgname"
    cp -a doc examples "$pkgdir/usr/share/doc/$pkgname/"
    mv "$pkgdir/usr/share/doc/$pkgname/"{doc,html}
    ln -s "/usr/share/doc/$pkgname/html" "$pkgdir/$_MODINSTALL/doc"
    ln -s "/usr/share/doc/$pkgname/examples" "$pkgdir/$_MODINSTALL/examples"

    # Creating Modeller startup scripts
    sed -r "s|(EXECUTABLE_TYPE[0-9v]+)=x+|\1=$_EXECUTABLE_TYPE|;s|(MODINSTALL[0-9v]+)=x+|\1=\"$_MODINSTALL\"|" \
        bin/modscript > "$pkgdir/$_MODINSTALL/bin/mod$pkgver"
    sed 's|@TOPDIR@|"'"$_MODINSTALL"'"|; s|@EXETYPE@|'"$_EXECUTABLE_TYPE"'|' \
        bin/modpy.sh.in > "$pkgdir/$_MODINSTALL/bin/modpy.sh"
    sed '1s/^.*$/&2/' bin/modslave.py > "$pkgdir/$_MODINSTALL/bin/modslave.py"

    # create symlinks
    install -dm755 "$pkgdir/usr/bin"
    for _f in mod$pkgver modpy.sh modslave.py; do
      chmod +x "$pkgdir/$_MODINSTALL/bin/$_f"
      ln -sf "$_MODINSTALL/bin/$_f"  "$pkgdir/usr/bin/"
    done

    # create config.py
    install -dm755 "$pkgdir/etc/$pkgname"
    echo "license = 'XXXX'" > "$pkgdir/etc/$pkgname/config.py"
    ln -s /etc/$pkgname/config.py "$pkgdir/$_MODINSTALL/modlib/modeller/config.py"

    # add modeller libs to ld.so.conf
    install -dm755 "$pkgdir/etc/ld.so.conf.d"
    echo "/usr/lib/$pkgname/lib/$_EXECUTABLE_TYPE" > "$pkgdir/etc/ld.so.conf.d/$pkgname.conf"

    # install python modules
    for _pyver in 2.7 3.5; do
      install -dm755 "$pkgdir/usr/lib/python$_pyver/site-packages"
      ln -s "$_MODINSTALL/modlib/modeller" "$pkgdir/usr/lib/python$_pyver/site-packages/modeller"
    done
    ln -s "$_MODINSTALL/lib/$_EXECUTABLE_TYPE/python2.5/_modeller.so" "$pkgdir/usr/lib/python2.7/site-packages/_modeller.so"
    ln -s "$_MODINSTALL/lib/$_EXECUTABLE_TYPE/python3.3/_modeller.so" "$pkgdir/usr/lib/python3.5/site-packages/_modeller.so"

    # Adjust directory permisssions and ownership
    find "$pkgdir" -type d -exec chmod 755 {} +
    find "$pkgdir" -exec chown --no-dereference 0:0 {} +
}

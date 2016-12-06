# Maintainer: Aleksey Kamenskikh <aleksey.kamenskikh@gmail.com>
_prodname=mssql-tools
pkgname=${_prodname}-ubuntu
pkgver=14.0.1.246
_prodver=${pkgver}-1
pkgrel=2
pkgdesc="Microsoft SQL Server for Linux tools"
arch=('x86_64')
url="https://docs.microsoft.com/en-us/sql/linux/sql-server-linux-setup-tools"
license=('unknown')
depends=('msodbcsql-ubuntu' 'libcurl-compat')
source=("https://packages.microsoft.com/ubuntu/16.04/prod/pool/main/m/${_prodname}/${_prodname}_${_prodver}_amd64.deb" "sqlcmd.sh")
md5sums=('2ec49b644a3dc76aef098f769854d1ee' '8cb0c1a4aef59cee1d046d1d14bf577c')
noextract=("${_prodname}_${_prodver}_amd64.deb" "sqlcmd.sh")

package() {
  cd "$pkgdir"
  ar x $srcdir/${_prodname}_${_prodver}_amd64.deb
  tar xfJ data.tar.xz
  rm control.tar.gz
  rm data.tar.xz
  rm debian-binary
  rm $pkgdir/usr/bin/sqlcmd
  cp $srcdir/sqlcmd.sh $pkgdir/usr/bin/sqlcmd
  sed "s/version/${pkgver}/" -i $pkgdir/usr/bin/sqlcmd
  chmod 755 $pkgdir/opt
  chmod 755 $pkgdir/usr
  chmod 755 $pkgdir/usr/bin
  chmod 755 $pkgdir/usr/share
  chmod 755 $pkgdir/usr/share/doc

}

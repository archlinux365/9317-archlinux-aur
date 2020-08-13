# Maintainer: Attila Greguss <floyd0122[at]gmail[dot]com>

pkgname=('aspnet-runtime-2.1')
pkgver=2.1.21.sdk809
pkgrel=1
pkgdesc='The ASP.NET Core runtime binary version 2.1' 
arch=('x86_64' 'armv7h')
url='https://www.microsoft.com/net/core'
license=('MIT')
options=('staticlibs')
depends=('dotnet-runtime-2.1')
provides=("aspnet-runtime-2.1" "aspnet-runtime=${pkgver}")
conflicts=("aspnet-runtime-2.1" "aspnet-runtime=${pkgver}")
source_armv7h=('https://download.visualstudio.microsoft.com/download/pr/046ab9e4-87de-4b98-ab0a-fd42fc635636/fa07410e118e6fb39b93cc53d099b801/aspnetcore-runtime-2.1.21-linux-arm.tar.gz')
source_x86_64=('https://download.visualstudio.microsoft.com/download/pr/1d6ae2ec-4cf8-4579-bdfb-18c723b1a560/48be79a406578690a3f062ff17d663f8/aspnetcore-runtime-2.1.21-linux-x64.tar.gz')
sha512sums_armv7h=('51b79bb92514dd2cb747568fa80e13200ce5075378af6a05577946dc0cfada45caa3f361f09a63c04cc8352f83adc497f84c6d1cfad13e6294f061d952ab2bee')
sha512sums_x86_64=('e4e81d00316f68eed552bb13ac1e82faffb9262a62789717eb3b79d6309445524dcde7152780f4105622f89a1cba6e23802706f86e97699b5c07de05806c3f03')

package() {
  install -dm 755 "${pkgdir}"/usr/share/{dotnet/shared,licenses}
  cp -dr --no-preserve='ownership' shared/Microsoft.AspNetCore.App "${pkgdir}"/usr/share/dotnet/shared/
  ln -s dotnet-host-2.1 "${pkgdir}"/usr/share/licenses/aspnet-runtime-2.1
}

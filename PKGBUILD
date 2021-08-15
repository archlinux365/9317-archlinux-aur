# Maintainer: Attila Greguss <floyd0122[at]gmail[dot]com>

pkgname=('aspnet-runtime-2.1')
pkgver=2.1.29.sdk817
_runtimever=2.1.29
pkgrel=1
pkgdesc='The ASP.NET Core runtime binary version 2.1' 
arch=('x86_64' 'armv7h')
url='https://www.microsoft.com/net/core'
license=('MIT')
options=('staticlibs')
depends=('dotnet-runtime-2.1')
provides=("aspnet-runtime-2.1" "aspnet-runtime=${_runtimever}")
conflicts=("aspnet-runtime-2.1" "aspnet-runtime=${_runtimever}")
source_armv7h=('https://download.visualstudio.microsoft.com/download/pr/f8aecd9f-8def-403a-b5d9-8b93644eccbf/e0eb92a0f1034c2999afda200a7319fd/aspnetcore-runtime-2.1.29-linux-arm.tar.gz')
source_x86_64=('https://download.visualstudio.microsoft.com/download/pr/5d7cfd65-4f71-46e8-b05b-d7ff8d0daa00/0f21d9c66047f10d385ce15935116506/aspnetcore-runtime-2.1.29-linux-x64.tar.gz')
sha512sums_armv7h=('00b6de7e6cba2456804c933db3e3de28275f0297fa3a3bc89202ca17673843dbb84000638d07d6c8a2e8b2d4fe124890230242a1fb3aa3e15f9da5f78e4ff11b')
sha512sums_x86_64=('baae6762d667bdb16530975659fbf9f10a95b22e243cf54e80b57f89ee0aec0de1a63b8ddac5367478c6581a5dce9b1151be09795e32be66c2d7d6153774786a')

package() {
  install -dm 755 "${pkgdir}"/usr/share/{dotnet/shared,licenses}
  cp -dr --no-preserve='ownership' shared/Microsoft.AspNetCore.App "${pkgdir}"/usr/share/dotnet/shared/
  ln -s dotnet-host-2.1 "${pkgdir}"/usr/share/licenses/aspnet-runtime-2.1
}

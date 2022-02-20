# Maintainer: Hao Long <aur@esd.cc>

pkgname=cloudflared-bin
pkgver=2022.2.1
pkgrel=1
pkgdesc="An Argo Tunnel client which proxies any local webserver through the Cloudflare network"
arch=("x86_64" "i686" "aarch64" "armv6h" "armv7h")
url="https://developers.cloudflare.com/argo-tunnel/"
_url="https://github.com/cloudflare/cloudflared"
license=("custom")
depends=("glibc")
provides=("cloudflared")
conflicts=("cloudflared")
source=("https://raw.githubusercontent.com/cloudflare/cloudflared/master/LICENSE"
        "cloudflared.yml"
        "cloudflared@.service"
        "cloudflared-dns.service"
        "cloudflared-tunnel@.service"
        "sysusers.d")
source_x86_64=("${pkgname}-x86_64-${pkgver}::${_url}/releases/download/${pkgver}/cloudflared-linux-amd64")
source_i686=("${pkgname}-386-${pkgver}::${_url}/releases/download/${pkgver}/cloudflared-linux-386")
source_aarch64=("${pkgname}-aarch64-${pkgver}::${_url}/releases/download/${pkgver}/cloudflared-linux-arm64")
source_armv6h=("${pkgname}-armv6h-${pkgver}::${_url}/releases/download/${pkgver}/cloudflared-linux-arm")
source_armv7h=("${pkgname}-armv7h-${pkgver}::${_url}/releases/download/${pkgver}/cloudflared-linux-arm")
b2sums=('8d7ee43a5aa87a353928fb9a82dd5de5859e65bc92fad20cfa4645e50e563f4112abe92e0b89f30a7f42c69453e2e8aacbffda99b9218431f490cc4169557da7'
        '09ac52a248193706455b141f31da2a44f8f176b15ff062554da2c9a5e1e5a796b7d39890ed4d81e8941cedad24a0d56169251e9cb1df51097a95111165981630'
        '10ecd693cd7b310f69dce1551a0a9299c89fffafcc67c856f340c66f45263daa1a065ab3c82005856b3ee62a85a1c921db177bf99d91db64be12e4ee3114dccc'
        '2916ff952590b1322c84a390da01639f4e2656faa6d72c3f270b21c89a56bd5fb54fd54c6204736d61a0433b46427701de5a641bf68958dd03f551fe18b8bc7f'
        '064c7d7bec9d6f07690297afd5e62747650ac1952359df7499641e1ff96f1fcf5bc7e4843c1371930c0f57ecac548a5348aeb64196a3794bbe35d9ce732baaac'
        '38c9699663b667844e4236a4f33ff156ab0226f2144590d03e968dc73ae1a5be9510d979c408f5ff3205a057120cc54cf740732b36f361616f48dc269ae1a1a1')
b2sums_x86_64=('6ccad9a7009beb6859e6bb0c99151ba0dbd6577caf1dc3f15b495307b32014b7a9e43222ffed4f4ac6c0c78bac18beb5db97b67a1d8326db10418cdcbb771675')
b2sums_i686=('daa2e9bf2cda6d6eaffc9b9ee20af7154b8f8093e1fb4fe094997faf472d6d16eda7fa84dcb33bf715edb2de8694d75f1336c168962da9aaba1e8e3db215fa83')
b2sums_aarch64=('bed08581c1d48789eaaf0cc8d732f6cf7df52a63d76b4c0a0bd053609a16c6c178e2f56f3aa581fc8b445b8f4dfe82d1fe90f7e895307233305df9c84b9b5f45')
b2sums_armv6h=('b52bf98c86440fc739b8c7412eaa0a3ee918a840267e987c5270a9c10a287865abd660cdf1699708585d52f77b220e5664e1a90fb70848987dd3a9e2a5687e45')
b2sums_armv7h=('b52bf98c86440fc739b8c7412eaa0a3ee918a840267e987c5270a9c10a287865abd660cdf1699708585d52f77b220e5664e1a90fb70848987dd3a9e2a5687e45')

package() {
  # Install License
  install -Dm644 LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE

  # Install Binary
  install -Dm755 cloudflared-bin-* ${pkgdir}/usr/bin/cloudflared

  # Configuration File
  install -Dm644 cloudflared.yml ${pkgdir}/etc/cloudflared/cloudflared.yml.example
  install -Dm644 -t ${pkgdir}/usr/lib/systemd/system cloudflared{@,-dns,-tunnel@}.service

  # Post install
  install -Dm644 sysusers.d ${pkgdir}/usr/lib/sysusers.d/cloudflared.conf
}


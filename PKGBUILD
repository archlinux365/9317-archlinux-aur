# Maintainer: thorko contact@thorko.de
pkgname=sensu-agent
pkgver=6.2.3
pkgrel=3
pkgdesc="Sensu Go Agent"
arch=('x86_64' 'armv7h' 'armv6h')
url='https://sensu.io'
license=('MIT')
if [ "$CARCH" = "armv7h" ]; then
  source=("${pkgname}-${pkgver}_armv7h.tar.gz::https://s3-us-west-2.amazonaws.com/sensu.io/sensu-go/${pkgver}/sensu-go_${pkgver}_linux_armv7.tar.gz")
  sha256sums=('f6137ea648a37f7e8fc523683874c78882725f5494894c128d1153b81cbb30b6')
fi
if [ "$CARCH" = "armv6h" ]; then
  source=("${pkgname}-${pkgver}_armv6h.tar.gz::https://s3-us-west-2.amazonaws.com/sensu.io/sensu-go/${pkgver}/sensu-go_${pkgver}_linux_armv6.tar.gz")
  sha256sums=('7735fe8384777310d30a2f0a6ef8c4a35814756c0dfa649e98b48954a7635f2e')
fi
if [ "$CARCH" = "x86_64" ]; then
  source=("${pkgname}-${pkgver}_x86_64.tar.gz::https://s3-us-west-2.amazonaws.com/sensu.io/sensu-go/${pkgver}/sensu-go_${pkgver}_linux_amd64.tar.gz")
  sha256sums=('57bf95fdcb4dcb5f8f33427b79b1a36aea9b7ef5825ed213f4233c3173877973')
fi

source+=(
        "sensu-agent.service"
        "agent.yml.example"
        )
sha256sums+=(
            '7d8ca2731fe4a07beab0566d11ed47f0c069774752a96781ac7797697b3f7cc5'
            'c9997fa4be0879bb73b7250863ce9737b422515cf9131626075ff313b4575eed'
          )

install=sensu-agent.install

build() {
        tar xzvf ${pkgname}-${pkgver}_$CARCH.tar.gz
}

# TODO: better build from source
# build() {}

package() {
    install -Dm755 "${srcdir}/sensu-agent" "${pkgdir}/usr/bin/sensu-agent"
    install -Dm0644 "sensu-agent.service" "${pkgdir}/usr/lib/systemd/system/sensu-agent.service"
    install -Dm0644 "agent.yml.example" "${pkgdir}/etc/sensu/agent.yml.example"
}

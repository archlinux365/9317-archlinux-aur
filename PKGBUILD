# Maintainer: Marcel Campello <marcel.campello@prafrentex.com.br>
# Contributor: David Birks <david@birks.dev>

pkgname=aws-cli-v2
pkgver=2.7.26
pkgrel=1
pkgdesc='Universal Command Line Interface for Amazon Web Services (version 2)'
arch=('x86_64')
url='https://github.com/aws/aws-cli'
license=('Apache')
provides=('aws-cli')
conflicts=('aws-cli' 'aws-cli-git' 'aws-cli-v2-bin')
depends=(
  'python-awscrt'
  'python-colorama'
  'python-cryptography'
  'python-distro'
  'python-docutils'
  'python-jmespath'
  'python-prompt_toolkit'
  'python-ruamel-yaml'
  'python-urllib3'
)
makedepends=(
  'python-setuptools'
)
source=("$pkgname-$pkgver.tar.gz::https://github.com/aws/aws-cli/archive/$pkgver.tar.gz")
sha256sums=('65f944e21d45e0052fd624859149981f6ac020540b465319ca69b68b7a773dec')

build() {
  cd "$srcdir"/aws-cli-$pkgver
  python setup.py build

  echo "Generating auto-complete index. Takes 5-10 minutes..."
  PYTHONPATH=. ./scripts/gen-ac-index --index-location=./ac.index
}

package() {
    cd "$srcdir"/aws-cli-$pkgver
    python setup.py install --root="$pkgdir"

    install -Dm 644 ac.index "$pkgdir"/usr/lib/python3.10/site-packages/awscli/data/ac.index
    install -Dm 644 LICENSE.txt "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
    install -Dm 644 bin/aws_bash_completer "$pkgdir"/usr/share/bash-completion/completions/aws
}

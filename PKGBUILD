# Maintainer: A Farzat <a@farzat.xyz>

pkgname=tg-archive
pkgver=0.3.10
pkgrel=1
pkgdesc='is a tool for exporting Telegram group chats into static websites, preserving the chat history like mailing list archives.'
arch=(any)
url=https://github.com/knadh/tg-archive
license=('MIT')
depends=(python python-cryptg python-feedgen python-jinja python-pillow python-yaml python-telethon)
makedepends=(python-pip python-wheel)
conflicts=(${provides%=*})  # No quotes, to avoid an empty entry.
source=(
        'https://files.pythonhosted.org/packages/90/54/2f0c5ec169ebfe0ab1c68c2b960acac248ab8b6b9ed6614208d484bed5b6/tg-archive-0.3.10.tar.gz'
        'LICENSE'
)
md5sums=(
        '7ce6b76affff116facc2bf50e90e0a0b'
        '55ddbd8fbf51b6f84a56155a16cd0a66'
)

build() {
    cd "$srcdir/$pkgname-$pkgver"
    python setup.py build
}

package() {
    cd "$srcdir/$pkgname-$pkgver"
    python setup.py install --optimize=1 --root="$pkgdir" --skip-build
    install -D -m644 "$srcdir/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# Contributor: Richard Murri <admin@richardmurri.com>
# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>
 
pkgname=emacs-icicles
epoch=1
pkgver=2020.01.04 # Taken from icicles.el
pkgrel=4
pkgdesc="an emacs library that enhances minibuffer completion"
arch=('any')
url="http://www.emacswiki.org/emacs/Icicles"
depends=('emacs-bookmarkplus' 'emacs-hexrgb')
license=('GPL')
makedepends=('wget')
_base_url=https://www.emacswiki.org/emacs/download/
source=("${_base_url}icicles.el" \
	  "${_base_url}icicles-cmd1.el" \
	  "${_base_url}icicles-cmd2.el" \
	  "${_base_url}icicles-face.el" \
	  "${_base_url}icicles-fn.el" \
	  "${_base_url}icicles-mac.el" \
	  "${_base_url}icicles-mcmd.el" \
	  "${_base_url}icicles-mode.el" \
	  "${_base_url}icicles-opt.el" \
	  "${_base_url}icicles-var.el" \
	  "${_base_url}col-highlight.el" \
	  "${_base_url}crosshairs.el" \
	  "${_base_url}doremi.el" \
	  "${_base_url}ring+.el" \
	  "${_base_url}hl-line+.el" \
	  "${_base_url}icicles-chg.el" \
	  "${_base_url}icicles-doc1.el" \
	  "${_base_url}icicles-doc2.el" \
	  "${_base_url}icomplete+.el" \
	  "https://raw.githubusercontent.com/bnbeckwith/bnb-emacs-original/master/lacarte.el")
sha256sums=('5cb22c855d1311c08f09ab865b5278a3813a8edb877dc5d06ed432d7f3e721ee'
            '1bf0c57fdf06a521fd108bcdc664a93e4b92d6d170b7c871c1f168214d8d0834'
            'e75698974ae3f8094a93f5094a1eb3447701e81d4998ced18b44e81e71c28823'
            '5b7d7ea42f8cac3d4c5511daa88b47d7cc9a1dba8f4060ff4a66649bbfab3d2c'
            '9c9500ca24618983bd808c3dd753429beca4685a8848a63effb972fb7fd3b90d'
            'c4bb7f53e9b0ea58b5e5c2239f6a64a184c59cd18a402c8589daa124ac85bd76'
            '4c5dbbf0b07b130aae4e4aa602c6824351a9d5752188b51b43775802dfbc2eda'
            'a5cdccc19ab54f9434a8e11f0755730ea4c5ab1fb21182e37bf521d3b9b5abbf'
            'c719dad189828d888bcb052bd5c2f37969bff2a23de9d831032e1c8dd5073354'
            '021499a99337ff56ede50357d868cbad2dca6f4e61954a9d22a141757e425255'
            '3384917280c34759199f3ef6f9538a1380390b97624212f1bfc6c8b26b544859'
            '8f6211f6daeb80b1cee886b015d4bfc20c367da42654a6d6fe7c10e0f3d86200'
            '559f2e22bde92b5f1dc0d5595c0fd65db80fec92a8a58a414e13237b15a2dc12'
            '1511dd455ea7304d652a5c74f96c832bd4edbec8059fd1f72936976438a23457'
            'f87478240b50b2d92f413ef80bbac31dc9751713f6e91298f9c1440495ac3333'
            'fa67cc75627afa3c579fe2bf3846dfb128faf29908ea18783beac23b9a459cd6'
            'a9dc54af6b0ee0fac5c398dd62eb6531a50efbcd8f393ad004e2f3ce7f910fe5'
            'bee8da5d06615b92d2dbc917564f34dbf532e09eec631dca9c535d81623766b3'
            '2ada538c479057f27487fbdf91d026365d6fc781b8cdc35bc9fe70c87398b926'
            '711f49803e9f74e4ddda7de8e470b5f83de3a0ab7c57b6d250db186701e99989')

pkgver() {
  echo $(awk '/Version/ {print $3}' icicles.el) 
}

build() {
  emacs -Q -batch -L . -f batch-byte-compile *.el || true
}

package() {
  install -d  "$pkgdir"/usr/share/emacs/site-lisp/
  cp -r "$srcdir"/*{.el,.elc} "$pkgdir"/usr/share/emacs/site-lisp/
}

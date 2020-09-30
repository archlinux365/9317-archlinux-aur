# Maintainer: berberman <hatsue@typed.icu>

pkgname=arch-hs-git
pkgver=r139.a397720
pkgrel=1
pkgdesc="Generating PKGBUILD for hackage packages."
arch=('x86_64')
url="https://github.com/berberman/arch-hs"
license=('MIT')
depends=('ghc-libs' 'haskell-aeson' 'haskell-req' 'haskell-hackage-db' 'haskell-megaparsec' 'haskell-algebraic-graphs' 'haskell-conduit' 'haskell-tar-conduit' 'haskell-conduit-extra' 'haskell-split' 'haskell-neat-interpolation' 'haskell-microlens' 'haskell-microlens-th' 'haskell-polysemy' 'haskell-colourista' 'haskell-optparse-applicative' 'haskell-csv')
makedepends=('ghc' 'git')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}") 
source=(${pkgname%-git}::git+https://github.com/berberman/arch-hs.git)
md5sums=('SKIP')


pkgver() {
  cd "$srcdir/${pkgname%-git}"        
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

_gen_comp(){
  LD_LIBRARY_PATH=$PWD/dist/build dist/build/arch-hs${1}/arch-hs${1} --bash-completion-script "/usr/bin/arch-hs${1}" > bash${1}
  LD_LIBRARY_PATH=$PWD/dist/build dist/build/arch-hs${1}/arch-hs${1} --zsh-completion-script  "/usr/bin/arch-hs${1}" > zsh${1}
  LD_LIBRARY_PATH=$PWD/dist/build dist/build/arch-hs${1}/arch-hs${1} --fish-completion-script "/usr/bin/arch-hs${1}" > fish${1}
}

_install_comp(){
  install -D -m644 bash${1} "$pkgdir/usr/share/bash-completion/completions/arch-hs${1}-git"
  install -D -m644 zsh${1}  "$pkgdir/usr/share/zsh/site-functions/_arch-hs${1}-git"
  install -D -m644 bash${1} "$pkgdir/usr/share/fish/vendor_completions.d/arch-hs${1}-git.fish"
}

build() {
  cd "$srcdir/${pkgname%-git}"
  runhaskell Setup configure -O --enable-shared --enable-executable-dynamic --disable-library-vanilla \
    --prefix=/usr --docdir=/usr/share/doc/$pkgname \
    --dynlibdir=/usr/lib --libsubdir=\$compiler/site-local/\$pkgid \
    --ghc-option=-optl-Wl\,-z\,relro\,-z\,now \
    --ghc-option='-pie'

  runhaskell Setup build
  runhaskell Setup register --gen-script
  runhaskell Setup unregister --gen-script
  sed -i -r -e "s|ghc-pkg.*update[^ ]* |&'--force' |" register.sh
  sed -i -r -e "s|ghc-pkg.*unregister[^ ]* |&'--force' |" unregister.sh
  
  _gen_comp
  _gen_comp "-diff"
  _gen_comp "-submit"
}

package() {
  cd "$srcdir/${pkgname%-git}"
  install -D -m744 register.sh "$pkgdir"/usr/share/haskell/register/$pkgname.sh
  install -D -m744 unregister.sh "$pkgdir"/usr/share/haskell/unregister/$pkgname.sh
  runhaskell Setup copy --destdir="$pkgdir"
  install -D -m644 "LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  rm -f "${pkgdir}/usr/share/doc/${pkgname}/LICENSE"
  
  _install_comp
  _install_comp "-diff"
  _install_comp "-submit"
} 

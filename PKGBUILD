# Maintainer: Jonne Haß <me@jhass.eu>
pkgbase=diaspora
pkgname=('diaspora-mysql' 'diaspora-postgresql')
pkgver=0.6.0.0
pkgrel=2
pkgdesc="A distributed privacy aware social network"
arch=('i686' 'x86_64')
url="http://diasporafoundation.org"
license=('AGPL3')
depends=('ruby' 'ruby-bundler' 'redis' 'imagemagick' 'libxslt' 'net-tools' 'gsfonts')
makedepends=('nodejs' 'postgresql-libs' 'libmariaclient')
conflicts=('diaspora-git' 'diaspora-mysql-git' 'diaspora-postgresql-git')
options=(!strip)
backup=("etc/webapps/$pkgbase/diaspora.yml"
        "etc/webapps/$pkgbase/database.yml"
        "etc/webapps/$pkgbase/secret_token.rb")
install="$pkgbase.install"
source=("$pkgbase-$pkgver.tar.gz::https://github.com/$pkgbase/$pkgbase/archive/v${pkgver}.tar.gz"
        "$pkgbase.install"
        "$pkgbase.service"
        "$pkgbase.tmpfiles.d.conf"
        "$pkgbase.bashrc"
        "$pkgbase.bash_profile")

# Get rid of any possible ruby version managers
# From https://github.com/postmodern/chruby
_reset_ruby() {
  [[ -z "$RUBY_ROOT" ]] && return

  export PATH=":$PATH:"; export PATH=${PATH//:$RUBY_ROOT\/bin:/:}

  [[ -n "$GEM_HOME" ]] && export PATH=${PATH//:$GEM_HOME\/bin:/:}
  [[ -n "$GEM_ROOT" ]] && export PATH=${PATH//:$GEM_ROOT\/bin:/:}

  export GEM_PATH=":$GEM_PATH:"
  export GEM_PATH=${GEM_PATH//:$GEM_HOME:/:}
  export GEM_PATH=${GEM_PATH//:$GEM_ROOT:/:}
  export GEM_PATH=${GEM_PATH#:}; export GEM_PATH=${GEM_PATH%:}
  unset GEM_ROOT GEM_HOME

  export PATH=${PATH#:}; export PATH=${PATH%:}
  unset RUBY_ROOT RUBY_ENGINE RUBY_VERSION RUBYOPT
}

_package() {
  _bundle=bundle
  _ruby=ruby
  _rake=rake
  _db=$1
  _srcdir=$srcdir/$pkgname-$pkgver

  _reset_ruby

  msg "Setup build directory"
  mkdir -p $_srcdir
  cp -Rf $srcdir/$pkgbase-$pkgver/{bin,app,config,db,public,lib,script,vendor,config.ru,Gemfile,Gemfile.lock,Procfile,Rakefile} $_srcdir

  cd $_srcdir

  msg "Bundle dependencies"
  echo "gem: --no-rdoc --no-ri --no-user-install" > $_srcdir/.gemrc
  HOME=$_srcdir $_bundle config --local build.sigar '--with-cppflags="-fgnu89-inline"'
  HOME=$_srcdir $_bundle install --without development test --with $_db --deployment
  HOME=$_srcdir $_bundle clean

  msg "Patch configuration examples"
  sed -i -e "s|#certificate_authorities: '/etc/ssl/certs/ca-certificates.crt'|certificate_authorities: '/etc/ssl/certs/ca-certificates.crt'|" \
         -e "s|#rails_environment: 'production'|rails_environment: 'production'|" \
         -e "s|#listen: 'unix:tmp/diaspora.sock'|listen: '/run/diaspora/diaspora.sock'|" \
      $_srcdir/config/diaspora.yml.example
  sed -i -e "s|<<: \*postgresql|<<: *$_db|" \
         -e "s|#<<: \*mysql||" \
      $_srcdir/config/database.yml.example

  cp $_srcdir/config/diaspora.yml{.example,}
  cp $_srcdir/config/database.yml{.example,}

  msg "Create secret token"
  HOME=$_srcdir RAILS_ENV=production $_bundle exec $_rake generate:secret_token

  msg "Precompile assets"
  HOME=$_srcdir RAILS_ENV=production $_bundle exec $_rake assets:precompile

  rm $_srcdir/config/{diaspora,database}.yml

  msg "Copy contents to package directory"
  install -dm755 $pkgdir/usr/share/webapps/$pkgbase
  cp -Rf $_srcdir/* $pkgdir/usr/share/webapps/$pkgbase/
  cp -Rf $_srcdir/.bundle $pkgdir/usr/share/webapps/$pkgbase/
  install -Dm644 $_srcdir/.gemrc $pkgdir/usr/share/webapps/$pkgbase/.gemrc
  install -Dm640 $_srcdir/config/initializers/secret_token.rb $pkgdir/etc/webapps/$pkgbase/secret_token.rb
  install -Dm644 $srcdir/$pkgbase.service $pkgdir/usr/lib/systemd/system/$pkgbase.service
  install -Dm644 $srcdir/$pkgbase.tmpfiles.d.conf $pkgdir/usr/lib/tmpfiles.d/$pkgbase.conf
  install -Dm644 $srcdir/$pkgbase.bashrc  $pkgdir/usr/share/webapps/$pkgbase/.bashrc
  install -Dm644 $srcdir/$pkgbase.bash_profile $pkgdir/usr/share/webapps/$pkgbase/.bash_profile

  msg "Build source.tar.gz to conform the AGPL"
  tar czf $pkgdir/usr/share/webapps/$pkgbase/public/source.tar.gz \
          $pkgdir/usr/share/webapps/$pkgbase/{app,db,lib,script,Gemfile,Gemfile.lock,Rakefile,Procfile,config.ru}

  msg "Symlink ruby and bundle"
  install -dm755           $pkgdir/usr/share/webapps/$pkgbase/bin
  ln -sf /usr/bin/$_ruby   $pkgdir/usr/share/webapps/$pkgbase/bin/ruby
  ln -sf /usr/bin/$_bundle $pkgdir/usr/share/webapps/$pkgbase/bin/bundle

  msg "Prepare configuration files"
  install -dm750 $pkgdir/etc/webapps/$pkgbase
  install -Dm640 $_srcdir/config/diaspora.yml.example $pkgdir/etc/webapps/$pkgbase/diaspora.yml
  install -Dm640 $_srcdir/config/database.yml.example $pkgdir/etc/webapps/$pkgbase/database.yml

  sed -i -e "s|%db%|$_db|" \
         -e "s|mysql|mysqld|" \
      $pkgdir/usr/lib/systemd/system/$pkgbase.service

  msg "Create symlinks"
  install -dm755 $pkgdir/var/log/$pkgbase
  install -dm755 $pkgdir/var/lib/$pkgbase/uploads
  rm -Rf $pkgdir/usr/share/webapps/$pkgbase/log \
         $pkgdir/usr/share/webapps/$pkgbase/tmp \
         $pkgdir/usr/share/webapps/$pkgbase/public/uploads
  ln -s  /etc/webapps/$pkgbase/diaspora.yml    $pkgdir/usr/share/webapps/$pkgbase/config/diaspora.yml
  ln -s  /etc/webapps/$pkgbase/database.yml    $pkgdir/usr/share/webapps/$pkgbase/config/database.yml
  ln -sf /etc/webapps/$pkgbase/secret_token.rb $pkgdir/usr/share/webapps/$pkgbase/config/initializers/secret_token.rb
  ln -sf /var/lib/$pkgbase/uploads             $pkgdir/usr/share/webapps/$pkgbase/public/uploads
  ln -sf /tmp/$pkgbase                         $pkgdir/usr/share/webapps/$pkgbase/tmp
  ln -sf /var/log/$pkgbase                     $pkgdir/usr/share/webapps/$pkgbase/log
}

package_diaspora-mysql() {
  pkgdesc="$pkgdesc (MySQL)"
  conflicts=(${conflicts[@]} 'diaspora-postgresql')
  depends=(${depends[@]} 'libmariaclient' 'mysql')

  _package mysql
}

package_diaspora-postgresql() {
  pkgdesc="$pkgdesc (PostgreSQL)"
  conflicts=(${conflicts[@]} 'diaspora-mysql')
  depends=(${depends[@]} 'postgresql-libs' 'postgresql')

  _package postgres
}

sha256sums=('210e1527824ee6f8c414e51ccc083e5d9101b21516f622b4ad177af780b11469'
            'aae126c4b1bcba6265d3d925dc3845bb034defa5606385c22dfb053111b57685'
            'ecc9b0ca36fd277a5d9b2fa2df11feef877ffb2b2ac4c6012e23db28ced05ee6'
            '7128024976c95d511d8995c472907fe0b8c36fe5b45fef57fc053e3fadcae408'
            '77cb2529eacef2d1e77aad5daf21856f67097d6342f230e5dd5057f753932bfa'
            '29cfd5116e919d8851ff70b8b82af8d4a6c8243a9d1ca555981a1a695e2d7715')

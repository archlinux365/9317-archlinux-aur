# $Id: PKGBUILD 289024 2017-02-15 21:13:17Z bpiotrowski $
# Maintainer:  Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Contributor: Sébastien Luttringer
# Contributor: Drew DeVault
# Contributor: Kasei Wang <cnsdwpc at gmail.com>

pkgname=nginx-mainline-boringssl
pkgver=1.11.10
pkgrel=1
pkgdesc='Lightweight HTTP server and IMAP/POP3 proxy server, mainline release'
arch=('i686' 'x86_64')
url='https://nginx.org'
license=('custom')
depends=('pcre' 'zlib' 'openssl' 'geoip')
makedepends=('hardening-wrapper')
backup=('etc/nginx/fastcgi.conf'
        'etc/nginx/fastcgi_params'
        'etc/nginx/koi-win'
        'etc/nginx/koi-utf'
        'etc/nginx/mime.types'
        'etc/nginx/nginx.conf'
        'etc/nginx/scgi_params'
        'etc/nginx/uwsgi_params'
        'etc/nginx/win-utf'
        'etc/logrotate.d/nginx')
install=nginx.install
provides=('nginx')
conflicts=('nginx')
source=($url/download/nginx-$pkgver.tar.gz{,.asc}
        "git+https://boringssl.googlesource.com/boringssl"
        "service"
        "logrotate")
validpgpkeys=('B0F4253373F8F6F510D42178520A9993A1C052F8') # Maxim Dounin <mdounin@mdounin.ru>
md5sums=('6fb10f579055d27a2240d51c7d85c190'
         'SKIP'
         'SKIP'
         'ce9a06bcaf66ec4a3c4eb59b636e0dfd'
         'd6a6d4d819f03a675bacdfabd25aa37e')

_common_flags=(
  --with-pcre-jit
  --with-file-aio
  --with-http_addition_module
  --with-http_auth_request_module
  --with-http_dav_module
  --with-http_degradation_module
  --with-http_flv_module
  --with-http_geoip_module
  --with-http_gunzip_module
  --with-http_gzip_static_module
  --with-http_mp4_module
  --with-http_realip_module
  --with-http_secure_link_module
  --with-http_slice_module
  --with-http_ssl_module
  --with-http_stub_status_module
  --with-http_sub_module
  --with-http_v2_module
  --with-mail
  --with-mail_ssl_module
  --with-stream
  --with-stream_ssl_module
  --with-threads
)

_mainline_flags=(
  --with-stream_ssl_preread_module
  --with-stream_geoip_module
  --with-stream_realip_module
)

build() {
  export CXXFLAGS="$CXXFLAGS -fPIC"

  cd ${srcdir}/boringssl
  mkdir build && cd build && cmake ../ && make && cd ${srcdir}/boringssl
  mkdir -p .openssl/lib && cd .openssl && ln -s ../include . && cd ../
  cp ${srcdir}/boringssl/build/crypto/libcrypto.a ${srcdir}/boringssl/build/ssl/libssl.a .openssl/lib && cd ..

  cd ${srcdir}/$provides-$pkgver
  ./configure \
    --prefix=/etc/nginx \
    --conf-path=/etc/nginx/nginx.conf \
    --sbin-path=/usr/bin/nginx \
    --pid-path=/run/nginx.pid \
    --lock-path=/run/lock/nginx.lock \
    --user=http \
    --group=http \
    --http-log-path=/var/log/nginx/access.log \
    --error-log-path=stderr \
    --http-client-body-temp-path=/var/lib/nginx/client-body \
    --http-proxy-temp-path=/var/lib/nginx/proxy \
    --http-fastcgi-temp-path=/var/lib/nginx/fastcgi \
    --http-scgi-temp-path=/var/lib/nginx/scgi \
    --http-uwsgi-temp-path=/var/lib/nginx/uwsgi \
    --with-openssl=${srcdir}/boringssl \
    ${_common_flags[@]} \
    ${_mainline_flags[@]}

  touch ${srcdir}/boringssl/.openssl/include/openssl/ssl.h
  make
}

package() {
  cd $provides-$pkgver
  make DESTDIR="$pkgdir" install

  sed -e 's|\<user\s\+\w\+;|user html;|g' \
    -e '44s|html|/usr/share/nginx/html|' \
    -e '54s|html|/usr/share/nginx/html|' \
    -i "$pkgdir"/etc/nginx/nginx.conf

  rm "$pkgdir"/etc/nginx/*.default

  install -d "$pkgdir"/var/lib/nginx
  install -dm700 "$pkgdir"/var/lib/nginx/proxy

  chmod 755 "$pkgdir"/var/log/nginx
  chown root:root "$pkgdir"/var/log/nginx

  install -d "$pkgdir"/usr/share/nginx
  mv "$pkgdir"/etc/nginx/html/ "$pkgdir"/usr/share/nginx

  install -Dm644 ../logrotate "$pkgdir"/etc/logrotate.d/nginx
  install -Dm644 ../service "$pkgdir"/usr/lib/systemd/system/nginx.service
  install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$provides/LICENSE

  rmdir "$pkgdir"/run

  install -d "$pkgdir"/usr/share/man/man8/
  gzip -9c man/nginx.8 > "$pkgdir"/usr/share/man/man8/nginx.8.gz

  for i in ftdetect indent syntax; do
    install -Dm644 contrib/vim/${i}/nginx.vim \
      "${pkgdir}/usr/share/vim/vimfiles/${i}/nginx.vim"
  done
}

# vim:set ts=2 sw=2 et:

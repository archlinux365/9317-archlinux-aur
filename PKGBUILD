# $Id: PKGBUILD 266697 2016-05-01 00:55:57Z seblu $
# Maintainer: Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Maintainer: Sébastien Luttringer
# Contributor: Sergej Pupykin <pupykin.s+arch@gmail.com>
# Contributor: Miroslaw Szot <mss@czlug.icis.pcz.pl>
# Contributor: Daniel Micay <danielmicay@gmail.com>

pkgname=nginx-pagespeed
pkgver=1.10.0+1.11.33.2
pkgrel=2
pkgdesc='Lightweight HTTP server and IMAP/POP3 proxy server'
arch=('i686' 'x86_64')
url='https://developers.google.com/speed/pagespeed/module/'
license=('custom')
depends=('pcre' 'zlib' 'openssl' 'geoip')
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
conflicts=('nginx')
replaces=('nginx')
provides=('nginx')
source=(http://nginx.org/download/nginx-${pkgver%+*}.tar.gz
        https://github.com/pagespeed/ngx_pagespeed/archive/release-${pkgver#*+}-beta.zip
		https://dl.google.com/dl/page-speed/psol/${pkgver#*+}.tar.gz
        service
        logrotate)
md5sums=('c184c873d2798c5ba92be95ed1209c02'
         'dfdd5d7e4fab941789b1c3e932e7b314'
		 '0979af30ce2892e934d54e60ae00c7f3'
         'SKIP'
         'SKIP')

_common_flags=(
  --with-ipv6
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

_stable_flags=(
)

build() {
  cd nginx-${pkgver%+*}

  [[ ! -d $srcdir/ngx_pagespeed-release-${pkgver#*+}-beta/psol ]] && mv $srcdir/psol $srcdir/ngx_pagespeed-release-${pkgver#*+}-beta/

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
    ${_common_flags[@]} \
    ${_stable_flags[@]} \
    --add-module=$srcdir/ngx_pagespeed-release-${pkgver#*+}-beta

  make
}

package() {
  cd nginx-${pkgver%+*}
  make DESTDIR="$pkgdir" install

  sed -e 's|\<user\s\+\w\+;|user html;|g' \
    -e '44s|html|/usr/share/nginx/html|' \
    -e '54s|html|/usr/share/nginx/html|' \
    -i "$pkgdir"/etc/nginx/nginx.conf

  rm "$pkgdir"/etc/nginx/*.default

  install -d "$pkgdir"/var/lib/nginx
  install -dm700 "$pkgdir"/var/lib/nginx/proxy

  chmod 750 "$pkgdir"/var/log/nginx
  chown http:log "$pkgdir"/var/log/nginx

  install -d "$pkgdir"/usr/share/nginx
  mv "$pkgdir"/etc/nginx/html/ "$pkgdir"/usr/share/nginx

  install -Dm644 ../logrotate "$pkgdir"/etc/logrotate.d/nginx
  install -Dm644 ../service "$pkgdir"/usr/lib/systemd/system/nginx.service
  install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE

  rmdir "$pkgdir"/run

  install -d "$pkgdir"/usr/share/man/man8/
  gzip -9c man/nginx.8 > "$pkgdir"/usr/share/man/man8/nginx.8.gz

  for i in ftdetect indent syntax; do
    install -Dm644 contrib/vim/${i}/nginx.vim \
      "${pkgdir}/usr/share/vim/vimfiles/${i}/nginx.vim"
  done
}

# vim:set ts=2 sw=2 et:

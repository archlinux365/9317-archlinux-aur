pkgname=fusiondirectory-plugin-argonaut
pkgver=1.0.15
pkgrel=1
pkgdesc="Communication layer between various software and the JSON-RPC Argonaut Server"
arch=("any")
url="http://fusiondirectory.org/"
license=("LGPL")
depends=("fusiondirectory>=$pkgver")

install=fusiondirectory-plugin-argonaut.install
source=("http://repos.fusiondirectory.org/sources/1.0/fusiondirectory/fusiondirectory-plugins-${pkgver}.tar.gz"
"http://repos.fusiondirectory.org/sources/1.0/fusiondirectory/fusiondirectory-${pkgver}.tar.gz")
md5sums=('65b87009fb2960da42274008c16a6284' 'a4fc56bf04e93dffd128b190041b4803')

package() {
cd ./fusiondirectory-plugins-${pkgver}
# Go in plugin directory
cd argonaut/


# Plugin developers
  if [ "argonaut" = "developers" ] ; then
    mkdir -p ${pkgdir}/usr/share/doc/fusiondirectory-developers/
    mkdir -p ${pkgdir}/usr/share/webapps/fusiondirectory/plugins/
    mkdir -p ${pkgdir}/usr/share/webapps/fusiondirectory/html/plugins/debug-help
    cp -a ./CODING ${pkgdir}/usr/share/doc/fusiondirectory-developers/
    cp -a ./Doxyfile ${pkgdir}/usr/share/doc/fusiondirectory-developers/
    cp -a ./FDStandard ${pkgdir}/usr/share/doc/fusiondirectory-developers/
    cp -a ./filter.xsd  ${pkgdir}/usr/share/doc/fusiondirectory-developers/
    cp -a ./list.xsd ${pkgdir}/usr/share/doc/fusiondirectory-developers/
    cp -a ./simple-plugin ${pkgdir}/usr/share/doc/fusiondirectory-developers/
    cp -a ./debug-help ${pkgdir}/usr/share/webapps/fusiondirectory/plugins/
    cp -a ./debug-help/html/images ${pkgdir}/usr/share/webapps/fusiondirectory/html/plugins/debug-help
    
  else
    # Addons section
    if [ -d ./addons ] ; then
      mkdir -p ${pkgdir}/usr/share/webapps/fusiondirectory/plugins/addons/
      
      # Directories
      for cur_addons in $(find ./addons -mindepth 1 -maxdepth 1 -type d) ; do
        addons_line="$(echo ${cur_addons} | sed "s#./addons/##")" 
        cp -a ./addons/${addons_line} ${pkgdir}/usr/share/webapps/fusiondirectory/plugins/addons/${addons_line}
      done
    
      # Files
      for cur_addons in $(find ./addons -mindepth 1 -maxdepth 1 -type f) ; do
        addons_line="$(echo ${cur_addons} | sed "s#./addons/##")" 
        cp -a ./addons/${addons_line} ${pkgdir}/usr/share/webapps/fusiondirectory/plugins/addons/
      done
    fi
    
    
    # Admin section
    if [ -d ./admin ] ; then
      mkdir -p ${pkgdir}/usr/share/webapps/fusiondirectory/plugins/admin/
    
      # Directories
      for cur_admin in $(find ./admin -mindepth 1 -maxdepth 1 -type d) ; do
        admin_line="$(echo ${cur_admin} | sed "s#./admin/##")" 
        cp -a ./admin/${admin_line} ${pkgdir}/usr/share/webapps/fusiondirectory/plugins/admin/${admin_line}
      done
    
      # Files
      for cur_admin in $(find ./admin -mindepth 1 -maxdepth 1 -type f) ; do
        admin_line="$(echo ${cur_admin} | sed "s#./admin/##")" 
        cp -a ./admin/${admin_line} ${pkgdir}/usr/share/webapps/fusiondirectory/plugins/admin/${admin_line}
      done
    fi
    
    
    # Config section
    if [ -d ./config ] ; then
      mkdir -p ${pkgdir}/usr/share/webapps/fusiondirectory/plugins/config/
    
      # Directories
      for cur_config in $(find ./config -mindepth 1 -maxdepth 1 -type d) ; do
        config_line="$(echo ${cur_config} | sed "s#./config/##")" 
        cp -a ./config/${config_line} ${pkgdir}/usr/share/webapps/fusiondirectory/plugins/config/
      done

      # Files
      for cur_config in $(find ./config -mindepth 1 -maxdepth 1 -type f) ; do
        config_line="$(echo ${cur_config} | sed "s#./config/##")" 
        cp -a ./config/${config_line} ${pkgdir}/usr/share/webapps/fusiondirectory/plugins/config/
      done
    fi
    
    
    # HTML section
    if [ -d ./html ] ; then
      if [ "argonaut" = "addressbook" ] ; then
        mkdir -p ${pkgdir}/usr/share/webapps/fusiondirectory/html/plugins/argonaut/
        cp -a ./html/images/ ${pkgdir}/usr/share/webapps/fusiondirectory/html/plugins/argonaut/
        cp -a ./html/getvcard.php ${pkgdir}/usr/share/webapps/fusiondirectory/html/plugins/argonaut/

      elif [ "argonaut" = "argonaut" ] ; then
        mkdir -p ${pkgdir}/usr/share/webapps/fusiondirectory/html/plugins/argonaut/
        cp -a ./html/themes/ ${pkgdir}/usr/share/webapps/fusiondirectory/html/
        cp -a ./html/getFAIstatus.php ${pkgdir}/usr/share/webapps/fusiondirectory/html/plugins/argonaut/

      elif [ "argonaut" = "fusioninventory" ] ; then
        mkdir -p ${pkgdir}/usr/share/webapps/fusiondirectory/html/
        mkdir -p ${pkgdir}/usr/share/webapps/fusiondirectory/html/plugins/argonaut/
        cp -a ./html/collect.php ${pkgdir}/usr/share/webapps/fusiondirectory/html/
        cp -a ./html/themes/ ${pkgdir}/usr/share/webapps/fusiondirectory/html/
        cp -a ./html/plugins/inventory.css ${pkgdir}/usr/share/webapps/fusiondirectory/html/plugins/argonaut/

      elif [ "argonaut" = "webservice" ] ; then
        mkdir -p ${pkgdir}/usr/share/webapps/fusiondirectory/html/
        cp -a ./html/jsonrpc.php ${pkgdir}/usr/share/webapps/fusiondirectory/html/

      else
        # Images directory
        if [[ -d ./html/images ]] ; then
          mkdir -p ${pkgdir}/usr/share/webapps/fusiondirectory/html/plugins/argonaut/
          cp -a ./html/images/ ${pkgdir}/usr/share/webapps/fusiondirectory/html/plugins/argonaut/
        fi

        # Themes directory
        if [[ -d ./html/themes ]] ; then
          mkdir -p ${pkgdir}/usr/share/webapps/fusiondirectory/html/
          cp -a ./html/themes/ ${pkgdir}/usr/share/webapps/fusiondirectory/html/
        fi
      fi
    fi
    
    
    # Include section
    if [ -d ./include ] ; then    
      if [ ! -d "${pkgdir}/usr/share/webapps/fusiondirectory/include/" ] ; then
        mkdir -p ${pkgdir}/usr/share/webapps/fusiondirectory/include/
      fi

      # Directories
      for cur_include in $(find ./include -mindepth 1 -maxdepth 1 -type d) ; do
        include_line="$(echo ${cur_include} | sed "s#./include/##")" 
        cp -a ./include/${include_line} ${pkgdir}/usr/share/webapps/fusiondirectory/include/
      done
      
      # Files
      for cur_include in $(find ./include -mindepth 1 -maxdepth 1 -type f) ; do
        include_line="$(echo ${cur_include} | sed "s#./include/##")" 
        cp -a ./include/${include_line} ${pkgdir}/usr/share/webapps/fusiondirectory/include/
      done
    fi
    
    
    # Locale section
    if [ -d ./locale ] ; then
      mkdir -p ${pkgdir}/usr/share/webapps/fusiondirectory/locale/plugins/argonaut/locale/
      
      # Directories
      for cur_locale in $(find ./locale -mindepth 1 -maxdepth 1 -type d) ; do
        locale_line="$(echo ${cur_locale} | sed "s#./locale/##")" 
        cp -a ./locale/${locale_line} ${pkgdir}/usr/share/webapps/fusiondirectory/locale/plugins/argonaut/locale/
      done
      
      # Files
      for cur_locale in $(find ./locale -mindepth 1 -maxdepth 1 -type f) ; do
        locale_line="$(echo ${cur_locale} | sed "s#./locale/##")" 
        cp -a ./locale/${locale_line} ${pkgdir}/usr/share/webapps/fusiondirectory/locale/plugins/argonaut/locale/
      done
    fi

    
    # Personal section
    if [ -d ./personal ] ; then
      mkdir -p ${pkgdir}/usr/share/webapps/fusiondirectory/plugins/personal/
    
      # Directories
      for cur_personal in $(find ./personal -mindepth 1 -maxdepth 1 -type d) ; do
        personal_line="$(echo ${cur_personal} | sed "s#./personal/##")" 
        cp -a ./personal/${personal_line} ${pkgdir}/usr/share/webapps/fusiondirectory/plugins/personal/
      done
    
      # Files
      for cur_personal in $(find ./personal -mindepth 1 -maxdepth 1 -type f) ; do
        personal_line="$(echo ${cur_personal} | sed "s#./personal/##")" 
        cp -a ./personal/${personal_line} ${pkgdir}/usr/share/webapps/fusiondirectory/plugins/personal/
      done
    fi
    
    # Contrib section for samba and supann
    if [ "argonaut" = "samba" ] ; then
      mkdir -p ${pkgdir}/usr/share/doc/fusiondirectory-plugin-samba/
      cp -a ./contrib/fix_munged ${pkgdir}/usr/share/doc/fusiondirectory-plugin-samba/
      
    elif [ "argonaut" = "supann" ] ; then
      mkdir -p ${pkgdir}/usr/share/doc/fusiondirectory-plugin-supann/examples/
      cp -a ./contrib/supann/* ${pkgdir}/usr/share/doc/fusiondirectory-plugin-supann/examples/
    fi 
    
    # SQL section
    if [ -d ./contrib/sql ] ; then
      mkdir -p ${pkgdir}/usr/share/doc/fusiondirectory-plugin-argonaut-schema/
      cp ../../fusiondirectory-${pkgver}/{AUTHORS,Changelog,COPYING} ${pkgdir}/usr/share/doc/fusiondirectory-plugin-argonaut-schema/   
 
      # Directories
      for cur_sql in $(find ./contrib/sql -mindepth 1 -maxdepth 1 -type d) ; do
        sql_line="$(echo ${cur_sql} | sed "s#./contrib/sql/##")" 
        cp -a ./contrib/sql/${sql_line} ${pkgdir}/usr/share/doc/fusiondirectory-plugin-argonaut-schema/
      done
    
      # Files
      for cur_sql in $(find ./contrib/sql -mindepth 1 -maxdepth 1 -type f ! -name "example.ldif" ) ; do
        sql_line="$(echo ${cur_sql} | sed "s#./contrib/sql/##")" 
        cp -a ./contrib/sql/${sql_line} ${pkgdir}/usr/share/doc/fusiondirectory-plugin-argonaut-schema/
      done   
    fi
  fi
  

	# Docs
	mkdir -p ${pkgdir}/usr/share/doc/fusiondirectory-plugin-argonaut/
	cp ../../fusiondirectory-${pkgver}/{AUTHORS,Changelog,COPYING} ${pkgdir}/usr/share/doc/fusiondirectory-plugin-argonaut/ 
 
}

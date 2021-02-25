# This is an example PKGBUILD file. Use this as a start to creating your own,
# and remove these comments. For more information, see 'man PKGBUILD'.
# NOTE: Please fill out the license field for your package! If it is unknown,
# then please put 'unknown'.

# Maintainer: David Strawn <isomarcte a__t gmail d__o__t c__o__m>
pkgname='metals'
pkgver='0.10.0'
pkgrel=1
epoch=
pkgdesc='Language Server For Scala'
url='https://scalameta.org/metals/'
arch=(any)
license=('Apache')
groups=()
depends=('java-environment<=11' 'findutils' 'python')
makedepends=('sbt' 'sed' 'grep' 'coreutils')
checkdepends=()
optdepends=('bloop')
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("https://github.com/scalameta/$pkgname/archive/v$pkgver.tar.gz" 'metals-client.sh' 'metals-emacs.sh' 'metals-vim.sh' 'metals-vscode.sh' 'metals-sublime.sh' 'version-fix.patch' 'JREMajorVersion.java')
noextract=()
md5sums=('4952cfb988506537f44da649930f4aa3'
         '1d0b48af2e8a16f80177f8e73e7ef383'
         'ad97e9262c7b22dd71b017a6402f612a'
         '000bd73ebc3ea46b23e2c418ef97f4c7'
         '83b5669127510100d6e7ab4094877a6e'
         '38c34ab96f6cf637f7be9f72b7400983'
         '2fd9910e99150501fa56f309c890eb9a'
         '8a6b25ac88a8836a68d9dc55b4d17eda')
sha1sums=('f10cb6acb93dc820863481c1ac84ed20018f0096'
          '9adaef9256e7d77e8b16ecb046e4a746771e9bb1'
          'b498568936dcfd03a06d7b41f76bbb7fffbc3bdf'
          '3882901e88f4a85f85d67dcda53f83c89d4563c6'
          'f2d0e8aa2744697d4dad0a7c10f835fe5814524b'
          'b2577ac4ee93e3a611558294378c185227ed8321'
          'b0017806c2a16d635971373c159452e6e8a86e57'
          'c95efcaad9c6417d858575a381648a4c9a928a46')
sha224sums=('f47aae33bf0e98b120491d990c29167cce629bd6669b5ef702eaca7f'
            'c752a8044b6b31dfb90f0c006c271060e1f6c984f949b5cd2b2a5515'
            '43d2f6b0b4b7ef539f5109b1127dcd88828f2f8ae0b9c052899af1c9'
            'a99d9457fd6cf582b349e56e5e8e9cece30e33ff6866c5969f090f5e'
            '6ffcb9ee870dd260f90e333082e90b9b30212f1f21dd3d3a0048a67e'
            'fff5cbeed72e44f9159872f59a0ca0a19fc81a8ed943500373e9108e'
            'bafa6b75f6621356069606934f1b3c0240fb579f7b68ab4972f4641a'
            '1566b25eee6a99d3e6ca78497e7393c8466bf6e919681054ba14c4af')
sha256sums=('e4a71a79e05c96bded470ca2fc7cdeff13bc42eb9474d1a0a51e1072ecce657e'
            '9a274276578e6c9770da8c8dc90dc06560c3a67ea87853a625aa03b707ed360e'
            'b3579e68cee7f23f6f6a12fe0bc6396f1722434d23ce3c58e7c9fac2233cd1d3'
            'e9bbc61ec99dc0893560a12a8a0f56c9f27016895e177a164019ab9174fe94e2'
            'c2213c8d4a1a0fe5bb12d5bcde53ab04d9b0aa08ddcabd60de938a8d480e49d5'
            'fb42157046a11089fa69e0120ae83ff3bc354709e2add4644fe3fc60aa80c984'
            '7a0d0f71a72dd2c320e3d7c4feea720d9f4c49ccf485f889032b48f25f87f0a7'
            '379144a4e426683565c46916adb105fe1afa1e1daf98f557883feeca1aa95d43')
sha384sums=('e873f650f4248e2e42073436ccac2bff96815b18a8a21a4a571087c2871143a0f9dd8cb937b4fc51fff22bbc8995ab87'
            '4a4d45991c93b3abc30757cd974d4f31f7ce9e7804f67d9bde46fed3f670a275ef940ab19053dc52e3782f02fdab6993'
            '762dd7c73e994b74ebeb5c975ca0b53ddf4cbf181664d465bd9c543798333dcc4939c360a4b5b8b1b162810ea363d288'
            '6bee0d21d0fcf3d8f5ee14545be63fb2bbababb0665020540daafc708939bbc539ab940cfe122b2281156bc78d401768'
            '26859b59a04e38a5e7d02e188643765d06b893385232895f5b1435fb3d4fa4d676e8d43bbc80360f9ee7a2ee01e64d2c'
            '8b9204ce4a60890eb94f0fe673504a9a10c583b9814e844da14b8d1313db7f8cf7d5f9a7b8db0bbd25fb2f9263e434b7'
            '9435bd34fab0ddccbaeefb14cdc8506cd8e632ed790a939a6d15d51b9dd49a3134c3ca45262de9cac392660d4ce15f23'
            'eba6ead826268c42600ba41098bfcfaa1a13e4f7f5f8f367af6836995c41ad125ef5c5464242727b1c0f10caa3b4de37')
sha512sums=('50074874c41a2e1eaeaeb46e2faa2706993a8c6692c83eaf0dedbc054210240012e124221f87bd3dfff574b9f6d9daa348b2ed49b3983f61290a9b6f1b204bcf'
            '96e5306816fd15ed338d27d3929e798feff16d3eb9929216e4333fc44439380ae026294095a6464f8d1dc9453e932b3ead567a9abfec55dad08e6f42208b5619'
            'bd26818e43627c4e20aa931663b4623e45ade0930a29952d6508fa6e1302f5140afed7f57a796c12da3e9ae256ff7c0b3eb2e5075b00ceda9d2e4ddc22e89205'
            '16d01a820f1ed93ae46194d3d77187adf6fd4e9764fcf99554430e3e2f2af4cc2b6f7918f595febd3c5e6a380bbfb930bb47a3dd2ba93c60b2ca1f874f264fee'
            '722770a6c30ccf75c73ae9be19655cdff00561c62bf15b619dfa618cdd636e97aaf5a6aca1297add4e6a54274cd49e81781d98a59986526d0077a6c64855562d'
            '9f32d0ead26fad866f52209c0f6dabdaa3481bafd6121134b2fde6e95a80b5d2757c17ca6f1804b6e060b839efa9a9f7d342d48ad8d22b767e13c585e209045b'
            '872f43c9b0362d1d2389b4484c46da45f1c618a00e9ebc39eb20e67b258485d33efeb24c74c7e160adf03edef80f32397696489903ff2646e51e42366576939e'
            '584a795a05ddae117bbd777963ac38189f2e5929a1c69bd143d3acf6f02e42fb7eef8b74f989e560dcd49f8fe469984b60d6d7bbb4f82ee173e95d8a237551af')
validpgpkeys=()
install=metals.install

prepare() {
    cd "$pkgname-$pkgver"

    # The build currently does not set the correct version unless
    # built from git with the environment variable CI set. See
    # https://github.com/scalameta/metals/issues/662
    patch -p1 -i ../version-fix.patch
}

build() {
    export COURSIER_CACHE="./.cache/coursier/v1"
    export CI="TRUE" # Needed so the build will not think it is a SNAPSHOT
    export JAVA_TOOL_OPTIONS="${JAVA_TOOL_OPTIONS} -Dsbt.supershell=false"

    local -r _ORG_PATH="$PATH"
    local -r _SBT_DIR="./.sbt"
    local -r _SBT_IVY="./.ivy2"
    local -r -a _JAVA_ARCH_PACKAGE_PATHS=('/usr/lib/jvm/java-11-openjdk/bin'
                                          '/usr/lib/jvm/java-10-openjdk/bin'
                                          '/usr/lib/jvm/java-8-openjdk/jre/bin'
                                         )
    local -r _LEN="${#_JAVA_ARCH_PACKAGE_PATHS[@]}"

    cd "$pkgname-$pkgver"
    # Build JREMajorVersion.java
    cp ../JREMajorVersion.java ./
    javac -source 7 -target 7 -Xlint -Xlint:-options JREMajorVersion.java

    # Attempt to build with a JDK supported by metals
    local _INDEX=0
    while [ $_INDEX -lt "$_LEN" ]
    do
        local _PACKAGE_PATH="${_JAVA_ARCH_PACKAGE_PATHS[$_INDEX]}"
        if [ -d "$_PACKAGE_PATH" ]
        then
            export PATH="$_PACKAGE_PATH:$PATH"
            break
        else
            _INDEX=$((_INDEX + 1))
            continue
        fi
    done

    # When run with some AUR helpers, in particular `yay`, for a
    # reason I do not understand `sbt` will regularly attempt to
    # resolve the Scala compiler in a local-preloaded-ivy cache
    # _only_, and not attempt to download it. However if you just run
    # it again, it then tries to download it. This does not happen
    # when run locally, for me at least, with makepkg or in a
    # systemd-nspawn with extra-x86_64-build.
    sbt -sbt-dir "$_SBT_DIR" -ivy "$_SBT_IVY" clean compile || sbt -sbt-dir "$_SBT_DIR" -ivy "$_SBT_IVY" clean compile

    # Reset PATH
    export PATH="$_ORG_PATH"
}

check() {
    export COURSIER_CACHE="./.cache/coursier/v1"
    export CI="TRUE" # Needed so the build will not think it is a SNAPSHOT

    local -r _SBT_DIR="./.sbt"
    local -r _SBT_IVY="./.ivy2"
    cd "$pkgname-$pkgver"
    ## Tests on most recent release currently fail
    # sbt test
}

package() {
    export COURSIER_CACHE='./.cache/coursier/v1'
    export CI="TRUE" # Needed so the build will not think it is a SNAPSHOT
    export JAVA_TOOL_OPTIONS="${JAVA_TOOL_OPTIONS} -Dsbt.supershell=false"

    ## Constants ##
    local -r _SBT_DIR='./.sbt'
    local -r _SBT_IVY='./.ivy2'
    local -r _TARGET_DIR='/usr/share/java/metals'
    local -r _DEST_DIR="$pkgdir$_TARGET_DIR"
    local -r _BIN_DEST_DIR="$_DEST_DIR/bin"
    local -r _LIB_DEST_DIR="$_DEST_DIR/lib"
    local -r _JAR_DEST_DIR="$_DEST_DIR/jars"
    local -r _UTIL_DEST_DIR="$_DEST_DIR/util"
    local -r _USR_BIN="$pkgdir/usr/bin"
    local -r _TEMP_FILE="$(mktemp)"
    local -r _LAUNCHER_SCRIPTS=('metals-client.sh' 'metals-emacs.sh' 'metals-vim.sh' 'metals-vscode.sh' 'metals-sublime.sh')
    local -r _ORG_PATH="$PATH"
    local -r -a _JAVA_ARCH_PACKAGE_PATHS=('/usr/lib/jvm/java-11-openjdk/bin'
                                          '/usr/lib/jvm/java-10-openjdk/bin'
                                          '/usr/lib/jvm/java-8-openjdk/jre/bin'
                                         )

    local -r _LEN="${#_JAVA_ARCH_PACKAGE_PATHS[@]}"

    # Attempt to build with a JDK supported by metals
    local _INDEX=0
    while [ $_INDEX -lt "$_LEN" ]
    do
        local _PACKAGE_PATH="${_JAVA_ARCH_PACKAGE_PATHS[$_INDEX]}"
        if [ -d "$_PACKAGE_PATH" ]
        then
            export PATH="$_PACKAGE_PATH:$PATH"
            break
        else
            _INDEX=$((_INDEX + 1))
            continue
        fi
    done

    ## Change Into Correct Directory ##
    pushd "$pkgname-$pkgver"

    ## Create lib, bin and util Directories ##
    install -d "$_LIB_DEST_DIR"
    install -d "$_BIN_DEST_DIR"
    install -d "$_UTIL_DEST_DIR"

    # Install JREMajorVersion.class
    install -o root -g root -m 644 "./JREMajorVersion.class" "$_UTIL_DEST_DIR"

    ## Install Class Files And Jars ##

    ### Determine Dependencies ###

    # If you're reading this and you know of a better way to get all
    # the dependencies from SBT directly, please let me know.
    sbt -sbt-dir "$_SBT_DIR" -ivy "$_SBT_IVY" compile 'show metals/dependencyClasspath' 2>/dev/null | grep Attributed | sed 's/^[^\*]\+\* Attributed(\([^)]\+\).*/\1/g' > "$_TEMP_FILE"
    while read dep
    do
        local _SANATIZED_DEP="${dep##*${pkgname}-$pkgver/}"
        # Sort out directories from modules from third-party jars.
        if [ -d "$_SANATIZED_DEP" ]
        then
            pushd "$_SANATIZED_DEP"
            cp -r ./* "$_LIB_DEST_DIR/"
            popd
        else
            if [ ! -e "$_JAR_DEST_DIR" ]
            then
               install -d "$_JAR_DEST_DIR"
            fi
            local _JAR_PATH="${dep##*/maven2}"

            install -D "$_SANATIZED_DEP" "$_JAR_DEST_DIR$_JAR_PATH"
        fi
    done<"$_TEMP_FILE"

    ## Install Metals Class Files ##

    install -d "$_DEST_DIR/metals"
    pushd 'metals/target/scala-2.12/classes'
    cp -r ./*  "$_DEST_DIR/metals/"
    popd

    ## Install And Symlink Launcher Scripts ##
    for launcher in "${_LAUNCHER_SCRIPTS[@]}"
    do
        local _LINK_NAME="${launcher##*/}"
        _LINK_NAME="${launcher%%.*}"
        if [ ! -e "$_USR_BIN" ]
        then
            install -d "$_USR_BIN"
        fi
        install -m 755 "../$launcher" "$_BIN_DEST_DIR"
        ln -s "$_TARGET_DIR/bin/$launcher" "$_USR_BIN/$_LINK_NAME"
    done

    ## Ensure Correct Permissions ##

    chown root:root -R "$_DEST_DIR"
    chmod u=rwX -R "$_DEST_DIR"
    chmod u=rwX -R "$_BIN_DEST_DIR"
    chmod og=rX -R "$_DEST_DIR"

    ## Cleanup ##
    rm "$_TEMP_FILE"
    popd
    # Reset PATH
    export PATH="$_ORG_PATH"
}

# Maintainer: X3n0m0rph59 <x3n0m0rph59@gmail.com>

pkgname='eruption-git'
_pkgname='eruption'
pkgdesc='Linux user-mode input and LED driver for keyboards, mice and other devices'
pkgver=0.1.22.r23.g0413d22
pkgrel=1
epoch=
arch=('i686' 'x86_64')
url='https://github.com/X3n0m0rph59/eruption'
license=('GPL3+')
groups=()
depends=('libevdev' 'hidapi' 'systemd-libs' 'dbus' 'libpulse' 'luajit' 'lua51-socket')
#depends=('libevdev' 'hidapi' 'systemd-libs' 'dbus' 'libpulse' 'luajit' 'lua51-socket' 'gtksourceview3')
makedepends=('git' 'rust' 'xorg-server-devel' 'libxrandr' 'gtk3')
checkdepends=()
optdepends=()
provides=('eruption')
conflicts=('eruption-roccat-vulcan' 'eruption-roccat-vulcan-git')
replaces=('eruption-roccat-vulcan-git')
backup=(etc/eruption/eruption.conf usr/share/eruption/scripts/lib/themes/* usr/share/eruption/scripts/lib/macros/*)
options=()
install='eruption.install'
changelog=
source=('eruption::git+https://github.com/X3n0m0rph59/eruption.git#commit=0413d22f87582a6f41ed73adc9af187f227c84b5')
noextract=()
sha512sums=('SKIP')

pkgver() {
  cd "$_pkgname"
  git describe --long | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd "$_pkgname"

    CARGO_INCREMENTAL=0 cargo build --all --release
}

package() {
    cd "$_pkgname"

    mkdir -p "$pkgdir/usr/bin"
    mkdir -p "$pkgdir/etc/eruption"
    mkdir -p "$pkgdir/usr/share/doc/eruption"
    mkdir -p "$pkgdir/usr/share/eruption/scripts"
    mkdir -p "$pkgdir/usr/share/eruption/scripts/lib"
    mkdir -p "$pkgdir/usr/share/eruption/scripts/lib/macros"
    mkdir -p "$pkgdir/usr/share/eruption/scripts/lib/themes"
    mkdir -p "$pkgdir/usr/share/eruption/scripts/lib/hwdevices/keyboards"
    mkdir -p "$pkgdir/usr/share/eruption/scripts/lib/hwdevices/mice"
    mkdir -p "$pkgdir/usr/share/eruption/scripts/examples"

    mkdir -p "$pkgdir/usr/share/applications"
    mkdir -p "$pkgdir/usr/share/icons/hicolor/64x64/apps"
    mkdir -p "$pkgdir/usr/share/eruption-gui/schemas"

    mkdir -p "$pkgdir/var/lib/eruption/profiles"

    mkdir -p "$pkgdir/usr/lib/systemd/system"
    mkdir -p "$pkgdir/usr/lib/systemd/system-preset"

    mkdir -p "$pkgdir/usr/lib/systemd/user"
    mkdir -p "$pkgdir/usr/lib/systemd/user-preset"

    mkdir -p "$pkgdir/usr/lib/systemd/system-sleep"

    mkdir -p "$pkgdir/usr/lib/udev/rules.d/"

    mkdir -p "$pkgdir/usr/share/dbus-1/system.d"
    mkdir -p "$pkgdir/usr/share/dbus-1/session.d"

    mkdir -p "$pkgdir/usr/share/polkit-1/actions"

    mkdir -p "$pkgdir/usr/share/man/man8"
    mkdir -p "$pkgdir/usr/share/man/man5"
    mkdir -p "$pkgdir/usr/share/man/man1"

    mkdir -p "$pkgdir/usr/share/bash-completion/completions"
    mkdir -p "$pkgdir/usr/share/fish/completions"
    mkdir -p "$pkgdir/usr/share/zsh/site-functions"
    mkdir -p "$pkgdir/usr/share/eruption/i18n"
    mkdir -p "$pkgdir/usr/share/eruption/sfx"

    install -m 755 "target/release/eruption" "$pkgdir/usr/bin/"
    install -m 755 "target/release/eruptionctl" "$pkgdir/usr/bin/"
    install -m 755 "target/release/eruption-netfx" "$pkgdir/usr/bin/"
    install -m 755 "target/release/eruption-util" "$pkgdir/usr/bin/"
    install -m 755 "target/release/eruption-debug-tool" "$pkgdir/usr/bin/"
    install -m 755 "target/release/eruption-hotplug-helper" "$pkgdir/usr/bin/"
    install -m 755 "target/release/eruption-process-monitor" "$pkgdir/usr/bin/"
    install -m 755 "target/release/eruption-gui" "$pkgdir/usr/bin/"

    install -m 644 "support/assets/eruption-gui/eruption-gui.desktop" "$pkgdir/usr/share/applications/"
    install -m 644 "support/assets/eruption-gui/eruption-gui.png" "$pkgdir/usr/share/icons/hicolor/64x64/apps/"
    install -m 644 "eruption-gui/schemas/gschemas.compiled" "$pkgdir/usr/share/eruption-gui/schemas/"

    install -m 755 "support/systemd/eruption-suspend.sh" "$pkgdir/usr/lib/systemd/system-sleep/eruption"

    install -m 644 "support/config/eruption.conf" "$pkgdir/etc/eruption/"
    install -m 644 "support/config/process-monitor.conf" "$pkgdir/etc/eruption/"

    install -m 644 "support/systemd/eruption.service" "$pkgdir/usr/lib/systemd/system/"
    install -m 644 "support/systemd/eruption.preset" "$pkgdir/usr/lib/systemd/system-preset/50-eruption.preset"

    install -m 644 "support/systemd/eruption-process-monitor.service" "$pkgdir/usr/lib/systemd/user/"
    install -m 644 "support/systemd/eruption-process-monitor.preset" "$pkgdir/usr/lib/systemd/user-preset/50-eruption-process-monitor.preset"

    install -m 644 "support/systemd/eruption-hotplug-helper.service" "$pkgdir/usr/lib/systemd/system/"
    install -m 644 "support/systemd/eruption-hotplug-helper.preset" "$pkgdir/usr/lib/systemd/system-preset/50-eruption-hotplug-helper.preset"

    install -m 644 "support/udev/99-eruption.rules" "$pkgdir/usr/lib/udev/rules.d/"

    install -m 644 "support/dbus/org.eruption.control.conf" "$pkgdir/usr/share/dbus-1/system.d/"
    install -m 644 "support/dbus/org.eruption.process_monitor.conf" "$pkgdir/usr/share/dbus-1/session.d/"

    install -m 644 "support/policykit/org.eruption.policy" "$pkgdir/usr/share/polkit-1/actions/"

    install -m 644 "support/man/eruption.8" "$pkgdir/usr/share/man/man8/"
    install -m 644 "support/man/eruption.conf.5" "$pkgdir/usr/share/man/man5/"
    install -m 644 "support/man/process-monitor.conf.5" "$pkgdir/usr/share/man/man5/"
    install -m 644 "support/man/eruptionctl.1" "$pkgdir/usr/share/man/man1/"
    install -m 644 "support/man/eruption-netfx.1" "$pkgdir/usr/share/man/man1/"
    install -m 644 "support/man/eruption-process-monitor.1" "$pkgdir/usr/share/man/man1/"

    install -m 644 -T "support/shell/completions/en_US/eruption-debug-tool.bash-completion" "$pkgdir/usr/share/bash-completion/completions/eruption-debug-tool"
    install -m 644 -T "support/shell/completions/en_US/eruption-netfx.bash-completion" "$pkgdir/usr/share/bash-completion/completions/eruption-netfx"
    install -m 644 -T "support/shell/completions/en_US/eruption-process-monitor.bash-completion" "$pkgdir/usr/share/bash-completion/completions/eruption-process-monitor"
    install -m 644 -T "support/shell/completions/en_US/eruptionctl.bash-completion" "$pkgdir/usr/share/bash-completion/completions/eruptionctl"

    install -m 644 -T "support/shell/completions/en_US/eruption-debug-tool.fish-completion" "$pkgdir/usr/share/fish/completions/eruption-debug-tool.fish"
    install -m 644 -T "support/shell/completions/en_US/eruption-netfx.fish-completion" "$pkgdir/usr/share/fish/completions/eruption-netfx.fish"
    install -m 644 -T "support/shell/completions/en_US/eruption-process-monitor.fish-completion" "$pkgdir/usr/share/fish/completions/eruption-process-monitor.fish"
    install -m 644 -T "support/shell/completions/en_US/eruptionctl.fish-completion" "$pkgdir/usr/share/fish/completions/eruptionctl.fish"

    install -m 644 -T "support/shell/completions/en_US/eruption-debug-tool.zsh-completion" "$pkgdir/usr/share/zsh/site-functions/_eruption-debug-tool"
    install -m 644 -T "support/shell/completions/en_US/eruption-netfx.zsh-completion" "$pkgdir/usr/share/zsh/site-functions/_eruption-netfx"
    install -m 644 -T "support/shell/completions/en_US/eruption-process-monitor.zsh-completion" "$pkgdir/usr/share/zsh/site-functions/_eruption-process-monitor"
    install -m 644 -T "support/shell/completions/en_US/eruptionctl.zsh-completion" "$pkgdir/usr/share/zsh/site-functions/_eruptionctl"

    install -m 644 "eruption/src/scripts/lib/failsafe.lua" "$pkgdir/usr/share/eruption/scripts/lib"
    install -m 644 "eruption/src/scripts/lib/failsafe.lua.manifest" "$pkgdir/usr/share/eruption/scripts/lib"
    install -m 644 "eruption/src/scripts/macros.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/macros.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/stats.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/stats.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/afterglow.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/afterglow.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/afterhue.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/afterhue.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/animal.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/animal.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/audioviz1.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/audioviz1.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/audioviz2.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/audioviz2.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/audioviz3.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/audioviz3.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/audioviz4.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/audioviz4.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/audioviz5.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/audioviz5.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/organic.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/organic.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/batique.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/batique.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/billow.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/billow.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/checkerboard.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/checkerboard.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/fbm.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/fbm.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/flight-perlin.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/flight-perlin.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/fire.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/fire.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/fireworks.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/fireworks.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/gaming.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/gaming.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/ghost.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/ghost.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/gradient.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/gradient.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/halo.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/halo.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/heatmap.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/heatmap.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/lava-lamp.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/lava-lamp.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/linear-gradient.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/linear-gradient.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/heartbeat.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/heartbeat.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/impact.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/impact.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/multigradient.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/multigradient.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/netfx.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/netfx.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/osn.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/osn.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/perlin.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/perlin.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/phonon.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/phonon.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/psychedelic.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/psychedelic.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/pulse.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/pulse.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/ripple.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/ripple.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/rainbow.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/rainbow.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/raindrops.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/raindrops.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/rmf.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/rmf.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/shockwave.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/shockwave.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/solid.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/solid.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/stripes.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/stripes.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/sysmon.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/sysmon.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/swirl-perlin.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/swirl-perlin.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/swirl-turbulence.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/swirl-turbulence.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/swirl-voronoi.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/swirl-voronoi.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/temperature.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/temperature.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/turbulence.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/turbulence.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/voronoi.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/voronoi.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/water.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/water.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/wave.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/wave.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/snake.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/snake.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/dim-zone.lua" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/dim-zone.lua.manifest" "$pkgdir/usr/share/eruption/scripts/"
    install -m 644 "eruption/src/scripts/lib/debug.lua" "$pkgdir/usr/share/eruption/scripts/lib/"
    install -m 644 "eruption/src/scripts/lib/easing.lua" "$pkgdir/usr/share/eruption/scripts/lib/"
    install -m 644 "eruption/src/scripts/lib/queue.lua" "$pkgdir/usr/share/eruption/scripts/lib/"
    install -m 644 "eruption/src/scripts/lib/utilities.lua" "$pkgdir/usr/share/eruption/scripts/lib/"
    install -m 644 "eruption/src/scripts/lib/declarations.lua" "$pkgdir/usr/share/eruption/scripts/lib/"
    install -m 644 "eruption/src/scripts/lib/themes/default.lua" "$pkgdir/usr/share/eruption/scripts/lib/themes/"
    install -m 644 "eruption/src/scripts/lib/themes/gaming.lua" "$pkgdir/usr/share/eruption/scripts/lib/themes/"
    install -m 644 "eruption/src/scripts/lib/macros/examples.lua" "$pkgdir/usr/share/eruption/scripts/lib/macros/"
    install -m 644 "eruption/src/scripts/lib/macros/modifiers.lua" "$pkgdir/usr/share/eruption/scripts/lib/macros/"
    install -m 644 "eruption/src/scripts/lib/macros/user-macros.lua" "$pkgdir/usr/share/eruption/scripts/lib/macros/"
    install -m 644 "eruption/src/scripts/lib/macros/starcraft2.lua" "$pkgdir/usr/share/eruption/scripts/lib/macros/"
    install -m 644 "eruption/src/scripts/lib/hwdevices/keyboards/generic_keyboard.lua" "$pkgdir/usr/share/eruption/scripts/lib/hwdevices/keyboards/"
    install -m 644 "eruption/src/scripts/lib/hwdevices/keyboards/roccat_vulcan_1xx.lua" "$pkgdir/usr/share/eruption/scripts/lib/hwdevices/keyboards/"
    install -m 644 "eruption/src/scripts/lib/hwdevices/keyboards/roccat_vulcan_tkl.lua" "$pkgdir/usr/share/eruption/scripts/lib/hwdevices/keyboards/"
    install -m 644 "eruption/src/scripts/lib/hwdevices/keyboards/roccat_vulcan_pro_tkl.lua" "$pkgdir/usr/share/eruption/scripts/lib/hwdevices/keyboards/"
    install -m 644 "eruption/src/scripts/lib/hwdevices/keyboards/roccat_vulcan_pro.lua" "$pkgdir/usr/share/eruption/scripts/lib/hwdevices/keyboards/"
    install -m 644 "eruption/src/scripts/lib/hwdevices/keyboards/corsair_strafe.lua" "$pkgdir/usr/share/eruption/scripts/lib/hwdevices/keyboards/"
    install -m 644 "eruption/src/scripts/lib/hwdevices/mice/generic_mouse.lua" "$pkgdir/usr/share/eruption/scripts/lib/hwdevices/mice/"
    install -m 644 "eruption/src/scripts/lib/hwdevices/mice/roccat_kone_aimo.lua" "$pkgdir/usr/share/eruption/scripts/lib/hwdevices/mice/"
    install -m 644 "eruption/src/scripts/lib/hwdevices/mice/roccat_kone_xtd.lua" "$pkgdir/usr/share/eruption/scripts/lib/hwdevices/mice/"
    install -m 644 "eruption/src/scripts/lib/hwdevices/mice/roccat_burst_pro.lua" "$pkgdir/usr/share/eruption/scripts/lib/hwdevices/mice/"
    install -m 644 "eruption/src/scripts/lib/hwdevices/mice/roccat_kone_aimo_remastered.lua" "$pkgdir/usr/share/eruption/scripts/lib/hwdevices/mice/"
    install -m 644 "eruption/src/scripts/lib/hwdevices/mice/roccat_kone_pure_ultra.lua" "$pkgdir/usr/share/eruption/scripts/lib/hwdevices/mice/"
    install -m 644 "eruption/src/scripts/lib/hwdevices/mice/roccat_kova_aimo.lua" "$pkgdir/usr/share/eruption/scripts/lib/hwdevices/mice/"
    install -m 644 "eruption/src/scripts/lib/hwdevices/mice/roccat_nyth.lua" "$pkgdir/usr/share/eruption/scripts/lib/hwdevices/mice/"
    install -m 644 "eruption/src/scripts/examples/simple.lua" "$pkgdir/usr/share/eruption/scripts/examples/"

    install -m 644 "support/sfx/typewriter1.wav" "$pkgdir/usr/share/eruption/sfx/"
    install -m 644 "support/sfx/phaser1.wav" "$pkgdir/usr/share/eruption/sfx/"
    install -m 644 "support/sfx/phaser2.wav" "$pkgdir/usr/share/eruption/sfx/"
    ln -s "phaser1.wav" "$pkgdir/usr/share/eruption/sfx/key-down.wav"
    ln -s "phaser2.wav" "$pkgdir/usr/share/eruption/sfx/key-up.wav"

    install -m 644 "support/profiles/animal-blobby.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/animal-blobby-swirl.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/animal-breathing-1.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/animal-breathing-2.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/animal-breathing-3.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/default.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/fx1.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/fx2.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/fireplace.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/fireworks.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/flight-perlin.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/gaming.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/gradient-noise.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/heartbeat-sysmon.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/heatmap.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/heatmap-errors.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/lava-lamp.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/lava-lamp-pastel.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/matrix.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/netfx.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/batique.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/batique-mouse.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/checkerboard.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/blue-fx-swirl-perlin.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/profile1.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/profile2.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/profile3.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/profile4.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/psychedelic.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/twinkle.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/rainbow.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/red-fx.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/red-wave.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/preset-red-yellow.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/preset-blue-red.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/rainbow-wave.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/ripple-rainbow.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/snake.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/solid-wave.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/solid.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/starcraft2.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/spectrum-analyzer.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/spectrum-analyzer-swirl.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/vu-meter.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/swirl-perlin.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/swirl-perlin-blue-red.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/swirl-perlin-rainbow.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/swirl-perlin-red-yellow.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/swirl-perlin-dim.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/swirl-perlin-blue-red-dim.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/swirl-perlin-rainbow-dim.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/swirl-perlin-red-yellow-dim.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/swirl-turbulence.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/swirl-voronoi.profile" "$pkgdir/var/lib/eruption/profiles/"
    install -m 644 "support/profiles/turbulence.profile" "$pkgdir/var/lib/eruption/profiles/"
}
